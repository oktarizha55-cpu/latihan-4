let produkData = {
  nama: "Mouse Wireless",
  harga: 150000,
  stok: 3,
  diskon: 10,
  hitungHargaAkhir: function (jumlah) {
    let hargaSatuan = this.harga - (this.harga * this.diskon) / 100;
    return hargaSatuan * jumlah;
  },
  infoProduk: function () {
    return (
      "Nama :" +
      this.nama +
      "\n" +
      "Harga :" +
      this.harga +
      "\n" +
      "Stok :" +
      this.stok +
      "\n" +
      "Diskon :" +
      this.diskon +
      "%" +
      "\n" +
      "Harga setelah diskon :" +
      this.hitungHargaAkhir(1)
    );
  },
  beli: function (jumlah) {
    if (this.stok <= 0) {
      return "Maaf, stok produk sudah habis!";
    }
    if (jumlah > this.stok) {
      return "Stok tidak cukup. Sisa stok : " + this.stok;
    }
    this.stok -= jumlah;
    let pesan =
      "Pembelian berhasil! Anda membeli " +
      jumlah +
      " " +
      this.nama +
      ".\n" +
      "Harga akhir : Rp" +
      this.hitungHargaAkhir(jumlah) +
      "\n" +
      "Sisa stok sekarang : " +
      this.stok;
    if (this.stok <= 0) {
      pesan += "\nStok produk kini habis, segera restock!";
    }
    return pesan;
  },
};

console.log(produkData.infoProduk());
console.log(produkData.beli(1));
console.log(produkData.beli(2));
console.log(produkData.beli(1));
