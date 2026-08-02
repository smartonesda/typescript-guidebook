---
title: "Tipe Data: string"
description: Mempelajari tipe data string di TypeScript — teks, kutipan, escape character, dan metode string yang berguna.
---

# Tipe Data: `string`

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menggunakan tipe `string` untuk menyimpan teks
- Membedakan tiga cara penulisan string
- Menggunakan metode string yang paling umum
- Menggabungkan string dengan berbagai cara

---

## Pendahuluan

`string` adalah tipe data untuk menyimpan **teks** — bisa berupa satu huruf, satu kata, satu kalimat, bahkan beberapa paragraf.

Hampir semua data yang berhubungan dengan manusia berbentuk teks: nama, alamat, pesan, judul, deskripsi. Itulah mengapa `string` adalah salah satu tipe data yang paling sering digunakan.

---

## Analogi: Name Tag / Label Nama

Bayangkan tipe `string` seperti sebuah **name tag** — tag kecil yang ditempelkan di baju saat acara, berisi nama seseorang.

Name tag hanya berisi teks: bisa nama pendek "Ani", nama panjang "Dewi Sartika Rahayu", atau bahkan kalimat "Ketua OSIS 2024". Semuanya adalah teks, dan semuanya bisa disimpan dalam variabel bertipe `string`.

---

## Tiga Cara Menulis String

Di TypeScript, ada tiga cara untuk menulis nilai string:

### 1. Tanda Kutip Ganda `"..."`

```ts
let nama: string = "Putra Ramadhan"
let kota: string = "Sidoarjo"
```

### 2. Tanda Kutip Tunggal `'...'`

```ts
let jurusan: string = 'Rekayasa Perangkat Lunak'
let hari: string = 'Senin'
```

### 3. Backtick `` `...` `` (Template Literal)

```ts
let nama: string = "Putra"
let salam: string = `Halo, nama saya ${nama}!`
```

Backtick memungkinkan kamu menyisipkan variabel dan ekspresi di dalam string menggunakan `${ }`. Ini disebut **template literal** dan akan dibahas lebih detail di halaman tersendiri.

:::tip[Mana yang sebaiknya digunakan?]
Gunakan tanda kutip ganda `"..."` atau tunggal `'...'` secara konsisten. Kebanyakan developer TypeScript memilih satu dan konsisten. Gunakan backtick saat kamu perlu menyisipkan variabel.
:::

---

## Karakter Escape

Bagaimana jika teks yang ingin kamu simpan mengandung tanda kutip? Gunakan **escape character** — tanda `\` sebelum karakter khusus:

```ts
let kalimat1: string = "Dia berkata, \"Halo!\""
// Dia berkata, "Halo!"

let kalimat2: string = 'Ini buku Budi\'s.'
// Ini buku Budi's.

let denganNewline: string = "Baris pertama\nBaris kedua"
// Baris pertama
// Baris kedua

let denganTab: string = "Nama:\tPutra"
// Nama:    Putra
```

| Escape | Artinya |
|--------|---------|
| `\"` | Tanda kutip ganda |
| `\'` | Tanda kutip tunggal |
| `\\` | Backslash |
| `\n` | Baris baru (newline) |
| `\t` | Tab |

---

## Menggabungkan String (Concatenation)

Ada dua cara menggabungkan string:

### Cara 1: Operator `+`

```ts
let depan: string = "Halo"
let belakang: string = "Dunia"
let gabungan: string = depan + ", " + belakang + "!"
console.log(gabungan)   // Halo, Dunia!
```

### Cara 2: Template Literal (direkomendasikan)

```ts
let nama: string = "Putra"
let kelas: string = "X RPL 1"
let info: string = `${nama} adalah siswa kelas ${kelas}`
console.log(info)   // Putra adalah siswa kelas X RPL 1
```

---

## Mari Mencoba

Buat file `src/bab1/string.ts`:

```ts
const namaSiswa: string = "Dewi Rahayu"
const namaSekolah: string = "SMKS Antartika 1 Sidoarjo"
const jurusan: string = "Rekayasa Perangkat Lunak"
const kelas: string = "XI RPL 2"
const motto: string = "Belajar keras, kerja cerdas!"

// Panjang string
console.log("Panjang nama:", namaSiswa.length, "karakter")

// Mengubah kapitalisasi
console.log("Huruf besar:", namaSiswa.toUpperCase())
console.log("Huruf kecil:", namaSiswa.toLowerCase())

// Memotong whitespace di kiri dan kanan
let namaKotor: string = "   Budi   "
console.log("Sebelum trim:", namaKotor)
console.log("Setelah trim:", namaKotor.trim())

// Mencari teks di dalam string
console.log("Mengandung 'RPL':", jurusan.includes("RPL"))
console.log("Dimulai dengan 'Rekayasa':", jurusan.startsWith("Rekayasa"))

// Mengambil sebagian teks
console.log("3 karakter pertama nama:", namaSiswa.slice(0, 3))

// Template literal
console.log(`
=== PROFIL SISWA ===
Nama    : ${namaSiswa}
Sekolah : ${namaSekolah}
Jurusan : ${jurusan}
Kelas   : ${kelas}
Motto   : ${motto}
`)
```

Jalankan:

```
tsx src/bab1/string.ts
```

---

## Metode String yang Sering Digunakan

```ts
let teks: string = "Halo, Selamat Datang di TypeScript!"

teks.length             // 35 — panjang string
teks.toUpperCase()      // "HALO, SELAMAT DATANG DI TYPESCRIPT!"
teks.toLowerCase()      // "halo, selamat datang di typescript!"
teks.trim()             // hapus spasi di kiri dan kanan
teks.includes("TypeScript")   // true — cek apakah mengandung teks
teks.startsWith("Halo")       // true — dimulai dengan "Halo"?
teks.endsWith("!")            // true — diakhiri dengan "!"?
teks.replace("Halo", "Hai")  // "Hai, Selamat Datang di TypeScript!"
teks.split(", ")        // ["Halo", "Selamat Datang di TypeScript!"]
teks.slice(6, 13)       // "Selamat" — ambil karakter dari indeks 6 ke 13
teks.indexOf("TypeScript")   // 22 — posisi pertama ditemukan
```

---

## Kesalahan Umum

### ❌ Lupa tanda kutip — teks dianggap variabel

```ts
let nama = Putra   // Error! 'Putra' dianggap nama variabel
```

**Cara memperbaiki:**

```ts
let nama = "Putra"   // ✓
```

### ❌ Tanda kutip tidak berpasangan

```ts
let kalimat = "Halo dunia'   // Error! Kutip buka ganda, tutup tunggal
```

**Cara memperbaiki:**

```ts
let kalimat = "Halo dunia"   // ✓
```

### ❌ Menambah angka ke string dengan `+`

```ts
let nama: string = "Nilai: "
let nilai: number = 90
console.log(nama + nilai)   // "Nilai: 90" — ini sebenarnya OK untuk ditampilkan
// tapi jika digunakan untuk perhitungan, bisa bermasalah:
let perhitungan = nama + nilai + 10   // "Nilai: 9010" bukan "Nilai: 100"!
```

**Cara memperbaiki:** Gunakan template literal:

```ts
console.log(`Nilai: ${nilai + 10}`)   // "Nilai: 100" ✓
```

---

## Latihan

Buat file `src/bab1/latihan-string.ts`:

1. Buat variabel string untuk menyimpan nama lengkapmu
2. Tampilkan nama dalam **huruf kapital semua**
3. Tampilkan **panjang** nama (berapa karakter)
4. Tampilkan **3 karakter pertama** dari namamu
5. Buat kalimat menggunakan template literal: `"Nama saya [nama], saya bersekolah di [sekolah]"`

---

## Ringkasan

- `string` menyimpan teks — satu karakter hingga ribuan kata
- Tiga cara penulisan: `"..."`, `'...'`, dan `` `...` `` (backtick)
- Gunakan escape character `\` untuk karakter khusus di dalam string
- Gabungkan string dengan `+` atau template literal `` `${variabel}` ``
- Metode berguna: `.length`, `.toUpperCase()`, `.toLowerCase()`, `.trim()`, `.includes()`, `.replace()`

:::tip[Langkah Selanjutnya]
Lanjut ke **boolean** untuk mempelajari tipe data benar/salah.
:::
