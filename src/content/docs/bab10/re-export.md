---
title: "Re-export"
description: Menggunakan teknik Re-export di TypeScript untuk menyatukan dan meneruskan ekspor dari beberapa file lewat satu gerbang pintu masuk.
---

# Re-export (Penerusan Ekspor)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan kegunaan dari teknik Re-export.
- Membuat file index pusat untuk menyatukan ekspor dari beberapa sub-folder.
- Mengimpor komponen dari berbagai file melalui satu baris impor terpadu.

---

## Penjelasan Materi: Apa itu Re-export?

Saat project kita berkembang, kita mungkin memiliki 10 file modul berbeda di dalam folder `src/models/` (misal: `siswa.ts`, `guru.ts`, `kelas.ts`, dll). 

Jika file utama kita ingin memakai ketiganya, kita harus menulis 3 baris impor terpisah:

```ts
import { Siswa } from "./models/siswa";
import { Guru } from "./models/guru";
import { Kelas } from "./models/kelas";
```

Ini merepotkan. Kita bisa membuat satu file pintu masuk utama bernama `index.ts` di dalam folder tersebut yang bertugas **mengumpulkan lalu mengekspor kembali** seluruh komponen tersebut. Teknik ini disebut **Re-export**.

Syntax Re-export menggunakan gabungan `export` dan `from`:

```ts
// Di dalam file index.ts
export { Siswa } from "./siswa";
export { Guru } from "./guru";
```

File utama kita kini cukup menulis satu baris impor terpadu:

```ts
import { Siswa, Guru } from "./models"; // otomatis mengarah ke index.ts
```

---

## Analogi Kehidupan Sehari-hari: Loket Pembayaran Terpadu (Satu Pintu)

Bayangkan kantor pelayanan administrasi di kabupaten:

```text
PENDEKATAN TANPA RE-EXPORT (Keliling Gedung)
  Kamu harus berjalan kaki ke Gedung A untuk mengurus KTP, lalu berjalan ke Gedung B di ujung barat untuk KK, 
  lalu pergi ke Gedung C di lantai dua untuk akta. Melelahkan!

PENDEKATAN DENGAN RE-EXPORT (Loket Satu Pintu)
  Pemerintah membuat loket terpadu di lobi utama. Di loket ini, kamu menyerahkan seluruh berkas. 
  Petugas loket utama (index.ts) yang akan meneruskan dan mengambil berkas dari Gedung A, B, dan C di belakang layar.
```

Kamu cukup berinteraksi dengan satu loket utama di depan pintu masuk.

---

## Visual Illustration: Alur Re-export

```text
[ siswa.ts ] ──► ekspor ──┐
                          ▼
[ guru.ts ]  ──► ekspor ──┼─► [ index.ts ] (Re-export) ──► import { Siswa, Guru } from "./index"
                          ▲
[ kelas.ts ] ──► ekspor ──┘
```

---

## Mari Mencoba: Membuat Gerbang Pintu Masuk Index

Mari kita buat struktur modular folder `src/bab10/akademik/` yang disatukan oleh `index.ts`.

### Langkah 1: Buat file `src/bab10/siswa-model.ts`
```ts
export interface Siswa {
  nama: string;
  kelas: string;
}
```

### Langkah 2: Buat file `src/bab10/guru-model.ts`
```ts
export interface Guru {
  nama: string;
  nip: number;
}
```

### Langkah 3: Buat file penyatu `src/bab10/index.ts` (Re-export)
```ts
// Mengambil ekspor dari sub-file lalu meneruskannya keluar
export { Siswa } from "./siswa-model";
export { Guru } from "./guru-model";
```

### Langkah 4: Buat program utama `src/bab10/main-reexport.ts`
```ts
// Mengimpor beberapa komponen sekaligus dari SATU file gerbang index.ts
import { Siswa, Guru } from "./index";

const s: Siswa = { nama: "Putra", kelas: "XI RPL 1" };
const g: Guru = { nama: "Pak Budi", nip: 198706 };

console.log("Siswa:", s.nama);
console.log("Guru :", g.nama);
```

Jalankan dengan perintah:
```text
tsx src/bab10/main-reexport.ts
```

## Output
```text
Siswa: Putra
Guru : Pak Budi
```

---

## Penjelasan Baris per Baris

- `export { Siswa } from "./siswa-model"` — Mengambil tipe `Siswa` dari file `siswa-model.ts` dan mengekspornya kembali secara instan.
- `import { Siswa, Guru } from "./index"` — Mengimpor dari file `index.ts`. Karena `index.ts` mengumpulkan semuanya, kita mendapatkan akses ke kedua interface tersebut dalam satu baris.

---

## Latihan
1. Buat folder baru `src/bab10/koperasi/`.
2. Buat file `barang.ts` (export interface Barang) and `transaksi.ts` (export interface Transaksi).
3. Buat file `index.ts` di folder tersebut untuk me-reexport keduanya.
4. Import keduanya di file utama luar dan tampilkan contoh datanya.

---

## Ringkasan
- Re-export menyatukan ekspor dari beberapa file ke dalam satu file gerbang utama (biasanya bernama `index.ts`).
- Menggunakan syntax: `export { Komponen } from "./file"`.
- Mempermudah developer lain saat mengimpor banyak data karena jalurnya ringkas satu pintu.

:::tip[Langkah Selanjutnya]
Lanjut ke **Namespace** untuk alternatif pengelompokan kode di TypeScript.
:::
