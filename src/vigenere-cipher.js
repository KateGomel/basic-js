const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  process(message, key, encrypt = true) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const formattedMessage = message.toUpperCase();
    const formattedKey = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < formattedMessage.length; i += 1) {
      const char = formattedMessage[i];
      const messageCode = char.charCodeAt(0);

      if (messageCode >= 65 && messageCode <= 90) {
        const keyCode =
          formattedKey[keyIndex % formattedKey.length].charCodeAt(0);
        let newCode;

        if (encrypt) {
          newCode = ((messageCode - 65 + (keyCode - 65)) % 26) + 65;
        } else {
          newCode = ((messageCode - 65 - (keyCode - 65) + 26) % 26) + 65;
        }

        result += String.fromCharCode(newCode);

        keyIndex++;
      } else {
        result += char;
      }
    }

    if (this.isDirect) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }

  encrypt(message, key) {
    return this.process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.process(encryptedMessage, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
