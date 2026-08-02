---
title: "Apa itu OOP?"
description: Memahami konsep Object-Oriented Programming (OOP) sebagai paradigma pemrograman berbasis objek.
---

# Apa itu OOP?

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan definisi Object-Oriented Programming (OOP).
- Menyebutkan perbedaan cara berpikir pemrograman prosedural dan OOP.
- Menjelaskan apa itu objek dalam dunia pemrograman.

---

## Pendahuluan

Sebelum kita mulai mengetik kode class yang panjang, kita harus mengubah cara berpikir kita terlebih dahulu. Selama ini, saat mendengar tugas membuat program, mungkin kamu langsung berpikir: *"Bagaimana alur fungsinya dari atas ke bawah?"*

Dalam OOP, cara berpikir kita berubah menjadi: *"Objek apa saja yang terlibat dalam sistem ini, apa informasi yang mereka bawa, dan bagaimana mereka saling berinteraksi?"*

---

## Penjelasan Materi: Mengenal OOP

**Object-Oriented Programming (OOP)** atau Pemrograman Berorientasi Objek adalah sebuah **paradigma** atau metode cara berpikir dalam merancang dan menulis kode program dengan membaginya ke dalam objek-objek kecil yang saling berinteraksi.

Dalam paradigma prosedural biasa (yang kita gunakan di bab-bab awal), fokus utama kita adalah **langkah-langkah / alur instruksi**. Data diletakkan di variabel bebas, lalu dilemparkan ke fungsi-fungsi terpisah.

Dalam paradigma OOP, fokus utama kita adalah **Objek**. Data (property) dan fungsi yang mengolah data tersebut (method) dibungkus menjadi satu kesatuan di dalam objek.

```text
PROSEDURAL (Fungsi Terpisah)
   Variabel Data  ──►  Fungsi A  ──►  Fungsi B

OOP (Data & Fungsi Dibungkus dalam Objek)
   ┌────────────────────────────────┐
   │             OBJEK              │
   │  - Data (Property)             │
   │  - Fungsi Pengolah (Method)    │
   └────────────────────────────────┘
```

---

## Analogi Kehidupan Sehari-hari: Sistem Sekolah

Mari kita analogikan sebuah sistem di sekolah. Bayangkan kamu ingin membuat sistem "Peminjaman Buku di Perpustakaan".

### Pendekatan Prosedural:
Kamu fokus pada alur instruksi:
1. Catat nama peminjam ke variabel string.
2. Catat judul buku ke variabel string lain.
3. Buat fungsi `hitungDenda()` secara terpisah.
4. Buat fungsi `buatStruk()` secara terpisah.
Di sini, data siswa dan fungsi hitung denda tidak terikat. Bisa saja fungsi denda secara tidak sengaja memproses data guru.

### Pendekatan OOP:
Kamu melihat sistem perpustakaan sebagai kumpulan objek yang berinteraksi:
- Objek **Siswa** (punya data kartu perpus, bisa meminjam).
- Objek **Buku** (punya kode buku, status dipinjam/tidak).
- Objek **Petugas** (punya NIP, bisa memverifikasi pinjaman).
- Objek **Transaksi** (menghubungkan siswa, buku, dan tanggal kembali).

Setiap objek bertanggung jawab atas datanya sendiri. Objek Siswa tahu cara memperbarui status kartunya, objek Buku tahu cara mengubah status ketersediaannya. Mereka saling berkomunikasi untuk menyelesaikan proses peminjaman.

---

## Visual Illustration: Objek dalam Kode Program

Di dalam kode program, sebuah objek digambarkan memiliki struktur seperti ini:

```text
       OBJEK: Siswa
┌───────────────────────────┐
│ PROPERTY (Atribut/Data)   │
│ ├─ nama: "Putra"          │
│ ├─ kelas: "XI RPL 1"      │
│ └─ nilai: 85              │
├───────────────────────────┤
│ METHOD (Perilaku/Aksi)    │
│ ├─ belajar()              │
│ └─ tampilkanRapor()       │
└───────────────────────────┘
```

---

## Mari Mencoba

Mari kita lihat perbedaan objek biasa (object literal yang kita pelajari di BAB 6) dengan struktur objek yang memuat aksi di dalamnya.

Buat file bernama `src/bab8/apa-itu-oop.ts`:

```ts
// Membuat objek siswa menggunakan OOP sederhana (Object Literal dengan Method)
const siswaRPL = {
  // Properti (Atribut)
  nama: "Putra Ramadhan",
  kelas: "XI RPL 1",
  nilaiRataRata: 82,

  // Method (Aksi)
  belajar(mataPelajaran: string): void {
    console.log(`${this.nama} sedang tekun belajar ${mataPelajaran}.`);
  },

  apakahLulus(): boolean {
    return this.nilaiRataRata >= 75;
  }
};

// Menggunakan Objek
console.log(`Nama Siswa: ${siswaRPL.nama}`);
siswaRPL.belajar("TypeScript OOP");

const statusLulus = siswaRPL.apakahLulus() ? "LULUS" : "REMEDIAL";
console.log(`Status Kelulusan: ${statusLulus}`);
```

Jalankan menggunakan perintah:
```text
tsx src/bab8/apa-itu-oop.ts
```

### Output
```text
Nama Siswa: Putra Ramadhan
Putra Ramadhan sedang tekun belajar TypeScript OOP.
Status Kelulusan: LULUS
```

---

## Penjelasan Baris per Baris

- `const siswaRPL = { ... }` — Mendeklarasikan sebuah objek literal yang menampung data siswa.
- `nama: "Putra Ramadhan", ...` — Properti yang menyimpan informasi siswa.
- `belajar(mataPelajaran: string): void { ... }` — Ini adalah **Method**. Berbeda dengan fungsi biasa, method didefinisikan langsung di dalam objek dan memiliki akses ke properti objek itu sendiri menggunakan keyword `this`.
- `this.nama` — Keyword `this` merujuk pada objek pemilik method tersebut (yaitu `siswaRPL`).
- `siswaRPL.belajar("TypeScript OOP")` — Cara memanggil method dari objek tersebut.

---

## Kesalahan yang Sering Terjadi

### ❌ Menuliskan fungsi pemroses di luar objek saat ingin menerapkan konsep OOP
Pemula sering kali membuat objek hanya untuk menyimpan data, lalu membuat fungsi di luar objek untuk memprosesnya. Meskipun kode tersebut berjalan, cara itu belum sepenuhnya menerapkan paradigma OOP yang membungkus data dan aksi bersama.

---

## Tips
:::tip[Fokus Pada Entitas]
Saat mulai merancang program baru, ambillah selembar kertas. Tuliskan kata benda apa saja yang penting dalam program tersebut (misalnya: `Mobil`, `KeranjangBelanja`, `Karyawan`). Kata benda tersebut adalah calon kuat objek dalam programmu.
:::

---

## Latihan
1. Buat sebuah objek bernama `laptop` dengan properti: `merk` (string), `ram` (number, dalam GB), dan status `menyala` (boolean).
2. Tambahkan method `nyalakan()` yang mengubah properti `menyala` menjadi `true` dan menampilkan pesan di terminal: `"[Merk] telah menyala!"`.
3. Panggil method tersebut dan cetak status akhir laptop.

---

## Ringkasan
- OOP adalah metode penulisan kode berbasis objek yang saling berinteraksi.
- Prosedural fokus pada alur instruksi; OOP fokus pada entitas objek.
- Objek menggabungkan data (property) dan fungsi pengolahnya (method) ke dalam satu wadah mandiri.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mengapa OOP** untuk memahami alasan seluruh industri software menggunakan metode ini.
:::
