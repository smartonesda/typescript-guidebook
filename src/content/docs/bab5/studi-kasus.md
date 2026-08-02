---
title: "Studi Kasus: Daftar Nilai Siswa"
description: Studi kasus lengkap mengolah daftar nilai siswa menggunakan berbagai method array di TypeScript.
---

# Studi Kasus: Daftar Nilai Siswa

## Tujuan Pembelajaran

Setelah studi kasus ini, kamu dapat menerapkan array dan method array untuk menghitung total, rata-rata, nilai tertinggi, nilai terendah, serta menyaring data nilai secara sistematis.

---

## Pendahuluan

Kita akan membuat sistem pengolah nilai sederhana yang mensimulasikan tugas seorang guru. Program menerima daftar nilai, menganalisis data, dan menampilkan laporan statistik kelas secara otomatis.

---

## Perancangan Program

Data yang akan diolah:

- Array berisi objek siswa (nama dan nilai)

Operasi yang dibutuhkan:

1. Menghitung rata-rata kelas (`reduce()`)
2. Mencari siswa nilai tertinggi (`for...of` / `reduce()`)
3. Mencari siswa nilai terendah
4. Menyaring siswa yang lulus nilai >= 75 (`filter()`)
5. Mengurutkan nilai dari terbesar ke terkecil (`sort()`)

---

## Visual Illustration

```text
Daftar Siswa (Array of Objects)
               │
               ├─► hitung rata-rata ──► reduce()
               ├─► cari siswa terbaik ──► loop perbandingan
               ├─► saring lulus ──► filter()
               └─► urutkan peringkat ──► sort()
```

---

## Mari Mencoba

Buat `src/bab5/studi-kasus-nilai.ts`:

```ts
type Siswa = { nama: string; nilai: number }

const kelasRPL: Siswa[] = [
  { nama: "Andi", nilai: 80 },
  { nama: "Budi", nilai: 65 },
  { nama: "Citra", nilai: 95 },
  { nama: "Dian", nilai: 70 },
  { nama: "Eko", nilai: 88 },
  { nama: "Fira", nilai: 60 },
]

console.log("=".repeat(45))
console.log("       LAPORAN STATISTIK KELAS RPL")
console.log("=".repeat(45))

// 1. Menghitung Rata-rata Kelas
const totalNilai = kelasRPL.reduce((acc, curr) => acc + curr.nilai, 0)
const rataRata = totalNilai / kelasRPL.length
console.log(`Rata-rata Kelas : ${rataRata.toFixed(2)}`)

// 2. Mencari Nilai Tertinggi & Terendah
let siswaTerbaik = kelasRPL[0]
let siswaTerendah = kelasRPL[0]

for (const siswa of kelasRPL) {
  if (siswa.nilai > siswaTerbaik.nilai) {
    siswaTerbaik = siswa
  }
  if (siswa.nilai < siswaTerendah.nilai) {
    siswaTerendah = siswa
  }
}
console.log(`Nilai Tertinggi : ${siswaTerbaik.nilai} (${siswaTerbaik.nama})`)
console.log(`Nilai Terendah  : ${siswaTerendah.nilai} (${siswaTerendah.nama})`)

// 3. Menyaring Siswa Lulus (nilai >= 75)
const siswaLulus = kelasRPL.filter((s) => s.nilai >= 75)
console.log(`Siswa Lulus     : ${siswaLulus.length} dari ${kelasRPL.length} siswa`)

// 4. Mengurutkan Peringkat (Descending)
const peringkat = kelasRPL.slice().sort((a, b) => b.nilai - a.nilai)

console.log("\n=== DAFTAR PERINGKAT KELAS ===")
peringkat.forEach((siswa, indeks) => {
  const status = siswa.nilai >= 75 ? "Lulus" : "Remedial"
  console.log(`${indeks + 1}. ${siswa.nama.padEnd(8)}: ${siswa.nilai} [${status}]`)
})
console.log("=".repeat(45))
```

Jalankan:

```text
tsx src/bab5/studi-kasus-nilai.ts
```

---

## Output

```text
=============================================
       LAPORAN STATISTIK KELAS RPL
=============================================
Rata-rata Kelas : 76.33
Nilai Tertinggi : 95 (Citra)
Nilai Terendah  : 60 (Fira)
Siswa Lulus     : 3 dari 6 siswa

=== DAFTAR PERINGKAT KELAS ===
1. Citra   : 95 [Lulus]
2. Eko     : 88 [Lulus]
3. Andi    : 80 [Lulus]
4. Dian    : 70 [Remedial]
5. Budi    : 65 [Remedial]
6. Fira    : 60 [Remedial]
=============================================
```

---

## Penjelasan Baris per Baris

- `kelasRPL.reduce((acc, curr) => acc + curr.nilai, 0)` — mereduksi array objek menjadi angka total nilai.
- Loop `for...of` membandingkan nilai objek satu per satu untuk mencari siswa terbaik dan terendah.
- `kelasRPL.filter(...)` — menghasilkan array baru yang hanya berisi siswa lulus.
- `kelasRPL.slice().sort(...)` — menyalin array terlebih dahulu menggunakan `slice()`, lalu mengurutkannya berdasarkan properti `nilai` dari besar ke kecil (`b.nilai - a.nilai`).
- `.forEach(...)` — menampilkan peringkat dengan nomor urut rapi.

---

## Kesalahan yang Sering Terjadi

```ts
// Salah: mengubah array asli secara tidak sengaja
const peringkat = kelasRPL.sort((a, b) => b.nilai - a.nilai)
// Data awal di kelasRPL sekarang juga ikut terurut!
```

**Perbaikan:** Selalu gunakan `.slice().sort(...)` jika data awal harus tetap berada di urutan semulanya.

---

## Latihan

Kembangkan program di atas:
1. Hitung persentase kelulusan kelas.
2. Tampilkan hanya daftar nama siswa yang **remedial** (nilai < 75).

---

## Ringkasan

- Pengolahan data kelompok membutuhkan kombinasi berbagai method array.
- Gunakan `reduce()` untuk akumulasi nilai angka.
- Gunakan `filter()` untuk penyaringan data.
- Gunakan `.slice().sort()` untuk mengurutkan peringkat tanpa merusak data asli.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mini Project**.
:::
