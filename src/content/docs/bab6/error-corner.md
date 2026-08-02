---
title: "Error Corner BAB 6"
description: Mengenali dan memperbaiki kesalahan paling umum saat menggunakan object di TypeScript.
---

# Error Corner BAB 6

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat mengidentifikasi bug umum manipulasi object dan mengatasinya dengan benar.

---

## Pendahuluan

Kesalahan object sering terjadi akibat typo penulisan properti, salah format penulisan kurung kurawal, atau program crash akibat mengakses properti nested dari objek yang ternyata bernilai `undefined`.

---

## Error 1 — Property Does Not Exist (Typo)

### Kode Bermasalah

```ts
const siswa = { nama: "Putra", umur: 17 }
console.log(siswa.usia) // Error!
// Property 'usia' does not exist on type '{ nama: string; umur: number; }'.
```

### Mengapa Terjadi?

TypeScript memeriksa properti secara ketat. Jika kamu mengetik `siswa.usia` padahal key yang dideklarasikan adalah `umur`, TypeScript langsung error.

### Cara Memperbaiki

Periksa ejaan properti objek aslimu:

```ts
console.log(siswa.umur) // ✓
```

---

## Error 2 — Mengakses Properti Nested dari Undefined (Crash)

### Kode Bermasalah

```ts
type Siswa = { nama: string; alamat?: { kota: string } }
const siswaA: Siswa = { nama: "Putra" }

console.log(siswaA.alamat.kota) // Runtime Error!
// Cannot read properties of undefined (reading 'kota')
```

### Mengapa Terjadi?

Properti `alamat` bernilai `undefined` karena bersifat opsional dan tidak diisi pada `siswaA`. Mencoba mengakses sub-properti `.kota` dari nilai `undefined` memicu program crash.

### Cara Memperbaiki

Gunakan optional chaining (`?.`):

```ts
console.log(siswaA.alamat?.kota) // ✓ Aman, menghasilkan undefined
```

---

## Error 3 — delete pada Properti Wajib (Required Property)

### Kode Bermasalah

```ts
type Siswa = { nama: string; kelas: string }
const siswaA: Siswa = { nama: "Putra", kelas: "XI" }

delete siswaA.nama // Error!
// The operand of a 'delete' operator must be optional.
```

### Mengapa Terjadi?

TypeScript melarang penghapusan properti yang dideklarasikan sebagai wajib pada type alias, karena objek tersebut tidak akan valid lagi jika properti wajibnya hilang.

### Cara Memperbaiki

Hanya gunakan `delete` pada properti yang diberi tanda opsional (`?`) pada type alias.

---

## Error 4 — Referensi Objek Tertukar (Reference Mutation)

### Kode Bermasalah

```ts
const siswaA = { nama: "Putra", kelas: "XI" }
const siswaB = siswaA // Menyalin referensi, bukan objek!

siswaB.kelas = "XII"
console.log(siswaA.kelas) // Output: "XII" (siswaA ikut berubah!)
```

### Mengapa Terjadi?

Di JavaScript/TypeScript, menyamakan objek (`siswaB = siswaA`) tidak menduplikasi objek baru. Keduanya menunjuk ke alamat memori yang sama. Mengubah `siswaB` otomatis mengubah `siswaA`.

### Cara Memperbaiki

Gunakan spread operator (`...`) untuk menduplikasi objek asli menjadi objek baru terpisah:

```ts
const siswaB = { ...siswaA } // menyalin properti ke objek baru
siswaB.kelas = "XII"
console.log(siswaA.kelas) // Output: "XI" (siswaA aman tetap utuh ✓)
```

---

## Error 5 — Lupa Koma Pada Object Literal

### Kode Bermasalah

```ts
const siswa = {
  nama: "Putra" // Lupa koma!
  umur: 17
}
```

### Cara Memperbaiki

Selalu gunakan tanda koma `,` untuk memisahkan pasangan properti dalam objek literal.

---

## Latihan

Perbaiki semua kesalahan dalam kode berikut agar berjalan normal:

```ts
type Motor = {
  merk: string
  pemilik?: { nama: string }
}

const motorA: Motor = { merk: "Honda" }
console.log(motorA.pemilik.nama)

const laptop = { merk: "Asus", ram: 8 }
const laptopBaru = laptop
laptopBaru.ram = 16
console.log(laptop.ram) // ingin output laptop asli tetap 8
```

---

## Ringkasan

- Selalu periksa ejaan key properti agar terhindar dari error *property does not exist*.
- Gunakan `?.` saat mengakses sub-properti objek opsional.
- Operator `delete` hanya boleh digunakan pada properti opsional.
- Menyalin objek secara terpisah wajib menggunakan spread operator `...` (bukan `=`).

:::tip[Langkah Selanjutnya]
Lanjut ke **Ringkasan BAB 6**.
:::
