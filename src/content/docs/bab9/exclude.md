---
title: "Utility Type: Exclude"
description: Menggunakan Utility Type Exclude<T, U> untuk menghapus beberapa tipe tertentu dari tipe union di TypeScript.
---

# Utility Type: `Exclude`

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari Utility Type `Exclude<T, U>`.
- Menggunakan `Exclude` untuk menyaring tipe union.
- Membedakan penggunaan `Omit` (untuk objek) dan `Exclude` (untuk union).

---

## Pendahuluan

Jika `Omit` digunakan untuk membuang properti dari sebuah **objek**, bagaimana cara kita membuang anggota dari sebuah **tipe union**? 

Contoh: Kita memiliki tipe union `Hari` berisi `"Senin"` sampai `"Minggu"`. Kita ingin membuat tipe baru `HariKerja` dengan membuang `"Sabtu"` dan `"Minggu"` dari tipe union tersebut. Kita menggunakan **`Exclude`**.

---

## Penjelasan Materi: Cara Kerja `Exclude`

Utility Type `Exclude<T, U>` digunakan untuk membuat tipe baru dengan membuang tipe-tipe yang ada di `U` dari tipe union `T`.

Sintaks dasar:

```ts
type TipeBaru = Exclude<TipeUnionAsal, TipeYangDibuang>;
```

---

## Analogi Kehidupan Sehari-hari: Menghapus Anggota dari Daftar Piket

Bayangkan daftar **Semua Hari dalam Seminggu**:

```text
Daftar Hari: [Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu]
```

Guru ingin membuat jadwal piket kebersihan kelas. Guru berkata: *"Kita piket setiap hari, **kecuali** hari Sabtu dan Minggu."*

```text
Exclude<Daftar Hari, Sabtu | Minggu> = Hari-hari piket [Senin, Selasa, Rabu, Kamis, Jumat]
```

Guru menghapus dua hari tersebut dari daftar rencana piket, sehingga tersisa 5 hari aktif belajar.

---

## Visual Illustration: Transformasi Exclude

```text
Tipe Asli: "A" | "B" | "C"
              │
              ▼ Diproses Exclude<T, "C">
Tipe Baru: "A" | "B"
```

---

## Mari Mencoba: Memisahkan Jurusan Non-Teknis

Mari kita buat program penyaringan tipe union jurusan sekolah menggunakan `Exclude`.

Buat file bernama `src/bab9/exclude-utility.ts`:

```ts
// Tipe union semua jurusan di sekolah
type SemuaJurusan = "RPL" | "TKJ" | "DKV" | "Akuntansi" | "Pemasaran";

// Menyaring jurusan non-teknik dengan membuang Akuntansi & Pemasaran
type JurusanTeknik = Exclude<SemuaJurusan, "Akuntansi" | "Pemasaran">;

let pilihanKu: JurusanTeknik;
pilihanKu = "RPL"; // ✓ Valid
pilihanKu = "DKV"; // ✓ Valid

console.log("Pilihan Jurusan:", pilihanKu);

// Coba lakukan ini (Error!)
// pilihanKu = "Akuntansi"; // ✗ Error!
// Type '"Akuntansi"' is not assignable to type 'JurusanTeknik'.
```

Jalankan dengan perintah:
```text
tsx src/bab9/exclude-utility.ts
```

## Output
```text
Pilihan Jurusan: RPL
```

---

## Penjelasan Baris per Baris

- `Exclude<SemuaJurusan, "Akuntansi" | "Pemasaran">` — Membuang `"Akuntansi"` dan `"Pemasaran"` dari tipe union `SemuaJurusan`, menghasilkan tipe baru `"RPL" | "TKJ" | "DKV"`.
- Variabel `pilihanKu` divalidasi ketat agar hanya menerima jurusan teknik sisa hasil penyaringan tersebut.

---

## Omit vs Exclude: Perbedaan Penting

Pemula sering tertukar antara `Omit` dan `Exclude`. Perbedaan dasarnya sangat jelas:

- **`Omit`** membuang properti (key) dari sebuah tipe **Objek** (`{ nama: string }`).
- **`Exclude`** membuang anggota dari sebuah tipe **Union** (`"A" | "B" | "C"`).

---

## Latihan
1. Buat tipe union `Status = "proses" | "selesai" | "error"`.
2. Buat tipe `StatusAman` yang membuang `"error"` menggunakan `Exclude`.
3. Buat variabelnya dan tampilkan.

---

## Ringkasan
- `Exclude<T, U>` menyaring tipe union `T` dengan membuang tipe `U`.
- Digunakan khusus untuk tipe union (bukan objek).
- Mempermudah pembuatan variasi tipe pilihan berdasarkan kelompok kustom.

:::tip[Langkah Selanjutnya]
Lanjut ke **Extract** untuk belajar kebalikan dari Exclude (mengambil tipe tertentu).
:::
