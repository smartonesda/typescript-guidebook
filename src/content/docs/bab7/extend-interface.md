---
title: "Extend Interface"
description: Mewariskan dan memperluas properti antar interface menggunakan kata kunci extends di TypeScript.
---

# Extend Interface (Pewarisan Interface)

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memperluas struktur data dengan mewariskan properti dari satu interface ke interface lain menggunakan kata kunci `extends`.

---

## Pendahuluan

Terkadang kita memiliki beberapa objek yang memiliki kemiripan properti dasar, tetapi memiliki beberapa properti khusus yang berbeda.

Contoh: Siswa dan Guru. Keduanya adalah manusia (punya nama dan umur). Tapi Siswa punya properti `nis`, sedangkan Guru punya properti `nip`. Daripada kita menulis ulang properti nama dan umur di kedua interface, kita bisa menggunakan **pewarisan** (`extends`).

---

## Cara Mewariskan Interface

Gunakan kata kunci `extends` setelah nama interface baru:

```ts
interface Orang {
  nama: string;
  umur: number;
}

interface Siswa extends Orang {
  nis: number;
}
```

Interface `Siswa` otomatis mewarisi properti `nama` dan `umur` dari `Orang`, dan menambahkan properti wajibnya sendiri yaitu `nis`.

---

## Analogi Kehidupan Sehari-hari

### Warisan Sifat dari Orang Tua

Bayangkan seorang anak mewarisi ciri fisik dari orang tuanya:

```text
Orang Tua (Base Interface)
  ├── Warna mata: Coklat
  └── Jenis rambut: Lurus

Anak (Extended Interface)
  ├── Warna mata: Coklat (warisan)
  ├── Jenis rambut: Lurus (warisan)
  └── Lesung pipit: Ada (ciri khusus anak sendiri)
```

Anak tidak perlu membuat warna mata baru dari nol — ia mendapatkannya gratis dari orang tua, lalu menambahkan lesung pipit sebagai ciri khususnya sendiri.

---

## Visual Illustration

```text
Orang { nama, umur }
  │
  ▼ extends
Siswa { nama, umur, nis }
```

---

## Mari Mencoba

Buat `src/bab7/extend-interface.ts`:

```ts
// 1. Base Interface (Induk)
interface Orang {
  nama: string;
  umur: number;
}

// 2. Child Interface (Anak) yang memperluas Orang
interface Siswa extends Orang {
  nis: number;
  kelas: string;
}

interface Guru extends Orang {
  nip: number;
  mataPelajaran: string;
}

// 3. Mengimplementasikan pada Objek
const siswaRPL: Siswa = {
  nama: "Putra", // dari Orang
  umur: 17,      // dari Orang
  nis: 3515001,  // dari Siswa
  kelas: "XI RPL 1" // dari Siswa
}

const guruRPL: Guru = {
  nama: "Pak Budi", // dari Orang
  umur: 38,        // dari Orang
  nip: 19870615,   // dari Guru
  mataPelajaran: "TypeScript" // dari Guru
}

console.log("Siswa:", siswaRPL)
console.log("Guru :", guruRPL)
```

Jalankan:

```text
tsx src/bab7/extend-interface.ts
```

## Output

```text
Siswa: { nama: 'Putra', umur: 17, nis: 3515001, kelas: 'XI RPL 1' }
Guru : { nama: 'Pak Budi', umur: 38, nip: 19870615, mataPelajaran: 'TypeScript' }
```

---

## Multiple Extends (Mewarisi Banyak Interface)

Di TypeScript, sebuah interface bisa mewarisi lebih dari satu interface sekaligus:

```ts
interface Identitas { nama: string }
interface Akademik { nis: number }

interface SiswaLengkap extends Identitas, Akademik {
  kelas: string;
}
```

SiswaLengkap otomatis memiliki properti `nama`, `nis`, dan `kelas`.

---

## Kesalahan yang Sering Terjadi

### ❌ Lupa menuliskan properti warisan saat membuat objek

```ts
const siswaBaru: Siswa = {
  nis: 3515002,
  kelas: "XI"
  // Error! Property 'nama' and 'umur' are missing!
}
```

**Perbaikan:** Ingat bahwa interface yang meng-extends interface lain **wajib** mengisi seluruh properti dari interface induknya juga.

---

## Latihan

1. Buat base interface `Kendaraan` (merk, tahun).
2. Buat child interface `Mobil` yang meng-extends `Kendaraan` dan menambah properti `jumlahPintu` (number).
3. Buat satu objek `mobil` yang mematuhinya dan tampilkan.

---

## Ringkasan

- `extends` mewariskan properti dari satu/beberapa interface ke interface baru.
- Menghindari duplikasi penulisan kode properti sejenis (DRY).
- Interface anak wajib mengisi properti miliknya sendiri sekaligus properti warisan induknya.

:::tip[Langkah Selanjutnya]
Lanjut ke **Optional Property** untuk mempelajari parameter opsional pada interface.
:::
