---
title: "Studi Kasus: Biodata Siswa"
description: Studi kasus lengkap membuat program biodata siswa menggunakan variabel, tipe data, dan template literal.
---

# Studi Kasus: Biodata Siswa

## Tujuan Pembelajaran

Setelah menyelesaikan studi kasus ini, kamu akan mampu:

- Memilih tipe data yang tepat untuk data siswa
- Membuat variabel dengan nama yang baik
- Menggabungkan beberapa tipe data dalam satu program
- Menampilkan biodata rapi menggunakan template literal

---

## Pendahuluan

Sekarang saatnya menggabungkan konsep yang sudah kamu pelajari dalam sebuah kasus yang nyata dan dekat dengan kehidupan sekolah: **biodata siswa**.

Program ini akan menyimpan dan menampilkan:

- Nama
- Umur
- Kelas
- Jurusan
- Sekolah
- Alamat
- Status aktif

Kita belum membuat aplikasi dengan tampilan website. Untuk saat ini, output akan muncul di terminal. Ini tetap program sungguhan — dan logikanya nanti bisa dipakai lagi saat kamu belajar membuat aplikasi web.

---

## Analogi: Formulir Data Siswa

Saat masuk sekolah, kamu biasanya mengisi formulir biodata. Formulir punya kolom yang berbeda:

```
Nama          : ___________________
Umur          : ___________________
Kelas         : ___________________
Status Aktif  : [ Ya / Tidak ]
```

Setiap kolom meminta jenis jawaban yang berbeda. Nama adalah teks. Umur adalah angka. Status aktif adalah pilihan ya/tidak.

Variabel dalam program bekerja seperti kolom-kolom formulir tersebut.

---

## Merancang Data Sebelum Menulis Kode

Sebelum coding, mari tentukan tipe yang tepat:

| Data | Contoh Nilai | Tipe yang Tepat | Alasan |
|------|--------------|-----------------|--------|
| Nama | `"Putra Ramadhan"` | `string` | Berupa teks |
| Umur | `17` | `number` | Berupa angka |
| Kelas | `"XI RPL 1"` | `string` | Berupa teks |
| Jurusan | `"RPL"` | Literal type | Pilihan terbatas |
| Sekolah | `"SMKS Antartika 1 Sidoarjo"` | `string` | Berupa teks |
| Alamat | `"Sidoarjo"` | `string` | Berupa teks |
| Status aktif | `true` | `boolean` | Hanya ya/tidak |

Merancang seperti ini sebelum coding adalah bagian dari **computational thinking** yang kamu pelajari di BAB 0.

---

## Visual Illustration

```
Biodata Siswa
┌─────────────────────────────────────────┐
│ nama          → string                  │
│ umur          → number                  │
│ kelas         → string                  │
│ jurusan       → "RPL" | "TKJ" | "DKV" │
│ sekolah       → string                  │
│ alamat        → string                  │
│ statusAktif   → boolean                 │
└─────────────────────────────────────────┘
```

---

## Mari Mencoba

Buat file `src/bab1/studi-kasus-biodata.ts`:

```ts
// Tipe untuk membatasi jurusan yang valid
type Jurusan = "RPL" | "TKJ" | "DKV"

// Data biodata siswa
const nama: string = "Putra Ramadhan"
const umur: number = 17
const kelas: string = "XI RPL 1"
const jurusan: Jurusan = "RPL"
const sekolah: string = "SMKS Antartika 1 Sidoarjo"
const alamat: string = "Sidoarjo, Jawa Timur"
const statusAktif: boolean = true

// Mengubah boolean menjadi teks yang mudah dibaca
const keteranganStatus: string = statusAktif ? "Aktif" : "Tidak Aktif"

// Menampilkan biodata
const biodata: string = `
========================================
            BIODATA SISWA
========================================
Nama          : ${nama}
Umur          : ${umur} tahun
Kelas         : ${kelas}
Jurusan       : ${jurusan}
Sekolah       : ${sekolah}
Alamat        : ${alamat}
Status Siswa  : ${keteranganStatus}
========================================
`

console.log(biodata)
```

Jalankan dengan:

```
tsx src/bab1/studi-kasus-biodata.ts
```

---

## Output

```text
========================================
            BIODATA SISWA
========================================
Nama          : Putra Ramadhan
Umur          : 17 tahun
Kelas         : XI RPL 1
Jurusan       : RPL
Sekolah       : SMKS Antartika 1 Sidoarjo
Alamat        : Sidoarjo, Jawa Timur
Status Siswa  : Aktif
========================================
```

---

## Penjelasan Baris per Baris

### 1. Membuat literal type jurusan

```ts
type Jurusan = "RPL" | "TKJ" | "DKV"
```

Tipe `Jurusan` hanya menerima tiga pilihan. Ini mencegah salah ketik seperti `"RPLL"` atau pengisian jurusan yang tidak ada di daftar.

### 2. Menyimpan data yang tetap dengan `const`

```ts
const nama: string = "Putra Ramadhan"
const umur: number = 17
```

Kita memakai `const` karena data biodata dalam satu kali program berjalan tidak berubah. `: string` dan `: number` menunjukkan tipe tiap data.

### 3. Menyimpan status boolean

```ts
const statusAktif: boolean = true
```

Nilai `true` berarti siswa aktif. Boolean bagus untuk data yang hanya memiliki dua keadaan.

### 4. Ternary operator untuk status manusiawi

```ts
const keteranganStatus: string = statusAktif ? "Aktif" : "Tidak Aktif"
```

Ini disebut **ternary operator**. Bentuk umumnya:

```ts
kondisi ? nilaiJikaBenar : nilaiJikaSalah
```

Jika `statusAktif` adalah `true`, hasilnya `"Aktif"`. Jika `false`, hasilnya `"Tidak Aktif"`.

### 5. Menyusun output dengan template literal

```ts
const biodata: string = `
Nama : ${nama}
Umur : ${umur} tahun
`
```

Backtick membuat teks bisa ditulis multi-baris. `${nama}` dan `${umur}` memasukkan nilai variabel ke kalimat.

---

## Ubah Data untuk Dirimu Sendiri

Sekarang ganti nilai berikut dengan data kamu sendiri:

```ts
const nama: string = "Nama Kamu"
const umur: number = 16
const kelas: string = "Kelas Kamu"
const jurusan: Jurusan = "RPL"
const sekolah: string = "Nama Sekolah Kamu"
const alamat: string = "Kota Kamu"
const statusAktif: boolean = true
```

Jalankan ulang program dan lihat biodatamu sendiri muncul di terminal.

---

## Kesalahan Umum

### ❌ Menaruh umur sebagai teks

```ts
const umur: number = "17"
// Error! "17" adalah string karena memakai tanda kutip.
```

**Perbaikan:**

```ts
const umur: number = 17
```

### ❌ Salah menulis nilai literal type

```ts
const jurusan: Jurusan = "rpl"
// Error! "rpl" berbeda dengan "RPL".
```

**Perbaikan:**

```ts
const jurusan: Jurusan = "RPL"
```

### ❌ Menampilkan boolean mentah

```ts
console.log(`Status: ${statusAktif}`)
// Output: Status: true
```

Tidak salah, tetapi untuk manusia lebih baik tampilkan `Aktif` atau `Tidak Aktif` menggunakan `keteranganStatus`.

---

## Tips

:::tip[Rancang Tipe Dulu]
Saat membuat program baru, tuliskan daftar data lalu tentukan tipenya sebelum coding. Kebiasaan ini membuat kode lebih rapi dan mengurangi error.
:::

---

## Latihan

Kembangkan program biodata tadi:

1. Tambahkan `nomorAbsen` bertipe `number`
2. Tambahkan `email` bertipe `string | null`
3. Jika email masih `null`, tampilkan `"Belum diisi"` dengan operator `??`
4. Tambahkan `hobi` bertipe `string`
5. Tampilkan semua data dengan format rapi

---

## Ringkasan

- Satu program dapat menggunakan banyak tipe data sekaligus
- Pilih tipe berdasarkan bentuk dan aturan data
- `const` cocok untuk biodata yang tetap selama program berjalan
- Literal type cocok untuk pilihan terbatas seperti jurusan
- Template literal membuat laporan terminal lebih mudah dibaca

:::tip[Langkah Selanjutnya]
Lanjut ke **Mini Project** untuk membangun Aplikasi Biodata Siswa yang lebih lengkap.
:::
