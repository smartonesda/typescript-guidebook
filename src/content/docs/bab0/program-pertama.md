---
title: "Program Pertama"
description: Menulis dan menjalankan program TypeScript pertama — Hello World dan eksplorasi console.log.
---

## Tujuan Pembelajaran

Setelah mengikuti halaman ini, kamu akan mampu:

- Membuat file TypeScript baru di VS Code
- Menulis program sederhana
- Menjalankan program menggunakan TSX
- Memahami fungsi `console.log()`

---

## Pengantar

Ini adalah momen yang ditunggu-tunggu! Kita akan menulis **program TypeScript pertama** kamu.

Ada sebuah tradisi dalam dunia pemrograman: program pertama yang ditulis saat belajar bahasa baru selalu adalah program yang menampilkan teks "Hello, World!" (atau versi lokalnya). Tradisi ini sudah berlangsung sejak tahun 1970-an.

Kita akan mengikuti tradisi itu — tapi dengan sentuhan Indonesia.

---

## Langkah 1: Buat File Baru

Di dalam VS Code, buat file baru di dalam folder `src/bab0/`:

1. Klik kanan folder `bab0` di Explorer
2. Pilih **New File**
3. Beri nama file: `halo-dunia.ts`

Atau bisa juga dari terminal:

```
New-Item src/bab0/halo-dunia.ts
```

> Screenshot VS Code dengan file halo-dunia.ts baru terbuka di editor

---

## Langkah 2: Tulis Kode Pertamamu

Klik pada file `halo-dunia.ts` yang baru dibuat. Di area editor (bagian kanan VS Code), ketik kode berikut:

```ts
console.log("Halo, Dunia!");
console.log("Nama saya Budi");
console.log("Saya sedang belajar TypeScript");
```

:::caution[Ingat: Jangan Copy-Paste!]
Ketik ulang kode di atas dengan tanganmu. Perhatikan setiap karakter: tanda kutip, tanda kurung, titik koma (opsional). Proses mengetik adalah bagian dari belajar.
:::

---

## Langkah 3: Jalankan Program

Buka terminal di VS Code (`Ctrl + `` ` ``), kemudian jalankan:

```
tsx src/bab0/halo-dunia.ts
```

Kamu harus melihat output seperti ini:

```
Halo, Dunia!
Nama saya Budi
Saya sedang belajar TypeScript
```

**Selamat! Kamu baru saja menjalankan program TypeScript pertamamu!** 🎉

---

## Memahami console.log()

`console.log()` adalah **fungsi** yang digunakan untuk menampilkan teks di terminal.

Cara membacanya:

- `console` — objek yang mewakili "konsol" (terminal)
- `.` — titik untuk mengakses sesuatu di dalam objek
- `log` — fungsi untuk menampilkan (log) sesuatu
- `()` — kurung buka dan tutup tempat kita memasukkan apa yang ingin ditampilkan
- `"Halo, Dunia!"` — teks yang ingin ditampilkan (diapit tanda kutip)

```ts
console.log("Ini akan tampil di terminal");
```

---

## Eksperimen 1: Menampilkan Angka

`console.log()` tidak hanya bisa menampilkan teks. Ia juga bisa menampilkan angka:

```ts
console.log(42);
console.log(3.14);
console.log(100 + 200);
```

Coba jalankan! Output yang diharapkan:

```
42
3.14
300
```

Perhatikan: untuk angka, tidak perlu tanda kutip. Untuk teks, selalu gunakan tanda kutip.

---

## Eksperimen 2: Menggabungkan Teks dan Variabel

```ts
let nama: string = "Ani";
let kelas: string = "X RPL 1";
let umur: number = 16;

console.log("Nama saya:", nama);
console.log("Kelas:", kelas);
console.log("Umur:", umur, "tahun");
```

Output:

```
Nama saya: Ani
Kelas: X RPL 1
Umur: 16 tahun
```

Perhatikan bahwa `console.log()` bisa menerima beberapa nilai sekaligus, dipisahkan dengan koma. Nilai-nilai itu akan ditampilkan dengan spasi di antaranya.

---

## Eksperimen 3: Template Literal

Ada cara yang lebih elegan untuk menggabungkan teks dan variabel, menggunakan **template literal**:

```ts
let nama: string = "Rudi";
let nilai: number = 95;

console.log(`Siswa ${nama} mendapat nilai ${nilai}`);
```

Output:

```
Siswa Rudi mendapat nilai 95
```

Template literal menggunakan:

- **Backtick** (`` ` ``) sebagai pembungkus, bukan tanda kutip biasa
- `${ }` untuk menyisipkan variabel di dalam teks

---

## Program Lengkap: Kartu Identitas

Mari kita buat program yang sedikit lebih bermakna — kartu identitas siswa:

```ts
let namaSiswa: string = "Dewi Rahayu";
let kelas: string = "XI RPL 2";
let nomorAbsen: number = 15;
let nilaiRataRata: number = 88.5;

console.log("=== KARTU IDENTITAS SISWA ===");
console.log(`Nama          : ${namaSiswa}`);
console.log(`Kelas         : ${kelas}`);
console.log(`Nomor Absen   : ${nomorAbsen}`);
console.log(`Nilai Rata-rata: ${nilaiRataRata}`);
console.log("=============================");
```

Output:

```
=== KARTU IDENTITAS SISWA ===
Nama          : Dewi Rahayu
Kelas         : XI RPL 2
Nomor Absen   : 15
Nilai Rata-rata: 88.5
=============================
```

Coba ubah nilai-nilainya dengan data kamu sendiri dan jalankan lagi!

---

## Apa yang Baru Kamu Pelajari?

Tanpa disadari, dalam program-program di atas kamu sudah menggunakan:

| Konsep           | Contoh                     |
| ---------------- | -------------------------- |
| Fungsi bawaan    | `console.log()`            |
| Tipe data string | `let nama: string = "Ani"` |
| Tipe data number | `let umur: number = 16`    |
| Template literal | `` `Halo ${nama}` ``       |

Semuanya akan dibahas lebih mendalam di BAB 1. Untuk sekarang, cukup bereksperimen dan nikmati prosesnya!

---

## Ringkasan

- Buat file TypeScript baru dengan ekstensi `.ts`
- Jalankan dengan: `tsx namafile.ts`
- `console.log()` digunakan untuk menampilkan output di terminal
- String (teks) menggunakan tanda kutip: `"teks"` atau `'teks'`
- Angka tidak menggunakan tanda kutip: `42`, `3.14`
- Template literal menggunakan backtick: `` `Halo ${nama}` ``

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Error Corner** untuk belajar tentang jenis-jenis error umum dan cara mengatasinya.
:::
