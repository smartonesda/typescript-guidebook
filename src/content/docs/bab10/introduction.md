---
title: "BAB 10 — Asynchronous & Module"
description: Pendahuluan Asynchronous Programming dan Module System di TypeScript — konsep dasar, tujuan pembelajaran, dan persiapan.
---

# BAB 10: Asynchronous & Module

## Tujuan Pembelajaran
Setelah menyelesaikan bab ini, kamu diharapkan dapat:
- Menjelaskan perbedaan antara Synchronous dan Asynchronous programming.
- Memahami alasan mengapa operasi asynchronous sangat penting dalam pengembangan web modern.
- Menggunakan Callback untuk menangani operasi asynchronous sederhana.
- Membuat, mengonsumsi, dan merangkai Promise.
- Menggunakan syntax `async` dan `await` untuk menulis kode asynchronous yang bersih.
- Menangani error pada kode asynchronous menggunakan blok `try...catch`.
- Melakukan pengambilan data dari internet menggunakan Fetch API.
- Memahami konsep Module System untuk merapikan kode program.
- Menggunakan `export` dan `import` (baik Named maupun Default).
- Memahami konsep Re-export dan Namespace untuk mengorganisir file project besar.

---

## Pendahuluan

Selamat datang di **BAB 10**! Ini adalah bab penutup yang akan membawamu ke tingkat keahlian web developer modern. Di bab-bab sebelumnya, kita telah belajar bagaimana menulis kode yang terstruktur secara objek dan tipe data yang aman menggunakan Generic. Namun, semua program yang kita tulis sejauh ini berjalan secara berurutan, baris demi baris, dari atas ke bawah. Cara ini disebut **Synchronous Programming**.

Di dunia nyata, aplikasi tidak bekerja sesederhana itu. Ketika aplikasimu harus mengambil data dari server database internet, mengunduh file besar, atau menunggu pengguna menekan tombol, proses tersebut membutuhkan waktu. Jika kita membiarkan program berjalan secara synchronous biasa, seluruh tampilan aplikasi akan **membeku (hang/freeze)** selama menunggu proses selesai. Di sinilah **Asynchronous Programming** hadir sebagai solusi.

Selain itu, ketika project aplikasimu semakin besar dengan ratusan baris kode, menulis semua kode di dalam satu file tunggal adalah ide yang sangat buruk. Kita akan mempelajari **Module System** untuk memecah kode kita ke dalam file-file kecil yang rapi dan dapat saling dihubungkan secara efisien.

---

## Peta Belajar BAB 10

Bab ini dibagi menjadi dua topik besar:

```text
ASYNCHRONOUS & MODULE
├── Topik 1: Asynchronous Programming
│   ├── Apa itu Asynchronous?
│   ├── Mengapa butuh Asynchronous?
│   ├── Synchronous vs Asynchronous
│   ├── Callback (Alat bantu awal)
│   ├── Promise (Kontrak janji masa depan)
│   ├── async & await (Syntax modern)
│   ├── Error Handling Async
│   └── Fetch API (Praktek ambil data nyata)
├── Topik 2: Module System (Merapikan File)
│   ├── Apa itu Module?
│   ├── Named export & import
│   ├── Default export & import
│   ├── Re-export
│   └── Namespace
└── Projek Terapan & Penutup
    ├── Studi Kasus Sistem Informasi Akademik dengan Data API
    └── Mini Project Generic Academic Repository dengan Module
```

---

## Analogi Awal: Antrean Pembelian Makanan

Bayangkan kamu sedang mengantre makanan:

```text
SYNCHRONOUS (Antrean Kasir Tunggal)
  Pelanggan 1 pesan ──► Tunggu makanan dimasak ──► Pelanggan 1 dapat makanan ──► Pelanggan 2 baru boleh pesan
  (Semua orang di belakang harus menunggu lama jika makanan Pelanggan 1 lama matang)

ASYNCHRONOUS (Restoran Modern)
  Pelanggan 1 pesan ──► Diberi nomor antrean/pager ──► Pelanggan 1 duduk menunggu
  Pelanggan 2 langsung pesan ──► Diberi pager ──► Pelanggan 2 duduk menunggu
  (Kasir tidak pernah membeku, antrean berjalan sangat cepat!)
```

Dalam pemrograman asynchronous, TypeScript bertindak seperti restoran modern: ia membiarkan tugas lain berjalan tanpa harus menunggu satu tugas lambat selesai.

---

## Mari Mencoba: Cek Kesiapan Lingkungan

Untuk memastikan laptopmu siap memproses kode asynchronous modern, mari buat sebuah program pengujian.

Buatlah file baru bernama `src/bab10/cek-kesiapan.ts`:

```ts
console.log("1. Memulai program...");

// Fungsi asynchronous bawaan Node.js untuk memberi jeda waktu
setTimeout(() => {
  console.log("2. Halo dari masa depan (setelah jeda 2 detik)!");
}, 2000);

console.log("3. Program selesai ditulis.");
```

Jalankan file tersebut menggunakan perintah berikut di terminal kamu:

```text
tsx src/bab10/cek-kesiapan.ts
```

### Output
Perhatikan urutan output yang muncul di terminalmu! Angka 3 akan muncul **sebelum** angka 2:
```text
1. Memulai program...
3. Program selesai ditulis.
2. Halo dari masa depan (setelah jeda 2 detik)!
```

Ini adalah contoh nyata kode berjalan secara asynchronous: baris 3 tidak menunggu baris 2 yang tertunda selama 2 detik.

---

## Latihan
1. Ubah waktu jeda pada `setTimeout` dari `2000` (2 detik) menjadi `5000` (5 detik).
2. Jalankan kembali program tersebut dan amati bagaimana program segera mencetak angka 3 terlebih dahulu tanpa membeku selama 5 detik.

---

## Ringkasan
- Asynchronous programming memungkinkan tugas yang lambat berjalan di latar belakang tanpa memblokir seluruh program.
- Module System digunakan untuk memecah project menjadi beberapa file kecil terpisah yang rapi.
- Pemahaman materi ini sangat penting sebelum kamu mulai belajar React, Vue, Svelte, atau Node.js Backend.

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu Asynchronous** untuk memahami konsep dasarnya secara mendalam.
:::
