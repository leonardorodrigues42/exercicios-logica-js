// comece a criar a sua função add na linha abaixo


// descomente a linha seguinte para testar sua função
function add(num1, num2) {
    return num1 + num2
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(num1, num2) {
    let soma = 0
    for (var i = 0; i < num1; i++) {
        soma = add(soma, num2)
    }
    return soma
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(coeficiente, expoente) {
    let base = coeficiente
    for (var i = 1; i < expoente; i++) {
        base = multiply(base, coeficiente)
    }
    return base
}


// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(num) {
    let fatorial = 1
    for (let i = 2; i <= num; i++) {
        fatorial = multiply(fatorial, i);
    }
    return fatorial
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n) {
    let x = [0,1]
    for (var i = 0; i < n; i++) {
        x.push(add(x[i], x[i + 1]))    
    }
    return x[n]
}
   


// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
