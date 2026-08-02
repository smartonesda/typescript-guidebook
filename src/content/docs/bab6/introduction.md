---
title: "BAB 6 — Object"
description: Gambaran BAB 6 — menggunakan object untuk merepresentasikan entitas dunia nyata secara terstruktur di TypeScript.
---

# BAB 6: Object

## Tujuan Pembelajaran

Setelah menyelesaikan BAB 6, kamu dapat membuat object, mengelola properti, menggunakan nested object, mengoperasikan array of object, menggunakan destructuring, spread operator, optional chaining, dan nullish coalescing dengan object.

---

## Pendahuluan

Di BAB 5, kita belajar tentang array untuk menyimpan daftar data sejenis (misal: semua nama string atau semua nilai number). Tetapi di dunia nyata, satu entitas memiliki **banyak informasi yang jenisnya berbeda**.

Contoh: seorang Siswa memiliki nama (string), umur (number), dan status aktif (boolean). Menyatukan data yang berbeda jenis ini dalam satu kesatuan struktur adalah tugas dari **Object**.

---

## Peta Materi

```text
OBJECT
├── Dasar Object
│   ├── Apa itu object?
│   ├── Mengapa object dibutuhkan?
│   ├── Membuat object & tipe data object
│   └── Apa itu property?
├── Mengelola Property
│   ├── Mengakses property (dot & bracket notation)
│   ├── Mengubah property
│   ├── Menambah property baru
│   └── Menghapus property
├── Konsep Lanjutan
│   ├── Nested object (objek di dalam objek)
│   ├── Array of object (daftar objek)
│   ├── Destructuring (membongkar properti)
│   ├── Spread operator (menyalin objek)
│   ├── Optional chaining (?.)
│   └── Nullish coalescing (??) dengan objek
└── Terapan
    ├── Studi kasus biodata siswa lengkap
    └── Mini project manajemen data siswa
```

---

## Analogi Awal

Object seperti **Kartu Identitas Siswa (Kartu Pelajar)**.

```text
Kartu Pelajar (Object)
┌───────────────────────────────────────┐
│ Foto                                  │
│ Nama    : Putra Ramadhan              │  ← properti nama (teks)
│ Umur    : 17                          │  ← properti umur (angka)
│ Jurusan : RPL                         │  ← properti jurusan
└───────────────────────────────────────┘
```

Satu kartu (object) menampung berbagai kolom informasi (properti) yang saling berhubungan mengenai satu siswa yang sama.

---

## Mari Mencoba

Buat `src/bab6/cek-kesiapan.ts`:

```ts
const siswa = {
  nama: "Putra",
  umur: 17,
  kelas: "XI RPL"
}

console.log("Objek siswa:", siswa)
console.log("Nama siswa :", siswa.nama)
```

Jalankan:

```text
tsx src/bab6/cek-kesiapan.ts
```

Output:

```text
Objek siswa: { nama: 'Putra', umur: 17, kelas: 'XI RPL' }
Nama siswa : Putra
```

Satu variabel `siswa` menampung tiga data berbeda, dan kita bisa mengambil salah satu data menggunakan titik (`.nama`).

---

## Latihan

Modifikasi kode di atas: tambahkan properti `jurusan: "RPL"` ke dalam object `siswa` dan tampilkan jurusan tersebut menggunakan tanda titik.

---

## Ringkasan

- Object mengelompokkan data berbeda tipe yang mendeskripsikan satu entitas.
- Informasi di dalam object disimpan dalam pasangan key-value (kunci-nilai).
- BAB 6 menjadi landasan sebelum kamu belajar Interface dan Object-Oriented Programming (OOP).

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu Object** untuk memahami konsep dasarnya.
:::
