---
title: "BAB 5 — Array"
description: Gambaran BAB 5 — menggunakan array untuk menyimpan dan mengolah banyak nilai dalam satu variabel.
---

# BAB 5: Array

## Tujuan Pembelajaran

Setelah menyelesaikan BAB 5, kamu dapat membuat array, mengakses elemen berdasarkan indeks, memodifikasi elemen, dan menggunakan berbagai method bawaan array untuk memproses data koleksi.

---

## Pendahuluan

Di BAB 1–4, kita sudah belajar cara menyimpan nilai tunggal. Jika memiliki 3 siswa, kita bisa membuat variabel: `siswa1`, `siswa2`, dan `siswa3`. Tapi bagaimana jika ada 36 siswa? Atau 1000 produk? Membuat variabel terpisah sangat tidak praktis.

**Array** hadir sebagai solusi: satu variabel tunggal yang dapat menyimpan banyak nilai sekaligus.

---

## Peta Materi

```text
ARRAY
├── Dasar Array
│   ├── Apa itu array?
│   ├── Membuat & mengakses
│   ├── Mengubah data
│   ├── Panjang array
│   └── Iterasi array
├── Modifikasi Elemen (Mutable)
│   ├── push & pop
│   ├── shift & unshift
│   └── splice
├── Operasi Array (Immutable)
│   ├── slice
│   ├── concat
│   ├── includes & indexOf
│   └── find
├── Transformasi & Statistik
│   ├── filter
│   ├── map
│   ├── reduce
│   ├── sort
│   └── reverse
└── Terapan
    ├── Studi kasus daftar nilai
    └── Mini project manajemen siswa
```

---

## Analogi Awal

Array seperti **rak buku**.

```text
Rak Buku (Array)
┌───────────────────────────────────────┐
│ [Buku 0]  │  [Buku 1]  │  [Buku 2]    │
├───────────┼────────────┼──────────────┤
│  "Andi"   │   "Budi"   │   "Putra"    │
└───────────┴────────────┴──────────────┘
 Indeks 0    Indeks 1     Indeks 2
```

Satu rak buku (variabel) menampung banyak buku (nilai). Setiap buku memiliki nomor posisi (indeks) tertentu sehingga mudah dicari dan diambil.

---

## Mari Mencoba

Buat `src/bab5/cek-kesiapan.ts`:

```ts
const daftarSiswa: string[] = ["Andi", "Budi", "Putra"]
console.log("Daftar siswa:", daftarSiswa)
console.log("Siswa pertama:", daftarSiswa[0])
```

Jalankan:

```text
tsx src/bab5/cek-kesiapan.ts
```

Output:

```text
Daftar siswa: [ 'Andi', 'Budi', 'Putra' ]
Siswa pertama: Andi
```

Satu variabel menampung tiga nama, dan kita bisa mengambil satu nama berdasarkan nomor posisi.

---

## Latihan

Modifikasi kode di atas: tambahkan nama siswa keempat di dalam tanda kurung siku `[]` dan tampilkan nama tersebut di terminal menggunakan indeksnya.

---

## Ringkasan

- Array menyimpan kumpulan data dalam satu variabel.
- Elemen diakses menggunakan indeks mulai dari 0.
- BAB 5 akan membahas semua method array yang wajib dikuasai programmer.

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu Array** untuk memahami konsep dasarnya.
:::
