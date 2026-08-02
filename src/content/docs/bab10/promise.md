---
title: "Promise"
description: Memahami konsep Promise sebagai pengganti Callback untuk mengelola alur Asynchronous yang rapi di TypeScript.
---

# Promise

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan tiga status dalam Promise (`Pending`, `Fulfilled`, `Rejected`).
- Membuat objek Promise baru menggunakan `new Promise()`.
- Mengonsumsi Promise menggunakan method `.then()`, `.catch()`, dan `.finally()`.

---

## Pendahuluan

Callback async bekerja dengan baik untuk tugas tunggal, tetapi menjadi bencana kekacauan saat tugas bertumpuk (Callback Hell). Untuk mengatasi masalah ini, ECMAScript 2015 (ES6) memperkenalkan fitur **Promise**. Promise menawarkan cara yang jauh lebih elegan, terstandar, dan mudah dibaca untuk mengelola alur data asynchronous.

---

## Penjelasan Materi: Apa itu Promise?

**Promise** adalah sebuah objek JavaScript/TypeScript yang bertindak sebagai representasi atau "wadah janji" dari nilai masa depan yang saat ini belum selesai dihitung (masih diproses di latar belakang).

Sebuah Promise memiliki tiga kemungkinan status (*states*):

| Status | Arti | Penjelasan |
|---|---|---|
| **`Pending`** | Sedang diproses | Status awal saat tugas async baru dimulai |
| **`Fulfilled`** | Janji terpenuhi | Tugas selesai dengan sukses, menghasilkan data |
| **`Rejected`** | Janji dibatalkan | Tugas gagal karena error, menghasilkan pesan kesalahan |

```text
               ┌──► Fulfilled (.then) ──► Hasil data sukses
               │
Pending ───────┤
(Proses awal)  │
               └──► Rejected (.catch)  ──► Pesan error gagal
```

---

## Analogi Kehidupan Sehari-hari: Pemesanan Makanan Online (Janji Kurir)

Bayangkan kamu memesan pizza lewat aplikasi ojek online:

```text
1. Kamu membayar pesanan ──► Status: Pending (Kurir sedang menuju restoran).
   Kamu memegang kode pesanan (Promise). Aplikasi berjanji akan mengantarkan pizzamu.

2. Kemungkinan A: Pizzamu tiba di rumah hangat ──► Status: Fulfilled.
   Kamu menerima pizza (Nilai Sukses) lalu memakannya (.then).

3. Kemungkinan B: Motor kurir mogok di jalan ──► Status: Rejected.
   Aplikasi mengirim notifikasi pesanan dibatalkan (Nilai Gagal) beserta alasan error (.catch).
```

Apapun hasilnya (pizzamu jadi dimakan atau kamu terpaksa memesan makanan lain), kamu tetap bisa melakukan aktivitas lain di rumah selagi menunggu kurir berjalan.

---

## Cara Membuat Promise

Kita membuat Promise baru menggunakan constructor `new Promise()` yang menerima dua parameter fungsi pengendali: `resolve` (jika sukses) dan `reject` (jika gagal):

```ts
const janjiKu = new Promise<string>((resolve, reject) => {
  const sukses = true;
  if (sukses) {
    resolve("Tugas Sukses!"); // mengubah status menjadi Fulfilled
  } else {
    reject("Terjadi Kesalahan!"); // mengubah status menjadi Rejected
  }
});
```

---

## Mengonsumsi Promise dengan `.then` dan `.catch`

Untuk membaca hasil dari Promise, kita menggunakan:
- **`.then()`** — Dijalankan saat Promise berstatus `fulfilled` (sukses).
- **`.catch()`** — Dijalankan saat Promise berstatus `rejected` (gagal/error).
- **`.finally()`** — Selalu dijalankan di akhir, baik sukses maupun gagal (misal untuk mematikan loading screen).

---

## Mari Mencoba: Simulasi Mengunduh File

Mari buat simulasi mengunduh dokumen sekolah menggunakan Promise di file `src/bab10/promise.ts`.

Buat file bernama `src/bab10/promise.ts`:

```ts
// Fungsi yang mengembalikan objek Promise
function unduhRaporSiswa(nis: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    console.log(`[Downloader]: Memulai unduh rapor untuk NIS ${nis}...`);

    // Simulasi jeda unduhan selama 3 detik
    setTimeout(() => {
      const koneksiBagus = true; // Coba ganti ke false untuk simulasi error

      if (koneksiBagus) {
        resolve("Dokumen Rapor_XI_RPL.pdf berhasil diunduh.");
      } else {
        reject("Koneksi terputus di tengah jalan!");
      }
    }, 3000);
  });
}

console.log("1. Pengguna mengklik tombol download.");

// Mengonsumsi Promise
unduhRaporSiswa(1001)
  .then((hasil) => {
    console.log("\n=== PROMISE FULFILLED (SUKSES) ===");
    console.log(`Hasil: ${hasil}`);
  })
  .catch((error) => {
    console.log("\n=== PROMISE REJECTED (GAGAL) ===");
    console.log(`Penyebab: ${error}`);
  })
  .finally(() => {
    console.log("  [Finishing]: Menghapus loading screen...");
  });

console.log("2. Halaman aplikasi tetap bisa di-scroll oleh pengguna.");
```

Jalankan dengan perintah:
```text
tsx src/bab10/promise.ts
```

## Output
```text
1. Pengguna mengklik tombol download.
[Downloader]: Memulai unduh rapor untuk NIS 1001...
2. Halaman aplikasi tetap bisa di-scroll oleh pengguna.
(Jeda waktu 3 detik...)
=== PROMISE FULFILLED (SUKSES) ===
Hasil: Dokumen Rapor_XI_RPL.pdf berhasil diunduh.
  [Finishing]: Menghapus loading screen...
```

---

## Penjelasan Baris per Baris

- `return new Promise<string>((resolve, reject) => { ... })` — Fungsi `unduhRaporSiswa` langsung mengembalikan objek Promise kosong. Tipe Generic `<string>` memberitahu bahwa data yang akan dilewatkan di `resolve` harus berupa string.
- `resolve(...)` — dipanggil saat kondisi unduhan sukses.
- `unduhRaporSiswa(1001).then(...)` — kita "menempelkan" aksi `.then` pada Promise yang dikembalikan. Aksi ini bersabar menunggu di latar belakang sampai `resolve` dipicu.
- `.catch(...)` — menangani skenario jika terjadi kegagalan (`reject`).

---

## Kesalahan yang Sering Terjadi

### ❌ Lupa menuliskan method `.catch()` saat mengonsumsi Promise
Jika Promise dibatalkan (`reject`) namun kamu tidak menempelkan `.catch()`, Node.js/browser akan menampilkan error peringatan merah bertuliskan: `UnhandledPromiseRejectionWarning` yang bisa membuat programmu tidak stabil.

---

## Latihan
1. Modifikasi program `promise.ts` di atas: ubah variabel `koneksiBagus` menjadi `false`.
2. Jalankan kembali program dan amati bagaimana blok `.catch()` secara otomatis menangkap pesan kesalahan dari `reject` dan jalankan blok `.finally()` setelahnya.

---

## Ringkasan
- Promise memiliki 3 status: `Pending`, `Fulfilled`, dan `Rejected`.
- `resolve` memicu status `Fulfilled` (ditangani oleh `.then`).
- `reject` memicu status `Rejected` (ditangani oleh `.catch`).
- `.finally()` selalu berjalan di akhir untuk pembersihan database/UI.

:::tip[Langkah Selanjutnya]
Lanjut ke **async & await** untuk cara penulisan Promise yang jauh lebih mudah dan mirip kode synchronous biasa.
:::
