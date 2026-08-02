---
title: "Array of Object"
description: Menggabungkan array dan object untuk mengelola daftar data terstruktur yang kompleks.
---

# Array of Object

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat array yang berisi kumpulan objek, mengiterasi data array of object, serta melakukan pencarian data spesifik.

---

## Pendahuluan

Di BAB 5 kita belajar array untuk daftar data tunggal. Di halaman-halaman sebelumnya kita belajar object untuk satu data kompleks. Sekarang kita gabungkan keduanya: **daftar dari data-data kompleks**.

Struktur ini adalah struktur data yang paling sering digunakan dalam pengembangan aplikasi nyata (misal: daftar postingan blog, daftar produk toko, daftar siswa).

---

## Penjelasan Materi

**Array of Object** adalah sebuah array yang setiap elemennya berupa object dengan tipe data terstruktur yang sama.

Sintaks dasar:

```ts
const daftarSiswa: Siswa[] = [
  { nama: "Andi", umur: 17 },
  { nama: "Budi", umur: 16 }
]
```

---

## Analogi Kehidupan Sehari-hari

### Lemari Map File Siswa

Bayangkan sebuah lemari arsip besar sekolah. Di dalam lemari tersebut, terdapat deretan map plastik. Setiap map plastik adalah **object** (berisi data lengkap satu siswa). Lemari tersebut secara keseluruhan adalah **array** yang menampung seluruh map plastik siswa secara berurutan.

```text
Lemari Arsip (Array)
  ├── Map 0 (Object): Andi, 17 tahun
  ├── Map 1 (Object): Budi, 16 tahun
  └── Map 2 (Object): Citra, 17 tahun
```

---

## Visual Illustration

```text
const siswa: Siswa[] = [ {nama: "Andi"}, {nama: "Budi"} ]

Index:         0                      1
        ┌──────────────────────┬──────────────────────┐
Elemen: │ nama: "Andi" (objek) │ nama: "Budi" (objek) │
        └──────────────────────┴──────────────────────┘
```

Untuk mengakses nama Budi: `siswa[1].nama`

---

## Mari Mencoba

Buat `src/bab6/array-of-object.ts`:

```ts
type Siswa = {
  nama: string
  nilai: number
  kelas: string
}

// Membuat Array of Object
const kelasRPL: Siswa[] = [
  { nama: "Andi", nilai: 80, kelas: "XI RPL 1" },
  { nama: "Budi", nilai: 65, kelas: "XI RPL 2" },
  { nama: "Citra", nilai: 95, kelas: "XI RPL 1" },
  { nama: "Dian", nilai: 72, kelas: "XI RPL 1" }
]

// 1. Tampilkan nama semua siswa yang lulus (nilai >= 75)
console.log("=== Siswa Lulus ===")
const lulus = kelasRPL.filter((s) => s.nilai >= 75)
lulus.forEach((s, indeks) => {
  console.log(`${indeks + 1}. ${s.nama} (${s.kelas}) - Nilai: ${s.nilai}`)
})

// 2. Hitung rata-rata nilai kelas
console.log("\n=== Statistik Kelas ===")
const totalNilai = kelasRPL.reduce((acc, curr) => acc + curr.nilai, 0)
const rataRata = totalNilai / kelasRPL.length
console.log(`Rata-rata Kelas: ${rataRata.toFixed(2)}`)

// 3. Cari siswa dengan nilai tertinggi (Citra)
const siswaTerbaik = kelasRPL.reduce((prev, current) => {
  return (prev.nilai > current.nilai) ? prev : current
})
console.log(`Siswa Terbaik  : ${siswaTerbaik.nama} dengan nilai ${siswaTerbaik.nilai}`)
```

Jalankan:

```text
tsx src/bab5/array-of-object.ts (salah path) -> tsx src/bab6/array-of-object.ts
```

```text
tsx src/bab6/array-of-object.ts
```

## Output

```text
=== Siswa Lulus ===
1. Andi (XI RPL 1) - Nilai: 80
2. Citra (XI RPL 1) - Nilai: 95

=== Statistik Kelas ===
Rata-rata Kelas: 78.00
Siswa Terbaik  : Citra dengan nilai 95
```

---

## Penjelasan Baris per Baris

- `kelasRPL: Siswa[]` — menandai bahwa variabel ini adalah array yang elemen-elemennya bertipe `Siswa` object.
- `s.nilai >= 75` — di dalam callback filter `s` bertipe `Siswa`, sehingga kita bisa langsung mengakses `.nilai` dari objek tersebut.
- `acc + curr.nilai` — pada reduce, `curr` bertipe `Siswa` object, kita mengambil properti `.nilai` untuk ditambahkan ke accumulator.

---

## Kesalahan yang Sering Terjadi

### ❌ Lupa mengakses properti di dalam callback method

```ts
// Salah: menjumlahkan objek dengan angka
const total = kelasRPL.reduce((acc, curr) => acc + curr, 0) // Error!
```

**Perbaikan:** Ingat bahwa elemen array adalah object. Kamu harus mengakses propertinya secara spesifik: `curr.nilai` (bukan `curr` saja).

---

## Tips

:::tip[Gunakan padEnd untuk Kerapian Tabel]
Array of Object sering ditampilkan dalam bentuk tabel di terminal. Gunakan method `.padEnd(panjang)` pada string nama siswa agar kolom tabel terlihat sejajar dan rapi.
:::

---

## Latihan

Buat array of object bernama `daftarBuku` berisi 3 objek buku (judul, harga). Tampilkan daftar judul buku beserta harganya menggunakan loop `.forEach()`.

---

## Ringkasan

- Array of Object adalah array berisi kumpulan object terstruktur.
- Tipe deklarasinya: `NamaTipe[]`.
- Digunakan bersama method array (filter, map, reduce, forEach) dengan mengakses properti objek di dalam callback.

:::tip[Langkah Selanjutnya]
Lanjut ke **Destructuring** untuk belajar cara membongkar properti objek.
:::
