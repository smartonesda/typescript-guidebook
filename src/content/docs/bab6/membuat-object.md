---
title: "Membuat Object"
description: Belajar mendefinisikan object literal dan mendeklarasikan tipe data object secara eksplisit di TypeScript.
---

# Membuat Object

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat object literal dan menulis tipe data object secara eksplisit menggunakan inline type atau type alias.

---

## Pendahuluan

Di JavaScript, membuat object sangat mudah karena tidak ada pemeriksaan tipe. Namun di TypeScript, kita harus memastikan bahwa properti yang dideklarasikan memiliki tipe data yang jelas dan konsisten agar program aman dari bug salah tipe.

---

## Dua Cara Menentukan Tipe Object

Ada dua cara utama menulis tipe data object di TypeScript:

### 1. Type Inference (Tipe Ditebak Otomatis)

TypeScript otomatis menebak tipe properti dari nilai awal yang kita berikan:

```ts
const siswa = {
  nama: "Putra", // string
  umur: 17       // number
}
```

### 2. Type Alias (Eksplisit & Direkomendasikan)

Kita mendefinisikan struktur tipe data terlebih dahulu menggunakan kata kunci `type` (biasanya menggunakan PascalCase):

```ts
type ProfilSiswa = {
  nama: string
  umur: number
  aktif: boolean
}

const siswa: ProfilSiswa = {
  nama: "Putra",
  umur: 17,
  aktif: true
}
```

:::tip[Gunakan Type Alias]
Menggunakan `type` alias membuat struktur object bisa digunakan berulang kali pada banyak variabel object sejenis, serta menjaga konsistensi data.
:::

---

## Analogi Kehidupan Sehari-hari

### Cetak Biru (Blueprint) vs Gedung Aslinya

`type` alias adalah **cetak biru (blueprint)** rumah. Cetak biru menjelaskan bahwa rumah harus memiliki ruang tamu (string), 2 kamar tidur (number), dan taman (boolean).

Object adalah **gedung aslinya** yang dibangun mengikuti cetak biru tersebut. Kamu tidak bisa membangun rumah tanpa pintu jika cetak biru mengharuskannya.

---

## Visual Illustration

```text
Cetak Biru (Type Alias)
type Siswa = {
  nama: string
  umur: number
}

Gedung Asli (Object)
const siswaA: Siswa = {
  nama: "Andi",
  umur: 17
}
```

---

## Mari Mencoba

Buat `src/bab6/membuat-object.ts`:

```ts
// 1. Mendefinisikan Type Alias
type Produk = {
  id: string
  namaBarang: string
  harga: number
  tersedia: boolean
}

// 2. Membuat objek berdasarkan tipe
const sabun: Produk = {
  id: "PRD-001",
  namaBarang: "Sabun Mandi",
  harga: 5000,
  tersedia: true
}

const handuk: Produk = {
  id: "PRD-002",
  namaBarang: "Handuk Katun",
  harga: 45000,
  tersedia: false
}

console.log("Sabun :", sabun)
console.log("Handuk:", handuk)
```

Jalankan:

```text
tsx src/bab6/membuat-object.ts
```

## Output

```text
Sabun : { id: 'PRD-001', namaBarang: 'Sabun Mandi', harga: 5000, tersedia: true }
Handuk: { id: 'PRD-002', namaBarang: 'Handuk Katun', harga: 45000, tersedia: false }
```

---

## Penjelasan Baris per Baris

- `type Produk = { ... }` — membuat cetak biru tipe bernama `Produk`.
- `const sabun: Produk` — memberitahu TypeScript bahwa variabel `sabun` harus mengikuti format struktur `Produk`.
- Jika properti di `sabun` kurang atau tipe datanya salah (misal: `harga: "lima ribu"`), TypeScript langsung error.

---

## Properti Opsional pada Object

Terkadang sebuah properti boleh tidak diisi. Gunakan tanda `?` setelah nama properti pada cetak biru:

```ts
type Siswa = {
  nama: string
  nomorHP?: string // opsional, boleh tidak ada
}

const siswaA: Siswa = { nama: "Andi" } // ✓ Valid meski tanpa nomorHP
```

---

## Kesalahan yang Sering Terjadi

### ❌ Properti wajib tidak ditulis

```ts
const sikat: Produk = {
  id: "PRD-003",
  namaBarang: "Sikat Gigi"
  // Error! Property 'harga' and 'tersedia' are missing!
}
```

**Perbaikan:** Semua properti yang didefinisikan pada `type` (kecuali yang memakai `?`) **wajib** diisi nilainya pada object.

---

## Latihan

1. Buat type alias `Buku` dengan properti: `judul` (string), `penulis` (string), dan `halaman` (number).
2. Buat satu variabel object yang mengikuti tipe `Buku` tersebut dan tampilkan.

---

## Ringkasan

- Tipe data object bisa ditebak otomatis (inference) atau ditentukan eksplisit dengan `type` alias.
- `type` alias memudahkan pembuatan banyak object sejenis secara konsisten.
- Gunakan PascalCase untuk nama tipe: `Produk`, `Siswa`.
- Gunakan tanda `?` pada tipe jika properti bersifat opsional.

:::tip[Langkah Selanjutnya]
Lanjut ke **Property** untuk memahami apa saja aturan penulisan key properti.
:::
