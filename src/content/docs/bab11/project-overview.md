---
title: "Project Overview — BAB 11"
description: Gambaran umum aplikasi Sistem Informasi Akademik Konsol (SIAKAD-Konsol) yang akan dibangun.
---

# Project Overview

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan fitur-fitur utama yang ada di dalam aplikasi SIAKAD-Konsol.
- Memahami alur interaksi pengguna dengan menu konsol.
- Menjelaskan bagaimana data mengalir di dalam aplikasi.

---

## Pendahuluan
Sebelum membangun sebuah sistem, kita harus memahami terlebih dahulu apa kegunaan dari sistem tersebut dan bagaimana cara kerjanya secara garis besar. 

Aplikasi yang akan kita bangun adalah **Sistem Informasi Akademik Konsol (SIAKAD-Konsol)**. Ini adalah aplikasi berbasis teks (terminal/konsol) yang berjalan secara interaktif dengan menyuguhkan menu pilihan angka kepada pengguna.

---

## Penjelasan
SIAKAD-Konsol dirancang untuk mengelola data akademik sekolah yang meliputi:
- **Pendaftaran Siswa**: Menerima input nama, kelas, dan NIS baru.
- **Penilaian Ujian**: Memperbarui nilai rata-rata siswa secara aman (dengan enkapsulasi).
- **Pengelolaan Guru**: Menyimpan data guru beserta status kehadirannya (menggunakan Enum).
- **Pemuatan Tugas Online**: Menghubungkan aplikasi dengan server API internet secara asynchronous untuk mem-fetch data tugas simulasi.

Pengguna berinteraksi dengan mengetikkan angka pilihan menu (0-5) pada terminal. Program akan terus menampilkan menu utama tersebut sampai pengguna mengetikkan angka `0` untuk keluar.

---

## Analogi Kehidupan Sehari-hari: Maket Miniatur Rumah
Bayangkan sebelum seorang kontraktor membangun gedung sekolah bertingkat yang megah, ia membuat **maket miniatur gedung** terlebih dahulu dari bahan karton dan plastik di atas meja:

```text
Gedung Sekolah Nyata ──► Aplikasi web visual dengan database MySQL asli
Maket Miniatur Karton ──► Aplikasi konsol terminal (SIAKAD-Konsol)
```

Maket miniatur tersebut memiliki pintu, sekat ruangan, tangga, dan atap yang sama persis rancangannya dengan gedung asli, hanya saja disederhanakan bahannya. Aplikasi konsol kita adalah maket miniatur: ia memiliki semua logika data, keamanan tipe, dan validasi objek asli, namun ditampilkan dalam bentuk teks terminal agar mudah dipelajari dari nol.

---

## Visual Illustration: Alur Navigasi Aplikasi

```text
      === MENU UTAMA SIAKAD ===
  [1] Tampilkan Laporan Siswa
  [2] Tambah Siswa Baru
  [3] Update Nilai Ujian Siswa
  [4] Tampilkan Daftar Guru
  [5] Ambil Tugas Online (Fetch API Async)
  [0] Keluar Aplikasi
```

---

## Live Coding: Struktur Logika Menu
Berikut adalah kerangka visual bagaimana menu utama tersebut berulang menggunakan loop `while`:

```ts
// Kode representasi konsep alur menu
let berjalan = true;

while (berjalan) {
  console.log("1. Tampilkan | 0. Keluar");
  const pilihan = "1"; // Simulasi input user

  if (pilihan === "1") {
    console.log("Menampilkan data...");
  } else if (pilihan === "0") {
    console.log("Keluar...");
    berjalan = false;
  }
}
```

---

## Output
Hasil eksekusi kerangka menu di atas di terminal:

```text
1. Tampilkan | 0. Keluar
Menampilkan data...
1. Tampilkan | 0. Keluar
Menampilkan data...
... (akan berulang terus jika berjalan tidak bernilai false)
```

---

## Penjelasan Baris per Baris
- `let berjalan = true;`: Variabel kontrol loop. Selama bernilai `true`, menu akan terus diulang.
- `while (berjalan)`: Perulangan `while` (BAB 3) untuk mengulang pencetakan menu secara terus-menerus.
- `if (pilihan === "0") { berjalan = false; }`: Mengubah variabel kontrol menjadi `false` agar perulangan berhenti saat user ingin keluar.

---

## Common Mistakes
- **Infinite Loop**: Lupa mengubah nilai variabel kontrol `berjalan` menjadi `false` saat pengguna memilih menu keluar, akibatnya terminal akan membeku mencetak menu tanpa akhir.
- **Salah Tipe Input**: Mengira input dari keyboard otomatis bertipe number. Input terminal selalu dibaca sebagai `string`, sehingga kita harus menggunakan perbandingan string `"1"`, bukan angka `1`.

---

## Tips
:::tip[Pecah Aksi Menu]
Setiap pilihan menu switch-case di `main.ts` sebaiknya langsung memanggil method service yang sesuai. Hindari menuliskan baris kode logika yang panjang langsung di dalam blok switch-case agar menu tetap bersih dan ringkas.
:::

---

## Ringkasan
- SIAKAD-Konsol mengelola data siswa, guru, dan integrasi tugas online.
- Menggunakan loop `while` interaktif untuk menyajikan menu pilihan.
- Menggunakan `string` sebagai input penentu pilihan menu dari pengguna.

---

## Latihan
1. Gambarkan bagan alur (flowchart) sederhana dari navigasi menu utama SIAKAD-Konsol di buku catatanmu.
2. Jelaskan kapan perulangan menu utama akan berhenti berjalan.
