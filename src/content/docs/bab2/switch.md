---
title: "Percabangan switch"
description: Memilih tindakan berdasarkan satu nilai dengan switch, case, break, dan default.
---

# Percabangan `switch`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memakai `switch` untuk menangani banyak pilihan dari satu nilai.

## Pendahuluan

`else if` cocok untuk rentang nilai. Namun jika kamu membandingkan satu data dengan banyak pilihan tepat — misalnya hari, jurusan, atau menu — `switch` sering lebih rapi.

## Analogi Kehidupan Sehari-hari

Bayangkan kasir kantin melihat kode menu:

```text
A → Nasi goreng
B → Mie ayam
C → Es teh
```

Kasir memilih tindakan berdasarkan satu kode yang masuk. Ini sama seperti `switch`.

## Penjelasan Materi

```ts
switch (nilai) {
  case "pilihanA":
    // aksi
    break
  default:
    // aksi cadangan
}
```

- `switch` menerima satu nilai untuk dibandingkan.
- `case` adalah pilihan yang mungkin.
- `break` menghentikan switch setelah case cocok.
- `default` berjalan jika tidak ada pilihan yang cocok.

## Mari Mencoba

Buat `src/bab2/switch.ts`:

```ts
const hari: string = "Rabu"
let jadwal: string

switch (hari) {
  case "Senin":
    jadwal = "Upacara dan pelajaran produktif"
    break
  case "Rabu":
    jadwal = "Praktik TypeScript"
    break
  case "Jumat":
    jadwal = "Senam dan refleksi mingguan"
    break
  default:
    jadwal = "Jadwal umum sekolah"
}

console.log(`Hari: ${hari}`)
console.log(`Jadwal: ${jadwal}`)
```

Jalankan:

```text
tsx src/bab2/switch.ts
```

## Output

```text
Hari: Rabu
Jadwal: Praktik TypeScript
```

## Penjelasan Baris per Baris

- `switch (hari)` memilih nilai yang dibandingkan.
- `case "Rabu":` membandingkan nilai hari dengan `"Rabu"`.
- `jadwal = ...` memberi nilai bagi pilihan yang cocok.
- `break` menghentikan switch setelah case Rabu selesai.
- `default` menjadi jalan cadangan jika hari bukan Senin, Rabu, atau Jumat.

## Visual Illustration

```text
hari = "Rabu"
      │
      ▼
case "Senin"? → tidak
case "Rabu"?  → ya → Praktik TypeScript → break
```

## Kesalahan Umum

```ts
case "Rabu":
  jadwal = "Praktik TypeScript"
case "Jumat":
  jadwal = "Senam"
```

Tanpa `break`, program dapat terus masuk ke case berikutnya. Ini disebut *fall-through* dan sering membuat output salah.

## Tips

:::tip[Pilih switch untuk Nilai Tepat]
Gunakan `switch` saat membandingkan satu nilai dengan pilihan pasti. Gunakan `else if` untuk rentang seperti nilai 90 ke atas atau 75 ke atas.
:::

## Latihan

Buat `switch` untuk kode jurusan `"RPL"`, `"TKJ"`, dan `"DKV"`. Tampilkan deskripsi tiap jurusan dan `"Jurusan belum terdaftar"` pada `default`.

## Ringkasan

- `switch` membandingkan satu nilai dengan banyak `case`.
- `break` menghentikan case yang cocok.
- `default` menangani pilihan tidak dikenal.
- Cocok untuk pilihan tepat, bukan rentang angka.

:::tip[Langkah Selanjutnya]
Lanjut ke **Ternary Operator**.
:::
