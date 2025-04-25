function TOrpn(expression) {
    const precendence = {'+':1, '-':1, '*':2, '/':2}
    let output = []
    let signs = []
    
    if ( expression[0] === '-') {
        expression = '0' + expression
    }
    let tokens = expression.match(/\d+(\.\d+)?|[+\-*/]/g)
    
    for (let token of tokens) {
        if(!isNaN(token)){
            output.push(token)
        }else{
            while (signs.length && precendence[signs[signs.length - 1]] >= precendence[token]) {
                output.push(signs.pop())

            }
            signs.push(token)
        }

    }
    while (signs.length) {
        output.push(signs.pop())
    }
    return output.join(' ')
}


function rpnToEvaluation(expression) {
    let stack = []
    let tokens = expression.split(' ')
    let b
    let a

    for(let token of tokens) {
        if (!isNaN(token)) {
            stack.push(parseFloat(token))
        }else{
            b = stack.pop()
            a = stack.pop()
            if(token === '+') stack.push(a+b);
            if(token === '-') stack.push(a-b);
            if(token === '*') stack.push(a*b);
            if(token === '/') stack.push(a/b);
        }
    }
    return stack[0]
}


export function calculate(expression) {
    let rpn = TOrpn(expression)
    return rpnToEvaluation(rpn)
}
