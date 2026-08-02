---
title: "Studi Kasus: Sistem Perhitungan Nilai Siswa"
description: Membangun sistem perhitungan nilai menggunakan fungsi-fungsi terpisah yang saling bekerja sama.
---

# Studi Kasus: Sistem Perhitungan Nilai Siswa

## Tujuan Pembelajaran

Setelah studi kasus ini, kamu dapat merancang dan membangun program modular menggunakan beberapa function yang saling berinteraksi.

---

## Pendahuluan

Di BAB sebelumnya, kode untuk menghitung dan menampilkan nilai siswa semuanya dalam satu blok panjang. Sekarang kita akan merancang ulang dengan pendekatan modular: **setiap tugas dilakukan oleh function yang berbeda**.

---

## Perancangan Modular

Kita akan membuat empat function utama:

| Function | Input | Output |
|---|---|---|
| `hitungTotal()` | tiga nilai angka | total nilai |
| `hitungRataRata()` | total, jumlah mapel | rata-rata |
| `tentukanGrade()` | rata-rata | grade string |
| `tampilkanHasil()` | semua data | laporan terminal |

---

## Visual Illustration

```text
nilaiMatematika, nilaiIndonesia, nilaiProgramming
            │
            ▼
    hitungTotal(...)
            │
            ▼ total
    hitungRataRata(...)
            │
            ▼ rataRata
    tentukanGrade(...)
            │
            ▼ grade
    tampilkanHasil(...)
            │
            ▼
    [Laporan terminal]
```

---

## Mari Mencoba

Buat `src/bab4/studi-kasus-nilai.ts`:

```ts
// =====================================================
// STUDI KASUS: SISTEM PERHITUNGAN NILAI SISWA
// Setiap tugas dilakukan oleh function terpisah
// =====================================================

// 1. Menghitung total nilai
function hitungTotal(...nilaiMataPelajaran: number[]): number {
  let total = 0
  for (const n of nilaiMataPelajaran) {
    total += n
  }
  return total
}

// 2. Menghitung rata-rata
function hitungRataRata(total: number, jumlahMapel: number): number {
  if (jumlahMapel === 0) return 0
  return parseFloat((total / jumlahMapel).toFixed(2))
}

// 3. Menentukan grade berdasarkan rata-rata
function tentukanGrade(rataRata: number): string {
  if (rataRata >= 90) return "A"
  if (rataRata >= 80) return "B"
  if (rataRata >= 70) return "C"
  if (rataRata >= 60) return "D"
  return "E"
}

// 4. Menentukan status kelulusan
function tentukanStatus(rataRata: number, batasLulus: number = 75): string {
  return rataRata >= batasLulus ? "LULUS" : "REMEDIAL"
}

// 5. Menampilkan laporan lengkap
function tampilkanHasil(
  nama: string,
  kelas: string,
  nilai: { matematika: number; indonesia: number; pemrograman: number }
): void {
  const total = hitungTotal(nilai.matematika, nilai.indonesia, nilai.pemrograman)
  const rataRata = hitungRataRata(total, 3)
  const grade = tentukanGrade(rataRata)
  const status = tentukanStatus(rataRata)

  const laporan = `
┌─────────────────────────────────────┐
│      LAPORAN NILAI SISWA            │
├─────────────────────────────────────┤
│ Nama       : ${nama.padEnd(23)}│
│ Kelas      : ${kelas.padEnd(23)}│
├─────────────────────────────────────┤
│ Matematika : ${nilai.matematika.toString().padEnd(23)}│
│ Indonesia  : ${nilai.indonesia.toString().padEnd(23)}│
│ Pemrograman: ${nilai.pemrograman.toString().padEnd(23)}│
├─────────────────────────────────────┤
│ Total      : ${total.toString().padEnd(23)}│
│ Rata-rata  : ${rataRata.toString().padEnd(23)}│
│ Grade      : ${grade.padEnd(23)}│
│ Status     : ${status.padEnd(23)}│
└─────────────────────────────────────┘`

  console.log(laporan)
}

// ── Gunakan semua function ────────────────────────────
tampilkanHasil("Putra Ramadhan", "XI RPL 1", {
  matematika: 88,
  indonesia: 82,
  pemrograman: 95,
})

tampilkanHasil("Dewi Rahayu", "XI RPL 2", {
  matematika: 60,
  indonesia: 70,
  pemrograman: 65,
})

// Tes function secara individual
console.log("\n=== Tes Function Individual ===")
const total5 = hitungTotal(80, 90, 70, 85, 75)
console.log(`Total 5 nilai: ${total5}`)
console.log(`Rata-rata: ${hitungRataRata(total5, 5)}`)
console.log(`Grade 88: ${tentukanGrade(88)}`)
console.log(`Status 70 (batas 65): ${tentukanStatus(70, 65)}`)
```

Jalankan:

```text
tsx src/bab4/studi-kasus-nilai.ts
```

---

## Output

```text
┌─────────────────────────────────────┐
│      LAPORAN NILAI SISWA            │
├─────────────────────────────────────┤
│ Nama       : Putra Ramadhan         │
│ Kelas      : XI RPL 1              │
├─────────────────────────────────────┤
│ Matematika : 88                     │
...
│ Status     : LULUS                  │
└─────────────────────────────────────┘
...
```

---

## Penjelasan Bagian Penting

### Rest parameter untuk total

```ts
function hitungTotal(...nilaiMataPelajaran: number[]): number {
```

Dengan rest parameter, function ini bisa menerima 3, 4, 5, atau berapa pun nilai.

### Amankan pembagian nol

```ts
if (jumlahMapel === 0) return 0
```

Early return mencegah program error saat `jumlahMapel` adalah 0.

### Default parameter

```ts
function tentukanStatus(rataRata: number, batasLulus: number = 75): string {
```

Batas lulus default 75, tapi bisa diubah saat pemanggilan.

### Pemisahan tanggung jawab

Setiap function hanya punya satu tanggung jawab. `tampilkanHasil` tidak menghitung sendiri — ia memanggil function lain. Ini membuat setiap function mudah diuji dan dipakai ulang secara terpisah.

---

## Latihan

Tambahkan function baru ke program ini:

1. `hitungPeringkat(semua rataRata)` — mengembalikan posisi siswa berdasarkan nilai tertinggi ke terendah.
2. `cetakGarisLaporan()` — hanya mencetak garis pemisah `"─".repeat(39)`.

---

## Ringkasan

- Program modular lebih mudah dibaca, diuji, dan dimodifikasi.
- Setiap function punya satu tanggung jawab yang jelas.
- Function bisa memanggil function lain — ini kunci pemrograman modular.
- Default parameter, rest parameter, dan early return meningkatkan keandalan function.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mini Project** untuk membangun aplikasi kalkulator yang lebih lengkap.
:::
