---
title: "Utility Type: Extract"
description: Menggunakan Utility Type Extract<T, U> untuk mengambil beberapa tipe tertentu dari tipe union di TypeScript.
---

# Utility Type: `Extract`

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari Utility Type `Extract<T, U>`.
- Menggunakan `Extract` untuk menyaring tipe union yang beririsan.
- Membedakan penggunaan `Exclude` dan `Extract`.

---

## Pendahuluan

Kebalikan dari `Exclude` adalah **`Extract`** (artinya: mengekstrak / mengambil). 

Jika `Exclude` digunakan untuk membuang beberapa pilihan dari tipe union, `Extract` digunakan untuk **hanya mengambil** pilihan tertentu yang cocok dari tipe union tersebut.

---

## Penjelasan Materi: Cara Kerja `Extract`

Utility Type `Extract<T, U>` digunakan untuk membuat tipe baru dengan mengambil (*extracting*) tipe-tipe yang dapat dimasukkan ke dalam `U` dari tipe union `T`.

Sintaks dasar:

```ts
type TipeBaru = Extract<TipeUnionAsal, TipeYangInginDiambil>;
```

---

## Analogi Kehidupan Sehari-hari: Mengambil Buku Kategori Tertentu dari Lemari

Bayangkan kamu memiliki sekotak campuran berbagai jenis buku:

```text
Kotak Buku: [Kamus, Novel, Majalah, Komik, Buku Pelajaran]
```

Kamu ingin memilah dan **hanya mengambil** buku yang merupakan kategori karya fiksi (Novel dan Komik).

```text
Extract<Kotak Buku, Novel | Komik> = Hasil pilahan buku [Novel, Komik]
```

Kamu membuang jenis buku lain (Kamus, Majalah) dari daftar pilahanmu dan hanya berfokus pada dua jenis buku fiksi tersebut.

---

## Visual Illustration: Transformasi Extract

```text
Tipe Asli: "A" | "B" | "C"
              │
              ▼ Diproses Extract<T, "B" | "C">
Tipe Baru: "B" | "C"
```

---

## Mari Mencoba: Menyaring Jenis Mata Pelajaran Kejuruan

Mari kita buat program penyaringan tipe union mata pelajaran sekolah menggunakan `Extract`.

Buat file bernama `src/bab9/extract-utility.ts`:

```ts
type SemuaMapel = "Matematika" | "Agama" | "Pemrograman" | "DesainGrafis" | "Fisika";

// Hanya mengambil mata pelajaran kejuruan RPL/DKV
type MapelKejuruan = Extract<SemuaMapel, "Pemrograman" | "DesainGrafis" | "Jaringan">;

let mapelPraktik: MapelKejuruan;
mapelPraktik = "Pemrograman"; // ✓ Valid
mapelPraktik = "DesainGrafis"; // ✓ Valid

console.log("Mapel Praktik:", mapelPraktik);

// Coba lakukan ini (Error!)
// mapelPraktik = "Matematika"; // ✗ Error!
// Type '"Matematika"' is not assignable to type 'MapelKejuruan'.
```

Jalankan dengan perintah:
```text
tsx src/bab9/extract-utility.ts
```

## Output
```text
Mapel Praktik: Pemrograman
```

---

## Penjelasan Baris per Baris

- `Extract<SemuaMapel, "Pemrograman" | "DesainGrafis" | "Jaringan">` — TypeScript membandingkan kedua union. Nilai yang beririsan (ada di keduanya) adalah `"Pemrograman"` dan `"DesainGrafis"`. Nilai `"Jaringan"` diabaikan karena tidak ada di `SemuaMapel`. Tipe baru yang dihasilkan adalah `"Pemrograman" | "DesainGrafis"`.
- Variabel `mapelPraktik` dikunci hanya menerima nilai hasil irisan tersebut.

---

## Latihan
1. Buat tipe union `Nilai = "A" | "B" | "C" | "D" | "E"`.
2. Buat tipe `NilaiLulus` yang mengekstrak nilai `"A"`, `"B"`, dan `"C"` menggunakan `Extract`.
3. Buat variabelnya dan tampilkan.

---

## Ringkasan
- `Extract<T, U>` menyaring tipe union dengan hanya mengambil bagian yang beririsan dengan `U`.
- Berguna untuk memisahkan sub-kelompok tipe data dari tipe union induk yang besar.

:::tip[Langkah Selanjutnya]
Lanjut ke **ReturnType** untuk belajar mengintip tipe hasil akhir fungsi.
:::
