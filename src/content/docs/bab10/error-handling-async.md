---
title: "Error Handling Async"
description: Menangani error pada pemrograman Asynchronous menggunakan blok try...catch di TypeScript.
---

# Error Handling Async

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Mengidentifikasi potensi error pada operasi asynchronous.
- Menangani kegagalan Promise (`rejected`) menggunakan blok `try...catch` pada syntax `async/await`.
- Membangun aplikasi async yang tahan terhadap gangguan koneksi internet.

---

## Pendahuluan

Di halaman Promise kita belajar menangkap error menggunakan `.catch()`. Namun, saat beralih menggunakan syntax `async/await`, kita tidak lagi menuliskan `.then()` dan `.catch()`. 

Lalu bagaimana cara menangkap error jika Promise dibatalkan (`rejected`) saat menggunakan `await`? Kita menggunakan blok penanganan error standar: **`try...catch`**.

---

## Penjelasan Materi: Blok `try...catch`

Blok `try...catch` membagi kodemu menjadi dua bagian:
- **`try`** — Uji coba jalankan kode async. Jika berjalan lancar (fulfilled), abaikan bagian catch.
- **`catch`** — Jika terjadi kesalahan (rejected/error) di baris mana pun dalam blok try, program akan segera berhenti dan melompat ke blok ini untuk menyelamatkan aplikasi dari crash.

Sintaks dasar:

```ts
async function proses() {
  try {
    const data = await ambilData(); // jika rejected, program langsung melompat ke catch
    console.log(data);
  } catch (error) {
    console.log(`Terjadi error: ${error}`);
  }
}
```

---

## Analogi Kehidupan Sehari-hari: Pengaman Sekring Listrik Rumah

Bayangkan instalasi kelistrikan di rumahmu:

```text
Instalasi Listrik (try)
  ├── Nyalakan TV
  └── Nyalakan Kulkas

Sistem Pengaman (catch)
  └── Matikan sekring otomatis jika korsleting (korsleting = error)
```

Jika terjadi korsleting listrik di kulkas, sekring pengaman otomatis jatuh (*trip* / jeglek) untuk menyelamatkan seluruh rumah agar tidak kebakaran. 

Blok `try...catch` adalah sekring pengaman programmu. Jika operasi async gagal, catch akan mengamankan program agar tidak mati total.

---

## Mari Mencoba: Simulasi Penanganan Kegagalan Koneksi

Mari kita buat program simulasi memuat data server sekolah yang bisa saja gagal jika koneksi buruk di `src/bab10/error-handling-async.ts`.

Buat file bernama `src/bab10/error-handling-async.ts`:

```ts
// Fungsi simulasi request data yang bisa gagal secara acak
function ambilDataDatabase(id: number): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log(`[Database]: Membaca data ID ${id}...`);

    setTimeout(() => {
      // Mengacak keberhasilan koneksi (simulasi error)
      const koneksiBagus = Math.random() > 0.5;

      if (koneksiBagus) {
        resolve("Data Siswa: Putra Ramadhan");
      } else {
        reject("Gagal terhubung ke database server sekolah!");
      }
    }, 2000);
  });
}

// Fungsi async dengan penanganan error menggunakan try...catch
async function jalankanAplikasi(id: number): Promise<void> {
  try {
    console.log("-> Mencoba masuk ke sistem...");
    const hasil = await ambilDataDatabase(id);
    console.log(`✓ Hasil Sukses: ${hasil}`);
  } catch (error) {
    console.log("\n=== SEKRING PENGAMAN AKTIF (CATCH) ===");
    console.log(`Alasan Kegagalan: ${error}`);
    console.log("-> Aplikasi menampilkan halaman offline cadangan.");
  } finally {
    console.log("-> Selesai memproses transaksi.");
  }
}

console.log("=== MEMULAI PROGRAM ===");
jalankanAplikasi(1001);
```

Jalankan dengan perintah:
```text
tsx src/bab10/error-handling-async.ts
```

## Output (Kemungkinan A: Sukses)
```text
=== MEMULAI PROGRAM ===
-> Mencoba masuk ke sistem...
[Database]: Membaca data ID 1001...
(Jeda 2 detik...)
✓ Hasil Sukses: Data Siswa: Putra Ramadhan
-> Selesai memproses transaksi.
```

## Output (Kemungkinan B: Gagal/Error)
```text
=== MEMULAI PROGRAM ===
-> Mencoba masuk ke sistem...
[Database]: Membaca data ID 1001...
(Jeda 2 detik...)

=== SEKRING PENGAMAN AKTIF (CATCH) ===
Alasan Kegagalan: Gagal terhubung ke database server sekolah!
-> Aplikasi menampilkan halaman offline cadangan.
-> Selesai memproses transaksi.
```

---

## Penjelasan Baris per Baris

- `Math.random() > 0.5` — Simulasi acak sukses/gagal setiap kali file dijalankan.
- `const hasil = await ambilDataDatabase(id)` — Jika Promise berstatus `rejected`, TypeScript langsung menghentikan alur baris `const hasil` dan melemparkan objek error ke parameter `(error)` di dalam blok `catch`.
- Blok `finally` di akhir selalu dieksekusi untuk memastikan koneksi ditutup secara bersih.

---

## Kesalahan yang Sering Terjadi

### ❌ Menulis kode pembersih hanya di dalam blok `try`
Jika terjadi error di dalam `try`, baris-baris kode di bawah baris pemicu error tidak akan dieksekusi. Jika kamu menaruh pemutus koneksi di bawah baris error, koneksi akan menggantung terbuka.

**Perbaikan:** Selalu letakkan pembersih atau penutup koneksi di dalam blok **`finally`** agar dijamin selalu dijalankan dalam kondisi apa pun.

---

## Latihan
1. Buat fungsi async `bacaFile()` yang melempar error `throw new Error("File tidak ditemukan")`.
2. Buat fungsi async pembungkus `tampilkanIsiFile()` yang menggunakan `try...catch` untuk menangkap error tersebut dan menampilkan pesan kustom yang bersahabat bagi pengguna.

---

## Ringkasan
- Kode async rentan mengalami kegagalan akibat faktor luar (koneksi, file rusak).
- Blok `try...catch` digunakan untuk menangani kegagalan Promise saat memakai `async/await`.
- `catch` mengamankan aplikasi agar tidak crash total saat terjadi error.
- `finally` selalu berjalan di akhir untuk pembersihan database/UI.

:::tip[Langkah Selanjutnya]
Lanjut ke **Fetch API** untuk mempraktikkan pengambilan data asli dari internet secara asynchronous.
:::
