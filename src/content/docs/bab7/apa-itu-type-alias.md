---
title: "Apa itu Type Alias?"
description: Memahami konsep Type Alias sebagai cara membuat nama panggilan kustom untuk tipe data di TypeScript.
---

# Apa itu Type Alias?

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan apa itu type alias, perbedaannya dengan tipe data bawaan, dan mengapa ia membantu keterbacaan kode.

---

## Pendahuluan

Kita sudah menggunakan `type` alias secara tidak sadar di BAB 6 untuk membuat tipe objek. Sekarang, mari kita bahas secara formal apa itu Type Alias dan mengapa ia menjadi pilar penting di TypeScript selain `interface`.

---

## Penjelasan Materi

**Type Alias** adalah cara untuk memberikan nama baru (nama panggilan atau *alias*) untuk suatu tipe data yang sudah ada atau gabungan tipe data yang kompleks.

Sintaks dasar:

```ts
type NamaAlias = tipeData;
```

Ciri khas `type` alias:
1. Menggunakan kata kunci `type`.
2. Menggunakan tanda sama dengan `=` sebelum mendefinisikan strukturnya.
3. Bisa mewakili tipe data primitif, objek, array, union, dan tipe lainnya.

---

## Analogi Kehidupan Sehari-hari

### Nama Panggilan (Alias)

Bayangkan teman sekelasmu memiliki nama asli panjang: **"Putra Ramadhan Wijaya Kusuma"**. Nama itu terlalu panjang jika harus dipanggil setiap hari.

Teman-teman sekelas sepakat memberikan **nama panggilan (alias)** singkat: **"Putra"**. Kapan pun orang memanggil "Putra", semua orang tahu nama yang dimaksud adalah nama panjang tersebut.

```text
Nama asli:   string | null | undefined
Nama alias:  TeksOpsional  ──► panggilan singkat untuk tipe gabungan
```

Type alias bekerja seperti nama panggilan singkat tersebut untuk tipe data yang rumit.

---

## Visual Illustration

```text
type Angka = number;   ──► "Angka" sekarang menjadi alias dari number

let nilai: Angka = 90; ──► setara dengan let nilai: number = 90
```

---

## Mari Mencoba

Buat `src/bab7/apa-itu-type-alias.ts`:

```ts
// 1. Membuat Alias untuk Tipe Primitif
type Tahun = number;
type Nama = string;

// 2. Membuat Alias untuk Tipe Gabungan (Union)
type ID = string | number;

// 3. Menggunakan alias pada variabel
const tahunAjaran: Tahun = 2025
const namaSiswa: Nama = "Putra"
let idSiswa: ID = "SIS-001"

console.log(`Siswa : ${namaSiswa}`)
console.log(`Tahun : ${tahunAjaran}`)
console.log(`ID A  : ${idSiswa}`)

idSiswa = 12345 // valid karena ID bisa number
console.log(`ID B  : ${idSiswa}`)
```

Jalankan:

```text
tsx src/bab7/apa-itu-type-alias.ts
```

## Output

```text
Siswa : Putra
Tahun : 2025
ID A  : SIS-001
ID B  : 12345
```

---

## Mengapa Type Alias Dibutuhkan?

1. **Mempermudah Keterbacaan** — `type Tahun = number` menjelaskan makna dari angka tersebut daripada hanya menulis `number` saja.
2. **Menghindari Penulisan Berulang** — Gabungan tipe yang panjang seperti `string | number | undefined` cukup ditulis sekali sebagai alias.
3. **Lebih Fleksibel** — Berbeda dengan `interface` yang hanya bisa memodelkan struktur objek, `type` bisa memodelkan tipe apa saja (primitif, gabungan, tuple, dll).

---

## Latihan

1. Buat tipe alias `NomorHP` yang merupakan alias dari `string`.
2. Buat tipe alias `StatusKelulusan` yang merupakan alias dari gabungan literal `"LULUS" | "REMEDIAL"`.
3. Buat variabel menggunakan tipe alias tersebut dan tampilkan.

---

## Ringkasan

- Type Alias memberikan nama baru untuk tipe data menggunakan kata kunci `type`.
- Menggunakan tanda `=` dalam deklarasinya.
- Sangat fleksibel: bisa mewakili objek, primitif, gabungan (union), dan lainnya.

:::tip[Langkah Selanjutnya]
Lanjut ke **Membuat Type Alias** untuk mempraktikkan pembuatan struktur objek dengan tipe alias.
:::
