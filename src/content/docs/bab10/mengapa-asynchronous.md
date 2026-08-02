---
title: "Mengapa Asynchronous?"
description: Memahami pentingnya Asynchronous programming untuk mencegah aplikasi membeku (hang) saat memproses tugas lambat.
---

# Mengapa Asynchronous?

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan masalah Single-Threaded pada JavaScript/TypeScript.
- Menjelaskan dampak fatal operasi synchronous yang memblokir program (blocking).
- Menyebutkan minimal dua contoh operasi yang wajib menggunakan metode asynchronous.

---

## Pendahuluan

TypeScript dan JavaScript berjalan di atas mesin yang bersifat **Single-Threaded**. Artinya, mesin tersebut hanya memiliki **satu jalur kerja (satu tangan)** untuk mengerjakan semua instruksi. 

Jika ada satu instruksi yang membutuhkan waktu sangat lama untuk diselesaikan (misalnya: mengunduh file 1 GB dari internet), dan kita menjalankannya secara synchronous, maka seluruh aplikasi akan lumpuh total sampai proses unduh selesai. Pengguna tidak bisa mengklik tombol, mengetik, atau melihat animasi apa pun. Ini disebut **Blocking**.

---

## Dampak Buruk Blocking

Bayangkan kamu sedang menggunakan aplikasi WhatsApp di handphone-mu.

1. Kamu mengklik tombol "Unduh Foto".
2. Foto tersebut berukuran besar dan koneksi internet sedang lambat.
3. Karena WhatsApp memproses unduhan secara synchronous (blocking), **seluruh layar HP-mu membeku**. Kamu tidak bisa membalas chat orang lain, tidak bisa kembali ke menu utama, bahkan aplikasimu dianggap crash oleh sistem operasi Android dan muncul pesan *"Aplikasi Tidak Merespon (Close App)"*.

Ini adalah pengalaman pengguna (*user experience*) yang sangat buruk. Itulah alasan mengapa operasi jaringan dan pembacaan file wajib berjalan secara asynchronous (non-blocking).

---

## Analogi Kehidupan Sehari-hari: Kasir Minimarket yang Mengantre

Bayangkan sebuah minimarket yang hanya memiliki **satu kasir** (Single-Threaded):

### Skenario Synchronous (Blocking):
- Pelanggan A ingin membeli barang, tetapi ada masalah harga pada salah satu barangnya.
- Kasir berkata: *"Tunggu ya, saya harus pergi ke gudang di belakang untuk memeriksa label harga aslinya."*
- Kasir berjalan ke gudang selama 10 menit.
- Selama 10 menit tersebut, kasir **diam tidak melayani antrean**. Pelanggan B, C, dan D di belakang harus berdiri menunggu dengan kesal tanpa dilayani sama sekali.

### Skenario Asynchronous (Non-Blocking):
- Pelanggan A mengalami masalah harga.
- Kasir memanggil asisten toko: *"Tolong cek harga barang ini ke belakang."* (Aksi Async dipicu).
- Selagi asisten berjalan ke belakang, Kasir **langsung melayani Pelanggan B, C, dan D**. Antrean tetap berjalan lancar!
- Asisten kembali membawa harga asli → Kasir menyelesaikan transaksi Pelanggan A secara terpisah.

Skenario kedua memastikan minimarket tidak pernah macet total.

---

## Visual Illustration: Alur Thread Blocking vs Non-Blocking

```text
BLOCKING (Synchronous)
Thread Utama: [Tugas A] ──► [TUGAS LAMBAT (10 detik)] ──► [Tugas B]
                           (Seluruh program BEKU selama 10 detik!)

NON-BLOCKING (Asynchronous)
Thread Utama: [Tugas A] ──► [Picu Async] ──► [Tugas B] ──► [Tugas C]
                                 │
Latar Belakang:                  └─► [PROSES LAMBAT (10 detik)] ──► Selesai!
```

---

## Operasi yang Wajib Bersifat Asynchronous

Dalam pengembangan aplikasi nyata, kamu wajib menggunakan asynchronous untuk operasi-operasi berikut:

1. **I/O Network (API Call)**: Mengambil data dari server internet (Fetch API).
2. **Database Query**: Menyimpan atau membaca data dari server database.
3. **File System**: Membaca atau menulis file berukuran besar di harddisk.
4. **Timer/Delay**: Memberikan jeda waktu atau animasi berkala.

---

## Mari Mencoba: Simulasi Pembekuan Program (Blocking)

Mari kita lihat simulasi bagaimana program synchronous memblokir jalannya baris berikutnya dibanding cara async yang ramah.

Buat file bernama `src/bab10/mengapa-asynchronous.ts`:

```ts
// 1. Simulasi Tugas Lambat secara Synchronous (Blocking)
function delaySynchronous(milidetik: number): void {
  const waktuMulai = new Date().getTime();
  while (new Date().getTime() < waktuMulai + milidetik) {
    // Mesin CPU dipaksa berputar diam menunggu waktu habis
  }
}

console.log("=== SIMULASI BLOCKING ===");
console.log("1. Memulai download file besar...");
delaySynchronous(3000); // Program BEKU total selama 3 detik di sini!
console.log("2. Download selesai.");
console.log("3. Menampilkan menu utama aplikasi...");

// 2. Simulasi Tugas Lambat secara Asynchronous (Non-Blocking)
console.log("\n=== SIMULASI NON-BLOCKING ===");
console.log("1. Memulai download file besar di latar belakang...");
setTimeout(() => {
  console.log("✓ [Async] Download selesai.");
}, 3000);
console.log("2. [Async] Menampilkan menu utama aplikasi secara instan!");
```

Jalankan menggunakan perintah:
```text
tsx src/bab10/mengapa-asynchronous.ts
```

## Output
```text
=== SIMULASI BLOCKING ===
1. Memulai download file besar...
(Terminal terhenti diam selama 3 detik...)
2. Download selesai.
3. Menampilkan menu utama aplikasi...

=== SIMULASI NON-BLOCKING ===
1. Memulai download file besar di latar belakang...
2. [Async] Menampilkan menu utama aplikasi secara instan!
(Program tetap interaktif, setelah 3 detik baru muncul:)
✓ [Async] Download selesai.
```

---

## Latihan
1. Tuliskan ringkasan di file latihan: apa dampak buruk bagi pengguna jika aplikasi mobile sekolah yang kamu buat memproses pengambilan data nilai secara synchronous?
2. Jalankan ulang simulasi di atas dan perhatikan bagaimana menu utama pada simulasi non-blocking langsung terbuka tanpa jeda 3 detik.

---

## Ringkasan
- TypeScript bersifat single-threaded (hanya satu alur kerja).
- Operasi synchronous yang lambat memicu pembekuan program (blocking).
- Asynchronous memindahkan proses lambat ke latar belakang agar aplikasi tetap interaktif.

:::tip[Langkah Selanjutnya]
Lanjut ke **Sync vs Async** untuk membandingkan karakteristik keduanya secara mendalam.
:::
