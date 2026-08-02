---
title: "Return Value"
description: Memahami cara function mengembalikan nilai menggunakan return dan cara memanfaatkannya.
---

# Return Value

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat function dengan return value dan menggunakan hasil tersebut di bagian lain program.

---

## Pendahuluan

Function tidak hanya bisa menampilkan sesuatu — ia juga bisa **mengembalikan nilai** yang bisa disimpan, dihitung, atau dikirim ke tempat lain. Kemampuan ini disebut **return value**.

---

## Penjelasan Materi

Kata kunci `return` melakukan dua hal sekaligus:
1. Menentukan **nilai yang dikembalikan** dari function.
2. **Menghentikan eksekusi** function — kode setelah `return` tidak dijalankan.

```ts
function tambah(a: number, b: number): number {
  return a + b   // mengembalikan hasil penjumlahan
  // kode di bawah ini tidak akan pernah dijalankan
  console.log("Ini tidak akan muncul")
}
```

---

## Analogi Kehidupan Sehari-hari

### Jus yang Keluar dari Mesin

```text
[Masukkan mangga dan apel]
       │
       ▼
[Mesin memproses]
       │
       ▼
return [jus campuran]    ← nilai yang dikembalikan
       │
       ▼
[Kamu menerima dan minum jus]
```

`return` seperti pintu keluar mesin. Nilai yang dikembalikan bisa kamu gunakan seperti kamu mau.

---

## Visual Illustration

```text
function hitungLuas(p: number, l: number): number {
  return p * l
}      ▲
       │
       └── Nilai ini dikembalikan ke tempat function dipanggil

const luas = hitungLuas(5, 3)
             └─────────────┘
                 20 dikembalikan dan disimpan di 'luas'
```

---

## Mari Mencoba

Buat `src/bab4/return-value.ts`:

```ts
function hitungLuasPersegiPanjang(panjang: number, lebar: number): number {
  return panjang * lebar
}

function konversiSuhu(celsius: number): number {
  return (celsius * 9) / 5 + 32
}

function formatRupiah(nominal: number): string {
  return `Rp${nominal.toLocaleString("id-ID")}`
}

function tentukannStatus(nilai: number): string {
  if (nilai >= 90) return "Sangat Baik"
  if (nilai >= 75) return "Baik"
  if (nilai >= 60) return "Cukup"
  return "Perlu Bimbingan"
}

// Gunakan return value
const luas = hitungLuasPersegiPanjang(8, 5)
console.log(`Luas: ${luas} m²`)

const fahrenheit = konversiSuhu(36.5)
console.log(`36.5°C = ${fahrenheit}°F`)

const harga = formatRupiah(125000)
console.log(`Harga: ${harga}`)

const nilai = 83
console.log(`Nilai ${nilai}: ${tentukannStatus(nilai)}`)

// Gunakan return value langsung dalam ekspresi
const luasGanda = hitungLuasPersegiPanjang(4, 3) * 2
console.log(`Luas ganda: ${luasGanda} m²`)
```

Jalankan:

```text
tsx src/bab4/return-value.ts
```

## Output

```text
Luas: 40 m²
36.5°C = 97.7°F
Harga: Rp125.000
Nilai 83: Baik
Luas ganda: 24 m²
```

---

## Penjelasan Baris per Baris

- `return panjang * lebar` — menghitung dan langsung mengembalikan hasilnya.
- `return (celsius * 9) / 5 + 32` — rumus konversi Celsius ke Fahrenheit langsung di-return.
- `tentukannStatus` — memiliki beberapa `return` di dalam percabangan. Begitu salah satu kondisi terpenuhi, function langsung berhenti.

---

## Early Return

Multiple `return` di dalam function bisa digunakan untuk "early return" — keluar lebih awal jika kondisi tertentu terpenuhi:

```ts
function bagi(a: number, b: number): number {
  if (b === 0) {
    return 0  // early return: hindari pembagian nol
  }
  return a / b
}
```

---

## Kesalahan yang Sering Terjadi

```ts
function hitungKeliling(sisi: number): number {
  const keliling = sisi * 4
  // Lupa return!
  // TypeScript: Function lacks ending return statement
}
```

Jika tipe return bukan `void`, setiap jalur kode harus berakhir dengan `return`.

---

## Latihan

1. Buat function `fahrenheitKeCelsius(f)` dengan rumus `(f - 32) × 5/9`.
2. Buat function `volumeKubus(sisi)` yang mengembalikan volume.
3. Buat function `kategoriUmur(umur)` yang mengembalikan `"Anak"`, `"Remaja"`, atau `"Dewasa"`.

---

## Ringkasan

- `return` mengembalikan nilai dan menghentikan eksekusi function.
- Return value bisa disimpan, dicetak, atau digunakan dalam ekspresi.
- Multiple `return` berguna untuk early return berdasarkan kondisi.
- Function yang return bukan void wajib punya `return` di setiap jalur.

:::tip[Langkah Selanjutnya]
Lanjut ke **Multiple Parameter** untuk membuat function dengan banyak input.
:::
