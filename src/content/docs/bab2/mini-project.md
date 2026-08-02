---
title: "Mini Project: Aplikasi Penentuan Kelulusan Siswa"
description: Membangun aplikasi konsol lengkap yang menghitung rata-rata, menentukan kelulusan, grade, dan menampilkan laporan rapi.
---

# Mini Project: Aplikasi Penentuan Kelulusan Siswa

## Tujuan Pembelajaran

Setelah mini project ini, kamu dapat membangun program terminal yang menggabungkan konsep dari BAB 1 dan BAB 2 menjadi satu aplikasi bermakna.

---

## Pendahuluan

Di studi kasus, kita membangun sistem penilaian satu mata pelajaran. Mini project ini memperluas aplikasi tersebut. Program memiliki:

- Variabel dan tipe data dari BAB 1
- Operator aritmatika, perbandingan, dan logika dari BAB 2
- Percabangan `if...else`, `else if`, dan ternary
- Template literal multi-baris dan komentar berguna

---

## Fitur Aplikasi

1. Menyimpan biodata siswa
2. Menyimpan nilai tiga mata pelajaran
3. Menghitung total dan rata-rata
4. Menentukan status lulus atau remedial
5. Menentukan grade A, B, C, D, atau E
6. Memeriksa kehadiran
7. Menampilkan laporan lengkap di terminal

---

## Analogi Kehidupan Sehari-hari

Seperti laporan hasil semester di sekolah. Guru memasukkan data, sistem menghitung, lalu mencetak laporan untuk diserahkan ke wali siswa.

---

## Visual Illustration

```text
Data siswa (BAB 1)
        │
        ▼
Hitung total + rata-rata (operator +, /)
        │
        ▼
Tentukan grade (else if)
        │
        ▼
Tentukan status (&&, ternary)
        │
        ▼
Laporan terminal (template literal)
```

---

## Mari Mencoba

Buat `src/bab2/aplikasi-kelulusan.ts`:

```ts
// =====================================================
// MINI PROJECT: APLIKASI PENENTUAN KELULUSAN SISWA
// BAB 2 — Operator & Percabangan
// =====================================================

// Tipe khusus untuk membatasi pilihan data.
type Jurusan = "RPL" | "TKJ" | "DKV"
type StatusKelulusan = "LULUS" | "REMEDIAL" | "TIDAK VALID"
type Grade = "A" | "B" | "C" | "D" | "E"

// Konstanta aturan kelulusan.
const BATAS_NILAI_LULUS: number = 75
const BATAS_KEHADIRAN: number = 75
const TAHUN_PELAJARAN: string = "2025/2026"

// Biodata siswa.
const namaLengkap: string = "Putra Ramadhan"
const kelas: string = "XI RPL 1"
const jurusan: Jurusan = "RPL"
const nomorAbsen: number = 15
const persentaseKehadiran: number = 90

// Nilai tiga mata pelajaran.
const nilaiMatematika: number = 88
const nilaiIndonesia: number = 82
const nilaiProgramming: number = 92

// Perhitungan otomatis.
const totalNilai: number = nilaiMatematika + nilaiIndonesia + nilaiProgramming
const rataRata: number = totalNilai / 3
const rataRataBulat: number = Math.round(rataRata)

// Validasi nilai.
const nilaiValid: boolean =
  nilaiMatematika >= 0 && nilaiMatematika <= 100 &&
  nilaiIndonesia >= 0 && nilaiIndonesia <= 100 &&
  nilaiProgramming >= 0 && nilaiProgramming <= 100

// Menentukan grade.
let grade: Grade

if (rataRataBulat >= 90) {
  grade = "A"
} else if (rataRataBulat >= 80) {
  grade = "B"
} else if (rataRataBulat >= 70) {
  grade = "C"
} else if (rataRataBulat >= 60) {
  grade = "D"
} else {
  grade = "E"
}

// Menentukan status kelulusan.
let statusKelulusan: StatusKelulusan

if (!nilaiValid) {
  statusKelulusan = "TIDAK VALID"
} else if (rataRataBulat >= BATAS_NILAI_LULUS && persentaseKehadiran >= BATAS_KEHADIRAN) {
  statusKelulusan = "LULUS"
} else {
  statusKelulusan = "REMEDIAL"
}

// Pesan berdasarkan status.
const pesanStatus: string =
  statusKelulusan === "LULUS"
    ? "Selamat! Kamu dinyatakan lulus. Terus pertahankan prestasimu."
    : statusKelulusan === "REMEDIAL"
      ? "Kamu perlu mengikuti remedial. Jangan menyerah, terus belajar!"
      : "Data nilai tidak valid. Harap periksa kembali."

// Keterangan kehadiran.
const keteranganHadir: string = persentaseKehadiran >= BATAS_KEHADIRAN
  ? "Memenuhi syarat"
  : "Di bawah batas minimal"

// Cetak laporan lengkap.
const laporan: string = `
=======================================================
           LAPORAN HASIL PENILAIAN SEMESTER
            Tahun Pelajaran: ${TAHUN_PELAJARAN}
=======================================================
IDENTITAS SISWA
  Nama          : ${namaLengkap}
  Kelas         : ${kelas}
  Jurusan       : ${jurusan}
  Nomor Absen   : ${nomorAbsen}

REKAP NILAI
  Matematika    : ${nilaiMatematika}
  Bhs Indonesia : ${nilaiIndonesia}
  Pemrograman   : ${nilaiProgramming}
  Total Nilai   : ${totalNilai}
  Rata-rata     : ${rataRata.toFixed(2)}
  Dibulatkan    : ${rataRataBulat}
  Grade         : ${grade}

KEHADIRAN
  Persentase    : ${persentaseKehadiran}%
  Keterangan    : ${keteranganHadir}

HASIL AKHIR
  Status        : ${statusKelulusan}
  Pesan         : ${pesanStatus}
=======================================================
`

console.log(laporan)
```

Jalankan:

```text
tsx src/bab2/aplikasi-kelulusan.ts
```

---

## Output

```text
=======================================================
           LAPORAN HASIL PENILAIAN SEMESTER
            Tahun Pelajaran: 2025/2026
=======================================================
IDENTITAS SISWA
  Nama          : Putra Ramadhan
  Kelas         : XI RPL 1
  Jurusan       : RPL
  Nomor Absen   : 15

REKAP NILAI
  Matematika    : 88
  Bhs Indonesia : 82
  Pemrograman   : 92
  Total Nilai   : 262
  Rata-rata     : 87.33
  Dibulatkan    : 87
  Grade         : B

KEHADIRAN
  Persentase    : 90%
  Keterangan    : Memenuhi syarat

HASIL AKHIR
  Status        : LULUS
  Pesan         : Selamat! Kamu dinyatakan lulus. ...
=======================================================
```

---

## Penjelasan Bagian Penting

### Literal type dan konstanta

```ts
type StatusKelulusan = "LULUS" | "REMEDIAL" | "TIDAK VALID"
const BATAS_NILAI_LULUS: number = 75
```

Literal type mencegah status salah ketik. Konstanta `BATAS_NILAI_LULUS` hanya perlu diubah satu tempat.

### Validasi multi-kondisi

```ts
const nilaiValid: boolean =
  nilaiMatematika >= 0 && nilaiMatematika <= 100 && ...
```

Semua nilai harus dalam rentang sah. Satu nilai tidak valid membuat `nilaiValid` false.

### Grade otomatis

`else if` dari batas tertinggi ke terendah menghasilkan grade yang tepat.

### Ternary untuk pesan

Ternary bertingkat memilih pesan yang sesuai status. Jika dua pilihan saja gunakan satu ternary; jika lebih dari dua bisa bertingkat, pastikan indentasi rapi.

### `.toFixed(2)`

```ts
rataRata.toFixed(2)
```

Menampilkan angka desimal dengan tepat dua angka di belakang koma.

---

## Eksperimen Mandiri

1. Ganti nilai agar grade berubah menjadi A.
2. Kurangi kehadiran di bawah 75 dan lihat perubahan status.
3. Masukkan nilai tidak valid seperti 150 dan amati output.
4. Tambahkan mata pelajaran keempat dan sesuaikan perhitungan rata-rata.

---

## Kesalahan Umum

```ts
const rataRata = nilaiMatematika + nilaiIndonesia + nilaiProgramming / 3
```

Operator `/` dijalankan lebih dulu. Kurung wajib:

```ts
const rataRata = (nilaiMatematika + nilaiIndonesia + nilaiProgramming) / 3
```

---

## Latihan

Tambahkan ke aplikasi ini:

1. Nilai keempat: Bahasa Inggris.
2. Bonus kehadiran: jika kehadiran di atas 95%, rata-rata ditambah 2 poin.
3. Tampilkan poin bonus di laporan.

---

## Ringkasan

- Mini project menggabungkan variabel, tipe, operator, dan percabangan.
- Literal type dan konstanta membuat kode mudah dirawat.
- Selalu validasi data sebelum memprosesnya.
- Template literal multi-baris membuat laporan terminal mudah dibaca.

:::tip[Langkah Selanjutnya]
Lanjut ke **Challenge** untuk menguji pemahamanmu.
:::
