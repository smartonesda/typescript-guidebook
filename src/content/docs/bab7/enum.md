---
title: "Enum"
description: Menggunakan Enum di TypeScript untuk mengelompokkan sekumpulan konstanta bernama yang saling berhubungan.
---

# Enum (Enumeration)

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan kegunaan `enum`, membuat enum sederhana, dan menggunakannya sebagai nilai properti objek.

---

## Pendahuluan

`enum` (kependekan dari *enumeration*) adalah fitur khusus TypeScript yang tidak ada di JavaScript murni. `enum` memungkinkan kita mendefinisikan sekumpulan konstanta bernama yang saling berhubungan sehingga membuat kode lebih ramah dibaca dan lebih terstruktur.

---

## Penjelasan Materi

`enum` mengelompokkan nilai-nilai konstan ke dalam satu nama wadah. Secara bawaan, enum di TypeScript bernilai angka mulai dari 0, tetapi kita juga bisa memberikan nilai string eksplisit.

Sintaks dasar:

```ts
enum Arah {
  Utara = "UTARA",
  Selatan = "SELATAN"
}
```

---

## Analogi Kehidupan Sehari-hari

### Menu Pilihan Tetap di Kantin

Bayangkan papan daftar **Kategori Makanan** yang digantung di kantin sekolah:

```text
KATEGORI KANTIN
  ├── MakananBerat (misal: Nasi Goreng)
  ├── Minuman      (misal: Es Teh)
  └── Cemilan      (misal: Gorengan)
```

Setiap kali siswa memesan, mereka harus menyebutkan kategori tersebut agar kasir menekan tombol yang tepat pada mesin kasir. Pilihan tombol kasir sudah terkunci pada 3 kategori itu saja.

---

## Visual Illustration

```text
enum Peran {
  Siswa = "SISWA",
  Guru = "GURU"
}

Peran.Siswa ──► menghasilkan nilai "SISWA"
```

---

## Mari Mencoba

Buat `src/bab7/enum.ts`:

```ts
// 1. Mendefinisikan Enum String
enum Jurusan {
  RPL = "Rekayasa Perangkat Lunak",
  TKJ = "Teknik Komputer dan Jaringan",
  DKV = "Desain Komunikasi Visual"
}

type Siswa = {
  nama: string;
  jurusan: Jurusan; // menggunakan Enum sebagai tipe
}

// 2. Menggunakan Enum saat membuat objek
const siswaA: Siswa = {
  nama: "Putra",
  jurusan: Jurusan.RPL // mengisi menggunakan objek Enum
}

console.log("Profil Siswa:", siswaA)
console.log(`Nama Jurusan: ${siswaA.jurusan}`)
```

Jalankan:

```text
tsx src/bab7/enum.ts
```

## Output

```text
Profil Siswa: { nama: 'Putra', jurusan: 'Rekayasa Perangkat Lunak' }
Nama Jurusan: Rekayasa Perangkat Lunak
```

---

## Penjelasan Baris per Baris

- `enum Jurusan { ... }` — membuat enum bernama `Jurusan`. Kunci `RPL` memiliki nilai asli `"Rekayasa Perangkat Lunak"`.
- `Jurusan.RPL` — cara kita mengakses nilai dari enum tersebut. Nilai ini sangat aman karena kita tidak menuliskan string manual secara langsung yang rawan typo.

---

## Enum Angka (Numeric Enum)

Jika tidak diberi nilai, enum otomatis bernilai angka urut mulai dari 0:

```ts
enum Hari {
  Senin, // 0
  Selasa, // 1
  Rabu   // 2
}

console.log(Hari.Senin) // Output: 0
```

---

## Latihan

1. Buat enum `StatusTugas` dengan nilai: `Belum` = "BELUM", `Proses` = "PROSES", `Selesai` = "SELESAI".
2. Buat objek `tugas` (nama, status) yang statusnya mengambil nilai dari enum tersebut, lalu tampilkan.

---

## Ringkasan

- `enum` mengelompokkan nilai konstan bernama dalam satu wadah.
- Bernilai angka (mulai dari 0) secara bawaan, atau bisa diisi string.
- Diakses menggunakan sintaks `NamaEnum.NamaKunci`.
- Membantu menghindari hardcoded string yang rawan salah ketik.

:::tip[Langkah Selanjutnya]
Lanjut ke **Interface vs Type** untuk membandingkan keduanya secara objektif.
:::
