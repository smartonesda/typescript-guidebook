---
title: "async & await"
description: Menggunakan syntax async dan await untuk menulis kode asynchronous secara bersih dan intuitif di TypeScript.
---

# async & await

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dan kegunaan kata kunci `async` dan `await`.
- Menulis fungsi asynchronous menggunakan sintaks `async/await`.
- Merangkai beberapa Promise berurutan dengan rapi tanpa Callback Hell.

---

## Pendahuluan

Meskipun `Promise` dengan `.then()` dan `.catch()` jauh lebih rapi dibanding Callback, menulis banyak `.then()` berantai (Promise Chaining) masih bisa membuat kode terlihat rumit dan tidak mirip dengan kode synchronous biasa.

Untuk mempermudah penulisan, ECMAScript 2017 (ES8) memperkenalkan syntax gula-gula (*syntactic sugar*) bernama **`async`** dan **`await`**. Fitur ini membuat kode asynchronous terlihat dan dibaca persis seperti kode berurutan synchronous biasa.

---

## Penjelasan Materi: Syntax async dan await

### 1. Kata Kunci `async`
Kata kunci `async` diletakkan tepat sebelum deklarasi fungsi. `async` memberitahu TypeScript bahwa fungsi ini akan berjalan secara asynchronous dan **selalu mengembalikan Promise**:

```ts
async function dapatkanData(): Promise<string> {
  return "Data";
}
```

### 2. Kata Kunci `await`
Kata kunci `await` (artinya: tunggu) diletakkan di depan pemanggilan fungsi yang menghasilkan Promise. `await` memaksa program untuk **menunggu** sampai Promise tersebut selesai (`fulfilled` atau `rejected`), lalu mengambil hasilnya secara langsung.

```ts
const hasil = await dapatkanData(); // mengambil data string langsung!
```

:::caution[Aturan Wajib Await]
Kata kunci `await` **hanya boleh** digunakan di dalam fungsi yang ditandai dengan kata kunci `async` (atau di level atas modul modern).
:::

---

## Analogi Kehidupan Sehari-hari: Asisten Pribadi yang Menyiapkan Data

Bayangkan kamu memiliki **Asisten Pribadi** yang sangat sigap (Fungsi Async):

```text
Kamu: "Tolong siapkan laporan bulanan sekolah." (Picu tugas)
Kamu: "Saya akan tidur siang dulu."
```

Asisten pergi mencari berkas (Proses latar belakang). 

Sebelum kamu melanjutkan presentasi di depan kepala sekolah (baris kode selanjutnya), kamu berkata: *"Tunggu asisten saya datang membawa laporan"* (**`await`**). Begitu asisten menyerahkan map laporan langsung ke tanganmu, kamu langsung maju presentasi tanpa perlu lagi membuka atau menelpon kurir.

---

## Visual Illustration: then() vs await

```text
PROMISE MANUAL (.then)
ambilSiswa().then(siswa => {
  ambilKelas(siswa.kelasId).then(kelas => {
     console.log(kelas.nama)
  })
})

ASYNC / AWAIT (Bersih Segaris)
const siswa = await ambilSiswa();
const kelas = await ambilKelas(siswa.kelasId);
console.log(kelas.nama);
```

---

## Mari Mencoba: Simulasi Pendaftaran Siswa Berurutan

Mari kita bandingkan proses async berurutan yang rapi menggunakan `async/await` di `src/bab10/async-await.ts`.

Buat file bernama `src/bab10/async-await.ts`:

```ts
// Fungsi simulasi pencarian ID siswa (Promise)
function cariIdSiswa(nama: string): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1001), 1500); // jeda 1.5 detik
  });
}

// Fungsi simulasi pencarian Nilai siswa berdasarkan ID (Promise)
function dapatkanNilaiUjian(id: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(85), 1500); // jeda 1.5 detik
  });
}

// 1. Menjalankan tugas async berurutan dengan async/await
async function prosesLaporanSiswa(namaSiswa: string): Promise<void> {
  console.log(`[SIAKAD]: Memulai proses analisis untuk ${namaSiswa}...`);

  // Menunggu hasil pencarian ID
  const id = await cariIdSiswa(namaSiswa);
  console.log(`  -> ID ditemukan: ${id}`);

  // Menunggu hasil pencarian Nilai menggunakan ID hasil langkah sebelumnya
  const nilai = await dapatkanNilaiUjian(id);
  console.log(`  -> Nilai ujian diperoleh: ${nilai}`);

  console.log(`[SIAKAD]: Proses selesai. Status: ${nilai >= 75 ? "LULUS" : "REMEDIAL"}`);
}

console.log("=== MEMULAI PROGRAM ===");
prosesLaporanSiswa("Putra Ramadhan");
console.log("=== KODE UTAMA TERUS BERJALAN INTERAKTIF ===");
```

Jalankan dengan perintah:
```text
tsx src/bab10/async-await.ts
```

## Output
```text
=== MEMULAI PROGRAM ===
[SIAKAD]: Memulai proses analisis untuk Putra Ramadhan...
=== KODE UTAMA TERUS BERJALAN INTERAKTIF ===
(Jeda 1.5 detik...)
  -> ID ditemukan: 1001
(Jeda 1.5 detik...)
  -> Nilai ujian diperoleh: 85
[SIAKAD]: Proses selesai. Status: LULUS
```

---

## Penjelasan Baris per Baris

- `async function prosesLaporanSiswa` — Menandai fungsi dengan `async` sehingga kita diizinkan menggunakan keyword `await` di dalamnya.
- `const id = await cariIdSiswa(namaSiswa)` — Program utama terhenti sesaat di dalam fungsi ini menunggu Promise selesai, lalu langsung memasukkan angka `1001` ke variabel `id`.
- Alur kode terlihat lurus dari atas ke bawah tanpa ada tanda `.then()` bersarang sama sekali.

---

## Kesalahan yang Sering Terjadi

### ❌ Menggunakan `await` di luar fungsi yang bertanda `async`
```ts
function main() {
  const data = await ambilData(); // Error!
  // 'await' expressions are only allowed within async functions and at the top levels of modules.
}
```

**Perbaikan:** Pastikan selalu menambahkan keyword `async` di depan deklarasi fungsi pembungkusnya: `async function main()`.

---

## Latihan
1. Buat fungsi async `ambilCuaca()` yang mengembalikan Promise string `"Cerah"` setelah jeda 2 detik.
2. Buat fungsi async kedua `tampilkanInformasi()` yang melakukan `await` pada `ambilCuaca()` lalu mencetak hasilnya. Panggil fungsi tersebut.

---

## Ringkasan
- `async/await` adalah syntax modern untuk menulis Promise secara lebih bersih.
- Fungsi yang bertanda `async` selalu mengembalikan Promise.
- `await` menunda eksekusi baris berikutnya di dalam fungsi sampai Promise selesai diproses.
- Menghilangkan struktur Callback Hell dan Promise Chaining yang rumit.

:::tip[Langkah Selanjutnya]
Lanjut ke **Error Handling Async** untuk mempelajari cara menangkap error pada sintaks `async/await`.
:::
