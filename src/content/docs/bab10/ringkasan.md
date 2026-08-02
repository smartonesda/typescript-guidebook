---
title: "Ringkasan BAB 10"
description: Rangkuman lengkap materi Asynchronous Programming dan Module System — cheat sheet, tabel perbandingan, dan checklist belajar.
---

# Ringkasan BAB 10

## Selamat! 🎉

Kamu telah menyelesaikan **BAB 10: Asynchronous & Module**! Ini adalah bab penutup dalam rangkaian guidebook TypeScript ini. Kamu sekarang telah menguasai seluruh pilar penting yang digunakan oleh professional web developer untuk membangun aplikasi web modern berskala besar.

---

## Asynchronous Cheat Sheet

### Callback Async
```ts
function ambilData(callback: (data: string) => void) {
  setTimeout(() => callback("Data hasil"), 2000);
}
ambilData((hasil) => console.log(hasil));
```

### Promise
```ts
const janji = new Promise<string>((resolve, reject) => {
  if (sukses) resolve("Sukses");
  else reject("Gagal");
});

janji.then(h => console.log(h)).catch(e => console.log(e));
```

### async & await
```ts
async function main() {
  try {
    const data = await ambilDataPromise();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

---

## Module System Cheat Sheet

### Named Export & Import (Banyak dalam satu file)
```ts
// Eksport
export const KKM = 75;
export function sapa() {}

// Impor (wajib kurung kurawal & aliasing dengan 'as')
import { KKM as BatasLulus, sapa } from "./file";
```

### Default Export & Import (Satu utama dalam satu file)
```ts
// Eksport
export default class Siswa {}

// Impor (tanpa kurung kurawal & nama bebas)
import SiswaRPL from "./file";
```

### Re-export (Gerbang satu pintu)
```ts
// Di file index.ts
export { Siswa } from "./siswa";
export { Guru } from "./guru";
```

---

## Perbandingan Sync vs Async

| Karakteristik | Synchronous (Sync) | Asynchronous (Async) |
|---|---|---|
| **Alur** | Baris demi baris berurutan | Non-blocking di latar belakang |
| **Blocking** | Ya (jika lambat, program beku) | Tidak (aplikasi tetap interaktif) |
| **Hasil** | Langsung diperoleh | Menunggu notifikasi / callback / await |
| **Analogi** | Panggilan telepon langsung | Kirim pesan chat WhatsApp |

---

## Checklist Pemahaman BAB 10

Tandai setiap poin yang sudah kamu kuasai:
- [ ] Memahami perbedaan Synchronous dan Asynchronous programming.
- [ ] Bisa menjelaskan bahaya pembekuan program (blocking) pada single-thread.
- [ ] Menggunakan `setTimeout` untuk simulasi jeda async.
- [ ] Menggunakan Callback untuk menangani proses async sederhana.
- [ ] Memahami status Promise: `Pending`, `Fulfilled`, dan `Rejected`.
- [ ] Membuat objek Promise dengan `resolve` dan `reject`.
- [ ] Mengonsumsi Promise menggunakan `.then()`, `.catch()`, dan `.finally()`.
- [ ] Menggunakan syntax `async` dan `await` untuk merapikan Promise.
- [ ] Mengamankan error async menggunakan blok `try...catch`.
- [ ] Melakukan http request GET mengambil data internet menggunakan Fetch API.
- [ ] Memahami konsep Module System untuk memecah file project.
- [ ] Menggunakan Named Export dan Named Import dengan kurung kurawal `{ }`.
- [ ] Menggunakan Default Export dan Default Import tanpa kurung kurawal.
- [ ] Menggunakan kata kunci `as` untuk membuat nama alias impor.
- [ ] Membuat pintu gerbang index menggunakan teknik Re-export.
- [ ] Memahami cara kerja Namespace dan perbedaannya dengan Module.
- [ ] Menyelesaikan Studi Kasus pengambilan data API internet.
- [ ] Menyelesaikan Mini Project SIAKAD terintegrasi OOP + Async + Module.

---

## Perintah Penting
```text
tsx src/bab10/namafile.ts   ← Menjalankan file TypeScript async/module di terminal
Ctrl + C                   ← Menghentikan program yang hang/freeze/infinite loop
```

---

## Menghubungkan Seluruh Bab (BAB 0–10)

```text
BAB 0-1: Variabel & Tipe Data  ──► Menyimpan data dasar
BAB 2-3: Operator, If, Loop     ──► Mengontrol aliran program
BAB 4:   Function              ──► Mengelompokkan perintah modular
BAB 5-6: Array & Object        ──► Menyusun kumpulan data terstruktur
BAB 7-9: Tipe Lanjut (Generic) ──► Menjamin keamanan skala industri
BAB 10:  Async & Module        ──► Menghubungkan ke web server internet
```

Selamat! Kamu kini telah menguasai seluruh pilar inti pemrograman TypeScript modern!

---

## Latihan Penutup

Tanpa melihat panduan, buatlah program modular di folder latihan:

1. Buat file `src/bab10/latihan-api.ts`. Eksport fungsi async `fetchDataUser()` yang mengambil data dari URL `https://jsonplaceholder.typicode.com/users/2` dan mengembalikan Promise object user (id, name, email).
2. Buat file `src/bab10/latihan-main-final.ts`. Import fungsi tersebut, panggil di dalam fungsi async utama, gunakan `try...catch` untuk mengamankan prosesnya, lalu tampilkan nama dan email user di terminal.

Jalankan dan pastikan program berjalan lancar tanpa error kompilasi.

---

## Pesan Terakhir untuk Kamu

Selamat! Perjalanan belajarmu di TypeScript Guidebook ini telah selesai. Kamu telah melangkah dari bab 0 (pengenalan pemrograman paling dasar) hingga bab 10 (asynchronous programming dan arsitektur module system). 

Pengetahuan yang kamu miliki sekarang adalah fondasi kokoh untuk mulai mempelajari framework pengembangan aplikasi nyata seperti React, Vue, Svelte, atau NestJS. Teruslah mencoba membuat project-project kecil secara mandiri, hadapi setiap error dengan sabar, dan terus kembangkan kemampuanmu. 

Selamat berkarya di dunia teknologi! 🚀

:::tip[Selesai BAB 10]
Seluruh materi di guidebook ini telah selesai diimplementasikan secara utuh. Laporkan pencapaian belajarmu kepada gurumu untuk evaluasi akhir.
:::
