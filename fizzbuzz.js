//  Exercício FizzBuzz:
//  -> Se o número for divisível por 3, aparecerá Fizz
//  -> Se o número for divisível por 5, aparecerá Buzz
//  -> Se o número for divisível por 3 e 5, aparecerá FizzBuzz
//  -> Se não for um número, aparecerá "Não é um número"
//  -> Se não for um número divisível nem por 3 nem por 5, aparecerá a entrada (o número digitado).

let resultado = fizzBuzz(3);
console.log(resultado)

function fizzBuzz(entrada) {
     if (typeof entrada !== 'number')
          return 'Não é um número';
     if ((entrada % 3 === 0) && (entrada % 5 === 0))
          return 'FizzBuzz';
     if (entrada % 3 === 0)
          return 'Fizz';
     if (entrada % 5 === 0)
          return 'Buzz';

     return entrada;
}
