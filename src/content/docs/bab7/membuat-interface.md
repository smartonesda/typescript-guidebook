---
title: "Membuat Interface"
description: Panduan langkah demi langkah mendefinisikan interface baru dengan tipe data terstruktur di TypeScript.
---

# Membuat Interface

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat interface baru secara mandiri dan menguji validitas format penulisan properti objek.

---

## Pendahuluan

Membuat interface adalah langkah pertama sebelum kita membuat objek. Di halaman ini, kita akan membiasakan diri menulis deklarasi interface yang bersih dan rapi sesuai aturan compiler TypeScript.

---

## Aturan Penulisan Sintaks

```ts
interface NamaInterface {
  namaProperti: tipeData;
}
```

1. Gunakan nama yang mewakili **kategori tunggal** (singular) objek: `Siswa`, bukan `SiswaSiswa` atau `DaftarSiswa`.
2. Akhiri setiap baris properti dengan tanda titik koma `;` (opsional tapi dianjurkan untuk kejelasan).
3. Jangan gunakan tanda `=` sebelum `{`.

---

## Analogi Kehidupan Sehari-hari

### Cetakan Kue

Interface seperti **cetakan kue martabak**. Cetakan menentukan bahwa kue yang dihasilkan harus berbentuk bulat bersekat-sekat.

```text
Cetakan Martabak (Interface)
  ├── Berbentuk bulat
  └── Terbagi 8 sekat

Kue Martabak Manis (Object) ──► Mengikuti cetakan bulat sekat 8 ✓
Kue Martabak Asin (Object)   ──► Dibuat di wajan datar ✗ (Bukan Martabak Manis)
```

Kamu tidak bisa membuat kue martabak manis berbentuk segitiga dari cetakan bulat tersebut. Kue aslinya (objek) dipaksa mengikuti bentuk cetakannya (interface).

---

## Visual Illustration

```text
Cetak Biru Interface
interface Motor {
  merk: string;
  warna: string;
}

Objek Nyata
const motorAndi: Motor = {
  merk: "Honda",
  warna: "Hitam"
}
```

---

## Mari Mencoba

Buat `src/bab7/membuat-interface.ts`:

```ts
// 1. Mendeklarasikan Interface
interface Guru {
  nama: string;
  nip: number;
  mataPelajaran: string;
}

// 2. Mengimplementasikan pada Objek Guru A
const guruRPL: Guru = {
  nama: "Pak Budi",
  nip: 19870615,
  mataPelajaran: "Pemrograman Web"
}

// 3. Mengimplementasikan pada Objek Guru B
const guruDKV: Guru = {
  nama: "Bu Ani",
  nip: 19900320,
  mataPelajaran: "Desain Grafis"
}

console.log("Guru RPL:", guruRPL.nama)
console.log("Guru DKV:", guruDKV.nama)
```

Jalankan:

```text
tsx src/bab7/membuat-interface.ts
```

## Output

```text
Guru RPL: Pak Budi
Guru DKV: Bu Ani
```

---

## Kesalahan yang Sering Terjadi

### ❌ Mengisi tipe yang tidak sesuai deklarasi

```ts
const guruBaru: Guru = {
  nama: "Pak Eko",
  nip: "19950812", // Error! Tipe string tidak bisa masuk ke number
  mataPelajaran: "RPL"
}
```

**Perbaikan:** Sesuaikan nilai properti dengan tipe data yang diminta interface.

---

## Tips

:::tip[Wajib Diisi Semua]
Secara default, seluruh properti yang ada di dalam interface bersifat **wajib**. Jika kamu melewatkan satu properti saja, TypeScript akan langsung menampilkan error. Jika ada properti yang boleh kosong, gunakan properti opsional (akan dibahas di halaman berikutnya).
:::

---

## Latihan

Buat interface `Laptop` dengan properti: `merk` (string), `ram` (number), dan `ssd` (boolean). Buat objek laptop aslimu menggunakan interface tersebut dan tampilkan di terminal.

---

## Ringkasan

- Interface dideklarasikan menggunakan kata kunci `interface`.
- Seluruh properti wajib diisi kecuali dinyatakan opsional.
- Nama interface sebaiknya menggunakan PascalCase.

:::tip[Langkah Selanjutnya]
Lanjut ke **Interface pada Object**.
:::
