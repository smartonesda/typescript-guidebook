---
title: "Utility Type: Parameters"
description: Menggunakan Utility Type Parameters<T> untuk mengambil tipe data parameter input dari sebuah fungsi dalam bentuk tuple di TypeScript.
---

# Utility Type: `Parameters`

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari Utility Type `Parameters<T>`.
- Mengambil tipe data parameter input fungsi dalam bentuk tuple.
- Membaca elemen parameter tertentu menggunakan indeks tuple.

---

## Pendahuluan

Jika `ReturnType` digunakan untuk melihat **hasil akhir (output)** dari sebuah fungsi, bagaimana jika kita ingin mengintip **bahan masukan (parameter input)** dari fungsi tersebut? 

Contoh: Kita menggunakan fungsi dari library pihak ketiga yang menerima parameter yang rumit. Kita ingin membuat variabel baru yang tipe datanya sama persis dengan parameter fungsi tersebut. Kita menggunakan **`Parameters`**.

---

## Penjelasan Materi: Cara Kerja `Parameters`

Utility Type `Parameters<T>` mengambil seluruh tipe data parameter dari tipe fungsi `T` dan mengembalikannya dalam bentuk **tuple** (array dengan panjang dan tipe tetap).

Sintaks dasar:

```ts
type TipeInput = Parameters<typeof namaFungsi>;
```

Sama seperti `ReturnType`, kita wajib menuliskan `typeof` di depan nama fungsi nyata.

---

## Analogi Kehidupan Sehari-hari: Daftar Bahan Baku Masuk Mesin Roti

Kembali ke analogi **Mesin Roti Otomatis**:

```text
Bahan Masuk ──► [ Mesin Roti ]
  ├── Tepung Terigu (Tipe 1: string)
  ├── Air           (Tipe 2: number)
  └── Ragi          (Tipe 3: boolean)
```

Kamu ingin menyiapkan wadah-wadah takaran di dapur untuk menampung bahan baku yang akan dimasukkan ke mesin. Kamu cukup mengintip **lubang input mesin** untuk mengetahui bahan apa saja yang dibutuhkan dan berapa ukurannya.

```text
Parameters<Mesin Roti> = [Tepung Terigu, Air, Ragi] (Tuple bahan masuk)
```

---

## Visual Illustration: Alur Kerja Parameters

```text
Fungsi: function kirim(nama: string, umur: number) {}

Parameters: type Input = Parameters<typeof kirim>

Hasil Tipe Input (Tuple): [string, number]
```

Untuk mengambil tipe parameter pertama (nama): `Input[0]` (string)

---

## Mari Mencoba: Mengintip Parameter Fungsi Pendaftaran

Mari buat program yang mengekstrak tipe data parameter fungsi pendaftaran siswa.

Ke dalam file bernama `src/bab9/parameters-utility.ts`:

```ts
type DetilPendaftaran = {
  sekolahAsal: string;
  tahunLulus: number;
};

// Fungsi pendaftaran dengan dua parameter
function daftarkanSiswa(nama: string, info: DetilPendaftaran): void {
  console.log(`Mendaftarkan ${nama} dari ${info.sekolahAsal}...`);
}

// 1. Mengekstrak seluruh parameter (menghasilkan tuple)
type ParameterDaftar = Parameters<typeof daftarkanSiswa>;

// ParameterDaftar bertipe: [string, DetilPendaftaran]

// 2. Mengambil tipe parameter kedua menggunakan indeks tuple [1]
type InfoPendaftaran = ParameterDaftar[1];

// 3. Menggunakan tipe hasil ekstraksi pada objek baru
const infoSiswaBaru: InfoPendaftaran = {
  sekolahAsal: "SMP Negeri 1 Sidoarjo",
  tahunLulus: 2025
};

console.log("Tipe tuple lengkap:", typeof daftarkanSiswa);
console.log("Objek info baru   :", infoSiswaBaru);
```

Jalankan dengan perintah:
```text
tsx src/bab9/parameters-utility.ts
```

## Output
```text
Tipe tuple lengkap: function
Objek info baru   : { sekolahAsal: 'SMP Negeri 1 Sidoarjo', tahunLulus: 2025 }
```

---

## Penjelasan Baris per Baris

- `Parameters<typeof daftarkanSiswa>` — Mengekstrak tipe parameter `(nama: string, info: DetilPendaftaran)` menjadi tuple `[string, DetilPendaftaran]`.
- `ParameterDaftar[1]` — Mengakses indeks `1` pada tuple untuk mengambil tipe data parameter kedua (`DetilPendaftaran`).
- Objek `infoSiswaBaru` berhasil diverifikasi tipe datanya agar cocok dengan parameter kedua fungsi tersebut.

---

## Latihan
1. Buat fungsi `hitung(a: number, b: string): void`.
2. Gunakan `Parameters` dan ambil tipe data dari parameter pertama (`a`) menggunakan indeks `[0]`.
3. Buat variabel menggunakan tipe tersebut dan tampilkan.

---

## Ringkasan
- `Parameters<T>` mengambil semua tipe parameter input fungsi dalam bentuk tuple.
- Membantu menyalin spesifikasi parameter fungsi kustom atau pihak ketiga secara otomatis.
- Gunakan indeks tuple (seperti `[0]`, `[1]`) untuk mengakses tipe parameter tertentu secara spesifik.

:::tip[Langkah Selanjutnya]
Lanjut ke **Studi Kasus** untuk mengaplikasikan seluruh konsep Generic dan Utility Types pada sistem akademik sekolah.
:::
