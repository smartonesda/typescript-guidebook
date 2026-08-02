---
title: "Callback Asynchronous"
description: Menggunakan fungsi Callback untuk menangani proses Asynchronous di TypeScript.
---

# Callback Asynchronous

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan konsep Callback dalam operasi asynchronous.
- Membuat fungsi yang menerima callback.
- Menjelaskan masalah Callback Hell dan cara menghindarinya.

---

## Pendahuluan

Bagaimana sebuah proses asynchronous yang berjalan di latar belakang bisa memberitahu program utama saat ia sudah selesai? Cara paling dasar adalah dengan menggunakan **Callback**. Kita mengirimkan sebuah fungsi ke dalam proses async tersebut, untuk dipanggil kembali (*call back*) saat prosesnya selesai.

Kita sudah belajar callback di BAB 4 secara konseptual. Sekarang, kita akan melihat bagaimana callback digunakan khusus untuk mengontrol alur **Asynchronous**.

---

## Penjelasan Materi: Apa itu Callback Async?

**Callback** adalah fungsi yang dikirimkan sebagai argumen ke dalam fungsi lain, untuk dijalankan setelah fungsi utama tersebut selesai melakukan tugasnya.

Dalam konteks async, fungsi utama akan melempar tugas ke latar belakang, lalu segera selesai. Ketika tugas di latar belakang itu akhirnya selesai, ia akan mengeksekusi fungsi callback yang kita titipkan tadi untuk memproses hasilnya.

---

## Analogi Kehidupan Sehari-hari: Alarm / Pager Antrean Restoran

Bayangkan kamu memesan makanan di restoran cepat saji yang ramai:

```text
1. Kamu memesan makanan di kasir.
2. Kasir memberikanmu alat Pager elektronik kecil (Callback).
3. Kamu pergi duduk santai membaca buku (Program utama tidak terhenti).
4. Makanan selesai dimasak di dapur (Tugas latar belakang selesai).
5. Pager berbunyi dan bergetar di tanganmu (Callback dipanggil!).
6. Kamu mendatangi kasir mengambil makanan (Memproses hasil).
```

Kasir tidak memintamu berdiri mematung di depan meja kasir selama makanan dimasak. Alat pager (callback) menjaga agar kamu tetap bebas melakukan aktivitas lain selagi menunggu.

---

## Visual Illustration: Alur Pager Antrean (Callback)

```text
Kasir (Picu Async) ──► Berikan Pager (Tukarkan Callback) ──► Kamu bebas duduk
                                                                  │
Dapur selesai masak ──► Pager bergetar (Callback dipanggil) ◄─────┘
```

---

## Mari Mencoba: Simulasi Pengambilan Data Siswa

Mari kita buat program simulasi mengambil data nilai ujian dari server menggunakan Callback Async.

Buat file bernama `src/bab10/callback-async.ts`:

```ts
type Siswa = { nama: string; nilai: number };

// Fungsi simulasi mengambil nilai dari server API
function ambilNilaiSiswa(nis: number, callback: (s: Siswa) => void): void {
  console.log(`[Server]: Mencari data siswa NIS ${nis} di database...`);
  
  // Simulasi delay jaringan internet selama 2.5 detik
  setTimeout(() => {
    const dataSiswa: Siswa = {
      nama: "Putra Ramadhan",
      nilai: 85
    };
    // Menjalankan fungsi callback titipan dengan mengirimkan data hasil
    callback(dataSiswa);
  }, 2500);
}

console.log("1. Memulai request data...");

// Memanggil fungsi dan menitipkan callback arrow function
ambilNilaiSiswa(1001, (siswa) => {
  console.log("\n=== CALLBACK DIJALANKAN ===");
  console.log(`Nama Siswa: ${siswa.nama}`);
  console.log(`Nilai     : ${siswa.nilai}`);
  console.log(`Status    : ${siswa.nilai >= 75 ? "LULUS" : "REMEDIAL"}`);
});

console.log("2. Menampilkan tombol loading di layar...");
```

Jalankan dengan perintah:
```text
tsx src/bab10/callback-async.ts
```

## Output
```text
1. Memulai request data...
[Server]: Mencari data siswa NIS 1001 di database...
2. Menampilkan tombol loading di layar...
(Jeda waktu 2.5 detik...)
=== CALLBACK DIJALANKAN ===
Nama Siswa: Putra Ramadhan
Nilai     : 85
Status    : LULUS
```

---

## Bahaya Callback Hell (Spaghetti Callback)

Jika kita memiliki beberapa tugas async yang harus berjalan berurutan (misal: ambil data siswa → ambil data nilai → ambil data kelas), kita harus menulis callback di dalam callback secara bersarang (*nested*). Kode ini akan menjorok ke kanan membentuk pola piramida yang sangat sulit dibaca, disebut **Callback Hell**:

```ts
ambilSiswa(1001, (siswa) => {
  ambilNilai(siswa.id, (nilai) => {
    ambilKelas(nilai.kelasId, (kelas) => {
      console.log(kelas.nama); // Callback Hell! Sangat membingungkan!
    });
  });
});
```

Untuk mengatasi Callback Hell ini, modern JavaScript menciptakan **Promise** (yang akan kita pelajari di halaman berikutnya).

---

## Kesalahan yang Sering Terjadi

### ❌ Mencoba menggunakan hasil callback di luar blok callback
```ts
let namaSiswa: string = "";
ambilNilaiSiswa(1001, (siswa) => {
  namaSiswa = siswa.nama;
});
console.log(namaSiswa); // Output: "" (masih kosong karena dipanggil instan sebelum 2.5 detik!)
```

**Perbaikan:** Semua kode yang memproses hasil data dari operasi asynchronous **harus** diletakkan di dalam blok callback tersebut, bukan di luarnya.

---

## Latihan
1. Buat fungsi `hitungDiskonAsync(harga: number, callback: (h: number) => void)` dengan jeda `1500` (1.5 detik) yang mengembalikan harga setelah diskon 10%.
2. Panggil fungsi tersebut untuk harga `200000` dan cetak harga akhir di dalam callback.

---

## Ringkasan
- Callback digunakan untuk menerima notifikasi hasil saat tugas async di latar belakang selesai.
- Penulisan: fungsi dikirim sebagai parameter ke fungsi async.
- Penulisan callback bersarang yang terlalu dalam memicu **Callback Hell** yang buruk.
- Data hasil async hanya valid diakses di dalam blok callback.

:::tip[Langkah Selanjutnya]
Lanjut ke **Promise** untuk mempelajari cara modern dan bersih mengatasi masalah Callback Hell.
:::
