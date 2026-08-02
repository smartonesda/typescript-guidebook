---
title: "Mengapa TypeScript?"
description: Penjelasan mengapa TypeScript dipilih sebagai bahasa belajar — masalah JavaScript yang diselesaikan TypeScript, dan keunggulannya untuk pemula.
---

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan kelemahan utama JavaScript
- Menjelaskan bagaimana TypeScript menyelesaikan kelemahan itu
- Meyakini bahwa TypeScript adalah pilihan yang tepat untuk belajar

---

## Pengantar

Kamu mungkin bertanya-tanya: kenapa kita tidak langsung belajar JavaScript saja? Kenapa harus TypeScript?

Pertanyaan yang sangat bagus. Mari kita jawab dengan sebuah cerita.

---

## Sebuah Cerita tentang Bug

Bayangkan kamu seorang programmer yang sedang membangun aplikasi nilai ujian untuk sekolahmu. Kamu menulis kode JavaScript seperti ini:

```js
function hitungRataRata(nilai1, nilai2, nilai3) {
  return (nilai1 + nilai2 + nilai3) / 3;
}

let hasil = hitungRataRata(80, 90, "tidak hadir");
console.log("Rata-rata:", hasil);
```

Apa yang terjadi? Program itu **berjalan tanpa error**. Tapi hasilnya:

```
Rata-rata: NaN
```

`NaN` artinya "Not a Number" — bukan angka. Programnya rusak! Tapi JavaScript tidak memberitahu kamu bahwa ada yang salah. Kamu tidak tahu di mana masalahnya sampai kamu menjalankan programnya dan melihat hasil yang aneh.

Sekarang bayangkan aplikasi itu sudah dipakai oleh 500 siswa. Guru-guru sudah mulai memasukkan nilai. Tiba-tiba muncul laporan: nilai rata-rata semua siswa adalah `NaN`.

Ini adalah bug yang mahal — dan JavaScript tidak mencegahnya.

---

## Masalah Utama JavaScript

JavaScript memiliki satu kelemahan fundamental: ia **tidak peduli** dengan tipe data.

**Tipe data** adalah jenis dari sebuah nilai — apakah itu angka, teks, atau sesuatu yang lain. Kita akan belajar ini lebih dalam nanti, tapi untuk sekarang, pahami ini:

- `80` adalah angka
- `"tidak hadir"` adalah teks
- Kamu tidak bisa menjumlahkan angka dengan teks secara bermakna

JavaScript membiarkan kamu mencampurkan semua itu tanpa komplain. Akibatnya, kesalahan baru ketahuan saat program **sudah berjalan** — kadang sudah terlambat.

---

## TypeScript Hadir sebagai Solusi

**TypeScript** adalah bahasa yang dibuat oleh **Microsoft** pada tahun 2012. TypeScript menambahkan satu fitur sangat penting ke JavaScript: **sistem tipe** (_type system_).

Dengan TypeScript, kamu bisa memberitahu program: "fungsi ini hanya boleh menerima angka, bukan teks."

```ts
function hitungRataRata(
  nilai1: number,
  nilai2: number,
  nilai3: number,
): number {
  return (nilai1 + nilai2 + nilai3) / 3;
}

let hasil = hitungRataRata(80, 90, "tidak hadir");
// Error! TypeScript langsung komplain:
// Argument of type 'string' is not assignable to parameter of type 'number'
```

TypeScript **menolak** kode yang salah **sebelum** program dijalankan. Kesalahan ketahuan lebih awal — saat kamu masih menulis kode, bukan saat program sudah digunakan orang lain.

---

## Analogi: Guru yang Ketat vs Guru yang Permisif

Bayangkan dua guru matematika:

**Guru JavaScript** (permisif):

- Kamu mengumpulkan jawaban yang salah
- Guru tidak memeriksa
- Kamu baru tahu jawabannya salah saat nilai keluar

**Guru TypeScript** (ketat tapi sayang):

- Kamu mulai menulis jawaban yang salah
- Guru langsung bilang: "Hei, cara hitungnya salah nih, coba lihat lagi"
- Kamu bisa memperbaiki sebelum dikumpulkan

Guru TypeScript terasa lebih "rewel" — tapi sebenarnya ia **lebih membantu** kamu belajar dengan benar.

---

## Keunggulan TypeScript untuk Pemula

Mungkin kamu berpikir: "Ah, kalau ada peringatan terus, pasti lebih susah."

Justru sebaliknya. Untuk pemula, TypeScript jauh lebih membantu karena:

1. **Error lebih mudah dipahami** — TypeScript memberitahu kamu _persis_ di mana masalahnya
2. **VS Code lebih cerdas** — editor bisa memberikan saran kode (_autocomplete_) yang lebih akurat
3. **Kode lebih mudah dibaca** — kamu bisa langsung tahu tipe data apa yang digunakan
4. **Terbiasa dari awal** — belajar kebiasaan baik sejak awal lebih mudah daripada mengubah kebiasaan buruk nanti

---

## TypeScript di Dunia Nyata

TypeScript bukan hanya untuk belajar — ia digunakan oleh perusahaan-perusahaan besar:

- **Microsoft** — digunakan di VS Code (yang kamu pakai!) dan banyak produk lain
- **Google** — digunakan di Angular framework
- **Facebook/Meta** — banyak projek internal menggunakan TypeScript
- **Airbnb, Slack, Asana** — semua menggunakan TypeScript

:::note[Fakta Menarik]
Pada tahun 2023, TypeScript menjadi salah satu dari 5 bahasa pemrograman paling populer di dunia menurut survei Stack Overflow Developer Survey. Lebih dari 70% developer JavaScript menggunakan TypeScript.
:::

---

## Satu Hal Penting untuk Diingat

TypeScript **bukan bahasa yang berbeda** dari JavaScript. TypeScript adalah JavaScript dengan tambahan fitur tipe. Setiap kode JavaScript yang valid juga valid di TypeScript.

Ini artinya: kalau kamu belajar TypeScript, kamu sebenarnya **juga belajar JavaScript** pada saat yang sama.

```
TypeScript = JavaScript + Sistem Tipe + Fitur Modern
```

---

## Ringkasan

- JavaScript punya kelemahan utama: tidak memeriksa tipe data, sehingga error baru ketahuan saat runtime
- TypeScript menambahkan **sistem tipe** ke JavaScript
- TypeScript mendeteksi error **sebelum** program dijalankan
- TypeScript lebih membantu pemula karena error lebih jelas dan VS Code lebih cerdas
- TypeScript digunakan oleh perusahaan-perusahaan teknologi besar
- Belajar TypeScript = belajar JavaScript + kebiasaan baik

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **JavaScript vs TypeScript** untuk melihat perbedaan konkret antara keduanya dengan contoh kode.
:::
