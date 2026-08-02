---
title: "Challenge BAB 8"
description: Sepuluh latihan Object-Oriented Programming (OOP) dari tingkat mudah hingga menengah di TypeScript.
---

# Challenge BAB 8

## Tujuan Pembelajaran
Setelah menyelesaikan challenge ini, kamu diharapkan dapat:
- Merancang, mendeklarasikan, dan menggunakan Class secara mandiri.
- Menerapkan pilar-pilar OOP (Enkapsulasi, Pewarisan, Polimorfisme) untuk menyelesaikan masalah nyata.
- Menulis kode terstruktur secara mandiri tanpa menyalin contoh.

---

## Aturan Pengerjaan

:::tip[Cara Mengerjakan]
Buatlah satu file terpisah untuk setiap soal di folder `src/bab8/challenge/`. Contoh: `src/bab8/challenge/soal-1.ts`.

Jalankan file tersebut menggunakan perintah:
```text
tsx src/bab8/challenge/soal-1.ts
```
:::

---

## Challenge 1 — Class Siswa Dasar
**Tingkat: Mudah**

Buat sebuah class `Siswa` dengan properti: `nama` (string) dan `umur` (number). Buat constructor untuk mengisi kedua properti tersebut. Tambahkan method `perkenalan()` yang menampilkan pesan salam beserta nama dan umur. Buat objeknya dan jalankan method tersebut.

---

## Challenge 2 — Pengaman Pintu (Getter & Setter)
**Tingkat: Mudah**

Buat class `Pintu` dengan properti private `_terkunci: boolean = true`.
- Buat getter `statusKunci()` untuk membaca status.
- Buat method `bukaKunci()` untuk mengubah status menjadi `false`.
- Buat method `kunciPintu()` untuk mengubah status menjadi `true`.
Tampilkan status pintu di terminal setelah setiap tindakan.

---

## Challenge 3 — Pewarisan Hewan
**Tingkat: Mudah**

1. Buat class induk `Hewan` dengan properti `nama` dan method `makan()`.
2. Buat class anak `Kucing` yang mewarisi `Hewan` dan memiliki method khusus `meong()`.
3. Instansiasi objek `Kucing`, panggil method `makan()` (warisan) dan `meong()` (khusus).

---

## Challenge 4 — Enkapsulasi Nilai KKM
**Tingkat: Mudah**

Buat class `NilaiUjian` dengan properti `private _skor: number = 0`. Buat setter untuk `skor` yang memvalidasi agar angka yang dimasukkan berada antara 0 sampai 100. Tampilkan pesan penolakan jika nilainya tidak valid.

---

## Challenge 5 — Penghitung Objek (Static Property)
**Tingkat: Menengah**

Buat class `Pena` dengan properti static `jumlahPenaDibuat: number = 0`. Setiap kali constructor pena dipanggil untuk membuat objek baru, naikkan nilai properti static tersebut. Buat 4 objek pena dan tampilkan total pena yang berhasil dibuat langsung melalui nama Class.

---

## Challenge 6 — Polimorfisme Suara Kendaraan
**Tingkat: Menengah**

1. Buat class induk `Kendaraan` dengan method `klakson()`.
2. Buat class anak `Mobil` dan `Motor` yang menimpa (*overriding*) method `klakson()` dengan bunyi klakson yang berbeda.
3. Buat array bertipe `Kendaraan[]` berisi objek Mobil dan Motor, lalu jalankan klaksonnya dalam satu loop perulangan.

---

## Challenge 7 — Kalkulator Matematika (Static Method)
**Tingkat: Menengah**

Buat class `KalkulatorStatik` yang memiliki dua method static: `tambah(a, b)` dan `kurang(a, b)`. Panggil kedua method tersebut langsung tanpa menggunakan kata kunci `new` dan tampilkan hasilnya.

---

## Challenge 8 — Pewarisan Bertingkat (Multilevel)
**Tingkat: Menengah**

1. Buat class `Karyawan` (nama, gaji).
2. Buat class `Manager` yang meng-extends `Karyawan` dan memiliki properti tambahan `tunjangan`.
3. Buat class `Direktur` yang meng-extends `Manager` dan memiliki properti tambahan `sahamBonus`.
4. Buat objek Direktur lengkap dengan seluruh datanya menggunakan `super()` bertingkat, lalu tampilkan total pendapatannya (gaji + tunjangan + sahamBonus).

---

## Challenge 9 — Abstract Class Akun Bank
**Tingkat: Menengah**

Buat abstract class `AkunBank` dengan abstract method `hitungBunga(): number`. Buat dua class anak: `TabunganBiasa` (bunga 2%) dan `TabunganDeposito` (bunga 5%). Tampilkan bunga bulanan untuk saldo Rp10.000.000 dari kedua jenis tabungan tersebut.

---

## Challenge 10 — Sistem Informasi Inventaris
**Tingkat: Menengah**

Buat sistem pengelolaan barang inventaris sekolah berbasis OOP:
- Buat class `Barang` (id, nama, harga, stok).
- Tambahkan method untuk mengurangi stok saat barang dipinjam.
- Tambahkan method untuk menghitung total nilai aset barang tersebut (harga × stok).
- Buat minimal 3 objek barang dan tampilkan ringkasan laporannya secara rapi.

---

## Latihan
Pilih salah satu challenge di atas yang menurutmu paling sulit. Buat rancangan alur logikanya di atas kertas, kemudian ketik ulang solusinya dari nol tanpa melihat materi pemandu.

---

## Ringkasan
- Pengerjaan challenge melatih kemandirian merancang Class dan memproses relasi objek.
- Gunakan perintah `tsx` untuk memverifikasi keluaran program di terminal.

:::tip[Langkah Selanjutnya]
Lanjut ke **Error Corner** untuk meninjau kesalahan-kesalahan yang paling sering muncul saat menulis kode OOP.
:::
