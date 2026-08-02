---
title: "Object Spread Operator"
description: Menggunakan spread operator (...) untuk menyalin dan menggabungkan properti objek secara aman di TypeScript.
---

# Object Spread Operator

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan spread operator (`...`) untuk menyalin objek, menggabungkan objek, dan memperbarui properti objek secara immutable.

---

## Pendahuluan

Dalam pemrograman modern, kita dianjurkan untuk tidak mengubah objek asli secara langsung (prinsip immutability). Spread operator (`...`) menyediakan cara yang sangat bersih dan mudah untuk menyalin properti dari satu objek ke objek baru dengan aman.

---

## Penjelasan Materi

Spread operator (`...`) pada objek digunakan untuk menyebarkan (menyalin) seluruh pasangan key-value dari satu objek ke dalam objek baru.

### 1. Menyalin Objek (Shallow Copy)

```ts
const salinan = { ...objekAsli }
```

### 2. Menggabungkan Objek

```ts
const gabungan = { ...objekA, ...objekB }
```

### 3. Memperbarui Properti secara Aman

```ts
const update = { ...objekAsli, propertiYangDiubah: nilaiBaru }
```

---

## Analogi Kehidupan Sehari-hari

### Fotokopi Lembar Portofolio

Kamu memiliki lembar biodata asli milik siswa. Daripada mencorat-coret lembar asli tersebut untuk mencatat perubahan alamat, kamu memfotokopi lembar asli tersebut terlebih dahulu.

Di lembar hasil fotokopi, kamu mencoret alamat lama dan menulis alamat baru. Lembar aslimu tetap aman, bersih, dan tidak rusak.

---

## Visual Illustration

```text
objekAsli: { nama: "Putra", kelas: "X" }

const objekBaru = { ...objekAsli, kelas: "XI" }

Hasil:
objekBaru: { nama: "Putra", kelas: "XI" } (Diperbarui ✓)
objekAsli: { nama: "Putra", kelas: "X" }  (Tetap utuh aman ✓)
```

---

## Mari Mencoba

Buat `src/bab6/spread-operator.ts`:

```ts
type Identitas = { nama: string; kelas: string }
type Kontak = { email: string; nomorHP: string }

const dataSiswa: Identitas = {
  nama: "Putra Ramadhan",
  kelas: "XI RPL 1"
}

const kontakSiswa: Kontak = {
  email: "putra@smk.sch.id",
  nomorHP: "0812345"
}

// 1. Menggabungkan dua objek menjadi satu objek baru
const profilLengkap = { ...dataSiswa, ...kontakSiswa }
console.log("Gabungan:", profilLengkap)

// 2. Memperbarui properti secara immutable (aman)
const naikKelas = { ...dataSiswa, kelas: "XII RPL 1" }
console.log("\nNaik Kelas:", naikKelas)
console.log("Data Asal :", dataSiswa) // dataSiswa asli tetap utuh

// 3. Menyalin objek secara penuh
const salinanSiswa = { ...dataSiswa }
console.log("\nSalinan:", salinanSiswa)
```

Jalankan:

```text
tsx src/bab6/spread-operator.ts
```

## Output

```text
Gabungan: {
  nama: 'Putra Ramadhan',
  kelas: 'XI RPL 1',
  email: 'putra@smk.sch.id',
  nomorHP: '0812345'
}

Naik Kelas: { nama: 'Putra Ramadhan', kelas: 'XII RPL 1' }
Data Asal : { nama: 'Putra Ramadhan', kelas: 'XI RPL 1' }

Salinan: { nama: 'Putra Ramadhan', kelas: 'XI RPL 1' }
```

---

## Penjelasan Baris per Baris

- `{ ...dataSiswa, ...kontakSiswa }` — menggabungkan seluruh properti dari kedua objek ke objek baru `profilLengkap`.
- `{ ...dataSiswa, kelas: "XII RPL 1" }` — menyalin semua properti `dataSiswa`, kemudian menimpa properti `kelas` dengan nilai yang baru.
- `dataSiswa` asli tidak ikut berubah. Ini adalah dasar dari pemrograman immutable yang aman.

---

## Kesalahan yang Sering Terjadi

### ❌ Urutan penulisan terbalik saat melakukan update properti

```ts
// Salah: kelas baru ditimpa kembali oleh kelas lama dari dataSiswa!
const updateSalah = { kelas: "XII", ...dataSiswa }
console.log(updateSalah.kelas) // Output: "XI RPL 1" (update gagal)
```

**Perbaikan:** Selalu tulis spread operator `...objek` terlebih dahulu, baru tulis properti yang ingin ditimpa di sebelah kanannya.

---

## Latihan

Buat object `laptop` (merk, ram). Buat object baru `laptopUpgrade` yang menyalin isi `laptop` tetapi memperbarui kapasitas `ram` menjadi lebih besar menggunakan spread operator. Tampilkan keduanya.

---

## Ringkasan

- Spread operator (`...`) digunakan untuk menyalin dan menggabungkan properti objek.
- Memungkinkan kita memperbarui data objek secara aman tanpa merusak objek asli (immutable).
- Properti penimpa harus ditulis setelah (di kanan) spread operator agar tidak terhapus.

:::tip[Langkah Selanjutnya]
Lanjut ke **Optional Chaining** untuk belajar cara aman mengakses properti nested.
:::
