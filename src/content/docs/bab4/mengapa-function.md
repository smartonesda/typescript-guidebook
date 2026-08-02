---
title: "Mengapa Function?"
description: Memahami masalah yang diselesaikan function — menghindari kode duplikat dan membangun program yang mudah dirawat.
---

# Mengapa Function?

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan mengapa function dibutuhkan dan membandingkan kode dengan dan tanpa function.

---

## Pendahuluan

Sebelum belajar cara membuat function, penting memahami mengapa function diciptakan. Function bukan sekadar fitur opsional — ia adalah fondasi dari kode yang bersih, mudah dirawat, dan bisa berkembang.

---

## Masalah Tanpa Function

Bayangkan program laporan nilai yang harus mencetak data tiga siswa:

```ts
// TANPA FUNCTION — kode berulang
console.log("=== LAPORAN NILAI ===")
console.log("Nama   : Andi")
console.log("Nilai  : 88")
console.log("Status : Lulus")
console.log("---")

console.log("=== LAPORAN NILAI ===")
console.log("Nama   : Budi")
console.log("Nilai  : 65")
console.log("Status : Remedial")
console.log("---")

console.log("=== LAPORAN NILAI ===")
console.log("Nama   : Citra")
console.log("Nilai  : 92")
console.log("Status : Lulus")
console.log("---")
```

15 baris untuk 3 siswa. Untuk 30 siswa, butuh 150 baris. Dan jika format laporan perlu diubah, kamu harus mengubah 150 baris secara manual.

---

## Solusi Dengan Function

```ts
function cetakLaporanNilai(nama: string, nilai: number, status: string): void {
  console.log("=== LAPORAN NILAI ===")
  console.log(`Nama   : ${nama}`)
  console.log(`Nilai  : ${nilai}`)
  console.log(`Status : ${status}`)
  console.log("---")
}

cetakLaporanNilai("Andi", 88, "Lulus")
cetakLaporanNilai("Budi", 65, "Remedial")
cetakLaporanNilai("Citra", 92, "Lulus")
```

4 baris untuk mendefinisikan format. 3 baris untuk memanggil. Format berubah? Ubah satu tempat, berlaku untuk semua.

---

## Analogi Kehidupan Sehari-hari

### Stempel vs Menulis Manual

Tanpa function seperti menulis nama sekolah di setiap lembar kertas secara manual.  
Dengan function seperti membuat stempel sekali — lalu cap di mana saja sesuai kebutuhan.

```text
TANPA FUNCTION              DENGAN FUNCTION
──────────────              ───────────────
Tulis "SMKS Antartika..."   Buat stempel fungsi sekali
Tulis "SMKS Antartika..."   Pakai stempel berkali-kali ✓
Tulis "SMKS Antartika..."
...
```

---

## Tiga Keuntungan Utama Function

### 1. Tidak Ada Duplikasi (DRY — Don't Repeat Yourself)

Kode yang sama tidak perlu ditulis dua kali. Tulis sekali, gunakan berkali-kali.

### 2. Mudah Dirawat

Jika ada perubahan, ubah hanya di dalam function. Perubahan berlaku otomatis di semua tempat yang memanggil function itu.

### 3. Mudah Dipahami

Program yang dibagi menjadi function-function kecil dengan nama yang jelas jauh lebih mudah dipahami daripada satu blok kode panjang.

---

## Visual Illustration

```text
TANPA FUNCTION              DENGAN FUNCTION
──────────────              ───────────────
[kode A]                    function prosesA() {...}
[kode A lagi]               function prosesB() {...}
[kode A lagi]
[kode B]                    prosesA()  ← panggil sekali
[kode B lagi]               prosesB()
[kode A lagi]               prosesA()  ← panggil lagi, mudah!
...
```

---

## Mari Mencoba

Buat `src/bab4/mengapa-function.ts`:

```ts
// Tanpa function — tidak efisien
console.log("-- Tanpa Function --")
const luasPersegi1 = 5 * 5
const luasPersegi2 = 8 * 8
const luasPersegi3 = 12 * 12
console.log(`Luas persegi sisi 5: ${luasPersegi1}`)
console.log(`Luas persegi sisi 8: ${luasPersegi2}`)
console.log(`Luas persegi sisi 12: ${luasPersegi3}`)

// Dengan function — efisien dan mudah dipakai ulang
console.log("\n-- Dengan Function --")
function hitungLuasPersegi(sisi: number): number {
  return sisi * sisi
}

console.log(`Luas persegi sisi 5: ${hitungLuasPersegi(5)}`)
console.log(`Luas persegi sisi 8: ${hitungLuasPersegi(8)}`)
console.log(`Luas persegi sisi 12: ${hitungLuasPersegi(12)}`)
```

Jalankan:

```text
tsx src/bab4/mengapa-function.ts
```

---

## Latihan

1. Tuliskan kode yang menghitung keliling 5 persegi panjang berbeda **tanpa** function.
2. Refactor kode itu menggunakan function `hitungKeliling(panjang, lebar)`.
3. Bandingkan jumlah baris keduanya.

---

## Ringkasan

- Tanpa function, kode berulang dan sulit dirawat.
- Dengan function: tulis sekali, gunakan di mana saja.
- Prinsip DRY: **Don't Repeat Yourself** — hindari duplikasi kode.
- Function membuat program lebih mudah dipahami dan dimodifikasi.

:::tip[Langkah Selanjutnya]
Lanjut ke **Membuat Function** untuk belajar sintaks lengkap mendefinisikan function.
:::
