/**
 * Classe para gerar um pin aleatoriamente e verificar a validade de um PIN.
 * @class
 */
class PinVerifier {
    /**
     * Construtor da classe PinVerifier.
     * Faz a inicializaçã0 do PIN esperado chamando o método generateRandomPin.
     * @constructor
     */
    constructor() {
      this.expectedPin = this.generateRandomPin();
      console.log(this.expectedPin);
    }
  
    /**
     * Gera um PIN aleatório de 4 dígitos.
     * @returns {number} - O PIN gerado aleatoriamente.
     */
    generateRandomPin() {
      return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    }

    /**
     * Atualiza o elemento HTML com o PIN gerado.
     */
    displayGeneratedPin() {
        // Obtém o elemento com o ID 'generatedPin' e atualiza seu conteúdo com o PIN gerado.
        document.getElementById('generatedPin').textContent = this.expectedPin;
    }
  
    /**
     * Verifica se o PIN inserido pelo usuário é válido.
     * @param {string} userPin - O PIN inserido pelo usuário.
     * @returns {string} - Mensagem indicando se o PIN é válido ou não.
     */
    checkPin(userPin) {
      // Verifica se o PIN tem pelo menos 4 dígitos e é um número.
      if (userPin.length < 4 || isNaN(userPin)) {
        return "Por favor, insira um PIN válido com pelo menos 4 dígitos.";
      }
  
      // Compara o PIN inserido com o PIN esperado.
      if (parseInt(userPin) === this.expectedPin) {
        return "Parabéns! Você inseriu o PIN correto.";
      } else {
        // Fornece feedback indicando se o próximo valor deve ser maior ou menor.
        const feedback = userPin < this.expectedPin ? "maior" : "menor";
        return `Tente novamente. O próximo valor deve ser ${feedback} que o informado.`;
      }
    }
  }
  
  // Exporta a classe PinVerifier para uso em outros módulos.
  export default PinVerifier;
  
  