---
title: "Multiple Parameter"
description: Membuat function yang menerima lebih dari satu parameter di TypeScript.
---

# Multiple Parameter

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat function dengan beberapa parameter bertipe berbeda dan menggunakannya secara efektif.

---

## Pendahuluan

Kebanyakan proses membutuhkan lebih dari satu data. Menghitung luas persegi panjang butuh panjang dan lebar. Membuat salam butuh nama dan waktu. TypeScript memungkinkan function memiliki sebanyak apapun parameter yang dibutuhkan.

---

## Sintaks

```ts
function namaFunction(
  param1: tipe1,
  param2: tipe2,
  param3: tipe3
): tipeReturn {
  // isi
}
```

---

## Analogi

Mesin jus yang lebih canggih bisa menerima berbagai bahan sekaligus:

```text
Masukkan: [mangga] [apel] [jahe]
                 │
           [mesin proses]
                 │
        return: jus campuran
```

Setiap bahan adalah parameter berbeda dengan jenis yang mungkin berbeda pula.

---

## Mari Mencoba

Buat `src/bab4/multiple-parameter.ts`:

```ts
function buatBadgeSiswa(
  nama: string,
  kelas: string,
  jurusan: string,
  nilaiRataRata: number
): string {
  const status = nilaiRataRata >= 75 ? "Lulus" : "Remedial"
  return `[${kelas} - ${jurusan}] ${nama} | Rata-rata: ${nilaiRataRata} | ${status}`
}

function hitungBMI(beratKg: number, tinggiM: number): number {
  return parseFloat((beratKg / (tinggiM * tinggiM)).toFixed(2))
}

function kategoriIMT(bmi: number): string {
  if (bmi < 18.5) return "Kurus"
  if (bmi < 25)   return "Normal"
  if (bmi < 30)   return "Kelebihan Berat"
  return "Obesitas"
}

// Contoh pemakaian
const badge1 = buatBadgeSiswa("Andi", "XI RPL 1", "RPL", 88)
const badge2 = buatBadgeSiswa("Budi", "XI RPL 2", "RPL", 65)
console.log(badge1)
console.log(badge2)

const bmi = hitungBMI(60, 1.70)
console.log(`\nBMI: ${bmi} → ${kategoriIMT(bmi)}`)
```

Jalankan:

```text
tsx src/bab4/multiple-parameter.ts
```

## Output

```text
[XI RPL 1 - RPL] Andi | Rata-rata: 88 | Lulus
[XI RPL 2 - RPL] Budi | Rata-rata: 65 | Remedial

BMI: 20.76 → Normal
```

---

## Penjelasan Baris per Baris

- `buatBadgeSiswa` menerima empat parameter dengan tipe berbeda.
- Urutan argument saat memanggil harus sama dengan urutan parameter saat mendefinisikan.
- Dua function berbeda (`hitungBMI` dan `kategoriIMT`) dirantai: hasil satu menjadi argument yang lain.

---

## Tips

:::tip[Format Parameter Panjang]
Jika parameter banyak, tulis masing-masing di baris terpisah seperti contoh di atas. Ini membuat kode lebih mudah dibaca daripada menjejalkan semuanya dalam satu baris.
:::

---

## Latihan

Buat function `hitungNilaiAkhir(nilaiTugas, nilaiUjian, nilaiPraktik)` yang menghitung nilai akhir dengan bobot: tugas 30%, ujian 40%, praktik 30%.

---

## Ringkasan

- Function bisa menerima banyak parameter.
- Setiap parameter punya nama dan tipe masing-masing.
- Urutan argument saat memanggil harus cocok dengan urutan parameter.

:::tip[Langkah Selanjutnya]
Lanjut ke **Optional Parameter**.
:::
