//1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.

function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const exampleNumber = 37;
  console.log(isPrime(exampleNumber) ? `${exampleNumber} é primo.` : `${exampleNumber} não é primo.`);
  
  const primeNumbers = Array.from({ length: 1000 }, (_, i) => i + 1).filter(isPrime);
  
  console.log('Números primos entre 1 e 1000:');
  console.log(primeNumbers);
  

    //2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.

    function verificarSenha(senha) {
        if (senha.length < 8) {
        return false;
        }
        var temMaiuscula = false;
        var temMinuscula = false;
        var temNumero = false;
        for (var i = 0; i < senha.length; i++) {
        var caractere = senha.charAt(i);
        if (caractere >= 'A' && caractere <= 'Z') {
        temMaiuscula = true;
        } else if (caractere >= 'a' && caractere <= 'z') {
        temMinuscula = true;
        } else if (!isNaN(caractere)) {
        temNumero = true;
        
        }
        if (temMaiuscula && temMinuscula && temNumero) {
        break;
        }
        }
        return temMaiuscula && temMinuscula && temNumero;
        }
        // Exemplo de uso:
        var senha1 = "Abcdef12";
        var senha2 = "senhafraca";
        console.log(verificarSenha(senha1)); // true
        console.log(verificarSenha(senha2)); // false
        
        //3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.

        function calcularFatorial(numero) {
            if (numero === 0 || numero === 1) {
            return 1;
            }
            var resultado = 1;
            for (var i = 2; i <= numero; i++) {
            resultado *= i;
            }
            return resultado;
            }
            // Calcular fatorial de 1 a 10
            for (var n = 1; n <= 10; n++) {
            var fatorial = calcularFatorial(n);
            console.log("Fatorial de " + n + ": " + fatorial);
            }

           //4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.

           function verificarQuadradoPerfeito(numero) {
           if (numero < 0) {
           return false;
           }
           var raiz = Math.sqrt(numero);
           return raiz % 1 === 0;
           }
           // Exemplos de uso:
           
           console.log(verificarQuadradoPerfeito(9)); // true (3 * 3 = 9)
           console.log(verificarQuadradoPerfeito(25)); // true (5 * 5 = 25)
           console.log(verificarQuadradoPerfeito(10)); // false  