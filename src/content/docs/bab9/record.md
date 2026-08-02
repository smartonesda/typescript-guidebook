---
title: "Utility Type: Record"
description: Menggunakan Utility Type Record<K, T> untuk memetakan key dan value secara terstruktur di TypeScript.
---

# Utility Type: `Record`

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari Utility Type `Record<K, T>`.
- Membuat objek pemetaan (kamus/dictionary) menggunakan `Record`.
- Membatasi key objek menggunakan union kustom bersama `Record`.

---

## Pendahuluan

Bagaimana cara kita membuat objek yang bertindak sebagai "kamus" atau daftar index? Misalnya: membuat daftar kelas di mana setiap key-nya adalah nama kelas (`"XI_RPL_1"`, `"XI_RPL_2"`) dan value-nya wajib berupa objek data detail kelas tersebut. 

TypeScript menyediakan Utility Type **`Record<K, T>`** untuk kebutuhan pemetaan key-value terstruktur ini.

---

## Penjelasan Materi: Cara Kerja `Record`

Utility Type `Record<K, T>` digunakan untuk mendefinisikan tipe objek di mana:
- **`K`** adalah tipe data untuk key (biasanya string kustom atau union string).
- **`T`** adalah tipe data untuk value.

Sintaks dasar:

```ts
const objek: Record<TipeKey, TipeValue> = { ... }
```

---

## Analogi Kehidupan Sehari-hari: Lemari Kelas dengan Label Tertentu

Bayangkan sebuah **Lemari Rapor Besar** di kantor guru:

```text
Lemari Rapor (Record<Kelas, Rapor[]>)
  ├── Laci "XI_RPL_1" ──► Berisi kumpulan Rapor siswa kelas XI RPL 1
  ├── Laci "XI_RPL_2" ──► Berisi kumpulan Rapor siswa kelas XI RPL 2
  └── Laci "XI_DKV_1" ──► Berisi kumpulan Rapor siswa kelas XI DKV 1
```

Setiap laci diberi label nama kelas yang jelas (Key). Dan isi di dalam setiap laci dijamin merupakan tumpukan rapor siswa (Value). Guru dilarang membuat laci baru tanpa label kelas yang terdaftar.

---

## Visual Illustration: Transformasi Record

```text
type Kelas = "RPL" | "TKJ"
type Detail = { wali: string }

Record<Kelas, Detail> ──► menghasilkan tipe objek:
{
  RPL: { wali: string },
  TKJ: { wali: string }
}
```

---

## Mari Mencoba: Data Wali Rombongan Belajar

Mari kita buat program pemetaan wali kelas menggunakan `Record` agar data kelas dan wali terikat secara aman.

Buat file bernama `src/bab9/record-utility.ts`:

```ts
type DetailKelas = {
  waliKelas: string;
  jumlahSiswa: number;
};

// 1. Mendefinisikan union untuk nama kelas (Key)
type NamaKelas = "XI_RPL_1" | "XI_RPL_2" | "XI_TKJ_1";

// 2. Membuat objek pemetaan dengan Record
const dataAkademik: Record<NamaKelas, DetailKelas> = {
  XI_RPL_1: { waliKelas: "Pak Budi", jumlahSiswa: 36 },
  XI_RPL_2: { waliKelas: "Bu Ani", jumlahSiswa: 35 },
  XI_TKJ_1: { waliKelas: "Pak Eko", jumlahSiswa: 34 }
};

console.log("=== DATA AKADEMIK KELAS ===");
console.log("XI RPL 1:", dataAkademik.XI_RPL_1);
console.log("XI TKJ 1:", dataAkademik.XI_TKJ_1);

// Coba lakukan ini (Error!)
// const dataSalah: Record<NamaKelas, DetailKelas> = {
//   XI_RPL_1: { waliKelas: "Pak Budi", jumlahSiswa: 36 },
//   XI_RPL_2: { waliKelas: "Bu Ani", jumlahSiswa: 35 },
//   XI_TKJ_1: { waliKelas: "Pak Eko", jumlahSiswa: 34 },
//   XI_DKV_1: { waliKelas: "Pak Eko", jumlahSiswa: 34 } // ✗ Error! XI_DKV_1 tidak ada di NamaKelas
// };
```

Jalankan dengan perintah:
```text
tsx src/bab9/record-utility.ts
```

## Output
```text
=== DATA AKADEMIK KELAS ===
XI RPL 1: { waliKelas: 'Pak Budi', jumlahSiswa: 36 }
XI TKJ 1: { waliKelas: 'Pak Eko', jumlahSiswa: 34 }
```

---

## Penjelasan Baris per Baris

- `Record<NamaKelas, DetailKelas>` — Memaksa agar objek `dataAkademik` memiliki key yang sesuai dengan isi `NamaKelas` (XI_RPL_1, XI_RPL_2, XI_TKJ_1), dan setiap value-nya wajib memiliki format `DetailKelas`.
- Jika ada nama kelas yang kurang ditulis atau ada nama kelas kustom lain dimasukkan, TypeScript langsung memicu error compile.

---

## Latihan
1. Buat tipe union `KontakType = "telepon" | "email"`.
2. Buat objek `kontakSiswa` menggunakan `Record<KontakType, string>` untuk menyimpan kontak telepon dan email siswa.
3. Tampilkan hasilnya.

---

## Ringkasan
- `Record<K, T>` memetakan key `K` ke value bertipe `T`.
- Membantu membuat data kamus (dictionary) atau pemetaan kelompok terstruktur.
- Menjamin seluruh kunci pada union wajib diisi nilainya di dalam objek.

:::tip[Langkah Selanjutnya]
Lanjut ke **Exclude** untuk mempelajari penyaringan tipe union.
:::
