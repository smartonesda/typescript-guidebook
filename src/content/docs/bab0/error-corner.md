---
title: "Error Corner"
description: Mengenal jenis-jenis error yang sering dialami pemula TypeScript dan cara membaca serta mengatasinya dengan tenang.
---

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Tidak panik saat melihat error
- Membedakan jenis-jenis error umum
- Membaca pesan error dan memahami artinya
- Tahu langkah pertama saat menghadapi error

---

## Pengantar

Error adalah bagian yang tidak terpisahkan dari programming. Tidak ada programmer — baik pemula maupun profesional berpengalaman — yang tidak pernah mengalami error.

Yang membedakan programmer berpengalaman dari pemula bukan kemampuan menghindari error, tapi kemampuan **membaca dan mengatasi error dengan tenang**.

Halaman ini adalah "pojok error" — tempat kita belajar berdamai dengan error.

---

## Mitos tentang Error

:::note[Mitos vs Fakta]
**Mitos:** "Kalau kode saya error, berarti saya tidak berbakat coding."

**Fakta:** Error adalah bagian normal dari proses coding. Programmer senior pun menghadapi error setiap hari. Error bukan tanda kegagalan — error adalah **umpan balik** dari komputer yang membantu kamu memperbaiki kode.
:::

:::note[Mitos vs Fakta]
**Mitos:** "Error TypeScript lebih banyak dari JavaScript, berarti TypeScript lebih susah."

**Fakta:** Error TypeScript muncul lebih awal (saat menulis kode) justru karena TypeScript **lebih peduli** pada kualitas kodemu. Lebih baik error saat menulis daripada error saat program sudah dipakai orang lain.
:::

---

## Jenis-jenis Error

### 1. Syntax Error — Kesalahan Penulisan

**Syntax error** terjadi ketika kamu menulis kode dengan cara yang tidak sesuai aturan bahasa. Ini seperti salah ejaan dalam kalimat — komputernya tidak mengerti apa yang kamu maksud.

**Contoh:**

```ts
console.log("Halo"    ← kurang tanda kurung tutup
```

Error yang muncul:

```
SyntaxError: Unexpected end of input
```

**Contoh lain:**

```ts
let nama = Budi    ← teks tanpa tanda kutip
```

Error:

```
ReferenceError: Budi is not defined
```

**Cara mengatasinya:**

- Periksa tanda kurung: apakah semuanya berpasangan?
- Periksa tanda kutip: apakah string diapit tanda kutip?
- Periksa kurung kurawal: apakah `{` punya pasangan `}`?

---

### 2. Type Error — Kesalahan Tipe Data (khusus TypeScript)

**Type error** adalah error yang khas di TypeScript. Ini terjadi ketika kamu menggunakan tipe data yang salah.

**Contoh:**

```ts
let umur: number = "tujuh belas";
```

Error:

```
Type 'string' is not assignable to type 'number'.
```

Artinya: "Kamu mencoba mengisi variabel bertipe `number` dengan nilai bertipe `string`."

**Contoh lain:**

```ts
function tambah(a: number, b: number): number {
  return a + b;
}

tambah(5, "sepuluh");
```

Error:

```
Argument of type 'string' is not assignable to parameter of type 'number'.
```

**Cara mengatasinya:**

- Baca pesan error dengan teliti — TypeScript biasanya menjelaskan dengan jelas tipe apa yang diharapkan dan tipe apa yang diberikan
- Sesuaikan tipe data yang kamu masukkan

---

### 3. Runtime Error — Error saat Program Berjalan

**Runtime error** terjadi ketika program sudah berjalan, tapi menemukan situasi yang tidak bisa ditangani.

**Contoh:**

```ts
let teks: string = "Halo"
console.log(teks.panjang)   ← property 'panjang' tidak ada
```

TypeScript akan mencegah ini karena bisa mendeteksinya. Tapi ada runtime error lain yang lebih sulit diprediksi, misalnya:

```ts
let angka = parseInt("ini bukan angka")
console.log(angka + 10)     ← angka adalah NaN
```

Output: `NaN`

**Cara mengatasinya:**

- Validasi input sebelum menggunakannya
- Gunakan pengecekan kondisi

---

### 4. Logic Error — Kesalahan Logika

**Logic error** adalah error yang paling sulit dideteksi karena program berjalan tanpa pesan error — tapi hasilnya salah.

**Contoh:**

```ts
function hitungLuasPersegiPanjang(panjang: number, lebar: number): number {
  return panjang + lebar   ← seharusnya perkalian, bukan penjumlahan!
}

let luas = hitungLuasPersegiPanjang(5, 3)
console.log("Luas:", luas)   ← menampilkan 8, bukan 15
```

Program berjalan, tidak ada error — tapi hasilnya salah karena logikanya keliru.

**Cara mengatasinya:**

- Periksa kembali logika programmu
- Bandingkan dengan perhitungan manual
- Gunakan `console.log()` untuk memeriksa nilai variabel di tengah program

---

## Cara Membaca Pesan Error TypeScript

Pesan error TypeScript memang terlihat panjang dan menakutkan pada awalnya. Tapi sebenarnya, ada pola yang bisa kamu ikuti untuk membacanya.

**Contoh pesan error:**

```
src/bab0/latihan.ts:3:15 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

3   tambah(5, "sepuluh")
              ~~~~~~~~~~
```

Cara membacanya:

| Bagian                                           | Artinya                                          |
| ------------------------------------------------ | ------------------------------------------------ |
| `src/bab0/latihan.ts`                            | Nama file yang bermasalah                        |
| `:3:`                                            | Baris ke-3                                       |
| `:15`                                            | Kolom ke-15                                      |
| `error TS2345`                                   | Kode error TypeScript                            |
| `Argument of type 'string' is not assignable...` | Penjelasan masalahnya                            |
| `~~~~~~~~~~`                                     | Garis bawah menunjukkan posisi persis masalahnya |

---

## Strategi Menghadapi Error

Saat kamu menemukan error, ikuti langkah-langkah ini secara berurutan:

### Langkah 1: Jangan Panik

Tarik napas. Error adalah teman, bukan musuh.

### Langkah 2: Baca Pesan Error

Baca pesan error dari atas ke bawah. Cari:

- File mana yang bermasalah
- Baris ke berapa
- Apa yang salah (bagian `error:` atau `Type '...' is not assignable...`)

### Langkah 3: Pergi ke Baris yang Bermasalah

VS Code biasanya langsung menandai baris yang error dengan garis merah. Klik pada garis itu.

### Langkah 4: Pahami Masalahnya

Baca pesan error sekali lagi. TypeScript sering memberikan penjelasan yang sangat spesifik.

### Langkah 5: Perbaiki

Ubah kode sesuai dengan yang diminta TypeScript.

### Langkah 6: Coba Lagi

Jalankan ulang program. Jika masih ada error, ulangi dari langkah 2.

---

## Error Umum Pemula dan Solusinya

| Error                                              | Penyebab Umum                 | Solusi                                  |
| -------------------------------------------------- | ----------------------------- | --------------------------------------- |
| `SyntaxError: Unexpected token`                    | Tanda baca hilang             | Periksa semua tanda kurung dan kutip    |
| `ReferenceError: X is not defined`                 | Variabel belum dideklarasikan | Deklarasikan variabel sebelum digunakan |
| `Type 'string' is not assignable to type 'number'` | Tipe data tidak cocok         | Sesuaikan tipe data                     |
| `Cannot find module`                               | File tidak ditemukan          | Periksa path file                       |
| `Property does not exist`                          | Typo nama property            | Periksa ejaan nama property             |

---

## Error Corner Challenge

Kode di bawah ini memiliki beberapa error yang disengaja. Coba temukan dan perbaiki!

```ts
let namaSiswa: number = "Budi";
let nilaiUjian: string = 85;

function tampilkanNilai(nama: string, nilai: number) {
  console.log(`${nama} mendapat nilai ${nilai}`);
}

tampilkanNilai(nilaiUjian, namaSiswa);
```

Ada berapa error yang kamu temukan? Setelah menemukannya, perbaiki satu per satu.

---

## Ringkasan

- **Error adalah normal** — semua programmer mengalaminya
- Ada 4 jenis error: Syntax Error, Type Error, Runtime Error, Logic Error
- TypeScript mendeteksi Syntax Error dan Type Error **sebelum** program dijalankan
- Cara membaca error: perhatikan nama file, nomor baris, dan pesan errornya
- Langkah menghadapi error: Jangan panik → Baca → Pergi ke baris masalah → Pahami → Perbaiki → Coba lagi

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Ringkasan** untuk merangkum semua yang sudah kamu pelajari di BAB 0.
:::
