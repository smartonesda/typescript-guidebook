---
title: "Mini Project: Aplikasi Biodata Siswa"
description: Membangun mini project biodata siswa di terminal dengan variabel, tipe data, literal type, komentar, dan template literal.
---

# Mini Project: Aplikasi Biodata Siswa

## Tujuan Pembelajaran

Setelah menyelesaikan mini project ini, kamu akan mampu:

- Menggabungkan konsep utama BAB 1 dalam satu program
- Menulis data siswa dengan tipe yang tepat
- Menggunakan `const`, `let`, literal type, boolean, dan template literal
- Menulis komentar untuk menjelaskan kode
- Menjalankan dan mengubah program secara mandiri

---

## Pendahuluan

Selamat, kamu sudah melewati banyak konsep dasar. Sekarang kita akan membuat mini project yang terasa seperti bagian kecil dari aplikasi sekolah: **Aplikasi Biodata Siswa**.

Program ini akan menerima data yang kita tulis di kode, menghitung umur tahun depan, menampilkan status siswa dengan teks yang mudah dibaca, dan menampilkan biodata dalam format terminal yang rapi.

Project ini belum memakai input pengguna, database, atau website. Itu akan datang di bab selanjutnya. Fokus sekarang: menulis kode yang rapi dan bertipe benar.

---

## Fitur Project

Aplikasi ini akan:

- Menyimpan identitas siswa
- Menyimpan data sekolah dan akademik
- Memakai beberapa tipe data berbeda
- Membatasi jurusan dan status dengan literal type
- Menghitung umur tahun depan
- Menampilkan informasi dengan template literal
- Memakai komentar agar kode mudah dirawat

---

## Analogi: Kartu Data Digital

Bayangkan petugas tata usaha membuat kartu data untuk setiap siswa. Kartu itu harus konsisten:

- Nama tidak boleh menjadi angka
- Umur tidak boleh berupa kalimat
- Jurusan harus dipilih dari daftar resmi
- Status harus jelas aktif atau tidak aktif

TypeScript bertugas seperti petugas pemeriksa formulir. Ia memastikan setiap kolom diisi dengan jenis data yang benar sebelum kartu diproses.

---

## Visual Illustration

```
Data yang dimasukkan
        │
        ▼
┌───────────────────────────────┐
│ Variabel + Tipe Data           │
│ nama       : string            │
│ umur       : number            │
│ jurusan    : Jurusan           │
│ aktif      : boolean           │
│ email      : string | null     │
└───────────────────────────────┘
        │
        ▼
Template literal menyusun laporan
        │
        ▼
Output biodata rapi di terminal
```

---

## Mari Mencoba

Buat file `src/bab1/aplikasi-biodata-siswa.ts`:

```ts
// =============================================
// MINI PROJECT: APLIKASI BIODATA SISWA
// =============================================

// Literal type membatasi pilihan data yang valid.
type Jurusan = "RPL" | "TKJ" | "DKV"
type StatusBelajar = "aktif" | "cuti" | "lulus"

// Konstanta aplikasi.
const NAMA_APLIKASI: string = "Aplikasi Biodata Siswa"
const TAHUN_SEKARANG: number = 2026

// Data identitas siswa.
const namaLengkap: string = "Putra Ramadhan"
const tanggalLahir: string = "15 Maret 2009"
const tahunLahir: number = 2009
let kelasSaatIni: string = "XI RPL 1"
const jurusan: Jurusan = "RPL"
const nomorAbsen: number = 15

// Data sekolah dan kontak.
const namaSekolah: string = "SMKS Antartika 1 Sidoarjo"
const alamat: string = "Sidoarjo, Jawa Timur"
const email: string | null = null
const statusBelajar: StatusBelajar = "aktif"
const sudahVerifikasi: boolean = true

// Perhitungan sederhana dari data number.
const umurSaatIni: number = TAHUN_SEKARANG - tahunLahir
const umurTahunDepan: number = umurSaatIni + 1

// Mengubah data teknis menjadi teks yang nyaman dibaca.
const statusVerifikasi: string = sudahVerifikasi ? "Terverifikasi" : "Belum diverifikasi"
const emailTampil: string = email ?? "Belum diisi"

// Template literal untuk membuat laporan multi-baris.
const laporanBiodata: string = `
=================================================
              ${NAMA_APLIKASI.toUpperCase()}
=================================================
DATA IDENTITAS
Nama Lengkap     : ${namaLengkap}
Tanggal Lahir    : ${tanggalLahir}
Umur             : ${umurSaatIni} tahun
Umur Tahun Depan : ${umurTahunDepan} tahun
Nomor Absen      : ${nomorAbsen}

DATA SEKOLAH
Sekolah          : ${namaSekolah}
Kelas            : ${kelasSaatIni}
Jurusan          : ${jurusan}
Status Belajar   : ${statusBelajar}

DATA KONTAK
Alamat           : ${alamat}
Email            : ${emailTampil}
Verifikasi Data  : ${statusVerifikasi}
=================================================
`

console.log(laporanBiodata)

// Contoh perubahan data dengan let.
kelasSaatIni = "XII RPL 1"
console.log(`Update simulasi: kelas berikutnya adalah ${kelasSaatIni}`)
```

Jalankan:

```
tsx src/bab1/aplikasi-biodata-siswa.ts
```

---

## Output

```text
=================================================
              APLIKASI BIODATA SISWA
=================================================
DATA IDENTITAS
Nama Lengkap     : Putra Ramadhan
Tanggal Lahir    : 15 Maret 2009
Umur             : 17 tahun
Umur Tahun Depan : 18 tahun
Nomor Absen      : 15

DATA SEKOLAH
Sekolah          : SMKS Antartika 1 Sidoarjo
Kelas            : XI RPL 1
Jurusan          : RPL
Status Belajar   : aktif

DATA KONTAK
Alamat           : Sidoarjo, Jawa Timur
Email            : Belum diisi
Verifikasi Data  : Terverifikasi
=================================================
Update simulasi: kelas berikutnya adalah XII RPL 1
```

---

## Penjelasan Bagian Penting

### 1. Komentar

```ts
// Data identitas siswa.
```

Teks setelah `//` adalah komentar. TypeScript mengabaikannya saat program berjalan. Komentar membantu manusia membaca dan merawat kode.

Gunakan komentar untuk menjelaskan **alasan** atau kelompok kode. Jangan menulis komentar yang hanya mengulang isi kode.

```ts
// Kurang membantu
const umur = 17 // membuat umur 17

// Membantu
// Umur dihitung dari tahun saat ini agar mudah diperbarui.
const umurSaatIni = TAHUN_SEKARANG - tahunLahir
```

### 2. Literal type

```ts
type Jurusan = "RPL" | "TKJ" | "DKV"
```

Variabel `jurusan` hanya menerima satu dari tiga pilihan tersebut. Ini mencegah data jurusan tidak valid.

### 3. `const` dan `let`

```ts
const namaLengkap = "Putra Ramadhan"
let kelasSaatIni = "XI RPL 1"
```

- Nama tetap, jadi memakai `const`
- Kelas bisa naik pada tahun berikutnya, jadi memakai `let`

### 4. Nullish coalescing `??`

```ts
const emailTampil: string = email ?? "Belum diisi"
```

Jika `email` adalah `null` atau `undefined`, hasilnya memakai teks `"Belum diisi"`. Jika email sudah ada, hasilnya memakai nilai email tersebut.

### 5. Ternary operator

```ts
const statusVerifikasi = sudahVerifikasi ? "Terverifikasi" : "Belum diverifikasi"
```

Jika `sudahVerifikasi` adalah `true`, hasilnya `"Terverifikasi"`. Jika `false`, hasilnya `"Belum diverifikasi"`.

---

## Eksperimen Mandiri

Setelah kode berhasil berjalan, ubah satu hal lalu jalankan ulang:

1. Ganti data dengan biodata kamu sendiri
2. Ubah `email` dari `null` menjadi alamat email
3. Ubah `sudahVerifikasi` menjadi `false`
4. Ubah `statusBelajar` menjadi `"cuti"`
5. Coba isi `jurusan` dengan `"Bahasa"` dan lihat error TypeScript
6. Tambahkan `nilaiRataRata: number` ke laporan

:::tip[Belajar Lewat Eksperimen]
Jangan takut mengubah kode. Error kecil saat eksperimen adalah cara paling cepat untuk memahami aturan TypeScript.
:::

---

## Kesalahan Umum

### ❌ Mengubah konstanta

```ts
const namaLengkap = "Putra"
// namaLengkap = "Budi"
// Error! Karena const tidak boleh diubah.
```

Jika nilai memang perlu berubah, gunakan `let` sejak awal.

### ❌ Salah menulis status literal

```ts
const statusBelajar: StatusBelajar = "Aktif"
// Error! Nilai validnya "aktif" dengan huruf kecil.
```

### ❌ Menulis tahun lahir sebagai string

```ts
const tahunLahir: number = "2009"
// Error! Tanda kutip membuatnya menjadi string.
```

---

## Latihan

Kembangkan mini project ini dengan fitur berikut:

1. Tambahkan variabel `nomorTelepon: string | null`
2. Tambahkan `hobi: string`
3. Tambahkan literal type `JenisKelamin = "L" | "P"`
4. Tambahkan boolean `sudahMembayarSPP`
5. Tampilkan status pembayaran sebagai `"Lunas"` atau `"Belum Lunas"`
6. Tambahkan garis judul baru `DATA TAMBAHAN` di laporan
7. Gunakan data kamu sendiri untuk seluruh project

---

## Ringkasan

- Mini project menggabungkan variabel, tipe data, literal type, boolean, null, dan template literal
- Komentar membuat kode lebih mudah dirawat
- `const` digunakan untuk data tetap, `let` untuk data yang dapat berubah
- `??` memberi nilai pengganti untuk `null` atau `undefined`
- Program terminal sederhana adalah fondasi sebelum membangun aplikasi lebih besar

:::tip[Langkah Selanjutnya]
Lanjut ke **Challenge** untuk menguji pemahamanmu tanpa melihat jawaban.
:::
