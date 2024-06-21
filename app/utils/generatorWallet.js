import { Wallet, HDNodeWallet } from "ethers";
import { generateMnemonic, mnemonicToSeedSync, wordlists } from "bip39";

function generateEthereumAccount() {
  // 1. Generación de semilla mnemotécnica (12 palabras):
  const mnemonic = generateMnemonic();

  // 2. Conversión de la semilla a formato binario:
  const seed = mnemonicToSeedSync(mnemonic);

  // 3. Derivación de la clave privada y pública (BIP44):
  const path = "m/44'/60'/0'/0/0"; // Ruta estándar para Ethereum
  const hdNode = HDNodeWallet.fromSeed(seed).derivePath(path);
  const privateKey = hdNode.privateKey;
  const publicKey = hdNode.publicKey;

  // 4. Creación de un objeto Wallet:
  const wallet = new Wallet(privateKey);

  return {
    mnemonic,
    address: wallet.address,
    privateKey, // ¡Cuidado! Nunca compartas esta clave
    publicKey,
  };
}
export default generateEthereumAccount;
