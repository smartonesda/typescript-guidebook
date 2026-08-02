---
title: "Implementasi Repository — BAB 11"
description: Membangun class AcademicRepository<T> sebagai database memori Generic yang mematuhi kontrak IRepository.
---

# Implementasi Repository

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Membuat file `academic-repository.ts` di folder `repositories/`.
- Menerapkan `implements IRepository<T>` pada class database.
- Memproses penambahan, pencarian, pembaruan, dan penghapusan data secara Generic.

---

## Pendahuluan
Layer Repository bertanggung jawab langsung memanipulasi array data murni di memori RAM. Class ini tidak peduli tentang menu konsol atau nilai kelulusan. Tugasnya murni menjadi "pelayan gudang" yang menerima dan mengarsipkan data.

---

## Penjelasan
Kita akan mengimplementasikan class `AcademicRepository<T>` di dalam folder `src/repositories/`. Class ini harus mematuhi kontrak `IRepository<T>` (BAB 7) dan menggunakan Generic Constraint (BAB 9) agar data yang dimasukkan dijamin memiliki properti `id: number` sebagai pembeda primer data.

---

## Analogi Kehidupan Sehari-hari: Asisten Gudang Buku Sekolah
Mengimplementasikan class `AcademicRepository` seperti **mempekerjakan asisten gudang baru yang teliti**:

```text
Aturan kerja asisten gudang (AcademicRepository):
- Jika menerima buku baru ──► periksa apakah nomor rak kosong ──► masukkan ke rak (tambah)
- Jika guru meminta buku tertentu ──► telusuri nomor rak ──► serahkan buku (cariBerdasarkanId)
- Jika buku rusak ──► buang dari rak (hapus)
```

Asisten gudang tidak membaca isi buku. Ia hanya memindahkan fisik buku dari meja masuk ke rak penyimpanan.

---

## Visual Illustration: Alur Penyimpanan Data Generic

```text
               DataRepository<T> (Generic Class)
                       │
       ┌───────────────┼───────────────┐
       ▼               ▼               ▼
   Siswa[]           Guru[]         Mapel[]
(Menyimpan Siswa) (Menyimpan Guru) (Menyimpan Mapel)
```

---

## Live Coding: Implementasi AcademicRepository

### Langkah 1: Buat `src/repositories/academic-repository.ts`
```ts
import { IRepository } from "../interfaces/repository-interface";

// T wajib memiliki properti 'id' (Generic Constraint)
export class AcademicRepository<T extends { id: number }> implements IRepository<T> {
  private database: T[] = [];

  constructor(public namaTabel: string) {}

  // Aksi C: Create (Tambah)
  tambah(item: T): boolean {
    const sudahAda = this.database.some((d) => d.id === item.id);
    if (sudahAda) {
      return false; // gagal jika ID sudah dipakai
    }
    this.database.push(item);
    return true;
  }

  // Aksi R: Read (Ambil Semua)
  ambilSemua(): T[] {
    return this.database;
  }

  // Aksi R: Read (Cari berdasarkan ID)
  cariBerdasarkanId(id: number): T | undefined {
    return this.database.find((d) => d.id === id);
  }

  // Aksi U: Update (Menggunakan Partial)
  update(id: number, dataBaru: Partial<T>): boolean {
    const dataLama = this.cariBerdasarkanId(id);
    if (dataLama === undefined) {
      return false; // gagal jika data tidak ditemukan
    }

    this.database = this.database.map((item) => {
      if (item.id === id) {
        return { ...item, ...dataBaru }; // gabungkan data lama dan baru
      }
      return item;
    });
    return true;
  }

  // Aksi D: Delete (Hapus)
  hapus(id: number): boolean {
    const indeks = this.database.findIndex((d) => d.id === id);
    if (indeks === -1) {
      return false; // gagal jika tidak ada
    }
    this.database.splice(indeks, 1);
    return true;
  }
}
```

---

## Output
Setelah membuat file di atas, kita memiliki sebuah engine penyimpanan Generic database memori yang bisa menampung dan memanipulasi tipe data objek apa saja selama objek tersebut memiliki properti `id`.

---

## Penjelasan Baris per Baris
- `class AcademicRepository<T extends { id: number }>`: Generic class dengan batasan properti `id` (BAB 9).
- `dataBaru: Partial<T>`: Menerima objek sebagian kustom menggunakan utility type `Partial` bawaan TypeScript (BAB 9).
- `this.database.some(...)`: Memeriksa apakah ada elemen di dalam array yang memenuhi kondisi ID duplikat (BAB 5).

---

## Common Mistakes
- **Lupa extends { id: number }**: Menulis `<T>` saja tanpa batasan. Akibatnya, baris `d.id === item.id` akan memicu error compiler karena TypeScript tidak tahu apakah `T` memiliki properti `id` atau tidak.

---

## Tips
:::tip[Gunakan untuk Objek Lain]
Class `AcademicRepository` ini bersifat reusable. Jika nanti kamu membuat model data baru seperti `Buku` atau `Peralatan`, kamu cukup menggunakan `new AcademicRepository<Buku>()` tanpa membuat class repository baru lagi dari nol.
:::

---

## Ringkasan
- Class repository diletakkan di dalam folder `src/repositories/`.
- Mengimplementasikan interface `IRepository<T>`.
- Menggunakan constraint `extends { id: number }` agar ID aman dicari di dalam array.
- Seluruh manipulasi data murni (push, map, splice) dilakukan di layer ini.

---

## Latihan
1. Buat file `academic-repository.ts` di folder `src/repositories/` komputermu.
2. Pastikan file tersebut berhasil di-import tanpa error.
