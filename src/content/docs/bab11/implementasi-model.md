---
title: "Implementasi Model Data — BAB 11"
description: Membuat berkas model data siswa, guru, dan rombel secara terstruktur di folder models/ menggunakan TypeScript.
---

# Implementasi Model Data

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Membuat file model data `siswa-model.ts` dan `guru-model.ts`.
- Menggunakan Enum untuk status kehadiran guru.
- Membuat file `index.ts` di folder `models/` sebagai gerbang Re-export terpadu.

---

## Pendahuluan
Langkah pertama dalam pengodean aplikasi berlapis adalah mendefinisikan **Model Data**. Model data adalah interface murni yang mendefinisikan "bentuk" data objek tanpa memuat fungsi logika bisnis di dalamnya.

---

## Penjelasan
Folder `src/models/` akan menyimpan rancangan data sekolah. Kita membaginya menjadi beberapa file agar rapi:
- `siswa-model.ts`: berisi tipe NIS dan interface Siswa.
- `guru-model.ts`: berisi enum StatusHadir dan interface Guru.
- `index.ts`: pintu gerbang Re-export agar file luar bisa mengimpor semua model dari satu jalur.

---

## Analogi Kehidupan Sehari-hari: Lembar Desain Formulir Pendaftaran
Membuat file model seperti **mendesain bentuk formulir kertas pendaftaran kosong**:

```text
Formulir Guru
  ├── Kolom Nama (teks)
  ├── Kolom NIP (angka)
  └── Pilihan Hadir: [ HADIR / IZIN / ABSEN ] (Enum)
```

Formulir ini belum diisi oleh guru nyata. Ini baru berupa cetakan kosong yang mendefinisikan nama-nama kolom dan jenis tulisan yang diizinkan untuk diisi.

---

## Visual Illustration: Hubungan Re-export models/index.ts

```text
[ guru-model.ts ] ──► export ──┐
                               ▼
                      [ models/index.ts ] ──► di-import oleh file luar
                               ▲
[ siswa-model.ts ] ──► export ──┘
```

---

## Live Coding: Implementasi Model Data

### Langkah 1: Buat `src/models/guru-model.ts`
```ts
// Enum status kehadiran guru
export enum StatusHadir {
  Hadir = "HADIR",
  Izin = "IZIN",
  Absen = "ABSEN"
}

// Interface model data Guru
export interface Guru {
  id: number;
  nama: string;
  nip: number;
  mataPelajaran: string;
  status: StatusHadir;
  gajiPokok: number;
}
```

### Langkah 2: Buat `src/models/siswa-model.ts`
```ts
// Tipe union untuk NIS
export type NIS = string | number;

// Interface model data Siswa
export interface Siswa {
  id: number;
  nama: string;
  nis: NIS;
  kelas: string;
  nilaiRataRata: number;
  catatanSanksi?: string;
}
```

### Langkah 3: Buat Gerbang `src/models/index.ts`
```ts
export * from "./guru-model";
export * from "./siswa-model";
```

---

## Output
Setelah membuat file-file di atas, TypeScript compiler akan mengenali tipe data `Siswa`, `Guru`, dan `StatusHadir` secara resmi di seluruh workspace project.

---

## Penjelasan Baris per Baris
- `export enum StatusHadir`: Membuat tipe data pilihan terstruktur (Enum) yang membatasi status kehadiran guru (BAB 7).
- `export type NIS = string | number;`: Membuat tipe union (BAB 7) agar NIS fleksibel menerima angka maupun string kustom.
- `export * from "./siswa-model"`: Me-reexport semua isi file siswa-model agar bisa diimpor satu pintu (BAB 10).

---

## Common Mistakes
- **Menuliskan value pada interface**: Menulis `nama: "Putra";` di dalam interface. Interface hanya menampung deklarasi tipe data (`nama: string;`), bukan nilai aslinya.

---

## Tips
:::tip[Gunakan Enum untuk Opsi Terbatas]
Gunakan `enum` untuk semua data yang pilihannya terbatas dan sudah pasti (seperti status hadir, jenis kelamin, atau peran user) agar terhindar dari salah ketik string bebas.
:::

---

## Ringkasan
- Model data murni disimpan di dalam folder `src/models/`.
- `StatusHadir` dideklarasikan menggunakan `enum`.
- `index.ts` menyatukan seluruh ekspor menggunakan teknik Re-export (`export * from ...`).

---

## Latihan
1. Buat file `guru-model.ts` dan `siswa-model.ts` di folder `src/models/` komputermu.
2. Buat file `index.ts` dan lakukan re-export untuk kedua file tersebut.
