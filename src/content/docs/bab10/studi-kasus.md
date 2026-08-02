---
title: "Studi Kasus: Sistem Data Siswa Asynchronous"
description: Studi kasus merancang sistem pemuatan data siswa dari internet secara asynchronous menggunakan Fetch API, async/await, dan module modular di TypeScript.
---

# Studi Kasus: Sistem Data Siswa Asynchronous

## Tujuan Pembelajaran
Setelah menyelesaikan studi kasus ini, kamu diharapkan dapat:
- Menghubungkan program TypeScript dengan web server internet asli.
- Memproses data JSON hasil fetch menggunakan interface.
- Mengamankan data dengan try...catch untuk menghindari crash saat koneksi offline.
- Memisahkan fungsi visual dan fungsi data ke dalam file modular terpisah.

---

## Pendahuluan

Kita akan membuat program simulasi **Sistem Data Siswa Asynchronous**. Program ini akan mem-fetch (mengambil) data tugas sekolah dari internet secara async, memprosesnya ke dalam format database lokal, dan menampilkan rangkuman statistiknya. 

Untuk mensimulasikan module nyata, kita membagi program menjadi dua file:
1. `src/bab10/api-service.ts` (Khusus menangani fetch data ke server internet).
2. `src/bab10/studi-kasus-main.ts` (Khusus memproses data dan mencetak laporan).

---

## Perancangan Arsitektur Modular

```text
    api-service.ts (Module Layanan Data)
      └── export async function ambilDataAPI(id) ──► mem-fetch data JSON
               │
               ▼ di-import oleh
    studi-kasus-main.ts (Program Utama)
      └── memproses data ──► menampilkan laporan di terminal
```

---

## Analogi Kehidupan Sehari-hari: Pengiriman Buku Paket Pelajaran

Bayangkan sekolah memesan buku paket pelajaran dari penerbit pusat di Jakarta:
- **`api-service.ts`** adalah agen ekspedisi pengantar barang. Agen ini tahu cara menghubungi pelabuhan, memproses manifes kontainer, dan mengantarkan paket ke sekolah.
- **`studi-kasus-main.ts`** adalah petugas perpustakaan sekolah. Petugas menerima paket tersegel, membuka kotak, menempelkan barcode, dan mengaturnya di rak agar bisa dibaca siswa.

---

## Visual Illustration: Alur Data API ke Laporan

```text
[ https://jsonplaceholder.typicode.com/todos/1 ]
                       │
                       ▼ fetch (ambil data async)
              [ api-service.ts ]
                       │
                       ▼ import
            [ studi-kasus-main.ts ]
                       │
                       ▼ proses loop
                Laporan Terminal ✓
```

---

## Mari Mencoba: Implementasi Kode SIAKAD Async

### Langkah 1: Buat file `src/bab10/api-service.ts`
```ts
// Interface bentuk data dari server API internet
export interface DataTugas {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Fungsi async untuk mengambil data tugas dari server API JSONPlaceholder
export async function ambilTugasDariServer(id: number): Promise<DataTugas> {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
  }
  
  const data: DataTugas = await response.json();
  return data;
}
```

### Langkah 2: Buat file `src/bab10/studi-kasus-main.ts`
```ts
// Mengimpor module data service
import { ambilTugasDariServer, DataTugas } from "./api-service";

// Fungsi utama aplikasi dengan penanganan error
async function buatLaporanTugas(daftarId: number[]): Promise<void> {
  console.log("==================================================");
  console.log("       LAPORAN PROGRES TUGAS SISWA ONLINE");
  console.log("==================================================");

  let totalSelesai = 0;

  try {
    // Membaca data satu per satu secara bergantian (sequential async)
    for (const id of daftarId) {
      const tugas: DataTugas = await ambilTugasDariServer(id);
      
      const status = tugas.completed ? "✓ SELESAI" : "✗ BELUM";
      if (tugas.completed) totalSelesai++;

      console.log(`  [Tugas ${tugas.id}] ${tugas.title.substring(0, 20).padEnd(20)} | ${status}`);
    }

    console.log("-".repeat(50));
    console.log(`  Total Tugas Diperiksa : ${daftarId.length}`);
    console.log(`  Tugas Selesai         : ${totalSelesai}`);
    console.log(`  Persentase Selesai    : ${(totalSelesai / daftarId.length * 100).toFixed(1)}%`);
    console.log("==================================================");

  } catch (error) {
    console.log("\n⚠ GAGAL MEMPROSES LAPORAN:");
    console.log(`Penyebab: ${error}`);
    console.log("Pastikan koneksi internet laptopmu aktif.");
    console.log("==================================================");
  }
}

// Jalankan pencarian tugas ID 1, 2, 3, dan 4
buatLaporanTugas([1, 2, 3, 4]);
```

Jalankan dengan perintah:
```text
tsx src/bab10/studi-kasus-main.ts
```

---

## Penjelasan Baris per Baris

- `export interface DataTugas` — Interface diekspor agar tipenya bisa dipakai di file program utama.
- `import { ... } from "./api-service"` — Mengimpor fungsi fetch dan interface secara bersamaan (Named Import).
- `for (const id of daftarId) { const tugas = await ... }` — Menggunakan loop `for...of` bersama `await` di dalamnya. Setiap putaran loop akan menunggu fetch id tersebut selesai sebelum lanjut ke id berikutnya. Ini memastikan data dicetak rapi berurutan.
- `tugas.title.substring(0, 20)` — Memotong judul tugas agar tidak terlalu panjang saat ditampilkan di kolom terminal.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengirim data relasi dengan tipe yang tidak cocok
Seringkali pemula mengira data API eksternal langsung memiliki tipe data yang otomatis terjamin tanpa perlu diverifikasi. TypeScript hanya memeriksa kesesuaian saat kompilasi. Jika server web mengembalikan format yang berbeda dari interface, data properti yang kita akses bisa bernilai `undefined` tanpa ada error dari compiler.

---

## Latihan

Kembangkan program studi kasus ini:
1. Ganti daftar ID tugas di `buatLaporanTugas([1, 2, 3, 4])` menjadi ID tugas genap saja: `[2, 4, 6, 8]`.
2. Jalankan kembali program dan perhatikan perubahan statistik tugas selesai di terminal.

---

## Ringkasan

- Module memisahkan kode pemrosesan API (`api-service.ts`) dari tampilan (`studi-kasus-main.ts`).
- Menggunakan `for...of` bersama `await` mengalirkan proses async berurutan.
- Blok `try...catch` melindungi program utama agar tidak mati saat server gagal dihubungi.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mini Project** untuk membuat Generic Academic Repository terpadu menggunakan module dan async.
:::
