---
title: "Naming Convention — BAB 12"
description: Aturan baku penamaan variabel, fungsi, class, interface, dan enum di TypeScript.
---

# Naming Convention (Aturan Penamaan)

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan pentingnya konsistensi penamaan dalam penulisan kode program.
- Membedakan penggunaan camelCase, PascalCase, dan UPPER_SNAKE_CASE.
- Memilih nama variabel dan fungsi yang deskriptif serta menghindari nama satu huruf.

---

## Pendahuluan
Nama variabel adalah label informasi. Jika kamu menamai variabel dengan nama asal-asalan seperti `a`, `b1`, atau `temp`, kodemu akan segera menjadi teka-teki yang membingungkan. TypeScript dan industri software memiliki kesepakatan aturan penamaan (*naming convention*) yang wajib dipatuhi.

---

## Penjelasan: Tiga Jenis Gaya Penamaan Utama

Berikut adalah tiga gaya penamaan yang digunakan secara konsisten dalam TypeScript:

### 1. camelCase (Kata pertama huruf kecil, berikutnya kapital)
Digunakan untuk **variabel**, **properti objek**, dan **nama fungsi/method**:
```ts
const namaSiswa = "Putra";
function hitungRataRata() {}
```

### 2. PascalCase (Semua kata diawali huruf kapital)
Digunakan untuk **Class**, **Interface**, **Type Alias**, dan **Enum**:
```ts
class SiswaRpl {}
interface BiodataSiswa {}
enum StatusKehadiran {}
```

### 3. UPPER_SNAKE_CASE (Semua kapital, dipisahkan underscore)
Digunakan untuk **Konstanta Global** yang nilainya tetap sejak awal program berjalan:
```ts
const BATAS_KKM_SEKOLAH = 75;
const VERSI_APLIKASI = "1.0.0";
```

---

## Analogi Kehidupan Sehari-hari: Label Pada Map Arsip Sekolah
Bayangkan lemari arsip besar sekolah tempat menyimpan ribuan berkas dokumen:

```text
Aturan Label Map:
- Map merah untuk Surat Keluar ──► Label wajib bertuliskan: "Surat Keluar 2026"
- Map kuning untuk Raport      ──► Label wajib bertuliskan: "Raport Kelas X"
```

Jika guru piket menamai map-map tersebut dengan label satu huruf saja seperti `"A"`, `"B"`, atau `"C"`, maka saat kepala sekolah meminta mencarikan surat keluar dari notaris, seluruh staf sekolah harus membuka ribuan map satu per satu karena label di depan map tidak bermakna.

---

## Visual Illustration: Perbandingan Gaya Penamaan

```text
Gaya Penamaan di TypeScript
├── camelCase          ──► namaSiswa, hitungRataRata()  (variabel & fungsi)
├── PascalCase         ──► SiswaClass, IRepository      (class & interface)
└── UPPER_SNAKE_CASE   ──► BATAS_MAKSIMUM_SISWA         (konstanta global)
```

---

## Example: Naming Bad vs Good

### Bad Code (Membingungkan & Singkat)
```ts
const s = "Putra"; // Tidak deskriptif
let d = 17;        // d itu data apa?
function h(a: number, b: number) { // h itu hitung apa?
  return (a + b) / 2;
}
```

### Good Code (Deskriptif & Konsisten)
```ts
const namaSiswa = "Putra";
let umurSiswa = 17;
function hitungNilaiRataRata(nilaiTugas: number, nilaiUjian: number): number {
  return (nilaiTugas + nilaiUjian) / 2;
}
```

---

## Common Mistakes
- **Menggunakan nama satu huruf**: Menggunakan `i` untuk loop memang normal (BAB 3), tetapi menggunakan `a`, `b`, `c` untuk data biodata siswa di luar loop sangat menyulitkan pembacaan kode.
- **Mencampur bahasa**: Menuliskan nama variabel `namaStudent` atau `studentKelas`. Konsistenlah menggunakan satu bahasa (disarankan bahasa Indonesia untuk belajar di sekolah, atau bahasa Inggris penuh jika sudah di industri).

---

## Tips
:::tip[Beri Nama dengan Kata Kerja untuk Fungsi]
Fungsi bertugas melakukan tindakan, maka awali nama fungsi dengan kata kerja (seperti `hitung...`, `tampilkan...`, `ambil...`, `apakah...`). Properti menyimpan data, maka gunakan kata benda (seperti `nama`, `skor`, `status`).
:::

---

## Best Practice
- Gunakan nama boolean dengan awalan kata tanya yang bernilai ya/tidak seperti `is...` atau `has...` (dalam bahasa Indonesia bisa diawali `sudah...`, `apakah...`, atau `memiliki...`):
```ts
const sudahLulus = true;
const apakahAktif = false;
```

---

## Ringkasan
- camelCase untuk variabel, properti, dan fungsi.
- PascalCase untuk Class, Interface, Type Alias, dan Enum.
- UPPER_SNAKE_CASE untuk konstanta global permanen.
- Hindari penamaan satu huruf dan mencampur bahasa di dalam project.

---

## Latihan
1. Perbaiki penamaan variabel di bawah ini agar mematuhi konvensi yang benar:
   ```ts
   const BatasLulus = 75;
   let n_siswa = "Budi";
   class siswa_rpl {}
   function APAKAHLULUS(x: number) {}
   ```
