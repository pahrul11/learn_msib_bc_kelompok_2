const readline = require('readline');
const CryptoJS = require('crypto-js');

// Buat interface pembaca input dari command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk melakukan enkripsi
function encrypt(text, secretKey) {
  const cipherText = CryptoJS.AES.encrypt(text, secretKey).toString();
  return cipherText;
}

// Fungsi untuk melakukan dekripsi
function decrypt(cipherText, secretKey) {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

// Meminta pengguna memasukkan kunci enkripsi
rl.question('Masukkan Kunci Enkripsi: ', (secretKey) => {
  rl.question('Masukkan Teks yang Akan Dienkripsi: ', (plainText) => {
    const encryptedText = encrypt(plainText, secretKey);
    console.log('Teks Terenkripsi:', encryptedText);

    rl.question('Masukkan Teks yang Akan Didekripsi: ', (cipherText) => {
      const decryptedText = decrypt(cipherText, secretKey);
      console.log('Teks Terdekripsi:', decryptedText);

      // Tutup interface pembaca input dan keluar dari program
      rl.close();
    });
  });
});
