---
title: "Studi Kasus: Sistem Manajemen Data Akademik"
description: Studi kasus merancang repository data akademik sekolah yang modular dan fleksibel menggunakan Generic dan Utility Types di TypeScript.
---

# Studi Kasus: Sistem Data Akademik

## Tujuan Pembelajaran
Setelah menyelesaikan studi kasus ini, kamu diharapkan dapat:
- Merancang arsitektur penyimpanan data Generic (Repository Pattern) sederhana.
- Menggunakan `Partial` untuk proses update data secara aman.
- Menggunakan `Pick` dan `Omit` untuk menyaring informasi sensitif pada objek.
- Menghubungkan beberapa interface menggunakan tipe data Generic.

---

## Pendahuluan

Dalam membuat aplikasi sekolah, kita sering mengelola berbagai macam data: data Siswa, data Guru, data Mata Pelajaran, dan data Inventaris. 

Setiap data membutuhkan operasi dasar yang sama: menambah data, mencari data, dan mengupdate data. Daripada kita membuat class `SiswaRepository`, `GuruRepository`, dan `MapelRepository` secara terpisah, kita bisa membuat **satu class Generic Repository** yang bisa mengelola data apa saja.

---

## Perancangan Arsitektur Data

Kita akan merancang sistem dengan komponen berikut:

1. **`interface Siswa`** — Struktur data lengkap siswa.
2. **`interface Guru`** — Struktur data lengkap guru.
3. **`class DataRepository<T>`** — Class Generic untuk mengelola data bertipe `T`.
4. **`Partial<T>`** — Digunakan untuk proses update data siswa/guru secara sebagian.
5. **`Omit<T, K>`** — Digunakan untuk membuang properti rahasia sebelum ditampilkan ke publik.

---

## Visual Illustration: Generic Repository

```text
               DataRepository<T> (Generic Class)
                       │
       ┌───────────────┼───────────────┐
       ▼               ▼               ▼
   Siswa[]           Guru[]         Mapel[]
(Menyimpan Siswa) (Menyimpan Guru) (Menyimpan Mapel)
```

---

## Mari Mencoba: Implementasi SIAKAD Modular

Buat file baru bernama `src/bab9/studi-kasus-siakad.ts`:

```ts
// =====================================================
// STUDI KASUS: SISTEM MANAJEMEN DATA AKADEMIK
// Menggunakan Generic & Utility Types
// =====================================================

// 1. Definisikan Interface Data
interface Siswa {
  id: number;
  nama: string;
  kelas: string;
  email: string;
  catatanSanksi?: string; // properti sensitif
}

interface Guru {
  id: number;
  nama: string;
  mataPelajaran: string;
  gajiPokok: number; // properti sensitif
}

// 2. Class Generic Repository untuk mengelola tipe T
class DataRepository<T extends { id: number }> {
  private database: T[] = [];

  // Menambah data baru
  public tambah(item: T): void {
    this.database.push(item);
  }

  // Mengambil semua data
  public ambilSemua(): T[] {
    return this.database;
  }

  // Mencari satu data berdasarkan ID
  public cariBerdasarkanId(id: number): T | undefined {
    return this.database.find((item) => item.id === id);
  }

  // Mengupdate data secara parsial menggunakan Partial<T>
  public update(id: number, dataBaru: Partial<T>): void {
    this.database = this.database.map((item) => {
      if (item.id === id) {
        return { ...item, ...dataBaru }; // gabungkan data lama dan baru
      }
      return item;
    });
  }
}

// --- SIMULASI PENGGUNAAN REPOSITORY ---

// 1. Instansiasi Repository khusus Siswa
const repoSiswa = new DataRepository<Siswa>();
repoSiswa.tambah({
  id: 1,
  nama: "Putra",
  kelas: "XI RPL 1",
  email: "putra@smk.sch.id",
  catatanSanksi: "Terlambat masuk sekolah"
});
repoSiswa.tambah({
  id: 2,
  nama: "Dewi",
  kelas: "XI RPL 2",
  email: "dewi@smk.sch.id"
});

// Update data siswa secara parsial (hanya ganti email)
repoSiswa.update(1, { email: "putra.baru@gmail.com" });

// Tampilkan semua siswa dengan menyensor catatan sanksi menggunakan Omit
console.log("=== DAFTAR SISWA (PUBLIK) ===");
const semuaSiswa = repoSiswa.ambilSemua();
semuaSiswa.forEach((siswa) => {
  // Membuat objek sensor bertipe Omit
  const sensorSiswa: Omit<Siswa, "catatanSanksi"> = {
    id: siswa.id,
    nama: siswa.nama,
    kelas: siswa.kelas,
    email: siswa.email
  };
  console.log(sensorSiswa);
});

// 2. Instansiasi Repository khusus Guru
const repoGuru = new DataRepository<Guru>();
repoGuru.tambah({
  id: 101,
  nama: "Pak Budi",
  mataPelajaran: "TypeScript",
  gajiPokok: 5000000
});

// Tampilkan data guru tanpa memunculkan gaji pokok (Omit)
console.log("\n=== DATA GURU (PUBLIK) ===");
const guru = repoGuru.cariBerdasarkanId(101);
if (guru !== undefined) {
  const sensorGuru: Omit<Guru, "gajiPokok"> = {
    id: guru.id,
    nama: guru.nama,
    mataPelajaran: guru.mataPelajaran
  };
  console.log(sensorGuru);
}
```

Jalankan dengan perintah:
```text
tsx src/bab9/studi-kasus-siakad.ts
```

---

## Penjelasan Baris per Baris

- `class DataRepository<T extends { id: number }>` — Membatasi Generic agar tipe `T` wajib memiliki properti `id: number` (Generic Constraint). Ini penting agar kita bisa menggunakan `item.id` di dalam method cari dan update.
- `update(id: number, dataBaru: Partial<T>)` — `Partial<T>` membuat parameter `dataBaru` fleksibel menerima sebagian properti objek siswa/guru.
- `Omit<Siswa, "catatanSanksi">` — Menyensor properti sensitif sebelum dicetak ke terminal agar data pribadi siswa aman.

---

## Latihan
1. Tambahkan data siswa baru ke `repoSiswa`.
2. Lakukan update kelas pada siswa tersebut menggunakan method `.update()`.
3. Tampilkan hasilnya untuk memastikan data terupdate dengan benar.

---

## Ringkasan
- Satu class Generic Repository dapat menggantikan kebutuhan pembuatan banyak class terpisah.
- `extends { id: number }` menjamin bahwa objek di dalam repository selalu memiliki ID pembeda.
- `Partial` mempermudah pembaruan data secara dinamis.
- `Omit` mengamankan informasi rahasia di terminal/client.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mini Project** untuk membuat Generic Academic Repository yang lengkap.
:::
