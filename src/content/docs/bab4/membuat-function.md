---
title: "Membuat Function"
description: Belajar sintaks lengkap mendefinisikan function di TypeScript dengan tipe parameter dan return value.
---

# Membuat Function

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menulis deklarasi function yang lengkap dengan parameter dan anotasi tipe.

---

## Pendahuluan

Sekarang kita masuk ke praktik. Bagaimana cara membuat function di TypeScript? Ada aturan sintaks yang harus diikuti agar TypeScript bisa memahami dan memeriksa kode kita.

---

## Sintaks Dasar

```ts
function namaFunction(parameter: tipe): tipeReturn {
  // isi function
  return nilai
}
```

Contoh konkret:

```ts
function tambah(a: number, b: number): number {
  return a + b
}
```

---

## Penjelasan Setiap Bagian

| Bagian | Kode | Artinya |
|---|---|---|
| Kata kunci | `function` | Mendeklarasikan function baru |
| Nama | `tambah` | Identitas function, dipakai saat memanggil |
| Parameter | `a: number, b: number` | Dua input bertipe number |
| Tipe return | `: number` | Function mengembalikan number |
| Tubuh | `{ return a + b }` | Kode yang dijalankan saat dipanggil |

---

## Tipe Return Khusus: `void`

Jika function tidak mengembalikan nilai apapun, gunakan `: void`:

```ts
function cetakSalam(nama: string): void {
  console.log(`Halo, ${nama}!`)
  // tidak ada return
}
```

---

## Analogi Kehidupan Sehari-hari

Resep masakan adalah function. Resep mendefinisikan:
- Bahan yang diperlukan (parameter)
- Langkah-langkah memasak (isi function)
- Makanan yang dihasilkan (return value)

```text
Resep Nasi Goreng:
  Bahan: nasi, telur, bumbu  ← parameter
  Langkah: tumis, campur...  ← isi function
  Hasil: nasi goreng         ← return value
```

---

## Visual Illustration

```ts
function [NAMA]([PARAMETER]: [TIPE]): [TIPE_RETURN] {
  [ISI FUNCTION]
  return [NILAI]
}
```

```text
function sapa   (nama: string)   : void {
─────────────── ──────────────     ────
mendefinisikan  input yang          tidak
function baru   diterima            mengembalikan
                                    nilai
}
```

---

## Mari Mencoba

Buat `src/bab4/membuat-function.ts`:

```ts
// Function tanpa return (void)
function tampilkanJudul(judul: string): void {
  console.log("=".repeat(40))
  console.log(`  ${judul}`)
  console.log("=".repeat(40))
}

// Function dengan return number
function hitungLuasSegitiga(alas: number, tinggi: number): number {
  return (alas * tinggi) / 2
}

// Function dengan return string
function buatSalam(nama: string, waktu: string): string {
  return `Selamat ${waktu}, ${nama}!`
}

// Function dengan return boolean
function apakahLulus(nilai: number): boolean {
  return nilai >= 75
}

// Jalankan semua function
tampilkanJudul("Sistem Nilai Siswa")
console.log(`Luas segitiga: ${hitungLuasSegitiga(10, 6)}`)
console.log(buatSalam("Putra", "pagi"))
console.log(`Lulus: ${apakahLulus(80)}`)
console.log(`Lulus: ${apakahLulus(60)}`)
```

Jalankan:

```text
tsx src/bab4/membuat-function.ts
```

## Output

```text
========================================
  Sistem Nilai Siswa
========================================
Luas segitiga: 30
Selamat pagi, Putra!
Lulus: true
Lulus: false
```

---

## Penjelasan Baris per Baris

- `tampilkanJudul` — void function, hanya mencetak, tidak mengembalikan nilai.
- `hitungLuasSegitiga` — menerima dua number, mengembalikan number hasil rumus.
- `buatSalam` — menerima dua string, mengembalikan satu string yang sudah diformat.
- `apakahLulus` — menerima number, mengembalikan boolean dari perbandingan.

---

## Kesalahan yang Sering Terjadi

```ts
function hitungKeliling(sisi: number): number {
  console.log(sisi * 4)
  // Lupa return! TypeScript akan error:
  // "Function lacks ending return statement"
}
```

Jika tipe return bukan `void`, **wajib** ada `return`.

---

## Tips

:::tip[Satu Function, Satu Tugas]
Setiap function sebaiknya melakukan satu hal saja. Function yang terlalu banyak tugas sulit dibaca dan sulit diuji.
:::

---

## Latihan

Buat empat function:
1. `hitungKeliling(sisi)` — keliling persegi
2. `ubahKeHurufBesar(teks)` — mengembalikan string huruf kapital
3. `apakahGenap(angka)` — mengembalikan boolean
4. `buatNamaBadge(nama, kelas)` — mengembalikan `"[nama] - [kelas]"`

---

## Ringkasan

- Sintaks: `function nama(param: tipe): tipeReturn { ... }`
- Void berarti function tidak mengembalikan nilai.
- Setiap tipe return selain void wajib ada `return`.
- Satu function sebaiknya satu tugas.

:::tip[Langkah Selanjutnya]
Lanjut ke **Memanggil Function**.
:::
