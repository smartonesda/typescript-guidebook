---
title: "Ringkasan BAB 6"
description: Rangkuman lengkap materi BAB 6 — objek cheat sheet, visual alur data, checklist, dan latihan penutup.
---

# Ringkasan BAB 6

## Selamat! 🎉

Kamu telah menyelesaikan **BAB 6: Object**! Ini adalah bab penutup dalam kelompok data terstruktur. Dengan menguasai objek, kamu sekarang siap untuk melangkah ke materi tingkat lanjut seperti **Interface**, **Class**, dan **Object-Oriented Programming (OOP)**.

---

## Object Cheat Sheet

### Type Alias & Object Literal

```ts
type Siswa = {
  nama: string
  nomorHP?: string // opsional
}

const siswaA: Siswa = { nama: "Putra" }
```

### Akses Properti

```ts
siswaA.nama       // Dot Notation (titik) - rekomendasi
siswaA["nama"]    // Bracket Notation - wajib jika key tidak standar
```

### Modifikasi Properti

```ts
siswaA.nama = "Budi"        // Ubah nilai
siswaA.nomorHP = "0812..."  // Tambah properti baru (wajib opsional di type)
delete siswaA.nomorHP       // Hapus properti (wajib opsional di type)
```

### Salin & Gabung (Spread)

```ts
const fotokopi = { ...siswaA }                     // Salin objek
const gabung = { ...siswaA, ...kontak }            // Gabung objek
const update = { ...siswaA, nama: "Budi Baru" }   // Update aman (immutable)
```

### Akses Aman (Optional Chaining & Nullish)

```ts
const kota = siswaA.alamat?.kota ?? "Tidak ada alamat"
```

---

## Perbandingan Cara Akses Properti

| Cara | Contoh | Kapan digunakan? |
|---|---|---|
| **Dot Notation** | `objek.properti` | Default utama untuk properti standar camelCase |
| **Bracket Notation** | `objek["properti-kustom"]` | Untuk key non-standar (spasi, minus) atau akses dinamis via variabel |

---

## Hal Penting yang Harus Diingat

### Objek const propertinya tetap mutable

```ts
const siswa = { nama: "Putra" }
siswa.nama = "Budi" // Boleh!
```

### Menyalin objek dengan '=' hanya menyalin referensi memori

```ts
const b = a // b dan a menunjuk objek yang sama. Perubahan di b merusak a.
const b = { ...a } // b adalah objek baru terpisah (aman).
```

### Properti opsional ditandai dengan tanda tanya `?`

Properti opsional bernilai `undefined` jika tidak diisi. Gunakan `?.` untuk menghindari error crash.

---

## Checklist BAB 6

- [ ] Memahami konsep object, key, dan value
- [ ] Bisa membuat object literal sederhana
- [ ] Bisa membuat type alias untuk object
- [ ] Bisa mengakses properti menggunakan Dot Notation dan Bracket Notation
- [ ] Bisa memodifikasi nilai properti yang ada
- [ ] Bisa menambah properti baru secara aman (harus opsional di tipe)
- [ ] Bisa menghapus properti menggunakan `delete` (harus opsional di tipe)
- [ ] Memahami struktur nested object (objek di dalam objek)
- [ ] Bisa mengoperasikan array of object (daftar objek)
- [ ] Menguasai object destructuring untuk mengambil variabel
- [ ] Menggunakan spread operator `...` untuk salin dan gabung objek secara aman
- [ ] Menggunakan optional chaining `?.` untuk mencegah error crash
- [ ] Menggabungkan `?.` dan `??` untuk menampilkan nilai default ramah pengguna
- [ ] Menyelesaikan Studi Kasus dan Mini Project
- [ ] Menyelesaikan 10 Challenge BAB 6

---

## Latihan Penutup

Tanpa melihat panduan, buat file `src/bab6/review-bab6.ts`:

1. Buat type alias `Mobil` dengan properti wajib `merk` dan properti opsional `spesifikasi` (nested object: `cc` number, `transmisi` string).
2. Buat objek `mobilA` lengkap dengan spesifikasi.
3. Buat objek `mobilB` tanpa spesifikasi.
4. Buat fungsi `cetakMobil(m: Mobil)` yang mendestructuring properti `merk` dan menggunakan kombinasi `?.` dan `??` untuk mencetak transmisi mobil, atau menampilkan `"Transmisi: Manual (Default)"` jika propertinya tidak diisi.
5. Tampilkan hasil panggilan fungsi untuk kedua objek mobil tersebut.

---

## Pesan untuk Kamu

Dengan menguasai variabel, tipe data, operator, percabangan, loop, function, array, dan object, kamu sekarang telah menguasai **8 pilar dasar pemrograman**. Seluruh program komputer di dunia dibangun dari kombinasi 8 pilar ini.

Teruslah berlatih, buatlah kode-kode latihan kecil milikmu sendiri, dan nikmati setiap proses belajarmu.

:::tip[Selesai BAB 6]
Selamat! BAB 6 selesai sepenuhnya. Pastikan seluruh tantangan dan challenge sudah diselesaikan sebelum melanjutkan ke materi berikutnya bersama guru.
:::
