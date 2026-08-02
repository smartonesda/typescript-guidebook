---
title: "Literal Type"
description: Mengunci nilai variabel hanya pada pilihan nilai tertentu menggunakan literal type di TypeScript.
---

# Literal Type

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan kegunaan literal type dan menggabungkannya dengan union type untuk membuat pilihan data yang terbatas dan aman.

---

## Pendahuluan

Kita sudah mempelajari konsep dasar literal type di BAB 1. Di bab ini, kita akan meninjau kembali konsep ini dalam konteks perancang tipe data. Literal type membantu kita membatasi agar variabel tidak bisa diisi sembarang teks atau angka, melainkan hanya pilihan yang diizinkan.

---

## Penjelasan Materi

**Literal Type** adalah tipe data yang nilainya dikunci tepat pada nilai konkrit tersebut.

```ts
let arah: "utara"
```

Variabel `arah` di atas hanya boleh diisi string `"utara"`. Nilai `"selatan"` akan ditolak.

Literal type sangat berguna jika digabungkan dengan **Union Type** (`|`) untuk membuat daftar pilihan kustom:

```ts
type ArahMataAngin = "utara" | "selatan" | "timur" | "barat";
```

---

## Analogi Kehidupan Sehari-hari

### Pilihan Ukuran Baju

Saat membeli kaos di koperasi sekolah, penjaga toko menanyakan ukuran bajumu. Pilihan ukuran yang tersedia di rak hanya:

```text
- S  (Small)
- M  (Medium)
- L  (Large)
- XL (Extra Large)
```

Kamu tidak bisa memesan ukuran "XXXL" jika tidak ada di dalam daftar pilihan menu rak tersebut. Kamu dipaksa memilih satu dari pilihan yang sudah ditentukan.

---

## Visual Illustration

```text
type Ukuran = "S" | "M" | "L"
                ▲
         hanya boleh diisi
         "S", "M", atau "L"
```

---

## Mari Mencoba

Buat `src/bab7/literal-type.ts`:

```ts
// 1. Membuat Type Alias dengan Literal + Union
type StatusTugas = "belum" | "proses" | "selesai";
type RatingBintang = 1 | 2 | 3 | 4 | 5;

type LaporanTugas = {
  judul: string;
  status: StatusTugas;
  rating?: RatingBintang; // opsional
}

// 2. Membuat objek valid
const tugasRPL: LaporanTugas = {
  judul: "Belajar Interface",
  status: "selesai",
  rating: 5
}

console.log("Laporan Tugas:", tugasRPL)

// Coba buka komentar untuk melihat error proteksi literal type:
// tugasRPL.status = "hampir selesai" // Error!
// Type '"hampir selesai"' is not assignable to type 'StatusTugas'.
```

Jalankan:

```text
tsx src/bab7/literal-type.ts
```

## Output

```text
Laporan Tugas: { judul: 'Belajar Interface', status: 'selesai', rating: 5 }
```

---

## Manfaat Utama Literal Type

1. **Autocompletion** — Saat mengetik di VS Code, editor otomatis menyarankan pilihan string yang valid.
2. **Keamanan Data** — Mencegah salah ketik (typo) seperti menulis `"selesae"` bukannya `"selesai"`.
3. **Validasi Gratis** — TypeScript melakukan validasi data secara otomatis tanpa kita perlu menulis fungsi `if-else` tambahan untuk mengecek kebenaran string.

---

## Latihan

Buat type alias `HariSekolah` yang membatasi nilai hanya boleh hari `"Senin"` sampai `"Jumat"`. Buat variabel bertipe tersebut, coba isi dengan `"Sabtu"` dan amati error yang muncul di VS Code.

---

## Ringkasan

- Literal type mengunci tipe data pada satu nilai konkrit.
- Sering digabungkan dengan union type (`|`) untuk membuat pilihan terbatas.
- Menghindari salah ketik dan memberikan saran kode otomatis (autocomplete) di VS Code.

:::tip[Langkah Selanjutnya]
Lanjut ke **Enum** untuk melihat alternatif penulisan data konstan.
:::
