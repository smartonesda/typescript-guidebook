---
title: "Synchronous vs Asynchronous"
description: Perbandingan lengkap karakteristik, kelebihan, kekurangan, dan alur data Synchronous vs Asynchronous.
---

# Synchronous vs Asynchronous

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menyebutkan perbedaan karakteristik utama Synchronous dan Asynchronous.
- Membaca diagram alur eksekusi kedua paradigma tersebut.
- Menentukan kapan harus menggunakan synchronous dan kapan harus asynchronous.

---

## Pendahuluan

Untuk menjadi programmer yang handal, kamu harus tahu kapan harus menggunakan jalan synchronous dan kapan harus menggunakan jalan asynchronous. Keduanya memiliki tempatnya masing-masing. Tidak semua hal harus dibuat asynchronous, dan tidak semua hal aman dibuat synchronous.

---

## Tabel Perbandingan Utama

| Karakteristik | Synchronous (Sync) | Asynchronous (Async) |
|---|---|---|
| **Alur Eksekusi** | Berurutan baris demi baris | Multitasking / Non-blocking |
| **Kecepatan Awal** | Lambat jika ada tugas tertunda | Cepat karena langsung melompati jeda |
| **Dampak CPU** | Memblokir thread utama | Memindahkan proses ke latar belakang |
| **Keterbacaan Kode** | Sangat mudah dibaca dan dipahami | Butuh penanganan khusus (Promise/Await) |
| **Penggunaan Utama** | Perhitungan matematika, logika dasar | Request database, API call, baca file |

---

## Analogi Kehidupan Sehari-hari: Telepon Interaktif vs Chat WhatsApp

### Synchronous = Panggilan Telepon
Saat kamu menelpon temanmu:
- Kamu berbicara → temanmu mendengarkan.
- Temanmu berbicara → kamu mendengarkan.
- Kamu tidak bisa menutup telepon dan melakukan panggilan lain sebelum obrolan saat ini selesai. Kamu **terikat** di dalam percakapan tersebut secara langsung.

### Asynchronous = Chat WhatsApp / SMS
Saat kamu mengirim pesan chat ke temanmu:
- Kamu mengetik *"Halo, apa kabar?"* lalu menekan kirim.
- Kamu **tidak perlu menatap layar HP** menunggu temanmu membalas. Kamu bisa langsung mengantongi HP, pergi makan, atau belajar.
- Temanmu membalas 10 menit kemudian → HP-mu bergetar memberi notifikasi (callback). Kamu baru membaca balasan tersebut saat santai.

---

## Visual Illustration: Alur Waktu Eksekusi

```text
SYNCHRONOUS (Satu Jalur)
Mulai ──► Tugas 1 (1s) ──► Tugas 2 (3s) ──► Tugas 3 (1s) ──► Selesai (Total 5 detik)

ASYNCHRONOUS (Banyak Jalur Latar Belakang)
Mulai ──┬── Tugas 1 (1s) ───────────────────► Selesai (1s)
        ├── Tugas 2 (3s, latar belakang) ──► Selesai (3s)
        └── Tugas 3 (1s) ───────────────────► Selesai (1s)
(Program utama langsung selesai dalam 1 detik, Tugas 2 menyusul di detik ke-3)
```

---

## Kapan Memakai Mana?

### Gunakan Synchronous ketika:
1. Operasi sangat cepat (hitungan milidetik).
2. Hasil baris 1 mutlak dibutuhkan untuk menghitung baris 2 (misal: `const a = 5; const b = a + 2`).
3. Logika program sederhana dan tidak melibatkan komunikasi jaringan luar.

### Gunakan Asynchronous ketika:
1. Melibatkan koneksi internet atau server (API call).
2. Membaca atau menulis file besar.
3. Menunggu input dari sensor atau perangkat keras eksternal.
4. Memberikan jeda waktu berkala.

---

## Mari Mencoba: Perbandingan Struktur Kode

Mari kita lihat perbedaan format penulisan kode perbandingan di `src/bab10/sync-vs-async.ts`.

Buat file bernama `src/bab10/sync-vs-async.ts`:

```ts
// Tipe data simulasi
type Siswa = { nama: string; kelas: string };

// 1. PENDAPATAN DATA SYNCHRONOUS
function ambilSiswaSync(): Siswa {
  console.log("[Sync]: Mengambil data siswa dari memori lokal...");
  return { nama: "Putra", kelas: "XI RPL 1" };
}

// 2. PENDAPATAN DATA ASYNCHRONOUS
function ambilSiswaAsync(callback: (s: Siswa) => void): void {
  console.log("[Async]: Meminta data siswa ke server cloud (jeda 2s)...");
  setTimeout(() => {
    callback({ nama: "Dewi", kelas: "XI RPL 2" });
  }, 2000);
}

// --- Menjalankan Perbandingan ---

// Panggil versi Sync
const s1 = ambilSiswaSync();
console.log(`[Sync Hasil]: ${s1.nama} dari kelas ${s1.kelas}\n`);

// Panggil versi Async
ambilSiswaAsync((s2) => {
  console.log(`[Async Hasil]: ${s2.nama} dari kelas ${s2.kelas}`);
});

console.log("[Utama]: Kode setelah pemanggilan Async langsung berjalan!");
```

Jalankan dengan perintah:
```text
tsx src/bab10/sync-vs-async.ts
```

## Output
```text
[Sync]: Mengambil data siswa dari memori lokal...
[Sync Hasil]: Putra dari kelas XI RPL 1

[Async]: Meminta data siswa ke server cloud (jeda 2s)...
[Utama]: Kode setelah pemanggilan Async langsung berjalan!
(Jeda 2 detik...)
[Async Hasil]: Dewi dari kelas XI RPL 2
```

---

## Latihan
1. Buat array berisi 3 nama tugas. 
2. Cetak tugas pertama secara synchronous.
3. Cetak tugas kedua di dalam `setTimeout` asynchronous (jeda 3 detik).
4. Cetak tugas ketiga secara synchronous di bawah `setTimeout` tersebut. Tampilkan hasilnya.

---

## Ringkasan
- Synchronous mengeksekusi kode berurutan dan memblokir thread jika lambat.
- Asynchronous mengeksekusi kode secara non-blocking dan berjalan di latar belakang.
- Telepon adalah analogi synchronous; chat WhatsApp adalah analogi asynchronous.
- Gunakan async untuk semua operasi eksternal (jaringan, database, file).

:::tip[Langkah Selanjutnya]
Lanjut ke **Callback** untuk mempelajari cara paling dasar menangani hasil asynchronous.
:::
