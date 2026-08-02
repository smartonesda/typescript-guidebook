---
title: "Deklarasi Variabel"
description: Cara mendeklarasikan variabel di TypeScript menggunakan let dan const, beserta perbedaan antara deklarasi dan inisialisasi.
---

# Deklarasi Variabel

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Membedakan **deklarasi** dan **inisialisasi** variabel
- Menulis deklarasi variabel dengan tipe eksplisit
- Menulis deklarasi variabel tanpa tipe (type inference)
- Memahami kapan variabel boleh tidak langsung diisi nilainya

---

## Pendahuluan

Di halaman sebelumnya kita belajar bahwa variabel adalah tempat penyimpanan data. Sekarang kita akan belajar lebih dalam: bagaimana **cara yang benar** membuat variabel di TypeScript.

Ada beberapa cara menulis deklarasi variabel. Masing-masing cara punya kegunaan yang berbeda, dan memahami perbedaannya akan membuat kamu menjadi programmer yang lebih presisi.

---

## Penjelasan Materi

### Istilah Penting: Deklarasi vs Inisialisasi

Sebelum mulai, pahami dua istilah ini:

**Deklarasi** adalah proses *memberitahu* TypeScript bahwa variabel itu ada, beserta namanya (dan tipenya jika disebutkan).

**Inisialisasi** adalah proses *mengisi* variabel dengan nilai untuk pertama kalinya.

Keduanya bisa dilakukan sekaligus, atau terpisah.

---

## Cara 1: Deklarasi + Inisialisasi Sekaligus (Paling Umum)

Ini adalah cara yang paling sering digunakan:

```ts
let namaSiswa: string = "Putra"
let umur: number = 17
let lulus: boolean = true
```

Format penulisannya:

```
let [namaVariabel]: [tipeData] = [nilai]
```

- `let` — kata kunci untuk membuat variabel
- `namaSiswa` — nama variabel
- `: string` — anotasi tipe (memberitahu TypeScript bahwa variabel ini bertipe string)
- `= "Putra"` — nilai awal variabel

---

## Cara 2: Deklarasi Tanpa Anotasi Tipe (Type Inference)

TypeScript cukup cerdas — ia bisa **menebak** tipe variabel dari nilai yang diberikan:

```ts
let namaSiswa = "Putra"    // TypeScript tahu ini string
let umur = 17              // TypeScript tahu ini number
let lulus = true           // TypeScript tahu ini boolean
```

Cara ini lebih ringkas dan sangat umum digunakan. Kita akan membahasnya lebih dalam di halaman **Type Inference**.

---

## Cara 3: Deklarasi Dulu, Isi Nanti

Terkadang kamu perlu mendeklarasikan variabel dahulu, lalu mengisinya nanti berdasarkan kondisi tertentu. Dalam kasus ini, kamu **wajib** mencantumkan tipe:

```ts
let nilaiAkhir: number

// ... beberapa proses terjadi ...

nilaiAkhir = 88

console.log("Nilai akhir:", nilaiAkhir)
```

:::caution[Perhatian]
Jika kamu mendeklarasikan variabel tanpa nilai dan tanpa tipe, TypeScript akan memberikan tipe `any` secara implisit — yang sebaiknya dihindari. Selalu cantumkan tipe jika kamu mendeklarasikan variabel tanpa nilai awal.
:::

---

## Ilustrasi: Tiga Cara Deklarasi

```
CARA 1: Lengkap (dengan tipe)
┌──────────────────────────────────────────────┐
│  let  nama  :  string  =  "Putra"            │
│  ───  ────    ──────     ───────             │
│  kwd  nama   tipe        nilai               │
└──────────────────────────────────────────────┘

CARA 2: Singkat (type inference)
┌──────────────────────────────────────────────┐
│  let  nama  =  "Putra"                       │
│  ───  ────    ───────                        │
│  kwd  nama    nilai (tipe ditebak otomatis)  │
└──────────────────────────────────────────────┘

CARA 3: Deklarasi dulu
┌──────────────────────────────────────────────┐
│  let  nama  :  string                        │
│  ───  ────    ──────                         │
│  kwd  nama    tipe (nilai diisi belakangan)  │
└──────────────────────────────────────────────┘
```

---

## Mari Mencoba

Buat file `src/bab1/deklarasi-variabel.ts`:

```ts
// Cara 1: Deklarasi dengan tipe eksplisit
let namaLengkap: string = "Dewi Rahayu"
let nilaiMatematika: number = 92
let sudahLulus: boolean = true

// Cara 2: Type inference (tipe otomatis)
let namaSekolah = "SMKS Antartika 1 Sidoarjo"
let tahunMasuk = 2023

// Cara 3: Deklarasi dulu, isi kemudian
let peringkat: number
peringkat = 1

// Tampilkan semua variabel
console.log("Nama:", namaLengkap)
console.log("Nilai Matematika:", nilaiMatematika)
console.log("Sudah lulus:", sudahLulus)
console.log("Sekolah:", namaSekolah)
console.log("Tahun masuk:", tahunMasuk)
console.log("Peringkat:", peringkat)
```

Jalankan:

```
tsx src/bab1/deklarasi-variabel.ts
```

Output yang diharapkan:

```
Nama: Dewi Rahayu
Nilai Matematika: 92
Sudah lulus: true
Sekolah: SMKS Antartika 1 Sidoarjo
Tahun masuk: 2023
Peringkat: 1
```

---

## Penjelasan Baris per Baris

| Baris | Penjelasan |
|-------|------------|
| `let namaLengkap: string = "Dewi Rahayu"` | Deklarasi variabel `namaLengkap` bertipe string dengan nilai "Dewi Rahayu" |
| `let nilaiMatematika: number = 92` | Variabel angka dengan nilai 92 |
| `let sudahLulus: boolean = true` | Variabel boolean — hanya bisa berisi `true` atau `false` |
| `let namaSekolah = "SMKS..."` | Type inference — TypeScript otomatis tahu ini string |
| `let peringkat: number` | Deklarasi tanpa nilai — wajib tulis tipe |
| `peringkat = 1` | Mengisi nilai ke variabel yang sudah dideklarasikan |

---

## Kesalahan Umum

### ❌ Deklarasi tanpa tipe dan tanpa nilai

```ts
let data    // TypeScript akan memberi tipe 'any' — hindari ini
```

**Cara memperbaiki:**

```ts
let data: string   // atau
let data = ""      // type inference dari nilai kosong
```

### ❌ Mengisi nilai bertipe salah

```ts
let umur: number = "tujuh belas"  // Error!
// Type 'string' is not assignable to type 'number'
```

**Cara memperbaiki:**

```ts
let umur: number = 17   // ✓
```

### ❌ Menggunakan variabel sebelum diisi

```ts
let skor: number
console.log(skor)   // Error! Variable 'skor' is used before being assigned.
```

**Cara memperbaiki:**

```ts
let skor: number = 0
console.log(skor)   // ✓
```

---

## Tips

:::tip[Kapan pakai tipe eksplisit vs type inference?]
**Gunakan tipe eksplisit** saat kamu mendeklarasikan variabel tanpa nilai awal, atau saat tipenya tidak jelas dari nilai yang diberikan.

**Gunakan type inference** saat nilai awal sudah jelas menunjukkan tipenya — misalnya `let nama = "Putra"` sudah sangat jelas bertipe string.

Di guidebook ini, kita kadang menulis tipe secara eksplisit meski tidak wajib — tujuannya agar kamu terbiasa melihat dan memahami anotasi tipe.
:::

---

## Latihan

Buat file `src/bab1/latihan-deklarasi.ts` dan kerjakan:

1. Deklarasikan variabel `judulFilm` dengan tipe `string` dan isi dengan judul film favoritmu
2. Deklarasikan variabel `tahunRilis` menggunakan type inference (tanpa tulis tipenya)
3. Deklarasikan variabel `rating` dengan tipe `number` — **tanpa nilai awal**
4. Isi `rating` dengan nilai `8.5` di baris berikutnya
5. Tampilkan semua variabel

---

## Ringkasan

- Ada tiga cara deklarasi variabel: dengan tipe eksplisit, type inference, atau deklarasi dulu isi kemudian
- Format lengkap: `let namaVariabel: tipeData = nilai`
- Format singkat: `let namaVariabel = nilai` (type inference)
- Jika deklarasi tanpa nilai awal, **wajib** cantumkan tipe
- TypeScript akan error jika kamu menggunakan variabel sebelum diisi nilainya

:::tip[Langkah Selanjutnya]
Lanjut ke **let vs const** untuk memahami perbedaan penting antara dua kata kunci utama deklarasi variabel.
:::
