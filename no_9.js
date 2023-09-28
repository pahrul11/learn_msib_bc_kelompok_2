const readline = require('readline-sync');

// Minta pengguna untuk memasukkan jumlah detik
const detik = parseInt(readline.question('Masukkan jumlah detik: '));

// Fungsi untuk mengonversi detik menjadi format "jam:menit:detik"
function konversiDetikKeWaktu(detik) {
  const jam = Math.floor(detik / 3600);
  const sisaDetik = detik % 3600;
  const menit = Math.floor(sisaDetik / 60);
  const detikSisa = sisaDetik % 60;

  return `${jam} jam, ${menit} menit, ${detikSisa} detik`;
}

// Memanggil fungsi untuk mengonversi detik ke waktu
const waktu = konversiDetikKeWaktu(detik);

// Menampilkan hasil
console.log(`Hasil konversi: ${waktu}`);
