---
title: "Ringkasan BAB 7"
description: Rangkuman lengkap materi BAB 7 — interface cheat sheet, type alias cheat sheet, tabel perbandingan, dan latihan penutup.
---

# Ringkasan BAB 7

## Selamat! 🎉

Kamu telah menyelesaikan **BAB 7: Interface & Type Alias**! Ini adalah bab penutup kelompok pemodelan data struktural. Kamu sekarang telah menguasai seluruh konsep yang mendefinisikan identitas utama dari bahasa TypeScript dibanding JavaScript biasa.

---

## Interface Cheat Sheet

### Deklarasi & Implementasi

```ts
interface Siswa {
  readonly nis: number;
  nama: string;
  email?: string; // opsional
}

const s: Siswa = { nis: 1001, nama: "Putra" }
```

### Pewarisan (Extends)

```ts
interface Orang { nama: string }
interface Guru extends Orang { nip: number }
```

---

## Type Alias Cheat Sheet

### Deklarasi Objek & Primitif

```ts
type Tahun = number;
type Siswa = { nama: string };
```

### Union (`|`) & Intersection (`&`)

```ts
type ID = string | number; // Union (ATAU)
type Staf = Identitas & Karyawan; // Intersection (DAN)
```

### Literal & Enum

```ts
type Status = "Lulus" | "Remedial";

enum Peran {
  Siswa = "SISWA",
  Guru = "GURU"
}
```

---

## Tabel Perbandingan Akhir

| Fitur | `interface` | `type` Alias |
|---|---|---|
| Tujuan Utama | Mendefinisikan kontrak objek | Memberikan alias tipe kustom |
| Sintaks `=` | Tanpa `=` | Wajib memakai `=` |
| Penggabungan (Merging) | Bisa (otomatis digabung jika nama sama) | Tidak bisa (error duplicate identifier) |
| Union (`\|`) | Tidak bisa langsung | Bisa (sangat sering digunakan) |
| Primitif / Tuple | Tidak bisa | Bisa |
| Pewarisan | `extends` | `&` (intersection) |

---

## Kapan Memakai Mana?

- Gunakan **`interface`** secara default jika kamu merancang objek standar yang akan diwarisi (`extends`) oleh tipe objek lain atau `class` OOP.
- Gunakan **`type`** jika kamu membutuhkan union type (`string | number`), literal type, atau alias tipe primitif sederhana.

---

## Checklist BAB 7

- [ ] Memahami perbedaan fungsi Interface dan Type Alias
- [ ] Bisa membuat `interface` objek standar
- [ ] Bisa menggunakan `interface` sebagai parameter function
- [ ] Bisa menggunakan `extends` untuk pewarisan interface
- [ ] Menggunakan properti opsional `?` pada interface
- [ ] Menggunakan `readonly` untuk mengunci nilai properti
- [ ] Bisa membuat `type` alias
- [ ] Menguasai union type `|` dan type guarding `typeof`
- [ ] Menguasai intersection type `&` untuk menggabungkan type objek
- [ ] Menggunakan literal type untuk membatasi opsi nilai
- [ ] Bisa membuat dan menggunakan `enum`
- [ ] Menyelesaikan Studi Kasus dan Mini Project
- [ ] Menyelesaikan 10 Challenge BAB 7

---

## Latihan Penutup

Tanpa melihat panduan, buat file `src/bab7/review-bab7.ts`:

1. Buat enum `KategoriBuku` (Komputer, Novel, Sains).
2. Buat interface `Dokumen` (readonly id string/number, judul string).
3. Buat interface `Buku` yang meng-extends `Dokumen` dan menambah properti `kategori` (KategoriBuku) serta properti opsional `penulis` (string).
4. Buat objek `bukuA` lengkap bertipe `Buku`.
5. Buat fungsi `cetakBuku(b: Buku)` yang menampilkan detail buku dan aman dari error properti opsional menggunakan `??`. Tampilkan hasilnya.

---

## Pesan untuk Kamu

Dengan menyelesaikan BAB 7, kamu kini telah memahami mengapa TypeScript menjadi bahasa favorit perusahaan teknologi skala besar. Kemampuannya merancang tipe data terstruktur dengan `interface` dan `type` alias membuat kode aman dari error tipe, terstandardisasi, dan sangat mudah dipelihara.

Persiapkan dirimu untuk petualangan berikutnya. Teruslah berkarya!

:::tip[Selesai BAB 7]
Selamat! Seluruh materi BAB 7 telah selesai. Laporkan hasil belajarmu kepada guru.
:::
