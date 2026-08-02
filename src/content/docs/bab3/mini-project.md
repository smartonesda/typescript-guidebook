---
title: "Mini Project: Aplikasi Daftar Nilai Siswa"
description: Membangun aplikasi daftar nilai lengkap yang menggabungkan konsep BAB 1, BAB 2, dan BAB 3.
---

# Mini Project: Aplikasi Daftar Nilai Siswa

## Tujuan Pembelajaran

Setelah mini project ini, kamu dapat membangun program terminal yang mengolah data banyak siswa menggunakan array, loop, kondisi, dan template literal.

---

## Pendahuluan

Di BAB sebelumnya kita sudah membuat program untuk satu siswa. Sekarang kita akan membangun **Aplikasi Daftar Nilai** yang menangani banyak siswa sekaligus, menghitung statistik, menentukan peringkat, dan menampilkan laporan lengkap.

---

## Fitur Aplikasi

1. Menyimpan data beberapa siswa (nama + nilai tiga mata pelajaran)
2. Menghitung rata-rata nilai setiap siswa
3. Menentukan status: Lulus, Remedial, atau Perlu Bimbingan
4. Menentukan grade A, B, C, D, atau E
5. Mencari nilai rata-rata tertinggi dan terendah
6. Menghitung rata-rata kelas
7. Menampilkan laporan lengkap di terminal

---

## Visual Illustration

```text
Data Siswa (array)
      │
      ▼
for loop → proses setiap siswa
      │
      ├── hitung rata-rata (aritmatika)
      ├── tentukan grade (else if)
      └── tentukan status (perbandingan)
      │
      ▼
Simpan hasil ke array baru
      │
      ▼
Loop kedua → tampilkan laporan
      │
      ▼
Hitung statistik kelas (total, maks, min)
```

---

## Mari Mencoba

Buat `src/bab3/aplikasi-daftar-nilai.ts`:

```ts
// =====================================================
// MINI PROJECT: APLIKASI DAFTAR NILAI SISWA
// Menggabungkan BAB 1, BAB 2, dan BAB 3
// =====================================================

// Tipe data untuk satu siswa
type DataSiswa = {
  nama: string
  matematika: number
  indonesia: number
  pemrograman: number
}

type HasilSiswa = {
  nama: string
  rataRata: number
  grade: string
  status: string
}

// Konstanta
const BATAS_LULUS: number = 75
const TAHUN_PELAJARAN: string = "2025/2026"

// Data seluruh siswa
const daftarSiswa: DataSiswa[] = [
  { nama: "Andi",  matematika: 88, indonesia: 90, pemrograman: 92 },
  { nama: "Budi",  matematika: 60, indonesia: 70, pemrograman: 65 },
  { nama: "Citra", matematika: 95, indonesia: 88, pemrograman: 97 },
  { nama: "Dian",  matematika: 72, indonesia: 68, pemrograman: 74 },
  { nama: "Eko",   matematika: 50, indonesia: 55, pemrograman: 48 },
  { nama: "Fira",  matematika: 80, indonesia: 85, pemrograman: 82 },
]

// ── Proses setiap siswa ──────────────────────────────
const hasilSemua: HasilSiswa[] = []

for (const siswa of daftarSiswa) {
  const rataRata = (siswa.matematika + siswa.indonesia + siswa.pemrograman) / 3
  const rataRataBulat = Math.round(rataRata)

  let grade: string
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

  const status: string = rataRataBulat >= BATAS_LULUS ? "Lulus" : "Perlu Bimbingan"

  hasilSemua.push({
    nama: siswa.nama,
    rataRata: parseFloat(rataRata.toFixed(2)),
    grade,
    status,
  })
}

// ── Hitung statistik kelas ───────────────────────────
let totalRataRataKelas: number = 0
let nilaiTertinggi: number = hasilSemua[0].rataRata
let nilaiTerendah: number = hasilSemua[0].rataRata
let namaTertinggi: string = hasilSemua[0].nama
let namaTerendah: string = hasilSemua[0].nama
let jumlahLulus: number = 0

for (const hasil of hasilSemua) {
  totalRataRataKelas += hasil.rataRata

  if (hasil.rataRata > nilaiTertinggi) {
    nilaiTertinggi = hasil.rataRata
    namaTertinggi = hasil.nama
  }
  if (hasil.rataRata < nilaiTerendah) {
    nilaiTerendah = hasil.rataRata
    namaTerendah = hasil.nama
  }
  if (hasil.status === "Lulus") {
    jumlahLulus++
  }
}

const rataRataKelas = (totalRataRataKelas / hasilSemua.length).toFixed(2)

// ── Tampilkan laporan ────────────────────────────────
console.log("=".repeat(55))
console.log(`  LAPORAN NILAI KELAS — Tahun Pelajaran ${TAHUN_PELAJARAN}`)
console.log("=".repeat(55))
console.log(
  "No".padEnd(4) +
  "Nama".padEnd(10) +
  "Rata-rata".padEnd(12) +
  "Grade".padEnd(8) +
  "Status"
)
console.log("-".repeat(55))

for (let i = 0; i < hasilSemua.length; i++) {
  const h = hasilSemua[i]
  console.log(
    `${(i + 1).toString().padEnd(4)}` +
    `${h.nama.padEnd(10)}` +
    `${h.rataRata.toString().padEnd(12)}` +
    `${h.grade.padEnd(8)}` +
    `${h.status}`
  )
}

console.log("=".repeat(55))
console.log(`Rata-rata kelas   : ${rataRataKelas}`)
console.log(`Nilai tertinggi   : ${nilaiTertinggi} (${namaTertinggi})`)
console.log(`Nilai terendah    : ${nilaiTerendah} (${namaTerendah})`)
console.log(`Jumlah lulus      : ${jumlahLulus} dari ${hasilSemua.length} siswa`)
console.log(`Persentase lulus  : ${(jumlahLulus / hasilSemua.length * 100).toFixed(1)}%`)
console.log("=".repeat(55))
```

Jalankan:

```text
tsx src/bab3/aplikasi-daftar-nilai.ts
```

---

## Output

```text
=======================================================
  LAPORAN NILAI KELAS — Tahun Pelajaran 2025/2026
=======================================================
No  Nama      Rata-rata   Grade   Status
-------------------------------------------------------
1   Andi      90          A       Lulus
2   Budi      65          D       Perlu Bimbingan
3   Citra     93.33       A       Lulus
4   Dian      71.33       C       Perlu Bimbingan
5   Eko       51          E       Perlu Bimbingan
6   Fira      82.33       B       Lulus
=======================================================
Rata-rata kelas   : 75.5
Nilai tertinggi   : 93.33 (Citra)
Nilai terendah    : 51 (Eko)
Jumlah lulus      : 3 dari 6 siswa
Persentase lulus  : 50.0%
=======================================================
```

---

## Penjelasan Bagian Penting

### Type alias untuk struktur data

```ts
type DataSiswa = {
  nama: string
  matematika: number
  indonesia: number
  pemrograman: number
}
```

Membuat tipe khusus sehingga setiap object siswa punya struktur yang konsisten dan TypeScript bisa memeriksa kesalahan.

### push() — menambah elemen ke array

```ts
hasilSemua.push({ ... })
```

`push()` menambah elemen baru ke akhir array. Ini cara mengumpulkan hasil pemrosesan setiap siswa.

### padEnd() — merapikan kolom

```ts
h.nama.padEnd(10)
```

`padEnd(n)` menambah spasi di kanan string sampai panjangnya `n` karakter. Berguna membuat kolom rapi di terminal.

### Loop kedua untuk statistik

Loop pertama memproses setiap siswa. Loop kedua menghitung statistik dari hasil loop pertama. Memisahkan keduanya membuat kode lebih terorganisir.

---

## Eksperimen

1. Tambahkan dua siswa lagi dengan nilai berbeda.
2. Tambahkan satu mata pelajaran (misal: Bahasa Inggris) dan sesuaikan perhitungan.
3. Tampilkan urutan peringkat dari nilai tertinggi ke terendah.

---

## Kesalahan yang Sering Terjadi

```ts
const hasilSemua: HasilSiswa[] = []
// loop tanpa push
for (const s of daftarSiswa) {
  const h = { ... }
  // lupa hasilSemua.push(h)
}
// hasilSemua masih kosong!
```

Pastikan `push()` dipanggil di dalam loop untuk setiap elemen yang ingin disimpan.

---

## Latihan

Tambahkan fitur ke aplikasi:

1. Tampilkan hanya siswa yang nilai rata-ratanya di bawah 70 sebagai daftar "Perlu Bimbingan Khusus".
2. Hitung dan tampilkan berapa persen siswa yang mendapat grade A atau B.

---

## Ringkasan

- `type` alias membuat struktur data konsisten dan mudah diperiksa TypeScript.
- Dua loop terpisah: satu untuk proses, satu untuk tampilkan — membuat kode lebih rapi.
- `push()` menambah hasil ke array baru.
- `padEnd()` dan `repeat()` membantu memformat output terminal.

:::tip[Langkah Selanjutnya]
Lanjut ke **Challenge** untuk menguji kemampuanmu.
:::
