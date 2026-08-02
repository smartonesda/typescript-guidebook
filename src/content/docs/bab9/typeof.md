---
title: "typeof Operator"
description: Menggunakan operator typeof di TypeScript untuk mengekstrak tipe data dari variabel nyata.
---

# typeof Operator

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan perbedaan `typeof` di JavaScript biasa dengan TypeScript.
- Mengambil tipe data dari objek/variabel nyata menggunakan `typeof`.
- Menyederhanakan penulisan tipe data dengan merujuk pada objek contoh.

---

## Pendahuluan

Pernahkah kamu membuat sebuah objek contoh yang sangat lengkap, lalu kamu ingin membuat tipe data (type alias) yang strukturnya sama persis dengan objek contoh tersebut? 

Daripada kamu menulis ulang seluruh properti objek ke dalam `type` alias secara manual, kamu bisa menyuruh TypeScript untuk "mengintip" dan menyalin tipe data dari objek contoh tersebut menggunakan operator **`typeof`**.

---

## Penjelasan Materi: `typeof` sebagai Pengekstrak Tipe

Di JavaScript murni, `typeof` digunakan saat runtime untuk menghasilkan string nama tipe (misal: `"string"` atau `"number"`).

Di TypeScript, **`typeof`** memiliki fungsi tambahan di tingkat kompilasi: ia bisa digunakan untuk mengambil struktur tipe data dari sebuah variabel atau objek nyata untuk digunakan sebagai tipe variabel lain.

```ts
const koordinatAwal = { x: 10, y: 20 };

// Tipe "Titik" otomatis terisi: { x: number; y: number; }
type Titik = typeof koordinatAwal;
```

---

## Analogi Kehidupan Sehari-hari: Melihat Jenis Barang di dalam Kotak

Bayangkan kamu melihat sebuah wadah kosmetik milik ibumu:

```text
Wadah Kosmetik (Variabel Nyata)
  ├── Berisi krim pelembap
  └── Merk: Amanah
```

Kamu ingin membeli wadah yang **jenis spesifikasinya sama persis** untuk kado temanmu. Kamu membawa wadah milik ibumu ke toko dan berkata kepada pelayan: *"Saya ingin wadah kosmetik yang jenis tipenya sama persis seperti benda ini."*

```text
typeof Wadah Ibumu = Wadah baru dengan spesifikasi yang sama persis
```

Kamu tidak perlu menghafal atau mencatat spesifikasi pabriknya secara manual. Pelayan toko cukup melihat contoh wadah yang kamu bawa untuk mencarikan tipe yang sama.

---

## Visual Illustration: Alur Kerja typeof

```text
Objek Nyata: const dataSiswa = { nama: "Putra", kelas: "XI" }

Ekstraksi Tipe: type Siswa = typeof dataSiswa

Hasil Tipe Siswa: { nama: string, kelas: string }
```

---

## Mari Mencoba: Ekstraksi Tipe dari Objek Contoh

Mari buat program yang mengekstrak tipe data dari objek konfigurasi untuk digunakan pada objek baru.

Buat file bernama `src/bab9/typeof-operator.ts`:

```ts
// 1. Objek contoh nyata (Config)
const konfigurasiAplikasi = {
  namaAplikasi: "SIAKAD SMK",
  versi: "3.0.0",
  fiturAktif: true,
  maxSiswa: 500
};

// 2. Mengekstrak tipe data menggunakan typeof
type Konfigurasi = typeof konfigurasiAplikasi;

// 3. Menggunakan tipe hasil ekstraksi pada objek baru
const konfigurasiSekolahLain: Konfigurasi = {
  namaAplikasi: "Koperasi Siswa",
  versi: "1.0.0",
  fiturAktif: false,
  maxSiswa: 100
};

console.log("Konfig Asli:", konfigurasiAplikasi);
console.log("Konfig Baru:", konfigurasiSekolahLain);
```

Jalankan dengan perintah:
```text
tsx src/bab9/typeof-operator.ts
```

## Output
```text
Konfig Asli: { namaAplikasi: 'SIAKAD SMK', versi: '3.0.0', fiturAktif: true, maxSiswa: 500 }
Konfig Baru: { namaAplikasi: 'Koperasi Siswa', versi: '1.0.0', fiturAktif: false, maxSiswa: 100 }
```

---

## Penjelasan Baris per Baris

- `const konfigurasiAplikasi = { ... }` — Membuat objek nyata (bukan tipe).
- `type Konfigurasi = typeof konfigurasiAplikasi` — TypeScript mengintip properti di dalam `konfigurasiAplikasi`, mencatat tipe datanya, dan menyimpannya sebagai tipe alias `Konfigurasi`.
- `const konfigurasiSekolahLain: Konfigurasi` — Objek baru wajib mematuhi seluruh properti dan tipe data hasil intipan `typeof` tersebut.

---

## Latihan
1. Buat objek `siswaContoh` dengan properti `nama`, `umur`, dan `lulus` (boolean).
2. Gunakan `typeof` untuk membuat tipe `Siswa`.
3. Buat objek `siswaBaru` menggunakan tipe tersebut dan tampilkan hasilnya.

---

## Ringkasan
- Di TypeScript, `typeof` dapat mengekstrak tipe data dari variabel/objek nyata secara otomatis.
- Menghindari penulisan ulang struktur objek yang sudah dideklarasikan.
- Mempermudah integrasi data config atau data dummy contoh menjadi tipe data formal.

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu Utility Type** untuk mulai mempelajari utilitas manipulasi tipe data bawaan TypeScript.
:::
