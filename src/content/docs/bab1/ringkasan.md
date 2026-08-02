---
title: "Ringkasan BAB 1"
description: Rangkuman lengkap BAB 1 — variabel, tipe data, type inference, literal type, template literal, dan checklist belajar.
---

# Ringkasan BAB 1

## Selamat! 🎉

Kamu telah menyelesaikan **BAB 1: Variabel & Tipe Data**. Ini adalah fondasi yang sangat penting. Hampir semua program yang akan kamu tulis setelah ini akan memakai variabel dan tipe data.

Jika saat ini beberapa istilah masih belum terasa otomatis, itu normal. Terus praktikkan contoh dan challenge. Lama-kelamaan, cara menulis variabel yang benar akan menjadi kebiasaan.

---

## Tujuan Pembelajaran Tercapai

Setelah BAB 1, kamu seharusnya sudah memahami:

- Apa itu variabel dan mengapa program membutuhkannya
- Perbedaan `let` dan `const`
- Aturan nama variabel yang baik
- Tipe data dasar TypeScript
- Cara TypeScript menjaga kecocokan tipe data
- Cara membuat output dinamis dengan template literal
- Cara membaca error variabel dan tipe data

---

## Konsep Utama: Variabel

Variabel adalah tempat penyimpanan data yang diberi nama.

```ts
const namaSiswa: string = "Putra"
let nilaiUjian: number = 80
```

| Bagian | Arti |
|--------|------|
| `const` / `let` | Cara membuat variabel |
| `namaSiswa` | Nama/label variabel |
| `: string` | Tipe data variabel |
| `=` | Mengisi nilai |
| `"Putra"` | Nilai yang disimpan |

---

## `let` vs `const`

| Kata kunci | Nilai dapat diubah? | Kapan digunakan? |
|------------|---------------------|------------------|
| `let` | Ya | Nilai memang akan berubah |
| `const` | Tidak | Nilai tetap setelah diisi |

```ts
let kelasSaatIni = "XI RPL 1"
kelasSaatIni = "XII RPL 1" // ✓

const namaSekolah = "SMKS Antartika 1"
// namaSekolah = "Sekolah Baru" // Error
```

**Aturan praktis:** mulai dari `const`. Gunakan `let` jika nilai perlu berubah.

---

## Aturan Penamaan Variabel

```ts
// Baik
const namaSiswa = "Dewi"
let nilaiRataRata = 88.5
const BATAS_LULUS = 75

// Hindari
let a = "Dewi"
let nama siswa = "Dewi" // tidak valid
let 1nilai = 90          // tidak valid
```

Ingat:

- Gunakan **camelCase**: `namaSiswa`, `nilaiAkhir`
- Nama harus deskriptif
- Tidak boleh dimulai angka
- Tidak boleh memakai spasi atau karakter khusus
- TypeScript membedakan huruf besar dan kecil

---

## Semua Tipe Data yang Dipelajari

| Tipe | Contoh | Kegunaan |
|------|--------|----------|
| `number` | `90`, `3.14`, `-5` | Angka dan perhitungan |
| `string` | `"Putra"` | Teks |
| `boolean` | `true`, `false` | Status ya/tidak |
| `null` | `null` | Sengaja tidak ada nilai |
| `undefined` | `undefined` | Nilai belum tersedia |
| `bigint` | `999999999999n` | Bilangan bulat sangat besar |
| `symbol` | `Symbol("id")` | Identitas unik |
| `any` | `let data: any` | Nilai apa saja — hindari sebisa mungkin |
| `unknown` | `let data: unknown` | Nilai belum diketahui, harus dicek dulu |
| `never` | fungsi yang selalu error | Fungsi tidak selesai normal |

---

## `null` dan `undefined`

```
undefined → belum pernah diberi nilai
null      → sengaja diberi nilai kosong
```

```ts
let nilaiUjian: number
// belum diisi

let email: string | null = null
// sengaja kosong, nanti boleh diisi string
```

---

## Type Inference

TypeScript bisa menebak tipe dari nilai awal:

```ts
const nama = "Putra" // string
const umur = 17       // number
const aktif = true    // boolean
```

Type inference membuat kode lebih ringkas, tetapi TypeScript tetap menjaga tipe data tersebut.

---

## Literal Type

Literal type membatasi pilihan nilai:

```ts
type Jurusan = "RPL" | "TKJ" | "DKV"
const jurusan: Jurusan = "RPL"
```

Pilihan di luar daftar akan menghasilkan error. Literal type cocok untuk status, jurusan, peran, ukuran, atau pilihan terbatas lain.

---

## Template Literal

Gunakan backtick untuk menyisipkan variabel ke dalam kalimat:

```ts
const nama = "Putra"
const nilai = 90

console.log(`Halo, ${nama}! Nilaimu ${nilai}.`)
```

Ingat:

- Backtick: `` `...` ``
- Placeholder: `${...}`
- Kutip biasa `"..."` tidak akan mengganti `${...}`

---

## Perintah Penting

| Perintah | Fungsi |
|----------|--------|
| `tsx src/bab1/namafile.ts` | Menjalankan file TypeScript |
| `tsc --version` | Memeriksa versi TypeScript |
| `tsx --version` | Memeriksa versi TSX |
| `mkdir src/bab1/challenge` | Membuat folder challenge |

Contoh menjalankan program:

```text
tsx src/bab1/aplikasi-biodata-siswa.ts
```

---

## Error yang Perlu Diingat

| Pesan Error | Penyebab Umum | Perbaikan |
|-------------|---------------|-----------|
| `Cannot assign to const` | Mengubah nilai `const` | Gunakan `let` jika nilai perlu berubah |
| `Type 'string' is not assignable to type 'number'` | Tipe nilai tidak cocok | Pakai nilai/tipe yang sesuai |
| `Variable is used before being assigned` | Variabel belum diberi nilai | Isi sebelum dipakai |
| `Cannot redeclare block-scoped variable` | Nama variabel dibuat dua kali | Gunakan satu deklarasi atau nama berbeda |
| `Object is of type 'unknown'` | `unknown` digunakan tanpa cek | Cek dengan `typeof` |

---

## Checklist BAB 1

Tandai setiap kemampuan yang sudah kamu kuasai:

- [ ] Bisa membuat variabel dengan `let`
- [ ] Bisa membuat konstanta dengan `const`
- [ ] Bisa memilih `let` atau `const` sesuai kebutuhan
- [ ] Bisa membuat nama variabel camelCase dan deskriptif
- [ ] Bisa menggunakan `number`, `string`, dan `boolean`
- [ ] Bisa menjelaskan perbedaan `null` dan `undefined`
- [ ] Bisa menjelaskan kapan `any` berbahaya
- [ ] Bisa mengecek `unknown` dengan `typeof`
- [ ] Bisa menggunakan literal type untuk pilihan terbatas
- [ ] Bisa memakai template literal dengan `${...}`
- [ ] Bisa menjalankan file `.ts` memakai TSX
- [ ] Bisa membaca error dasar TypeScript tanpa panik
- [ ] Sudah menyelesaikan Studi Kasus
- [ ] Sudah membuat Mini Project
- [ ] Sudah mencoba 10 Challenge

---

## Peta Konsep

```text
VARIABEL
├── let       → nilainya dapat berubah
├── const     → nilainya tetap
└── nama baik → camelCase dan deskriptif

TIPE DATA
├── number, string, boolean
├── null, undefined
├── bigint, symbol
└── any, unknown, never

FITUR TYPESCRIPT
├── type inference
├── literal type
└── pemeriksaan error lebih awal

OUTPUT
└── template literal: `Halo, ${nama}`
```

---

## Latihan Penutup

Tanpa melihat contoh sebelumnya, buat kembali file `src/bab1/review-bab1.ts` yang berisi:

1. Biodata singkat (minimal lima variabel)
2. Minimal tiga tipe data berbeda
3. Satu literal type untuk jurusan atau status
4. Satu nilai `null`
5. Satu perhitungan angka
6. Satu boolean dan ternary operator
7. Satu template literal multi-baris
8. Minimal dua komentar yang berguna

Jalankan dengan:

```text
tsx src/bab1/review-bab1.ts
```

Jika bisa membuatnya tanpa menyalin, berarti fondasi BAB 1 sudah kuat.

---

## Pesan untuk Kamu

Variabel dan tipe data mungkin terlihat sederhana, tetapi ini adalah bahasa dasar yang dipakai hampir setiap program. Programmer yang kuat bukan hanya bisa menulis kode yang berjalan — ia juga tahu **data apa yang sedang dipakai**, **tipe apa yang tepat**, dan **bagaimana mencegah error sebelum terjadi**.

Terus bereksperimen. Ubah contoh kode. Buat error kecil lalu perbaiki. Itu adalah proses belajar seorang developer.

:::tip[Selesai BAB 1]
BAB 1 selesai. Pastikan checklist dan challenge sudah dikerjakan sebelum melanjutkan materi berikutnya bersama guru.
:::
