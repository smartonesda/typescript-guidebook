---
title: "BAB 9 — Generic & Utility Types"
description: Pendahuluan Generic dan Utility Types di TypeScript — konsep dasar, tujuan pembelajaran, dan persiapan.
---

# BAB 9: Generic & Utility Types

## Tujuan Pembelajaran
Setelah menyelesaikan bab ini, kamu diharapkan dapat:
- Menjelaskan konsep dan kegunaan Generic di TypeScript.
- Membuat Generic Functions, Generic Interfaces, Generic Types, dan Generic Classes.
- Menerapkan Generic Constraints menggunakan kata kunci `extends`.
- Menggunakan operator `keyof` dan `typeof` secara tepat.
- Memahami dan mengimplementasikan Utility Types bawaan TypeScript seperti `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Record`, `Exclude`, `Extract`, `ReturnType`, dan `Parameters`.
- Memilih kapan harus menggunakan masing-masing Utility Type dalam program nyata.

---

## Pendahuluan

Selamat datang di **BAB 9**! Pada bab-bab sebelumnya, kita telah belajar bagaimana merancang data menggunakan `interface` dan `type` alias, serta menyusun struktur kode menggunakan Class dan Object. Namun, saat kamu mulai menulis kode untuk project nyata, kamu akan sering menemui situasi di mana kamu ingin membuat sebuah komponen (fungsi, class, atau interface) yang dapat **bekerja dengan berbagai tipe data**, tetapi **tetap menjaga keamanan tipe** (*type safety*).

Jika kita menggunakan tipe `any`, kita kehilangan proteksi TypeScript. Di sinilah **Generics** hadir sebagai penyelamat. Generics memungkinkan kita membuat komponen yang fleksibel dan serbaguna. Selain itu, TypeScript juga menyediakan **Utility Types**, yaitu alat bantu bawaan untuk memanipulasi tipe data yang sudah ada menjadi tipe data baru dengan sangat mudah.

---

## Peta Belajar BAB 9

Bab ini akan membimbingmu memahami Generic dan Utility Types dari nol:

```text
GENERIC & UTILITY TYPES
├── Konsep Generic
│   ├── Apa itu Generic?
│   ├── Mengapa butuh Generic?
│   ├── Generic Function
│   ├── Generic Interface & Type
│   └── Generic Class
├── Fitur Lanjutan Generic
│   ├── Generic Constraint (extends)
│   ├── Operator keyof
│   └── Operator typeof
├── Utility Types (Alat Bantu Tipe)
│   ├── Pengenalan Utility Types
│   ├── Partial & Required (Mengatur kolom opsional/wajib)
│   ├── Readonly (Mengunci data)
│   ├── Pick & Omit (Memilih/membuang properti)
│   ├── Record (Memetakan key-value)
│   ├── Exclude & Extract (Memilih tipe gabungan)
│   └── ReturnType & Parameters (Mengintip fungsi)
└── Projek Terapan
    ├── Studi Kasus Sistem Manajemen Data Akademik
    └── Mini Project Generic Academic Repository
```

---

## Analogi Awal: Kotak Serbaguna

Generic seperti **kotak kardus kosong** yang kamu beli di toko alat tulis.

```text
Kardus Kosong (Generic <T>)
  ├── Diisi Buku ──► Menjadi Kardus Buku (kardus hanya boleh berisi buku)
  ├── Diisi Mainan ──► Menjadi Kardus Mainan (kardus hanya boleh berisi mainan)
  └── Diisi Baju ──► Menjadi Kardus Baju
```

Kardus tersebut tidak didesain khusus hanya untuk buku atau hanya untuk mainan saat dibuat. Namun, begitu kamu memasukkan barang ke dalamnya, kardus tersebut "mengunci" jenis barang di dalamnya. Kamu tidak boleh mencampur sampah basah ke dalam kardus buku. Itulah konsep dasar Generics: fleksibel di awal, tetapi sangat aman ketika digunakan.

---

## Mari Mencoba: Cek Kesiapan Lingkungan

Untuk memastikan lingkungan belajarmu siap untuk memproses kode Generic, mari buat program Generic sederhana pertama.

Buatlah file baru bernama `src/bab9/cek-kesiapan.ts`:

```ts
// Sebuah fungsi Generic sederhana dengan parameter tipe <T>
function cekIdentitas<T>(nilai: T): T {
  return nilai;
}

const teks = cekIdentitas<string>("Generic TypeScript sudah siap digunakan!");
const angka = cekIdentitas<number>(2026);

console.log("[Status Teks] :", teks);
console.log("[Status Angka]:", angka);
```

Jalankan file tersebut menggunakan perintah berikut di terminal kamu:

```text
tsx src/bab9/cek-kesiapan.ts
```

### Output
Jika setup berjalan lancar, kamu akan melihat output seperti ini:
```text
[Status Teks] : Generic TypeScript sudah siap digunakan!
[Status Angka]: 2026
```

---

## Latihan
1. Panggil fungsi `cekIdentitas` dengan tipe boolean `true` atau `false` menggunakan parameter tipe `<boolean>`.
2. Cetak hasilnya ke terminal dan amati bagaimana TypeScript memastikan tipe data tetap aman.

---

## Ringkasan
- Generic membuat komponen program (fungsi, class, interface) menjadi sangat fleksibel namun tetap aman secara tipe data.
- Utility Types adalah fungsi bawaan TypeScript untuk memanipulasi tipe data objek/primitif yang sudah ada.
- Bab ini mempersiapkanmu untuk memahami kode program di codebase profesional modern.

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu Generic** untuk memahami konsep dasarnya secara mendalam.
:::
