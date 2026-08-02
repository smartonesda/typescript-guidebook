---
title: "Mengubah Property"
description: Cara memperbarui nilai properti object menggunakan Dot Notation dan Bracket Notation.
---

# Mengubah Property

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memodifikasi nilai properti yang sudah ada di dalam object menggunakan Dot Notation maupun Bracket Notation.

---

## Pendahuluan

Nilai properti object tidak selalu bersifat permanen. Umur siswa bertambah setiap tahun, kelas berganti saat naik kelas, dan nomor telepon bisa diperbarui. Di halaman ini kita belajar cara mengubah nilai properti object.

---

## Cara Mengubah Nilai Properti

Gunakan nama objek diikuti akses properti (titik atau kurung siku), lalu gunakan operator penugasan `=`:

```ts
// Dot Notation
objek.properti = nilaiBaru

// Bracket Notation
objek["properti"] = nilaiBaru
```

---

## Analogi Kehidupan Sehari-hari

### Mengganti Info di Lembar Rapor

Bayangkan rapor siswa. Di kolom "Nilai Ujian", tertulis angka `70`. Guru menghapus angka tersebut menggunakan tip-ex, lalu menulis angka `85` di tempat yang sama.

```text
Sebelum:  Rapor Budi -> Nilai Ujian: 70
Tindakan: Rapor Budi -> Nilai Ujian = 85
Sesudah:  Rapor Budi -> Nilai Ujian: 85
```

Lembar rapornya tetap sama, kolom nama dan NIS tetap utuh, hanya kolom nilai ujian saja yang isinya berubah.

---

## Visual Illustration

```text
const siswa = { nama: "Putra", kelas: "X RPL" }

siswa.kelas = "XI RPL"

Hasil:
Siswa
┌─────────────────────┐
│ nama  → "Putra"     │  (tetap)
│ kelas → "XI RPL"    │  (berubah! ✓)
└─────────────────────┘
```

---

## Mari Mencoba

Buat `src/bab6/mengubah-property.ts`:

```ts
type Siswa = {
  nama: string
  kelas: string
  nilai: number
}

const siswaA: Siswa = {
  nama: "Putra",
  kelas: "X RPL 1",
  nilai: 72
}

console.log("Awal   :", siswaA)

// 1. Mengubah menggunakan Dot Notation
siswaA.kelas = "XI RPL 1"

// 2. Mengubah menggunakan Bracket Notation
siswaA["nilai"] = 85

console.log("Sesudah:", siswaA)
```

Jalankan:

```text
tsx src/bab6/mengubah-property.ts
```

## Output

```text
Awal   : { nama: 'Putra', kelas: 'X RPL 1', nilai: 72 }
Sesudah: { nama: 'Putra', kelas: 'XI RPL 1', nilai: 85 }
```

---

## Properti pada Objek `const` Bisa Diubah

Sama seperti array (BAB 5), jika sebuah objek dideklarasikan dengan kata kunci `const`, kita **tetap bisa mengubah properti di dalamnya**:

```ts
const siswa = { nama: "Putra" }
siswa.nama = "Budi" // ✓ Boleh dan valid!
// siswa = { nama: "Citra" } // ✗ Error! Variabel const tidak bisa diisi objek baru
```

`const` hanya melarang kita mengganti objek tersebut dengan objek baru secara keseluruhan.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengisi nilai dengan tipe data yang salah

```ts
const siswa = { nama: "Putra", umur: 17 }
// siswa.umur = "tujuh belas" // Error!
// Type 'string' is not assignable to type 'number'.
```

**Perbaikan:** Pastikan tipe data baru sesuai dengan tipe data properti yang diubah.

---

## Tips

:::tip[Gunakan Dot Notation untuk Perubahan Standar]
Gunakan Dot Notation (`siswa.kelas = ...`) untuk memperbarui properti standar agar kode tetap bersih dan mudah dibaca oleh timmu.
:::

---

## Latihan

Buat object `mobil` dengan properti `warna` dan `kecepatanMaksimum`. Ubah nilai kedua properti tersebut menggunakan cara yang berbeda (satu memakai Dot Notation, satu memakai Bracket Notation). Tampilkan hasilnya.

---

## Ringkasan

- Properti objek diperbarui menggunakan `objek.properti = nilaiBaru`.
- Objek `const` propertinya tetap bisa diubah isinya.
- Perubahan nilai properti harus menaati aturan tipe data dari properti tersebut.

:::tip[Langkah Selanjutnya]
Lanjut ke **Menambah Property**.
:::
