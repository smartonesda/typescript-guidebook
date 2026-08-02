---
title: "Ringkasan BAB 9"
description: Rangkuman lengkap materi Generic dan Utility Types — cheat sheet, tabel perbandingan, checklist belajar, dan pertanyaan wawancara kerja.
---

# Ringkasan BAB 9

## Selamat! 🎉

Kamu telah menyelesaikan **BAB 9: Generic & Utility Types**! Ini adalah salah satu bab yang paling menantang dan berbobot dalam pemrograman TypeScript. Dengan menguasai Generic dan Utility Types, kamu sekarang memiliki keahlian yang sejajar dengan programmer tingkat menengah (*Intermediate Developer*) yang siap membaca dan berkontribusi di codebase industri nyata.

---

## Generic Cheat Sheet

### Generic Function
```ts
function identity<T>(value: T): T {
  return value;
}
```

### Generic Interface
```ts
interface Box<T> {
  label: string;
  isi: T;
}
```

### Generic Constraint
```ts
function printLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}
```

---

## Utility Types Cheat Sheet

| Utility Type | Sintaks | Penjelasan Singkat |
|---|---|---|
| **`Partial<T>`** | `Partial<Siswa>` | Mengubah semua properti menjadi **opsional** (`?`) |
| **`Required<T>`** | `Required<Siswa>` | Mengubah semua properti opsional menjadi **wajib** |
| **`Readonly<T>`** | `Readonly<Siswa>` | Mengunci properti agar **tidak bisa diubah** (*read-only*) |
| **`Pick<T, K>`** | `Pick<Siswa, "nama">` | Membuat tipe baru dengan **memilih** properti tertentu saja |
| **`Omit<T, K>`** | `Omit<Siswa, "nis">` | Membuat tipe baru dengan **membuang** properti tertentu |
| **`Record<K, T>`**| `Record<string, Siswa>` | Membuat objek pemetaan dengan key `K` dan value `T` |
| **`Exclude<T, U>`**| `Exclude<Hari, "Minggu">` | Membuang tipe `U` dari tipe union `T` |
| **`Extract<T, U>`**| `Extract<Mapel, kejuruan>` | Mengambil tipe yang beririsan antara `T` dan `U` |
| **`ReturnType<T>`**| `ReturnType<typeof fn>` | Mengintip tipe data hasil **keluaran** dari fungsi `fn` |
| **`Parameters<T>`**| `Parameters<typeof fn>` | Mengintip tipe data **input parameter** dari fungsi `fn` |

---

## Perbandingan Interface vs Type (Review)

- **`interface`**: Digunakan khusus untuk objek, mendukung pewarisan (`extends`), dan penggabungan deklarasi otomatis (*declaration merging*).
- **`type`**: Sangat fleksibel, mendukung union (`|`), intersection (`&`), alias tipe primitif, dan tuple.

---

## Pertanyaan Umum Wawancara Kerja (Interview FAQ)

### 1. Apa perbedaan `any` dan `unknown` dibanding Generic?
- `any` mematikan semua perlindungan tipe data (tidak aman).
- `unknown` memaksa kita melakukan pengecekan tipe sebelum digunakan (aman tapi kaku).
- **Generic** mempertahankan tipe data asli secara dinamis sepanjang alur input hingga output fungsi (sangat fleksibel dan aman 100%).

### 2. Apa perbedaan `Omit` dan `Exclude`?
- `Omit` membuang properti (key) dari sebuah tipe **objek**.
- `Exclude` membuang tipe dari sebuah tipe **union** (gabungan string/number).

---

## Checklist Pemahaman BAB 9

Tandai setiap poin yang sudah kamu kuasai:
- [ ] Memahami konsep parameter tipe data `<T>`.
- [ ] Bisa membuat fungsi Generic dan memanggilnya secara implisit/eksplisit.
- [ ] Bisa membuat Generic Interface dan Generic Type.
- [ ] Menggunakan Generic Class untuk pembuatan data struktur serbaguna.
- [ ] Membatasi tipe Generic menggunakan Generic Constraints (`extends`).
- [ ] Menggunakan operator `keyof` untuk mengambil nama properti objek.
- [ ] Menggunakan operator `typeof` untuk mengambil tipe data dari variabel nyata.
- [ ] Menggunakan `Partial` dan `Required` untuk memanipulasi keharusan pengisian properti.
- [ ] Menggunakan `Readonly` untuk mengamankan data config.
- [ ] Menggunakan `Pick` dan `Omit` untuk menyaring properti objek secara selektif.
- [ ] Menggunakan `Record` untuk membuat data kamus terstruktur.
- [ ] Menggunakan `Exclude` dan `Extract` untuk menyaring tipe union.
- [ ] Menggunakan `ReturnType` dan `Parameters` untuk mengintip spesifikasi fungsi.
- [ ] Menyelesaikan Studi Kasus dan Mini Project.
- [ ] Menyelesaikan 10 Challenge pemrograman Generic.

---

## Latihan Penutup

Tanpa melihat panduan, buatlah file `src/bab9/review-generic.ts`:

1. Buat interface `Guru` (id: number, nama: string, gaji: number).
2. Buat tipe `GuruPublik` yang membuang properti `gaji` menggunakan `Omit`.
3. Buat class Generic `SimpanData<T extends { id: number }>` dengan method `simpan(item: T)` dan `update(id: number, data: Partial<T>)`.
4. Buat objek repositori khusus guru, simpan satu data, update namanya secara parsial, lalu tampilkan hasil akhirnya dengan tipe `GuruPublik` terproteksi.

Jalankan dan pastikan program berjalan lancar tanpa error.

---

## Pesan untuk Kamu

Generic dan Utility Types mengajarkan kita cara mendesain tipe data secara pintar. Setelah menyelesaikan bab ini, kamu tidak hanya bisa menulis kode program biasa, tetapi kamu siap merancang sistem aplikasi yang modular, kokoh, dan berstandar industri modern.

Selamat atas ketekunanmu menyelesaikan bab ini. Sukses selalu untuk perjalanan belajarmu! 🚀

:::tip[Selesai BAB 9]
Selamat! Seluruh materi BAB 9 telah selesai. Laporkan hasil belajarmu kepada gurumu.
:::
