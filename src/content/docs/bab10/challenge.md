---
title: "Challenge BAB 10"
description: Sepuluh latihan Asynchronous Programming dan Module System tingkat menengah di TypeScript untuk menguji pemahaman.
---

# Challenge BAB 10

## Tujuan Pembelajaran
Setelah menyelesaikan challenge ini, kamu diharapkan dapat:
- Merancang dan memotong program menjadi beberapa file module secara mandiri.
- Mengatasi Callback Hell menggunakan Promise atau Async/Await.
- Melakukan pengambilan data API dan menangani error secara modular.

---

## Aturan Pengerjaan

:::tip[Cara Mengerjakan]
Buatlah satu file terpisah untuk setiap soal di folder `src/bab10/challenge/`. Contoh: `src/bab10/challenge/soal-1.ts`.

Jalankan file tersebut menggunakan perintah:
```text
tsx src/bab10/challenge/soal-1.ts
```
:::

---

## Challenge 1 — Jeda Waktu (setTimeout)
**Tingkat: Mudah**

Buatlah program yang mencetak pesan `"1. Mulai"`, lalu setelah jeda 3 detik (3000 ms) mencetak `"2. Tengah"`, dan langsung mencetak `"3. Selesai"` secara non-blocking (asynchronous). Amati urutan keluarnya di terminal.

---

## Challenge 2 — Callback Penghitung Diskon
**Tingkat: Mudah**

Buat fungsi `hitungHargaDiskonAsync(harga: number, callback: (hasil: number) => void): void` dengan jeda 2 detik.
- Fungsi menghitung harga setelah diskon 15%.
- Setelah 2 detik, panggil fungsi `callback` dengan mengirimkan hasil hitungan.
Panggil fungsi tersebut untuk harga `100000`.

---

## Challenge 3 — Janji Siswa Lulus (Promise)
**Tingkat: Mudah**

Buat fungsi `apakahSiswaLulus(nilai: number): Promise<string>` yang mengembalikan Promise:
- Jika nilai >= 75, panggil `resolve("Siswa Lulus")`.
- Jika nilai < 75, panggil `reject("Siswa Remedial")`.
Konsumsi Promise tersebut menggunakan `.then()`, `.catch()`, dan `.finally()`.

---

## Challenge 4 — Pemuatan Data Guru (Async/Await)
**Tingkat: Mudah**

Buat fungsi async `ambilNamaGuru(): Promise<string>` yang mengembalikan nama `"Pak Budi"` setelah jeda 2 detik. Buat fungsi async kedua `tampilkanGuru()` yang menggunakan `await` untuk mengambil nama tersebut lalu mencetaknya.

---

## Challenge 5 — Pengaman Ujian (Try...Catch Async)
**Tingkat: Mudah**

Buat fungsi async `bacaNilaiDatabase(): Promise<number>` yang melemparkan error `throw new Error("Koneksi Database Putus")`. Buat fungsi async kedua yang memanggilnya dan mengamankan error tersebut menggunakan `try...catch` agar program tidak crash.

---

## Challenge 6 — Ambil Pengguna (Fetch API)
**Tingkat: Menengah**

Lakukan fetch data pengguna internet menggunakan Fetch API ke URL:
`https://jsonplaceholder.typicode.com/users/3`
Buat interface `User` (id, name, email, phone). Konversi respon menjadi JSON, lalu tampilkan nama dan email pengguna nomor 3 tersebut secara aman.

---

## Challenge 7 — Module Matematika
**Tingkat: Menengah**

1. Buat file `src/bab10/challenge/matematika.ts`. Eksport secara bernama (Named Export) konstanta `PI = 3.14` dan fungsi `hitungLuasLingkaran(r)`.
2. Buat file `src/bab10/challenge/main-soal7.ts`, import kedua komponen tersebut, hitung luas lingkaran jari-jari 7, lalu tampilkan.

---

## Challenge 8 — Default Export Kelas Siswa
**Tingkat: Menengah**

1. Buat file `src/bab10/challenge/siswa.ts`. Eksport default class `Siswa` (nama, kelas).
2. Buat file `src/bab10/challenge/main-soal8.ts`, import class tersebut tanpa tanda kurung kurawal `{ }` dengan nama alias `SiswaRPL`, lalu instansiasi objeknya.

---

## Challenge 9 — Re-export Modul Koperasi
**Tingkat: Menengah**

1. Buat file `barang.ts` (export interface Barang) dan `jual.ts` (export fungsi hitungTotal).
2. Buat file `index.ts` di folder yang sama untuk me-reexport keduanya.
3. Import keduanya di file utama luar dalam satu baris impor terpadu, lalu jalankan.

---

## Challenge 10 — Namespace Kalkulator Fisika
**Tingkat: Menengah**

Buat dua namespace: `Fisika` (export fungsi hitungKecepatan(jarak, waktu)) dan `Matematika` (export fungsi hitungKecepatan - simulasi kecepatan belajar). Panggil kedua fungsi tersebut dari luar namespace menggunakan dot notation.

---

## Latihan

Pilih satu challenge di atas yang menurutmu paling sulit. Buat coretan alur logikanya di atas kertas, kemudian ketik ulang solusinya dari nol tanpa melihat materi pemandu.

---

## Ringkasan

- Ada 10 challenge dari mudah ke menengah.
- Kerjakan satu per satu, jalankan setiap file dengan TSX.
- Jika buntu, rancang logika dahulu baru tulis kode.

:::tip[Langkah Selanjutnya]
Lanjut ke **Error Corner** untuk meninjau kesalahan-kesalahan yang paling sering muncul.
:::
