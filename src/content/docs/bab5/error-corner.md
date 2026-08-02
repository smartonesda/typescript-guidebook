---
title: "Error Corner BAB 5"
description: Mengenali dan memperbaiki kesalahan paling umum saat menggunakan array di TypeScript.
---

# Error Corner BAB 5

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat mengidentifikasi bug umum manipulasi array dan mengatasinya dengan benar.

---

## Pendahuluan

Kesalahan array sering kali tidak memicu error compiler di TypeScript, tetapi menghasilkan error saat program dijalankan (*runtime error*) atau menghasilkan data yang tidak konsisten secara logika.

---

## Error 1 — Indeks Diluar Jangkauan (Undefined)

### Kode Bermasalah

```ts
const siswa = ["Andi", "Budi"]
console.log(siswa[2].toUpperCase()) // Runtime Error!
```

### Mengapa Terjadi?

`siswa[2]` bernilai `undefined` karena indeks maksimal adalah 1 (panjang 2). Mengakses properti `.toUpperCase()` pada `undefined` memicu crash program.

### Cara Memperbaiki

Selalu cek keberadaan elemen sebelum memprosesnya:

```ts
const siswa = ["Andi", "Budi"]
if (siswa[2] !== undefined) {
  console.log(siswa[2].toUpperCase())
}
```

---

## Error 2 — Mengira push() / unshift() Mengembalikan Array Baru

### Kode Bermasalah

```ts
const buah = ["Apel"]
const keranjangBaru = buah.push("Mangga")
console.log(keranjangBaru) // Output: 2  (angka panjang array!)
```

### Mengapa Terjadi?

Method `push()` dan `unshift()` memodifikasi array asli dan hanya mengembalikan **angka panjang baru array**, bukan array hasil modifikasi.

### Cara Memperbaiki

```ts
const buah = ["Apel"]
buah.push("Mangga")
console.log(buah) // [ 'Apel', 'Mangga' ]
```

---

## Error 3 — Mengubah Array Asli Secara Tidak Sengaja (Mutation)

### Kode Bermasalah

```ts
const daftarAsli = ["Citra", "Andi", "Budi"]
const daftarUrut = daftarAsli.sort()

console.log(daftarAsli) // Output: [ 'Andi', 'Budi', 'Citra' ] (ikut terurut!)
```

### Mengapa Terjadi?

Method `.sort()`, `.reverse()`, dan `.splice()` adalah method **mutable** yang mengubah data pada array aslinya secara langsung.

### Cara Memperbaiki

Salin dahulu menggunakan `.slice()` sebelum mengurutkan:

```ts
const daftarAsli = ["Citra", "Andi", "Budi"]
const daftarUrut = daftarAsli.slice().sort()
```

---

## Error 4 — Salah Parameter pada slice() vs splice()

### Perbedaan Utama

- `slice(mulai, akhir)` — memotong (menyalin) tanpa merusak array asli. Parameter ke-2 adalah **indeks pembatas akhir** (tidak termasuk hasil).
- `splice(mulai, jumlahHapus)` — memotong dan membuang dari array asli. Parameter ke-2 adalah **jumlah elemen** yang dihapus.

### Kode Bermasalah

```ts
const data = ["A", "B", "C", "D"]
// Ingin mengambil B dan C (indeks 1 & 2)
const hasil = data.slice(1, 2)
console.log(hasil) // ["B"] (salah!)
```

### Cara Memperbaiki

```ts
const hasil = data.slice(1, 3) // index 1 sampai sebelum 3 (yaitu 1 & 2)
```

---

## Error 5 — Mengurutkan Angka Tanpa Compare Function

### Kode Bermasalah

```ts
const nilai = [10, 2, 30, 5]
nilai.sort()
console.log(nilai) // [10, 2, 30, 5] (salah!)
```

### Mengapa Terjadi?

Secara default, `.sort()` mengonversi angka menjadi string sehingga `"10"` dianggap lebih kecil daripada `"2"` secara urutan abjad.

### Cara Memperbaiki

Selalu berikan compare function saat mengurutkan angka:

```ts
nilai.sort((a, b) => a - b) // [2, 5, 10, 30]
```

---

## Latihan

Perbaiki semua kesalahan dalam kode berikut agar berjalan normal:

```ts
const daftarSiswa = ["Andi", "Budi"]
console.log(daftarSiswa[10].trim())

const keranjang: string[] = []
const hasilTambah = keranjang.push("Buku")

const nilaiUjian = [90, 80, 100]
nilaiUjian.sort()
console.log(nilaiUjian)
```

---

## Ringkasan

- Mengakses indeks yang tidak ada menghasilkan `undefined`.
- `push()` dan `unshift()` mengembalikan nilai number panjang array baru.
- `sort()`, `reverse()`, dan `splice()` mengubah array asli.
- Selalu salin array dengan `.slice()` jika ingin melindungi data asli.
- Pengurutan angka wajib menggunakan `(a, b) => a - b`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Ringkasan BAB 5**.
:::
