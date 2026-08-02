---
title: "Studi Kasus: Validasi Data Akademik — BAB 11"
description: Studi kasus memvalidasi data akademik terintegrasi menggunakan objek class yang mematuhi interface kontrak di TypeScript.
---

# Studi Kasus: Validasi Data Akademik

## Tujuan Pembelajaran
Setelah mengikuti studi kasus ini, kamu diharapkan dapat:
- Merancang relasi objek akademik antara Siswa, Guru, dan Kelas secara modular.
- Menguji kecocokan tipe objek menggunakan parameter class.
- Menganalisis bagaimana layered architecture mempermudah pelacakan data.

---

## Pendahuluan
Dalam studi kasus ini, kita akan melihat bagaimana class objek `SiswaClass` dan `GuruClass` yang kita buat di halaman-halaman sebelumnya berinteraksi secara aman di dalam `RombonganBelajar` dengan pengawasan ketat dari compiler TypeScript.

---

## Penjelasan
Kita akan menyusun file pengujian data untuk mensimulasikan bagaimana compiler meloloskan tipe union NIS (bisa string maupun number) dan menolak jika kita memasukkan data properti di luar spesifikasi class resmi.

---

## Analogi Kehidupan Sehari-hari: Lembar Rapor Akademik Gabungan
Bayangkan lembar rapor kertas resmi sekolah:
- **Nama dan NIS** (Tipe data terenkapsulasi).
- **Hasil Nilai** (Wajib 0-100).
- **Tanda Tangan Wali Kelas** (Objek Guru).

Seluruh lembaran ini disatukan dalam satu map plastik tebal (Rombel). Guru tidak bisa memasukkan lembar foto liburan ke dalam map tersebut karena format isian map dikunci hanya untuk data akademik resmi.

---

## Visual Illustration: Alur Validasi Objek Rombel

```text
[ Objek Siswa ] ──┐
                  ├── dimasukkan ke ──► [ Rombel Kelas ] ──► Validasi structural OK ✓
[ Objek Guru ]  ──┘
```

---

## Live Coding: Validasi Data Terintegrasi
Buat file baru bernama `src/bab11/studi-kasus-validasi.ts` di folder local komputermu:

```ts
import { SiswaClass, GuruClass, StatusHadir } from "../models";
import { AcademicRepository } from "../repositories/academic-repository";

// Inisialisasi Repository
const repoSiswa = new AcademicRepository<SiswaClass>("DB_SISWA");

// 1. Uji Coba Objek Valid
const siswaValid = new SiswaClass(1, "Putra Ramadhan", 17, "NIS-1001", "XI RPL 1");
siswaValid.nilaiRataRata = 85;
repoSiswa.tambah(siswaValid);

console.log("✓ Sukses: Siswa valid dimasukkan.");

// 2. Uji Coba Objek Salah Tipe NIS (TypeScript meloloskan jika tipe union)
const siswaNisAngka = new SiswaClass(2, "Dewi", 16, 1002, "XI RPL 1"); // NIS berupa number
repoSiswa.tambah(siswaNisAngka);
console.log("✓ Sukses: Siswa NIS angka dimasukkan (Union valid).");

// 3. Menampilkan isi database siswa
console.log("\nDatabase Siswa:");
console.log(repoSiswa.ambilSemua());
```

---

## Output
Jalankan di terminal dengan perintah `tsx src/bab11/studi-kasus-validasi.ts`. Output yang diharapkan:

```text
✓ Sukses: Siswa valid dimasukkan.
✓ Sukses: Siswa NIS angka dimasukkan (Union valid).

Database Siswa:
[
  SiswaClass {
    nama: 'Putra Ramadhan',
    umur: 17,
    nis: 'NIS-1001',
    kelas: 'XI RPL 1',
    id: 1,
    _nilaiRataRata: 85
  },
  SiswaClass {
    nama: 'Dewi',
    umur: 16,
    nis: 1002,
    kelas: 'XI RPL 1',
    id: 2,
    _nilaiRataRata: 0
  }
]
```

---

## Penjelasan Baris per Baris
- `const siswaValid = new SiswaClass(...)`: Membuat instansi objek baru dari class `SiswaClass` (BAB 8).
- `siswaNisAngka`: Lolos validasi meskipun NIS diisi angka `1002` karena model properti NIS mendukung tipe union `string | number` (BAB 7).
- `_nilaiRataRata: 85`: Menampilkan nilai properti private internal objek hasil enkapsulasi.

---

## Common Mistakes
- **Menulis Tipe Properti Secara Manual Tanpa Model**: Mendefinisikan objek siswa baru tanpa mengaitkannya ke class `SiswaClass`, akibatnya compiler tidak bisa mengecek method getter/setter dari objek tersebut.

---

## Tips
:::tip[Gunakan console.dir]
Gunakan perintah `console.dir(objek, { depth: null })` untuk menampilkan seluruh data nested object bagian dalam secara lengkap di terminal tanpa terpotong tulisan `[Object]`.
:::

---

## Ringkasan
- Objek divalidasi bentuknya berdasarkan cetak biru class dan interface yang terkait.
- Tipe union meloloskan variasi format data masukan (seperti NIS berupa string atau number).
- Output terminal mencerminkan enkapsulasi properti private objek secara terstruktur.

---

## Latihan
1. Buat file `studi-kasus-validasi.ts` di folder `src/bab11/` komputermu.
2. Tambahkan satu siswa baru dengan umur diisi string `"tujuh belas"` dan amati error compile-nya.
