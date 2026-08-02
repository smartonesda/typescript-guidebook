---
title: "Named Export"
description: Menggunakan Named Export untuk mengekspor banyak komponen sekaligus dengan nama yang spesifik di TypeScript.
---

# Named Export

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dan kegunaan dari Named Export.
- Mengekspor beberapa komponen sekaligus dari satu file.
- Menggunakan kata kunci `as` untuk mengganti nama komponen saat diimpor (aliasing).

---

## Penjelasan Materi: Banyak Ekspor dalam Satu File

Jika `default export` hanya memperbolehkan satu komponen utama, **`Named Export`** (ekspor bernama) memperbolehkan kita mengekspor **banyak komponen sekaligus** (variabel, fungsi, class, interface) dari dalam satu file yang sama.

Setiap komponen diekspor dengan namanya masing-masing:

```ts
// File: util.ts
export const KKM = 75;
export function sapa() {}
export class Siswa {}
```

Saat diimpor, kita harus menuliskan nama komponen tersebut secara persis di dalam tanda kurung kurawal `{ }`:

```ts
import { KKM, sapa, Siswa } from "./util";
```

---

## Mengubah Nama Impor dengan Keyword `as`

Jika nama komponen yang diimpor terlalu panjang atau berpotensi bentrok dengan nama variabel yang sudah ada di file tujuan, kita bisa mengganti namanya saat impor menggunakan kata kunci **`as`**:

```ts
import { KKM as BatasLulus } from "./util";
console.log(BatasLulus); // menggunakan nama baru
```

---

## Analogi Kehidupan Sehari-hari: Daftar Menu Sampingan Spesifik

Kembali ke restoran: Named export adalah **menu-menu sampingan spesifik** yang ada di daftar menu:

```text
Daftar Menu Sampingan:
  ├── Es Teh
  ├── Kerupuk
  └── Gorengan
```

Jika kamu hanya bilang *"Pesan satu"* kepada pelayan tanpa menyebutkan namanya, pelayan tidak tahu barang apa yang kamu maksud. Kamu harus menyebutkan namanya secara spesifik sesuai daftar menu: *"Pesan **Es Teh** dan **Kerupuk**"* (menggunakan kurung kurawal `{ EsTeh, Kerupuk }`).

---

## Mari Mencoba: Ekspor Banyak Komponen dan Aliasing

Mari kita buat modul utilitas akademik yang mengekspor banyak komponen, lalu mengimpornya dengan nama alias.

### Langkah 1: Buat `src/bab10/util-akademik.ts`
```ts
// Mengekspor beberapa komponen sekaligus (Named Exports)
export const VERSI_SIAKAD = "4.2.0";

export type StatusSiswa = "aktif" | "cuti" | "lulus";

export function hitungRataRata(nilai: number[]): number {
  if (nilai.length === 0) return 0;
  const total = nilai.reduce((acc, curr) => acc + curr, 0);
  return parseFloat((total / nilai.length).toFixed(2));
}
```

### Langkah 2: Buat `src/bab10/main-named.ts`
```ts
// Mengimpor dengan nama alias menggunakan keyword 'as'
import { VERSI_SIAKAD as VersiApp, hitungRataRata as hitungRata } from "./util-akademik";

console.log(`Versi Aplikasi: ${VersiApp}`);

const nilaiSiswa = [80, 85, 90];
const rataRata = hitungRata(nilaiSiswa); // memanggil menggunakan nama alias
console.log(`Rata-rata Nilai: ${rataRata}`);
```

Jalankan dengan perintah:
```text
tsx src/bab10/main-named.ts
```

## Output
```text
Versi Aplikasi: 4.2.0
Rata-rata Nilai: 85
```

---

## Penjelasan Baris per Baris

- `export const ...`, `export type ...`, `export function ...` — Ketiganya diekspor secara bernama (Named).
- `import { VERSI_SIAKAD as VersiApp, ... }` — Kita mengimpor konstanta `VERSI_SIAKAD` namun mengganti namanya menjadi `VersiApp` khusus untuk file `main-named.ts` agar kodenya lebih singkat dibaca.

---

## Latihan
1. Buat file `src/bab10/inventaris.ts` yang mengekspor secara bernama: interface `Barang` (nama, jumlah) dan fungsi `hitungTotalAset(harga, jumlah)`.
2. Buat file `src/bab10/main-latihan-named.ts`, import kedua komponen tersebut, gunakan nama alias `Aset` untuk fungsi hitung, lalu tampilkan hasilnya.

---

## Ringkasan
- Named Export memungkinkan penulisan banyak ekspor dalam satu file.
- Wajib menggunakan kurung kurawal `{ }` saat diimpor.
- Nama komponen yang diimpor harus cocok dengan nama aslinya di file asal.
- Gunakan kata kunci `as` untuk membuat nama alias guna menghindari bentrok nama variabel.

:::tip[Langkah Selanjutnya]
Lanjut ke **Re-export** untuk mempelajari teknik meneruskan ekspor antar file.
:::
