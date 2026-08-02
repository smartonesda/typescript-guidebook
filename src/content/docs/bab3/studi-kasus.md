---
title: "Studi Kasus: Sistem Absensi Siswa"
description: Membangun sistem absensi menggunakan for loop, continue, dan break di TypeScript.
---

# Studi Kasus: Sistem Absensi Siswa

## Tujuan Pembelajaran

Setelah studi kasus ini, kamu dapat menggabungkan `for` loop, `continue`, `break`, dan kondisi untuk membangun program absensi yang logis.

---

## Pendahuluan

Absensi adalah bagian rutin kehidupan sekolah. Program absensi sederhana perlu menampilkan daftar siswa, melewati yang tidak hadir, dan berhenti jika ada kejadian tertentu. Kita akan membangunnya langkah demi langkah.

---

## Perancangan Sebelum Coding

Data yang dibutuhkan:

- Array nama siswa
- Status kehadiran setiap siswa (hadir/tidak hadir)
- Aturan: lewati siswa tidak hadir, hentikan jika ada pengumuman darurat

Struktur yang akan dipakai:

```text
for setiap siswa:
  Jika tidak hadir → continue (lewati)
  Jika ada pengumuman darurat → break (hentikan)
  Panggil nama siswa
```

---

## Visual Illustration

```text
Siswa 1 → hadir? ──tidak──► continue → Siswa 2
                │
               ya
                │
          Darurat? ──ya──► break → SELESAI ABSENSI
                │
               tidak
                │
          Panggil nama → Siswa berikutnya
```

---

## Mari Mencoba

Buat `src/bab3/studi-kasus-absensi.ts`:

```ts
// Data siswa
const namaSiswa: string[] = [
  "Andi", "Budi", "Citra", "Dian", "Eko",
  "Fira", "Gita", "Hani", "Ivan", "Jeni"
]

// Status kehadiran: true = hadir, false = tidak hadir
const kehadiran: boolean[] = [
  true, true, false, true, true,
  false, true, false, true, true
]

// Siswa setelah siapa absensi dihentikan (contoh: siswa ke-7 = Gita)
const hentikanSetelahSiswa: string = "Gita"

let jumlahHadir: number = 0
let nomorUrut: number = 0

console.log("=".repeat(40))
console.log("      SISTEM ABSENSI SISWA")
console.log("=".repeat(40))

for (let i = 0; i < namaSiswa.length; i++) {
  const nama = namaSiswa[i]
  const hadir = kehadiran[i]

  // Lewati siswa yang tidak hadir
  if (!hadir) {
    console.log(`${i + 1}. ${nama} — TIDAK HADIR (dilewati)`)
    continue
  }

  nomorUrut++
  jumlahHadir++
  console.log(`${i + 1}. ${nama} — Hadir (urutan ke-${nomorUrut})`)

  // Hentikan absensi setelah siswa tertentu
  if (nama === hentikanSetelahSiswa) {
    console.log(`\nAbsensi dihentikan setelah ${nama}.`)
    break
  }
}

console.log("\n" + "=".repeat(40))
console.log(`Hasil Absensi:`)
console.log(`  Total dipanggil (hadir): ${jumlahHadir}`)
console.log(`  Total siswa: ${namaSiswa.length}`)
console.log("=".repeat(40))
```

Jalankan:

```text
tsx src/bab3/studi-kasus-absensi.ts
```

---

## Output

```text
========================================
      SISTEM ABSENSI SISWA
========================================
1. Andi — Hadir (urutan ke-1)
2. Budi — Hadir (urutan ke-2)
3. Citra — TIDAK HADIR (dilewati)
4. Dian — Hadir (urutan ke-3)
5. Eko — Hadir (urutan ke-4)
6. Fira — TIDAK HADIR (dilewati)
7. Gita — Hadir (urutan ke-5)

Absensi dihentikan setelah Gita.

========================================
Hasil Absensi:
  Total dipanggil (hadir): 5
  Total siswa: 10
========================================
```

---

## Penjelasan Baris per Baris

### Data awal

```ts
const namaSiswa: string[] = ["Andi", ...]
const kehadiran: boolean[] = [true, ...]
```

Dua array yang berindeks sama. `namaSiswa[0]` berpasangan dengan `kehadiran[0]`.

### Kontrol continue

```ts
if (!hadir) {
  console.log(`... TIDAK HADIR (dilewati)`)
  continue
}
```

`!hadir` membalik boolean. Jika `hadir = false`, maka `!hadir = true`. Blok dijalankan dan `continue` melewati kode setelahnya dalam putaran ini.

### Penghitung terpisah

```ts
nomorUrut++
jumlahHadir++
```

`nomorUrut` menghitung urutan siswa yang hadir (bukan nomor absen). `jumlahHadir` menghitung total.

### Kontrol break

```ts
if (nama === hentikanSetelahSiswa) {
  break
}
```

Setelah siswa tertentu (Gita), absensi dihentikan. Siswa setelahnya (Hani, Ivan, Jeni) tidak dipanggil.

### Laporan akhir

`"=".repeat(40)` membuat garis dari 40 karakter `=` — cara mudah membuat garis pemisah.

---

## Pengembangan: Hitung Persentase Kehadiran

Tambahkan ini sebelum baris terakhir:

```ts
const persen = (jumlahHadir / namaSiswa.length * 100).toFixed(1)
console.log(`  Persentase kehadiran: ${persen}%`)
```

---

## Kesalahan yang Sering Terjadi

```ts
if (kehadiran[i] = false) { // salah: mengisi nilai, bukan membandingkan
```

Gunakan `===` untuk perbandingan, bukan `=`.

---

## Latihan

Kembangkan studi kasus ini:

1. Hitung dan tampilkan berapa siswa yang tidak hadir.
2. Tampilkan daftar nama siswa yang tidak hadir.
3. Tentukan persentase kehadiran dari yang sudah dipanggil (bukan keseluruhan).

---

## Ringkasan

- `for` dengan indeks berguna saat dua array berindeks sama digunakan bersamaan.
- `continue` melewati siswa tidak hadir tanpa menghentikan loop.
- `break` menghentikan absensi lebih awal berdasarkan kondisi.
- Pisahkan penghitung (nomor urut hadir vs nomor absen total) untuk akurasi.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mini Project** untuk membangun Aplikasi Daftar Nilai Siswa yang lebih lengkap.
:::
