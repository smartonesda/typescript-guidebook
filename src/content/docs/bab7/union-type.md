---
title: "Union Type"
description: Menggunakan union type (|) untuk mengizinkan variabel memiliki lebih dari satu tipe data di TypeScript.
---

# Union Type (Tipe Gabungan)

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat membuat union type menggunakan operator `|` untuk mengizinkan variabel atau parameter memiliki beberapa tipe data yang valid.

---

## Pendahuluan

Data dari dunia nyata tidak selalu konsisten dalam satu tipe. Contoh: Nomor Induk Siswa (NIS) ada yang ditulis berupa angka (`3515001`), ada yang ditulis berupa teks string karena mengandung huruf (`NIS-3515001`).

Jika kita mengunci tipe NIS hanya pada `number`, program kita akan error saat menerima teks. **Union Type** memecahkan masalah ini.

---

## Penjelasan Materi

**Union Type** memungkinkan suatu variabel, properti, atau parameter memiliki lebih dari satu jenis tipe data yang valid. Kita menggunakan simbol pipa vertikal `|` (dibaca "atau") untuk memisahkan tipe-tipe tersebut.

```ts
let nis: string | number
```

Variabel `nis` di atas secara sah boleh diisi dengan `string` atau `number`.

---

## Analogi Kehidupan Sehari-hari

### Kendaraan Bisa Mobil ATAU Motor

Bayangkan area parkir sekolah bertuliskan: **"Hanya untuk Mobil ATAU Motor"**.

```text
Tempat Parkir (Union Type)
  ├── Boleh Mobil (Tipe A)
  └── Boleh Motor (Tipe B)

Pengunjung bawa Mobil ──► Diizinkan parkir ✓
Pengunjung bawa Motor ──► Diizinkan parkir ✓
Pengunjung bawa Sepeda ──► Ditolak parkir ✗
```

Area parkir tersebut fleksibel untuk dua jenis kendaraan, tetapi tetap melarang jenis kendaraan lain yang tidak terdaftar (seperti sepeda atau truk).

---

## Visual Illustration

```text
type ID = string | number
            ▲
       bisa string
       ATAU number
```

---

## Mari Mencoba

Buat `src/bab7/union-type.ts`:

```ts
// 1. Membuat Type Alias dengan Union
type IDKaryawan = string | number;

function cetakID(id: IDKaryawan): void {
  // Pengecekan tipe (Type Guarding) sebelum memproses
  if (typeof id === "string") {
    console.log(`ID (Teks) : ${id.toUpperCase()}`)
  } else {
    console.log(`ID (Angka): ${id * 2} (simulasi hitung)`)
  }
}

// 2. Uji coba dengan berbagai tipe valid
cetakID("karyawan-001") // valid string
cetakID(12345)          // valid number

// cetakID(true) // Error! boolean tidak ada di tipe IDKaryawan
```

Jalankan:

```text
tsx src/bab7/union-type.ts
```

## Output

```text
ID (Teks) : KARYAWAN-001
ID (Angka): 24690 (simulasi hitung)
```

---

## Penjelasan Baris per Baris

- `type IDKaryawan = string | number` — membuat tipe baru yang mengizinkan string atau number.
- `typeof id === "string"` — karena parameter `id` bisa berupa string atau number, kita harus menggunakan **Type Guard** (`typeof`) agar bisa menggunakan metode khusus string seperti `.toUpperCase()` dengan aman tanpa memicu compiler error.

---

## Kesalahan yang Sering Terjadi

### ❌ Langsung menggunakan metode khusus tipe tertentu tanpa melakukan Type Guarding

```ts
function cetak(id: string | number) {
  console.log(id.toUpperCase()) // Error!
  // Property 'toUpperCase' does not exist on type 'string | number'.
}
```

**Perbaikan:** Gunakan `if (typeof id === "string")` untuk memastikan tipenya terlebih dahulu sebelum memanggil metode spesifik tipe tersebut.

---

## Latihan

Buat variabel `statusUjian` bertipe `boolean | string`. Isi dengan `true` lalu tampilkan, kemudian ubah nilainya menjadi `"Remedial"` dan tampilkan lagi.

---

## Ringkasan

- Union type (`|`) mengizinkan variabel memiliki lebih dari satu tipe data yang valid.
- Dibaca sebagai hubungan logika "ATAU".
- Wajib menggunakan `if (typeof ...)` (Type Guard) sebelum menggunakan metode khusus dari salah satu tipe data gabungan tersebut.

:::tip[Langkah Selanjutnya]
Lanjut ke **Intersection Type** untuk belajar tipe gabungan "DAN".
:::
