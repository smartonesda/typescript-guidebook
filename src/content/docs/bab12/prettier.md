---
title: "Prettier — BAB 12"
description: Pengenalan Prettier sebagai automatic code formatter untuk menjaga konsistensi gaya penulisan kode.
---

# Prettier

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan apa itu code formatter (Prettier).
- Membedakan peran ESLint (linter) dengan Prettier (formatter).
- Mengonfigurasi formatting otomatis saat file disimpan (*format on save*) di VS Code.

---

## Pendahuluan
Setiap programmer memiliki selera gaya penulisan yang berbeda: ada yang suka menggunakan tanda titik koma `;` di akhir baris, ada yang tidak suka. Ada yang menggunakan spasi 2 kali untuk indentasi, ada yang menggunakan 4 kali. 

Jika semua orang menulis dengan gaya sendiri-sendiri di satu project tim, kodenya akan menjadi belang-belang dan tidak konsisten. **Prettier** hadir sebagai "polisi kerapian" otomatis untuk menyamakan semua gaya tersebut.

---

## Penjelasan: Apa itu Prettier?

**Prettier** adalah alat *Opinionated Code Formatter* otomatis. Ia membaca seluruh kodemu dan memformat ulang kodenya secara paksa agar mematuhi aturan kerapian yang seragam (misal: merapikan jarak spasi, tanda kutip, indentasi, dan tanda titik koma).

### Perbedaan ESLint vs Prettier
Banyak pemula bingung membedakan keduanya. Ini perbedaan mudahnya:
- **ESLint (Linter)**: Menganalisis **kebenaran kode** (mencari variabel tak terpakai (BAB 10), mendeteksi potensi bug, melarang tipe `any` (BAB 9)).
- **Prettier (Formatter)**: Hanya merapikan **tampilan kode** (spasi, indentasi kurung kurawal, merapikan baris yang terlalu panjang).

---

## Analogi Kehidupan Sehari-hari: Petugas Perapi Tulisan Tangan
Bayangkan kamu menulis di buku catatan harian:

```text
Kamu: Menulis terburu-buru, tulisan miring-miring, jarak antar kata tidak sama, 
      ada kertas terlipat.
Prettier (Petugas Perapi): Datang mengambil bukumu, menyalin kembali tulisanmu dengan 
      mesin ketik komputer yang hurufnya tegak lurus, spasi rata kiri-kanan, 
      dan margin kertasnya rapi presisi.
```

Prettier tidak mengubah isi kalimat tulisanmu (ia tidak mengubah logika kode). Ia hanya memastikan tulisan terlihat rapi, rata, dan indah dipandang mata.

---

## Visual Illustration: Alur Kerja Prettier

```text
Kode Berantakan ──► Tekan Simpan (Save) ──► Prettier memformat ──► Kode Rapi Konsisten
```

---

## Example: Sebelum dan Sesudah Pemakaian Prettier

### Bad Code (Berantakan & Tidak Konsisten)
```ts
const   siswa   =   "Putra"
let nilai=90;
if(nilai>=75){console.log("Lulus");}
```

### Good Code (Rapi Hasil Format Prettier)
```ts
const siswa = "Putra";
let nilai = 90;
if (nilai >= 75) {
  console.log("Lulus");
}
```

---

## Common Mistakes
- **Konflik Antara ESLint & Prettier**: Mengaktifkan aturan spasi di ESLint yang bentrok dengan aturan spasi di Prettier, sehingga kode terus berubah-ubah dan memicu error palsu.
  - *Solusi*: Pasang library `eslint-config-prettier` untuk menonaktifkan semua aturan gaya di ESLint yang bisa bentrok dengan Prettier.

---

## Tips
:::tip[Buat File .prettierrc]
Buatlah file konfigurasi `.prettierrc` di folder utama projectmu untuk mengunci aturan gaya penulisan agar semua anggota tim menggunakan aturan yang sama:
```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2
}
```
:::

---

## Best Practice
- Selalu cantumkan file `.prettierignore` untuk melarang Prettier memformat file di folder `node_modules/` atau `dist/` agar proses build tidak terhambat.

---

## Ringkasan
- Prettier mengotomatiskan kerapian visual kode program (indentasi, spasi, semi-kolon).
- Formatter fokus pada estetika; Linter fokus pada kualitas logika.
- Mengaktifkan *Format on Save* di VS Code sangat mempercepat penulisan kode bersih.

---

## Latihan
1. Install ekstensi **Prettier - Code Formatter** di VS Code komputermu.
2. Aktifkan *Format on Save* dan coba buat kode berantakan untuk melihat proses perapian otomatisnya.
