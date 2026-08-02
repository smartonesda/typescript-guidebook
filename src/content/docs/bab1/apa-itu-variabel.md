---
title: "Apa itu Variabel?"
description: Memahami konsep variabel sebagai tempat penyimpanan data dalam program TypeScript.
---

# Apa itu Variabel?

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan apa itu variabel dengan kata-kata sendiri
- Memahami mengapa variabel dibutuhkan dalam sebuah program
- Membayangkan variabel sebagai kotak penyimpanan di dalam memori komputer

---

## Pendahuluan

Setiap program yang pernah dibuat — dari aplikasi sederhana hingga game AAA — semuanya memiliki satu kesamaan: mereka semua menyimpan dan memanipulasi **data**.

Pertanyaannya: **di mana data itu disimpan?**

Jawabannya adalah di dalam **variabel**.

---

## Penjelasan Materi

**Variabel** adalah tempat penyimpanan data yang diberi nama, berada di dalam memori (RAM) komputer, dan dapat diakses menggunakan nama tersebut kapan pun dibutuhkan di dalam program.

Kata "variabel" berasal dari kata "vary" (berubah) — karena isi dari sebuah variabel bisa berubah-ubah selama program berjalan (kecuali jika menggunakan `const`, yang akan kita pelajari nanti).

---

## Analogi Kehidupan Sehari-hari

### 🗃️ Variabel adalah Kotak Penyimpanan

Bayangkan kamu punya sebuah kotak kardus. Di luar kotak itu kamu tulis label: **"NAMA_SISWA"**. Di dalam kotak itu kamu masukkan selembar kertas bertuliskan **"Putra"**.

```
┌─────────────────┐
│  NAMA_SISWA     │  ← label (nama variabel)
│─────────────────│
│   "Putra"       │  ← isi (nilai variabel)
└─────────────────┘
```

Kapan pun kamu ingin tahu siapa nama siswanya, kamu tinggal pergi ke kotak berlabel "NAMA_SISWA" dan membuka isinya.

Kapan pun kamu ingin mengubah namanya, kamu tinggal ambil kertas lamanya, buang, dan masukkan kertas baru.

**Begitu pula variabel dalam program** — ia punya nama (label) dan isi (nilai). Kamu bisa membaca isinya, dan kamu bisa mengubah isinya.

---

## Ilustrasi: Variabel di Memori Komputer

Saat program berjalan, variabel-variabelmu tersimpan di RAM komputer. Bayangkan RAM seperti sebuah lemari arsip besar dengan banyak laci:

```
RAM Komputer
┌──────────────────────────────────┐
│  [laci 001]  namaSiswa = "Putra" │
│  [laci 002]  umur      = 17      │
│  [laci 003]  lulus     = true    │
│  [laci 004]  ...                 │
│  [laci 005]  ...                 │
└──────────────────────────────────┘
```

Setiap variabel menempati satu "laci" di RAM. Komputer mengingat di laci mana setiap variabel disimpan, sehingga saat kamu memanggil nama variabel itu, komputer langsung bisa mengambil nilainya.

---

## Mari Mencoba

Buat file baru: `src/bab1/apa-itu-variabel.ts`

```ts
let namaSiswa = "Putra"
let umur = 17
let sekolah = "SMKS Antartika 1 Sidoarjo"

console.log(namaSiswa)
console.log(umur)
console.log(sekolah)
```

Jalankan dengan:

```
tsx src/bab1/apa-itu-variabel.ts
```

Output yang diharapkan:

```
Putra
17
SMKS Antartika 1 Sidoarjo
```

---

## Penjelasan Baris per Baris

```ts
let namaSiswa = "Putra"
```

- `let` — kata kunci yang memberitahu TypeScript: "saya ingin membuat variabel baru"
- `namaSiswa` — nama variabel yang kita pilih
- `=` — tanda assignment (pengisian), artinya "isi dengan"
- `"Putra"` — nilai yang kita masukkan ke dalam variabel
- Baris ini secara keseluruhan artinya: "Buat variabel bernama `namaSiswa` dan isi dengan teks `"Putra"`"

```ts
console.log(namaSiswa)
```

- `console.log()` — fungsi untuk menampilkan output di terminal
- `namaSiswa` — nama variabel yang isinya ingin kita tampilkan
- TypeScript akan mencari variabel `namaSiswa`, mengambil nilainya (`"Putra"`), dan menampilkannya

---

## Kenapa Variabel Diperlukan?

Coba bayangkan program tanpa variabel:

```ts
console.log("Nama: Putra")
console.log("Halo, Putra!")
console.log("Selamat datang, Putra!")
console.log("Nilai Putra adalah 90")
```

Bagaimana jika nama siswanya berubah menjadi "Budi"? Kamu harus mengubah kata "Putra" di **setiap baris** secara manual.

Dengan variabel:

```ts
let nama = "Putra"

console.log("Nama: " + nama)
console.log("Halo, " + nama + "!")
console.log("Selamat datang, " + nama + "!")
console.log("Nilai " + nama + " adalah 90")
```

Sekarang untuk mengubah nama, cukup ubah **satu baris** — baris deklarasi variabel. Semua tempat lain yang menggunakan `nama` akan otomatis ikut berubah.

Inilah salah satu kekuatan terbesar variabel: **satu perubahan, efek di mana-mana**.

---

## Kesalahan Umum

### ❌ Menggunakan variabel sebelum dideklarasikan

```ts
console.log(namaKu)   // Error!
let namaKu = "Ani"
```

**Mengapa error?** TypeScript tidak bisa menggunakan variabel yang belum dibuat. Variabel harus dideklarasikan **sebelum** digunakan.

**Cara memperbaiki:**

```ts
let namaKu = "Ani"
console.log(namaKu)   // ✓
```

---

## Tips

:::tip[Tips]
Saat memberikan nama variabel, pilih nama yang **deskriptif** — nama yang langsung menjelaskan apa isi variabel itu. Nama seperti `x`, `y`, atau `a` sulit dipahami. Nama seperti `namaSiswa`, `nilaiMatematika`, atau `statusLulus` jauh lebih mudah dibaca.
:::

---

## Latihan

Coba buat file `src/bab1/latihan-variabel.ts` dan:

1. Buat variabel untuk menyimpan **nama lengkap** kamu
2. Buat variabel untuk menyimpan **nama sekolah** kamu
3. Buat variabel untuk menyimpan **kelas** kamu
4. Tampilkan ketiga variabel tersebut menggunakan `console.log()`

---

## Ringkasan

- **Variabel** adalah tempat penyimpanan data di dalam memori komputer
- Setiap variabel punya **nama** (label) dan **nilai** (isi)
- Variabel dibuat dengan kata kunci `let` diikuti nama dan nilai
- Dengan variabel, perubahan data cukup dilakukan di satu tempat
- Variabel harus dideklarasikan sebelum bisa digunakan

:::tip[Langkah Selanjutnya]
Lanjut ke **Deklarasi Variabel** untuk mempelajari cara-cara mendeklarasikan variabel di TypeScript.
:::
