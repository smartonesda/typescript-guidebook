---
title: "Apa itu Asynchronous?"
description: Memahami konsep dasar pemrograman Asynchronous di TypeScript.
---

# Apa itu Asynchronous?

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti istilah Asynchronous.
- Memahami perbedaan cara eksekusi baris kode synchronous dan asynchronous.
- Mengenali ciri-ciri operasi non-blocking.

---

## Pendahuluan

Secara default, manusia terbiasa dengan hal-hal yang bersifat synchronous (berurutan). Ketika membaca buku, kamu membaca kata demi kata dari kiri ke kanan. Kamu tidak membaca bab 2 sebelum selesai membaca bab 1.

Namun, komputer dirancang untuk melakukan banyak hal sekaligus secara multitasking. Di dalam pemrograman, kemampuan untuk menjalankan tugas di latar belakang selagi tugas utama tetap berjalan disebut **Asynchronous**.

---

## Penjelasan Materi: Apa itu Asynchronous?

**Asynchronous** (sering disingkat *Async*) adalah metode eksekusi kode di mana sebuah proses dapat berjalan secara independen di latar belakang tanpa harus menghentikan atau memblokir (*non-blocking*) jalannya baris kode utama setelahnya.

Dalam pemrograman **Synchronous**:
Setiap baris kode adalah "lampu merah". Baris kedua tidak akan berjalan sebelum baris pertama selesai diproses sepenuhnya.

Dalam pemrograman **Asynchronous**:
Baris kode yang memicu operasi async akan langsung dilewati begitu saja. Tugas async tersebut akan diproses di latar belakang, dan program utama akan langsung melanjutkan ke baris berikutnya tanpa menunggu. Begitu tugas async selesai, hasilnya akan dikirimkan kembali ke program utama.

---

## Analogi Kehidupan Sehari-hari: Memasak Mie Instan dan Air

Bayangkan kamu sedang berada di dapur ingin menyeduh mie instan:

### Pendekatan Synchronous (Kaku):
1. Kamu menyalakan kompor untuk merebus air.
2. Kamu **berdiri diam memandangi panci** selama 5 menit menunggu air mendidih. Kamu dilarang memotong sayur, membuka bumbu mie, atau merapikan meja selama air belum mendidih.
3. Air mendidih → kamu baru boleh membuka bumbu mie.

Ini sangat tidak efisien. Waktumu terbuang sia-sia hanya untuk menatap panci.

### Pendekatan Asynchronous (Efisien/Multitasking):
1. Kamu menyalakan kompor untuk merebus air. Kamu menaruh alarm pengingat jika air mendidih.
2. Selagi air direbus di latar belakang, kamu langsung **membuka bumbu mie, memotong sayur, dan merapikan piring**.
3. Alarm berbunyi (air mendidih) → kamu kembali ke kompor dan memasukkan mie.

Merebus air berjalan di latar belakang (asynchronous), membiarkanmu melakukan pekerjaan lain tanpa membuang waktu.

---

## Visual Illustration: Alur Eksekusi Sync vs Async

```text
SYNCHRONOUS
Baris 1: [Rebus Air] ────────────────────────────────► Selesai
Baris 2:                                               [Buka Bumbu] ──► Selesai

ASYNCHRONOUS (Non-Blocking)
Baris 1: [Rebus Air] ──► (Jalan di latar belakang) ────┐
Baris 2: [Buka Bumbu] ──► (Langsung jalan!) ──► Selesai │
                                                       ▼
                                                     [Air Mendidih!]
```

---

## Mari Mencoba: Simulasi Merebus Air Async

Mari kita buat simulasi memasak mie instan di file `src/bab10/apa-itu-asynchronous.ts` untuk melihat bagaimana method asynchronous bekerja.

Buat file bernama `src/bab10/apa-itu-asynchronous.ts`:

```ts
console.log("1. Menyalakan kompor dan menaruh panci air...");

// Merebus air membutuhkan waktu 3 detik di latar belakang
setTimeout(() => {
  console.log("✓ Air mendidih! Siap diseduh.");
}, 3000);

console.log("2. Menyiapkan mangkuk...");
console.log("3. Membuka bumbu mie instan...");
console.log("4. Menaruh mie di mangkuk...");
```

Jalankan dengan perintah:
```text
tsx src/bab10/apa-itu-asynchronous.ts
```

## Output
```text
1. Menyalakan kompor dan menaruh panci air...
2. Menyiapkan mangkuk...
3. Membuka bumbu mie instan...
4. Menaruh mie di mangkuk...
✓ Air mendidih! Siap diseduh.
```

---

## Penjelasan Baris per Baris

- `setTimeout(..., 3000)` — Ini adalah fungsi asynchronous bawaan. Ia mendaftarkan tugas ke sistem untuk dijalankan setelah jeda 3 detik (3000 milidetik).
- Setelah memicu `setTimeout`, program **tidak berhenti menunggu**. Program langsung melompati baris tersebut dan mengeksekusi langkah 2, 3, dan 4 secara instan.
- Setelah 3 detik berlalu di latar belakang, sistem memanggil kembali aksi di dalam `setTimeout` dan mencetak `"✓ Air mendidih!"`.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengira bahwa semua baris kode berjalan berurutan waktu hasil keluarnya
Pemula sering bingung melihat teks output yang melompat-lompat urutannya. Ingatlah bahwa dalam operasi asynchronous, urutan baris di dalam file **tidak menjamin** urutan waktu selesainya di terminal.

---

## Latihan
1. Buat program yang mencetak pesan `"Membuka gerbang sekolah..."`, lalu gunakan `setTimeout` selama 4 detik untuk mencetak `"Bel masuk berbunyi!"`.
2. Di bawah `setTimeout`, cetak pesan `"Siswa mulai berjalan masuk ke kelas..."`.
3. Jalankan dan perhatikan urutan kemunculan pesannya.

---

## Ringkasan
- Asynchronous adalah eksekusi kode non-blocking (tidak memblokir).
- Proses async berjalan secara mandiri di latar belakang.
- `setTimeout` adalah contoh fungsi async dasar untuk memberikan jeda waktu.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mengapa Asynchronous** untuk melihat bahaya fatal jika kita tidak menggunakan pemrograman async pada aplikasi web.
:::
