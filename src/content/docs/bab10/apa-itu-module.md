---
title: "Apa itu Module?"
description: Memahami konsep Module System di TypeScript untuk memecah dan merapikan kode program.
---

# Apa itu Module?

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan definisi dari Module dalam pemrograman.
- Memahami mengapa memecah kode ke dalam beberapa file itu sangat penting.
- Mengenali struktur hubungan ketergantungan antar module.

---

## Pendahuluan

Selama kamu belajar pemrograman di sekolah, semua kode latihan biasanya ditulis di dalam satu file saja. Kodenya mungkin hanya berkisar antara 20 sampai 50 baris. Menulis di satu file tentu terasa praktis.

Namun, di dunia industri nyata, satu aplikasi web bisa memiliki puluhan ribu baris kode. Jika semua itu ditulis di dalam satu file, file tersebut akan menjadi sangat besar (bisa mencapai ratusan megabyte), sangat lambat dibuka di VS Code, dan mustahil dikerjakan secara bersamaan oleh tim developer. Kita membutuhkan **Module**.

---

## Penjelasan Materi: Mengenal Module

**Module** (modul) adalah sebuah file kode program mandiri yang memisahkan bagian logika tertentu (seperti class, fungsi, interface, atau variabel) agar tidak bercampur dengan file lain.

Di dalam sistem module:
1. **Terisolasi secara default**: Seluruh variabel, class, atau fungsi di dalam sebuah file module bersifat rahasia dan tidak bisa diakses oleh file lain, kecuali jika kita secara sengaja menyatakannya terbuka.
2. **Ketergantungan Terkontrol**: Sebuah file bisa meminjam (mengimpor) komponen dari file lain secara resmi dan teratur.

TypeScript mendukung penuh sistem module standar modern ES Modules (ECMAScript Modules) menggunakan kata kunci `export` (ekspor) dan `import` (impor).

---

## Analogi Kehidupan Sehari-hari: Kompartemen Kotak Peralatan (Toolbox)

Bagaimana kamu merapikan alat-alat pertukangan?

### Kotak Perkakas Tanpa Kompartemen (Satu File Raksasa)
Kunci pas, obeng, sekrup, tang, palu dicampur aduk jadi satu di dalam satu wadah besar. Saat mencari sekrup kecil, kamu harus mengaduk-aduk seluruh isi kotak dengan susah payah.

### Kotak Perkakas Modular (Module System)
Setiap alat diletakkan pada kompartemen khusus:
- Kompartemen Obeng (Modul Obeng)
- Kompartemen Kunci Pas (Modul Kunci)
- Kotak Kecil Sekrup (Modul Sekrup)

```text
Toolbox Besar (Project)
  ├── Kompartemen Obeng (Module A)
  ├── Kompartemen Kunci Pas (Module B)
  └── Kotak Kecil Sekrup (Module C)
```

Jika kamu butuh obeng, kamu cukup membuka laci kompartemen obeng tanpa perlu mengganggu laci sekrup. Setiap kompartemen terisolasi dan rapi.

---

## Visual Illustration: Hubungan Ketergantungan Module

```text
  [ siswa.ts (Module) ] ───┐
                           ├── ekspor ──► [ index.ts (Aplikasi Utama) ]
  [ guru.ts (Module) ] ────┘                  (mengimpor & menggabungkan)
```

---

## Mengapa Harus Menggunakan Module?

1. **Maintainability (Mudah Dirawat)**: Jika ada kesalahan pada logika data siswa, kamu tahu pasti harus membuka file `siswa.ts`. File `guru.ts` tidak perlu disentuh.
2. **Reusability (Bisa Dipakai Ulang)**: Satu modul kalkulator matematika yang kamu buat bisa diimpor ke sepuluh file project berbeda tanpa perlu menulis ulang kodenya.
3. **Namespace Cleanliness**: Menghindari bentrok nama variabel. Kamu boleh memiliki variabel bernama `nama` di `siswa.ts` dan variabel bernama `nama` di `guru.ts` secara bersamaan karena keduanya berada di lingkup file yang berbeda.
4. **Team Collaboration**: Developer A bisa bekerja fokus mengedit file `siswa.ts` selagi Developer B mengedit file `guru.ts` tanpa saling menimpa pekerjaan.

---

## Latihan
Tuliskan pendapatmu di file latihan: sebutkan apa saja masalah yang mungkin muncul ketika sebuah tim pengembang beranggotakan 10 orang mencoba mengedit satu file kode program yang sama secara bersamaan tanpa menggunakan module system.

---

## Ringkasan
- Modul adalah satu file kode program terpisah yang mandiri dan terisolasi.
- Berfungsi membagi kode besar menjadi bagian-bagian kecil yang terorganisir.
- TypeScript menggunakan sistem modul modern ES Modules (`export` dan `import`).

:::tip[Langkah Selanjutnya]
Lanjut ke **export & import** untuk belajar cara memindahkan komponen antar file module.
:::
