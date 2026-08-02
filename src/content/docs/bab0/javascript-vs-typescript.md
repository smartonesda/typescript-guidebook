---
title: "JavaScript vs TypeScript"
description: Perbandingan langsung antara JavaScript dan TypeScript melalui contoh kode nyata — memahami perbedaan dan hubungan keduanya.
---

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Membandingkan kode JavaScript dan TypeScript secara langsung
- Memahami konsep "tipe data" secara sederhana
- Mengenali keuntungan konkret TypeScript dibanding JavaScript

---

## Pengantar

Di halaman sebelumnya, kita membahas secara konseptual mengapa TypeScript lebih baik dari JavaScript. Sekarang, mari kita lihat perbedaannya secara **langsung melalui kode**.

Jangan khawatir jika kamu belum mengerti semua kode yang ditampilkan — kita akan belajar semuanya secara detail nanti. Fokus untuk sekarang adalah melihat **perbedaan** antara keduanya.

---

## Perbandingan 1: Variabel

**JavaScript:**

```js
let nama = "Budi";
let umur = 17;
let nilai = 85.5;

// JavaScript tidak peduli jika tipenya berubah
nama = 12345; // valid di JavaScript, tidak ada error
umur = "tujuh belas"; // juga valid!
```

**TypeScript:**

```ts
let nama: string = "Budi";
let umur: number = 17;
let nilai: number = 85.5;

// TypeScript akan langsung komplain
nama = 12345; // Error! Type 'number' is not assignable to type 'string'
umur = "tujuh belas"; // Error! Type 'string' is not assignable to type 'number'
```

Perhatikan perbedaannya: di TypeScript, setiap variabel punya **tipe** yang dideklarasikan (contoh: `string` untuk teks, `number` untuk angka). TypeScript akan menolak jika kamu mencoba mengisi nilai yang tipenya tidak sesuai.

---

## Perbandingan 2: Fungsi

**JavaScript:**

```js
function sapa(nama) {
  return "Halo, " + nama + "!";
}

// JavaScript tidak peduli kamu kirim apa
console.log(sapa("Budi")); // "Halo, Budi!"
console.log(sapa(12345)); // "Halo, 12345!" — tidak ada error, tapi aneh
console.log(sapa()); // "Halo, undefined!" — juga tidak error!
```

**TypeScript:**

```ts
function sapa(nama: string): string {
  return "Halo, " + nama + "!";
}

console.log(sapa("Budi")); // "Halo, Budi!" ✓
console.log(sapa(12345)); // Error! Argument of type 'number' is not assignable to parameter of type 'string'
console.log(sapa()); // Error! Expected 1 arguments, but got 0.
```

Di TypeScript, kamu bisa mendefinisikan:

- Tipe dari setiap **parameter** (input fungsi)
- Tipe dari **return value** (output fungsi)

---

## Perbandingan 3: Object

Bayangkan kamu membuat data siswa.

**JavaScript:**

```js
let siswa = {
  nama: "Ani",
  kelas: "X RPL 1",
  nilai: 90,
};

// JavaScript tidak komplain jika kamu salah ketik nama property
console.log(siswa.Nama); // undefined — bukan error, tapi salah!
console.log(siswa.nmaa); // undefined — juga tidak error
```

**TypeScript:**

```ts
type Siswa = {
  nama: string;
  kelas: string;
  nilai: number;
};

let siswa: Siswa = {
  nama: "Ani",
  kelas: "X RPL 1",
  nilai: 90,
};

console.log(siswa.Nama); // Error! Property 'Nama' does not exist on type 'Siswa'
console.log(siswa.nmaa); // Error! Property 'nmaa' does not exist on type 'Siswa'
```

TypeScript membantu kamu menghindari typo (salah ketik) yang bisa menyebabkan bug sulit ditemukan.

---

## Ilustrasi: Kapan Error Terdeteksi

```
JavaScript                          TypeScript
────────────────────────────────    ────────────────────────────────
Kamu menulis kode                   Kamu menulis kode
        │                                   │
        │                           Error terdeteksi ◄── SINI
        │                                   │
        ▼                                   ▼
Kamu menjalankan program            Kamu menjalankan program
        │                                   │
Error terdeteksi ◄── SINI           Program berjalan aman ✓
        │
Panik 😱
```

TypeScript menggeser deteksi error **ke kiri** — lebih awal, lebih aman.

---

## Hubungan JavaScript dan TypeScript

Ada satu hal penting yang perlu kamu pahami:

> **Semua kode TypeScript pada akhirnya menjadi JavaScript.**

Komputer dan browser tidak mengerti TypeScript secara langsung. TypeScript harus "dikompilasi" (diubah) menjadi JavaScript terlebih dahulu sebelum bisa dijalankan.

```
Kode TypeScript (.ts)
        │
        ▼
Compiler TypeScript (tsc)
        │
        ▼
Kode JavaScript (.js)
        │
        ▼
Dijalankan oleh Node.js / Browser
```

Tapi jangan khawatir — dalam proses belajar kita, ada alat bernama **TSX** yang akan mengurus proses ini secara otomatis. Kamu tidak perlu melakukan langkah kompilasi secara manual.

---

## Persamaan JavaScript dan TypeScript

| Hal                 | JavaScript | TypeScript |
| ------------------- | ---------- | ---------- |
| Sintaks dasar       | ✓          | ✓ (sama)   |
| Variabel            | ✓          | ✓          |
| Fungsi              | ✓          | ✓          |
| Array               | ✓          | ✓          |
| Object              | ✓          | ✓          |
| Tipe data eksplisit | ✗          | ✓          |
| Deteksi error awal  | ✗          | ✓          |
| Autocomplete cerdas | Terbatas   | ✓          |

---

## Mitos yang Perlu Diluruskan

:::note[Mitos vs Fakta]
**Mitos:** "TypeScript lebih susah dari JavaScript"

**Fakta:** TypeScript memang lebih ketat, tapi itu justru membuat kamu belajar dengan lebih benar. Error yang muncul saat menulis kode (bukan saat menjalankan) membuat proses debug jauh lebih mudah.
:::

:::note[Mitos vs Fakta]
**Mitos:** "Belajar TypeScript dulu, nanti JavaScript otomatis bisa"

**Fakta:** Ini benar! Karena TypeScript adalah superset JavaScript, belajar TypeScript berarti kamu juga belajar JavaScript. Kamu dapat dua ilmu sekaligus.
:::

---

## Ringkasan

- TypeScript menambahkan **tipe data eksplisit** ke JavaScript
- Dengan tipe data, TypeScript bisa mendeteksi error **sebelum** program dijalankan
- Kode TypeScript dikompilasi menjadi JavaScript sebelum dijalankan
- Sintaks dasar TypeScript sama dengan JavaScript — hanya ada tambahan anotasi tipe
- Belajar TypeScript = belajar JavaScript + kebiasaan menulis kode yang lebih baik

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Workflow Developer Modern** untuk memahami bagaimana programmer bekerja sehari-hari.
:::
