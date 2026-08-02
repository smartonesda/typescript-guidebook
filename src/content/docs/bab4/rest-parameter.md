---
title: "Rest Parameter"
description: Menerima jumlah argument yang tidak terbatas menggunakan rest parameter (...) di TypeScript.
---

# Rest Parameter

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat function yang menerima jumlah argument tidak terbatas menggunakan sintaks `...`.

---

## Pendahuluan

Bagaimana jika kamu tidak tahu sebelumnya berapa angka yang akan dijumlahkan? Mungkin 3, mungkin 10, mungkin 50. Rest parameter menyelesaikan masalah ini.

---

## Sintaks

```ts
function namaFunction(...angka: number[]): number {
  // angka adalah array berisi semua argument yang dikirim
}
```

---

## Analogi

### Troli Belanja

Troli bisa menampung berapapun barang yang kamu masukkan. Kamu tidak perlu memberitahu kasir sebelumnya berapa item yang akan dibeli.

```text
Troli: [...barang1, barang2, barang3, barang4, ...]
                            ▲
                    bisa berapa saja
```

---

## Mari Mencoba

Buat `src/bab4/rest-parameter.ts`:

```ts
function jumlahkan(...angka: number[]): number {
  let total = 0
  for (const n of angka) {
    total += n
  }
  return total
}

function cetakSemua(...pesan: string[]): void {
  for (const p of pesan) {
    console.log(`• ${p}`)
  }
}

function nilaiMaksimum(...nilai: number[]): number {
  let max = nilai[0]
  for (const n of nilai) {
    if (n > max) max = n
  }
  return max
}

// Jumlah dengan berbagai jumlah argumen
console.log(jumlahkan(1, 2, 3))               // 6
console.log(jumlahkan(10, 20, 30, 40, 50))    // 150
console.log(jumlahkan(5))                     // 5

// Cetak banyak pesan
console.log("\nDaftar kegiatan:")
cetakSemua("Belajar TypeScript", "Mengerjakan latihan", "Istirahat", "Review materi")

// Nilai maksimum dari banyak angka
console.log(`\nNilai tertinggi: ${nilaiMaksimum(88, 92, 75, 67, 95, 80)}`)
```

Jalankan:

```text
tsx src/bab4/rest-parameter.ts
```

## Output

```text
6
150
5

Daftar kegiatan:
• Belajar TypeScript
• Mengerjakan latihan
• Istirahat
• Review materi

Nilai tertinggi: 95
```

---

## Penjelasan Baris per Baris

- `...angka: number[]` — tiga titik (`...`) adalah sintaks rest parameter. TypeScript mengumpulkan semua argument yang dikirim ke dalam array `angka`.
- Loop `for...of` mengiterasi semua nilai dalam array tersebut.
- Function bisa dipanggil dengan 1, 3, 5, atau berapa pun argument.

---

## Rest Parameter + Parameter Biasa

```ts
function sapaSemua(pengirim: string, ...penerima: string[]): void {
  for (const p of penerima) {
    console.log(`${pengirim} menyapa ${p}`)
  }
}

sapaSemua("Guru", "Andi", "Budi", "Citra")
// Guru menyapa Andi
// Guru menyapa Budi
// Guru menyapa Citra
```

Rest parameter harus selalu di **posisi terakhir**.

---

## Latihan

1. Buat function `rata(...)` yang menghitung rata-rata dari sejumlah angka.
2. Buat function `gabungKata(pemisah, ...kata)` yang menggabungkan kata dengan pemisah tertentu.

---

## Ringkasan

- `...nama: tipe[]` mengumpulkan semua argument ke dalam array.
- Function bisa dipanggil dengan jumlah argument berapapun.
- Rest parameter harus di posisi terakhir.
- Gunakan loop untuk memproses setiap nilai.

:::tip[Langkah Selanjutnya]
Lanjut ke **Anonymous Function**.
:::
