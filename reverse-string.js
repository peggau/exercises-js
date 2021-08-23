let newStrg = ' ';

function reverseAString(strg) {
     for (let i = strg.length - 1; i>= 0; i--) {
          newStrg += strg[i];
     }
     console.log(newStrg);        // Se colocarmos dentro das chaves, o programa mostrará todo o processo de reversão
}

let resultado = reverseAString('Exemplo da frase')
