// ===== TUGAS 4 OBJECT LITERAL =====

// ===== SOAL 1 : Nilai siswa paling besar =====

// array berisi objek siswa (key: name dan score)
let studentsScore = [
  {
    name: "Andi",
    score: 90,
  },
  {
    name: "Rudi",
    score: 80,
  },
  {
    name: "Dira",
    score: 100,
  },
];

let nilaiSiswa = {
  data: studentsScore, // simpan array siswa

  cariTertinggi: function () {
    let tertinggi = this.data[0]; // siswa pertama dijadikan patokan

    // cek siswa kedua dan seterusnya
    for (let i = 1; i < this.data.length; i++) {
      // kalau nilainya lebih besar, ganti patokan
      if (this.data[i].score > tertinggi.score) {
        tertinggi = this.data[i];
      }
    }

    return (
      "Siswa dengan nilai tertinggi" +
      "\n" +
      "Nama :" +
      tertinggi.name +
      "\n" +
      "Nilai :" +
      tertinggi.score
    );
  },
};

console.log("=== SOAL 1 ===");
console.log(nilaiSiswa.cariTertinggi());

// ===== SOAL 2 : Kelompokkan MotoGP berdasarkan negara pemenang =====

// array berisi event MotoGP, winner adalah objek di dalam objek
var motoGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: {
      firstName: "Cal",
      lastName: "Crutchlow",
      country: "UK",
    },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: {
      firstName: "Valentino",
      lastName: "Rossi",
      country: "Italy",
    },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
];

let dataMotoGP = {
  data: motoGP,

  kelompokkanNegara: function () {
    let hasil = {}; // tempat menyimpan hasil pengelompokan

    for (let i = 0; i < this.data.length; i++) {
      let event = this.data[i];
      let negara = event.winner.country; // negara pemenang

      // kalau negara belum ada, buat dulu
      if (hasil[negara] === undefined) {
        hasil[negara] = {
          winningCircuits: [],
          totalWin: 0,
        };
      }

      // tambah data kemenangan
      hasil[negara].winningCircuits.push({
        name: event.winner.firstName + " " + event.winner.lastName,
        winLocation: event.circuit + ", " + event.location,
      });

      hasil[negara].totalWin += 1; // tambah jumlah menang
    }

    return hasil;
  },
};

console.log("\n=== SOAL 2 ===");
console.log(JSON.stringify(dataMotoGP.kelompokkanNegara(), null, 2));
