---
title: "export & import"
description: Belajar konsep dasar membagikan dan mengambil kode antar file module di TypeScript.
---

# export & import

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dari kata kunci `export` dan `import`.
- Memahami alur pengiriman komponen antar file.
- Menjelaskan cara kerja isolasi file di TypeScript.

---

## Pendahuluan

Agar kode di dalam satu file module bisa digunakan di file module lain, kita harus melewati gerbang resmi. File pengirim harus membuka gerbang menggunakan kata kunci **`export`** (ekspor), dan file penerima harus menjemput data menggunakan kata kunci **`import`** (impor).

---

## Penjelasan Materi: Alur Ekspor dan Impor

Secara default, seluruh kode di dalam file `.ts` terkunci rapat di dalam file tersebut saja. 

### 1. `export` (Membagikan)
Jika kita ingin variabel, fungsi, class, atau interface bisa dipakai di luar, kita letakkan kata kunci `export` di depan deklarasinya:

```ts
// File: matematika.ts
export const PI = 3.14; // boleh dipinjam keluar
```

### 2. `import` (Mengambil)
Di file penerima, kita panggil komponen tersebut menggunakan kata kunci `import` diikuti nama komponen di dalam kurung kurawal `{}` dan asal file nya:

```ts
// File: main.ts
import { PI } from "./matematika"; // menjemput PI
```

:::caution[Tanda ./ pada Path]
Tanda `./` di depan nama file penting untuk memberitahu compiler bahwa file yang dicari berada di folder yang sama dengan file saat ini. Jangan tulis ekstensi file `.ts` saat menulis path impor.
:::

---

## Analogi Kehidupan Sehari-hari: Hubungan Dagang Antar Negara

Bayangkan dua buah **Negara yang Terisolasi**:

```text
Negara A (Gudang Kayu)
  ├── Memiliki banyak kayu jati berkualitas.
  └── Melakukan ekspor (export) kayu jati agar bisa dikirim keluar perbatasan negara.

Negara B (Pabrik Mebel)
  ├── Membutuhkan kayu jati untuk bahan meja.
  └── Melakukan impor (import) kayu jati dari Negara A masuk melewati gerbang bea cukai.
```

Tanpa kesepakatan ekspor-impor resmi di gerbang perbatasan, kayu jati tidak bisa dipindahkan antar negara.

---

## Visual Illustration: Alur Transfer Data

```text
GUDANG EXPORT: siswa.ts                      GUDANG IMPORT: main.ts
┌───────────────────────────┐                ┌───────────────────────────┐
│ export interface Siswa {  │ ── import ────►│ import { Siswa }          │
│   nama: string;           │                │   from "./siswa";         │
│ }                         │                │                           │
└───────────────────────────┘                │ const s: Siswa = { ... }  │
                                             └───────────────────────────┘
```

---

## Mari Mencoba: Project Multihalaman Pertama

Mari buat dua file terpisah: `src/bab10/util-matematika.ts` (modul pembantu) dan `src/bab10/main-aplikasi.ts` (program utama).

### Langkah 1: Buat `src/bab10/util-matematika.ts`
```ts
// Menambahkan kata kunci export agar bisa dipakai di luar
export const KKM_SEKOLAH = 75;

export function hitungPersentaseLulus(jumlahLulus: number, total: number): number {
  if (total === 0) return 0;
  return parseFloat(((jumlahLulus / total) * 100).toFixed(1));
}
```

### Langkah 2: Buat `src/bab10/main-aplikasi.ts`
```ts
// Mengimpor komponen dari file util-matematika
import { KKM_SEKOLAH, hitungPersentaseLulus } from "./util-matematika";

const nilaiPutra = 82;
const nilaiDewi = 70;

const statusPutra = nilaiPutra >= KKM_SEKOLAH ? "LULUS" : "REMEDIAL";
console.log(`Putra: ${statusPutra} (KKM: ${KKM_SEKOLAH})`);

const totalPercent = hitungPersentaseLulus(1, 2);
console.log(`Persentase Kelulusan Kelas: ${totalPercent}%`);
```

Jalankan file utama menggunakan perintah:
```text
tsx src/bab10/main-aplikasi.ts
```

## Output
```text
Putra: LULUS (KKM: 75)
Persentase Kelulusan Kelas: 50%
```

---

## Penjelasan Baris per Baris

- `export const KKM_SEKOLAH` — Mengekspor konstanta agar bisa diimpor file lain.
- `import { KKM_SEKOLAH, ... } from "./util-matematika"` — Menjemput kedua komponen dari file lokal. Perhatikan path `./util-matematika` merujuk ke file `util-matematika.ts` di folder yang sama.

---

## Kesalahan yang Sering Terjadi

### ❌ Menuliskan ekstensi file `.ts` saat melakukan impor
```ts
import { KKM_SEKOLAH } from "./util-matematika.ts"; // Error di TypeScript!
// An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.
```

**Perbaikan:** Cukup tulis nama filenya saja tanpa `.ts`: `./util-matematika`.

---

## Latihan
1. Buat file `src/bab10/siswa.ts` berisi interface `Siswa` yang di-export.
2. Buat file `src/bab10/latihan-main.ts`, import interface `Siswa` tersebut, buat satu objek siswa nyata, dan tampilkan nilainya.

---

## Ringkasan
- Kode dibagikan menggunakan kata kunci `export` di depan deklarasi.
- Kode diambil menggunakan kata kunci `import { komponen } from "./path-file"`.
- Jangan menulis ekstensi file `.ts` saat menulis path impor.

:::tip[Langkah Selanjutnya]
Lanjut ke **Default Export** untuk mempelajari cara mengekspor satu komponen utama dari sebuah file.
:::
