---
title: "Mini Project: Aplikasi Kalkulator Sederhana"
description: Membangun kalkulator terminal modular menggunakan function dengan berbagai fitur TypeScript.
---

# Mini Project: Aplikasi Kalkulator Sederhana

## Tujuan Pembelajaran

Setelah mini project ini, kamu dapat membangun aplikasi terminal yang sepenuhnya dibangun dari function-function terpisah yang saling bekerja sama.

---

## Pendahuluan

Kalkulator adalah contoh sempurna untuk memahami pemrograman modular: setiap operasi adalah function terpisah, dan program utama hanya mengorganisir dan menampilkan hasilnya.

---

## Fitur Kalkulator

1. Operasi dasar: tambah, kurang, kali, bagi
2. Rata-rata dari banyak angka
3. Nilai maksimum dan minimum
4. Pangkat dan akar kuadrat
5. Menu operasi yang terorganisir
6. Penanganan error (pembagian nol)

---

## Visual Architecture

```text
Program Utama
    │
    ├── tambah(a, b)
    ├── kurang(a, b)
    ├── kali(a, b)
    ├── bagi(a, b)         ← menangani pembagian nol
    ├── rataRata(...angka)
    ├── nilaiMaks(...angka)
    ├── nilaiMin(...angka)
    ├── pangkat(basis, eksponen)
    ├── akarKuadrat(angka)
    └── tampilkanOperasi(label, hasil)
```

---

## Mari Mencoba

Buat `src/bab4/aplikasi-kalkulator.ts`:

```ts
// =====================================================
// MINI PROJECT: APLIKASI KALKULATOR SEDERHANA
// Menggabungkan BAB 1, BAB 2, BAB 3, dan BAB 4
// =====================================================

// ── Operasi Dasar ────────────────────────────────────

const tambah = (a: number, b: number): number => a + b

const kurang = (a: number, b: number): number => a - b

const kali = (a: number, b: number): number => a * b

const bagi = (a: number, b: number): number | string => {
  if (b === 0) return "Error: Tidak bisa dibagi nol"
  return a / b
}

// ── Operasi Lanjutan ─────────────────────────────────

const rataRata = (...angka: number[]): number => {
  if (angka.length === 0) return 0
  let total = 0
  for (const n of angka) total += n
  return parseFloat((total / angka.length).toFixed(2))
}

const nilaiMaks = (...angka: number[]): number => {
  let max = angka[0]
  for (const n of angka) if (n > max) max = n
  return max
}

const nilaiMin = (...angka: number[]): number => {
  let min = angka[0]
  for (const n of angka) if (n < min) min = n
  return min
}

const pangkat = (basis: number, eksponen: number): number => basis ** eksponen

const akarKuadrat = (angka: number): number | string => {
  if (angka < 0) return "Error: Tidak bisa hitung akar angka negatif"
  return parseFloat(Math.sqrt(angka).toFixed(4))
}

// ── Fungsi Tampilan ───────────────────────────────────

function tampilkanHeader(judul: string): void {
  console.log("\n" + "=".repeat(45))
  console.log(`  ${judul}`)
  console.log("=".repeat(45))
}

function tampilkanOperasi(label: string, hasil: number | string): void {
  console.log(`  ${label.padEnd(30)}: ${hasil}`)
}

// ── Program Utama ────────────────────────────────────

tampilkanHeader("KALKULATOR SEDERHANA - TypeScript")

// Operasi dasar
tampilkanHeader("Operasi Dasar (a=15, b=4)")
tampilkanOperasi("15 + 4", tambah(15, 4))
tampilkanOperasi("15 - 4", kurang(15, 4))
tampilkanOperasi("15 × 4", kali(15, 4))
tampilkanOperasi("15 ÷ 4", bagi(15, 4))
tampilkanOperasi("15 ÷ 0", bagi(15, 0))

// Operasi lanjutan
tampilkanHeader("Statistik Nilai Siswa")
const nilaiKelas = [88, 75, 92, 60, 85, 70, 95, 55, 78]
tampilkanOperasi("Nilai siswa", nilaiKelas.join(", "))
tampilkanOperasi("Rata-rata", rataRata(...nilaiKelas))
tampilkanOperasi("Nilai tertinggi", nilaiMaks(...nilaiKelas))
tampilkanOperasi("Nilai terendah", nilaiMin(...nilaiKelas))

// Pangkat dan akar
tampilkanHeader("Operasi Pangkat & Akar")
tampilkanOperasi("2 pangkat 10", pangkat(2, 10))
tampilkanOperasi("3 pangkat 4", pangkat(3, 4))
tampilkanOperasi("Akar(144)", akarKuadrat(144))
tampilkanOperasi("Akar(2)", akarKuadrat(2))
tampilkanOperasi("Akar(-9)", akarKuadrat(-9))

// Gunakan callback
tampilkanHeader("Daftar Kuadrat 1–10")
const angka1sampai10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
angka1sampai10.forEach((n) => {
  tampilkanOperasi(`${n} kuadrat`, pangkat(n, 2))
})

// Cek nilai lulus menggunakan filter + callback
tampilkanHeader("Siswa Lulus (nilai >= 75)")
const siswaSaatIni = ["Andi", "Budi", "Citra", "Dian", "Eko", "Fira"]
const nilaiMereka = [88, 65, 92, 70, 85, 50]

siswaSaatIni.forEach((nama, index) => {
  const nilai = nilaiMereka[index]
  const status = nilai >= 75 ? "✓ Lulus" : "✗ Remedial"
  tampilkanOperasi(nama, `${nilai} → ${status}`)
})

const totalLulus = nilaiMereka.filter((n) => n >= 75).length
console.log(`\n  Total lulus: ${totalLulus} dari ${siswaSaatIni.length} siswa`)
console.log("=".repeat(45))
```

Jalankan:

```text
tsx src/bab4/aplikasi-kalkulator.ts
```

---

## Output (sebagian)

```text
=============================================
  KALKULATOR SEDERHANA - TypeScript
=============================================

=============================================
  Operasi Dasar (a=15, b=4)
=============================================
  15 + 4                        : 19
  15 - 4                        : 11
  15 × 4                        : 60
  15 ÷ 4                        : 3.75
  15 ÷ 0                        : Error: Tidak bisa dibagi nol

...
```

---

## Penjelasan Bagian Penting

### Arrow function untuk operasi sederhana

```ts
const tambah = (a: number, b: number): number => a + b
```

Operasi satu baris cocok ditulis sebagai arrow function ringkas.

### Penanganan error dengan early return

```ts
if (b === 0) return "Error: Tidak bisa dibagi nol"
```

Daripada program crash, kembalikan pesan error yang berguna.

### Rest parameter + spread operator

```ts
rataRata(...nilaiKelas)
```

Spread operator `...` mengubah array menjadi serangkaian argument terpisah sehingga cocok dengan rest parameter.

### Callback dengan `.forEach()` dan `.filter()`

```ts
siswaSaatIni.forEach((nama, index) => { ... })
nilaiMereka.filter((n) => n >= 75)
```

Array method menerima arrow function sebagai callback — kombinasi yang sangat umum.

---

## Eksperimen

1. Tambahkan function `modulus(a, b)` untuk sisa bagi.
2. Tambahkan function `faktorial(n)` menggunakan loop.
3. Gunakan callback untuk menampilkan nilai yang di atas rata-rata.

---

## Latihan

1. Tambahkan section "Konversi Suhu" (Celsius → Fahrenheit → Kelvin) ke program ini.
2. Buat function `ringkasanStatistik(label, nilai)` yang menampilkan rata-rata, min, dan max sekaligus.

---

## Ringkasan

- Kalkulator modular memisahkan setiap operasi ke function sendiri.
- Arrow function cocok untuk operasi satu ekspresi.
- Early return menangani edge case seperti pembagian nol.
- Spread operator memungkinkan array dikirm ke rest parameter.
- `.forEach()`, `.filter()`, dan `.map()` menerima arrow function sebagai callback.

:::tip[Langkah Selanjutnya]
Lanjut ke **Challenge** untuk menguji pemahamanmu.
:::
