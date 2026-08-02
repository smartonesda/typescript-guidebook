---
title: "Mengapa Object?"
description: Memahami masalah yang diselesaikan object — menghindari variabel berhamburan dan mengorganisir data terelasi.
---

# Mengapa Object?

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan mengapa object digunakan dan membandingkan struktur data tanpa object dengan struktur data menggunakan object.

---

## Pendahuluan

Kita bisa menyimpan data nama siswa di string, umur di number, dan status di boolean. Tapi jika program kita mengelola banyak siswa, menggunakan variabel-variabel lepas akan sangat memusingkan dan rawan memicu bug tertukarnya data antar siswa.

---

## Masalah Tanpa Object

### Skenario 1: Variabel Lepas (Berhamburan)

```ts
const namaSiswa1 = "Andi"
const umurSiswa1 = 17
const kelasSiswa1 = "XI RPL"

const namaSiswa2 = "Budi"
const umurSiswa2 = 16
const kelasSiswa2 = "X RPL"
```

Jika ada 36 siswa, kita akan memiliki 108 variabel lepas. Sangat berantakan dan sulit dibaca.

### Skenario 2: Menggunakan Array Biasa

```ts
const siswa1 = ["Andi", 17, "XI RPL"]
```

Cara ini lebih rapi secara jumlah variabel. Tapi kita kehilangan **kejelasan makna**:
- Apa arti indeks `1`? Apakah itu umur, nomor absen, atau nilai?
- Kita harus menghafal indeks: `siswa1[0]` adalah nama, `siswa1[1]` adalah umur. Jika urutan array berubah, kode kita rusak.

---

## Solusi Dengan Object

```ts
const siswa1 = {
  nama: "Andi",
  umur: 17,
  kelas: "XI RPL"
}
```

Sekarang data terorganisir dalam satu variabel (`siswa1`), dan setiap data memiliki **label yang jelas** (`nama`, `umur`, `kelas`). Kita tidak perlu menghafal indeks lagi.

---

## Analogi Kehidupan Sehari-hari

### Map Dokumen Terpisah vs Map Portofolio

Bayangkan kamu memiliki dokumen milik siswa bernama Budi: foto, fotokopi KTP, dan rapor.

- **Tanpa Object** seperti menaruh lembaran kertas Budi berserakan di atas meja bersama kertas-kertas milik siswa lain. Kertas mudah tertukar.
- **Dengan Object** seperti memasukkan semua dokumen Budi ke dalam **satu map plastik besar** bertuliskan "PORTFOLIO BUDI". Dokumen tersimpan rapi dan tidak akan tertukar.

---

## Visual Illustration

```text
TANPA OBJECT                    DENGAN OBJECT (MAP)
┌──────────┐ ┌──────────┐       ┌──────────────────────┐
│namaSiswa1│ │umurSiswa1│  VS   │ siswa1               │
└──────────┘ └──────────┘       │  ├── nama: "Andi"    │
┌──────────┐ ┌──────────┐       │  ├── umur: 17        │
│namaSiswa2│ │umurSiswa2│       │  └── kelas: "XI RPL" │
└──────────┘ └──────────┘       └──────────────────────┘
(Variabel berhamburan)          (Terorganisir dalam map)
```

---

## Mari Mencoba

Buat `src/bab6/mengapa-object.ts`:

```ts
// Tanpa objek — data terpisah dan rawan tertukar
const namaSiswa: string = "Andi"
const nilaiUjian: number = 88

// Dengan objek — data terikat rapi pada satu siswa
const profilAndi = {
  nama: "Andi",
  nilai: 88,
  lulus: true
}

console.log(`Siswa lepas: ${namaSiswa} nilainya ${nilaiUjian}`)
console.log(`Siswa objek: ${profilAndi.nama} nilainya ${profilAndi.nilai}`)
```

Jalankan:

```text
tsx src/bab6/mengapa-object.ts
```

---

## Tiga Keuntungan Utama Object

### 1. Data Terikat Kuat

Semua data yang mendeskripsikan satu benda/orang berkumpul di satu variabel. Tidak ada risiko umur Andi tertukar dengan umur Budi.

### 2. Label yang Jelas (Key)

Key bertindak sebagai dokumentasi langsung. Kita langsung tahu bahwa `umur: 17` mengindikasikan informasi umur.

### 3. Mudah Dikirim ke Function

Kita cukup mengirim **satu objek** ke dalam function, bukan mengirim 5 parameter variabel terpisah:

```ts
// Tanpa objek
function tampilkan(nama: string, umur: number, kelas: string) { }

// Dengan objek (jauh lebih rapi)
function tampilkan(siswa: { nama: string; umur: number; kelas: string }) { }
```

---

## Latihan

1. Tuliskan kode deklarasi biodata guru favoritmu **tanpa** object (gunakan variabel lepas).
2. Refactor kode itu menjadi satu object `guruFavorit`.
3. Bandingkan kejelasan dan kerapian kedua versi kode tersebut.

---

## Ringkasan

- Variabel lepas untuk satu entitas membuat kode berhamburan dan rawan tertukar.
- Array biasa tidak memberikan label makna pada elemen data.
- Object menyatukan data berbeda jenis dengan label (key) yang jelas.
- Object mempermudah pengiriman data terelasi ke dalam function.

:::tip[Langkah Selanjutnya]
Lanjut ke **Membuat Object** untuk belajar deklarasi object beserta penulisan tipenya di TypeScript.
:::
