let keranjang = ["Bakso", "Mie Ayam", "Esteh"];
console.log("Awal:", keranjang);

keranjang.push("Krupuk");
console.log("Setelah push:", keranjang);

keranjang.unshift("Soto");
console.log("Setelah unshift:", keranjang);

keranjang.pop();
console.log("Setelah pop:", keranjang);

keranjang.shift();
console.log("Setelah shift:", keranjang);

console.log("Isi keranjang:");
for (let i = 0; i < keranjang.length; i++) {
  console.log(`${i + 1}. ${keranjang[i]}`);
}

const produk = [
  { nama: "Bakso", harga: 10000 },
  { nama: "Mie Ayam", harga: 10000 },
  { nama: "Esteh", harga: 7000 }
];

produk.push({ nama: "Soto", harga: 10000 });
console.table(produk);

produk.pop();
console.table(produk);

function tambahProduk(nama, harga) {
  produk.push({ nama, harga });
  console.log(`Produk ${nama} ditambahkan!`);
}

function hitungTotal() {
  let total = 0;
  for (let i = 0; i < produk.length; i++) {
    total += produk[i].harga;
  }
  return total;
}

tambahProduk("Krupuk", 5000);
tambahProduk("Soto", 10000);
console.table(produk);

console.log("Total harga semua produk:", hitungTotal());

if (produk.length > 0) {
  console.log("Produk tersedia");
} else {
  console.log("Produk kosong");
}

let hari = new Date().getDay(); 
switch (hari) {
  case 0: console.log("Minggu"); break;
  case 1: console.log("Senin"); break;
  case 2: console.log("Selasa"); break;
  case 3: console.log("Rabu"); break;
  case 4: console.log("Kamis"); break;
  case 5: console.log("Jumat"); break;
  case 6: console.log("Sabtu"); break;
  default: console.log("Hari tidak valid");
}
