---
title: "HTML, CSS, dan JavaScript"
description: Penjelasan tentang tiga teknologi dasar web — HTML untuk struktur, CSS untuk tampilan, dan JavaScript untuk interaktivitas.
---

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan fungsi HTML, CSS, dan JavaScript
- Membedakan peran ketiga teknologi itu
- Memahami posisi JavaScript (dan TypeScript) dalam ekosistem web

---

## Pengantar

Di halaman sebelumnya, kita belajar bahwa setiap halaman web dibangun dari tiga komponen: HTML, CSS, dan JavaScript. Sekarang kita akan mengenal ketiganya secara lebih mendalam.

Kenapa ini penting sebelum belajar TypeScript? Karena **TypeScript adalah pengembangan dari JavaScript**. Untuk mengerti TypeScript, kamu perlu tahu dulu dari mana JavaScript berasal dan apa perannya.

---

## HTML — Struktur Halaman Web

### Apa itu HTML?

**HTML** (_HyperText Markup Language_) adalah bahasa yang digunakan untuk membuat struktur sebuah halaman web. HTML bukan bahasa pemrograman — ia adalah **bahasa markup** (bahasa penanda).

HTML menggunakan **tag** (penanda) untuk mendefinisikan bagian-bagian dari sebuah halaman:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Halaman Pertamaku</title>
  </head>
  <body>
    <h1>Halo Dunia!</h1>
    <p>Ini adalah paragraf pertamaku.</p>
    <button>Klik saya</button>
  </body>
</html>
```

Tag-tag seperti `<h1>`, `<p>`, dan `<button>` memberitahu browser: "ini adalah judul", "ini adalah paragraf", "ini adalah tombol".

### Analogi HTML:

HTML adalah **rangka bangunan** — dinding, lantai, dan atap. Tanpa rangka, tidak ada bangunan.

---

## CSS — Tampilan Halaman Web

### Apa itu CSS?

**CSS** (_Cascading Style Sheets_) adalah bahasa yang digunakan untuk mengatur tampilan — warna, ukuran, jenis huruf, tata letak, dan sebagainya.

```css
h1 {
  color: blue;
  font-size: 32px;
}

button {
  background-color: green;
  color: white;
  padding: 10px 20px;
}
```

Kode CSS di atas memberitahu browser: "buat semua judul berwarna biru", "buat tombol berwarna hijau dengan tulisan putih".

### Analogi CSS:

CSS adalah **cat, wallpaper, dan furnitur** — yang membuat bangunan terlihat indah dan nyaman.

---

## JavaScript — Interaktivitas Halaman Web

### Apa itu JavaScript?

**JavaScript** (sering disingkat JS) adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi **interaktif** — bisa merespons aksi pengguna.

Contoh interaktivitas yang dibuat dengan JavaScript:

- Tombol yang berubah warna saat diklik
- Formulir yang langsung menampilkan pesan error tanpa perlu reload halaman
- Gambar yang berganti otomatis (slideshow)
- Menu dropdown yang muncul saat di-hover

```js
let tombol = document.querySelector("button");

tombol.addEventListener("click", function () {
  alert("Kamu mengklik tombol!");
});
```

### Analogi JavaScript:

JavaScript adalah **listrik** dalam bangunan — yang menghidupkan lampu, AC, dan semua peralatan elektronik.

---

## Ilustrasi: Tiga Lapisan Web

```
┌─────────────────────────────┐
│         JavaScript          │  ◄── Interaktivitas
│  (Logika & Perilaku)        │
├─────────────────────────────┤
│            CSS              │  ◄── Tampilan
│  (Warna, Font, Layout)      │
├─────────────────────────────┤
│            HTML             │  ◄── Struktur
│  (Judul, Paragraf, Tombol)  │
└─────────────────────────────┘
```

---

## JavaScript di Luar Browser

Awalnya, JavaScript hanya bisa berjalan di dalam browser. Tapi pada tahun 2009, diciptakanlah **Node.js** — sebuah program yang memungkinkan JavaScript berjalan di luar browser, langsung di komputer.

Ini mengubah segalanya. JavaScript yang tadinya hanya bisa untuk frontend, sekarang bisa juga digunakan untuk:

- Membuat server (backend)
- Membuat skrip otomasi
- Membuat aplikasi command-line
- Mengolah data

Inilah mengapa JavaScript menjadi salah satu bahasa pemrograman paling populer di dunia.

:::note[Catatan Penting]
Di guidebook ini, kita akan menjalankan TypeScript menggunakan **Node.js** — bukan di browser. Jadi kita tidak perlu membuat HTML atau CSS dulu. Kita fokus pada logika pemrograman TypeScript-nya terlebih dahulu.
:::

---

## Posisi TypeScript

Sekarang muncul pertanyaan: jika JavaScript sudah bisa segalanya, kenapa perlu TypeScript?

Kita akan menjawab pertanyaan itu di halaman berikutnya. Tapi untuk sekarang, ingat satu hal:

> TypeScript adalah **versi yang lebih baik** dari JavaScript — seperti JavaScript yang sudah "ditingkatkan".

---

## Ringkasan

| Teknologi      | Singkatan                 | Fungsi                  |
| -------------- | ------------------------- | ----------------------- |
| **HTML**       | HyperText Markup Language | Struktur halaman        |
| **CSS**        | Cascading Style Sheets    | Tampilan halaman        |
| **JavaScript** | JS                        | Interaktivitas & logika |

- HTML bukan bahasa pemrograman — ia bahasa markup
- JavaScript adalah bahasa pemrograman yang bisa berjalan di browser **dan** di komputer (via Node.js)
- TypeScript adalah pengembangan dari JavaScript

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **Mengapa TypeScript** untuk memahami kenapa kita memilih TypeScript.
:::
