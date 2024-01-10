// Importação da classe PinVerifier do módulo 'PinVerifier.js'
import PinVerifier from './PinVerifier.js';

/**
 * Função para exibir mensagens no elemento com o ID 'message'.
 * @param {string} message - A mensagem a ser exibida.
 * @returns {void}
 */
function showMessage(message) {
    document.getElementById('message').textContent = message;
}

// Cria uma instância da classe PinVerifier.
const pinVerifier = new PinVerifier();

// Exibe o PIN gerado pela instância de PinVerifier.
pinVerifier.displayGeneratedPin();

/**
 * Adiciona um evento 'keyup' ao elemento com o ID 'pinInput'.
 * Este evento verifica o PIN assim que usuário insere os dígitos.
 * @listens keyup
 * @returns {void}
 */
document.getElementById('pinInput').addEventListener('keyup', () => {
    // Obtém o valor do campo de entrada do PIN.
    const userPin = document.getElementById('pinInput').value;

    // Limpa a mensagem a cada tecla pressionada.
    showMessage("");

    // Verifica se o PIN inserido é um número e possui no máximo 4 dígitos.
    if (isNaN(userPin) || userPin.length > 4) {
        showMessage("Por favor, insira no máximo 4 dígitos numéricos.");
        return;
    }

    // Compara cada dígito inserido com o dígito correspondente no PIN esperado.
    for (let i = 0; i < userPin.length; i++) {
        const userDigit = parseInt(userPin[i]);
        const expectedDigit = parseInt(pinVerifier.expectedPin.toString()[i]);

        // Fornece feedback se o dígito inserido deve ser maior ou menor.
        if (userDigit < expectedDigit) {
            showMessage(`O dígito ${userDigit} deve ser maior.`);
            return;
        } else if (userDigit > expectedDigit) {
            showMessage(`O dígito ${userDigit} deve ser menor.`);
            return;
        }
    }

    // Se todos os dígitos estiverem corretos e o PIN tiver 4 dígitos, realiza a verificação completa.
    if (userPin.length === 4) {
        const resultMessage = pinVerifier.checkPin(userPin);
        showMessage(resultMessage);
    }
});
