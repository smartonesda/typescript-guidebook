---
title: "Inheritance"
description: Menerapkan pewarisan sifat antar class menggunakan kata kunci extends di TypeScript.
---

# Inheritance (Pewarisan)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dari pilar Inheritance (Pewarisan).
- Menggunakan kata kunci `extends` untuk membuat class anak.
- Menggunakan method `super()` untuk memanggil constructor class induk.

---

## Pendahuluan

Seringkali kita membutuhkan beberapa class yang memiliki properti dasar yang sama. Contohnya: Siswa dan Guru. Keduanya adalah Manusia (memiliki nama dan alamat). Dibanding menulis ulang properti nama dan alamat di kedua class tersebut, kita bisa menggunakan pilar **Inheritance** atau pewarisan.

---

## Penjelasan Materi: Pewarisan Class

**Inheritance** adalah pilar OOP yang memungkinkan sebuah class (disebut **class anak** atau *subclass*) mewarisi properti dan method dari class lain (disebut **class induk** atau *superclass*).

Sintaks penulisan di TypeScript menggunakan kata kunci **`extends`**:

```ts
class ClassAnak extends ClassInduk {
  // Properti dan method tambahan khusus anak
}
```

---

## Analogi Kehidupan Sehari-hari: Sifat Anak Mewarisi Orang Tua

Bayangkan dalam biologi:

```text
Orang Tua (Class Induk)
  ├── Warna Kulit: Sawo matang
  └── Jenis Rambut: Lurus

Anak (Class Anak)
  ├── Warna Kulit: Sawo matang (warisan otomatis)
  ├── Jenis Rambut: Lurus (warisan otomatis)
  └── Kemampuan Khusus: Jago main gitar (ciri khusus anak sendiri)
```

Anak mewarisi ciri dasar dari orang tuanya tanpa perlu membuat ulang dari awal, lalu ia menambahkan ciri khas uniknya sendiri.

---

## Visual Illustration: Struktur Pewarisan

```text
    Superclass: Manusia { nama, umur }
                 │
                 ├───────────extends───────────┐
                 │                             │
                 ▼                             ▼
Subclass: Siswa { nis, kelas }    Subclass: Guru { nip, mapel }
(Otomatis memiliki nama & umur)   (Otomatis memiliki nama & umur)
```

---

## Penggunaan `super()` di dalam Constructor

Jika class induk memiliki constructor, maka constructor pada class anak **wajib** memanggil method **`super()`** di baris pertama tubuh constructor anak. Method `super()` berguna untuk memanggil constructor class induk agar data induk terinisialisasi dengan benar.

```ts
class Siswa extends Manusia {
  constructor(nama: string, umur: number, public nis: number) {
    super(nama, umur); // memanggil constructor Manusia
  }
}
```

---

## Mari Mencoba: Pewarisan Class

Mari kita buat program pewarisan class `Orang` ke `Siswa` dan `Guru`.

Buat file bernama `src/bab8/pewarisan.ts`:

```ts
// 1. Class Induk (Superclass)
class Orang {
  constructor(public nama: string, public umur: number) {}

  tampilkanIdentitas(): void {
    console.log(`Nama: ${this.nama} | Usia: ${this.umur} tahun`);
  }
}

// 2. Class Anak (Subclass) Siswa
class Siswa extends Orang {
  constructor(nama: string, umur: number, public nis: number) {
    super(nama, umur); // wajib memanggil constructor induk di baris pertama
  }

  // Method khusus siswa
  belajar(): void {
    console.log(`${this.nama} (NIS: ${this.nis}) sedang belajar pemrograman.`);
  }
}

// 3. Class Anak (Subclass) Guru
class Guru extends Orang {
  constructor(nama: string, umur: number, public nip: number, public mapel: string) {
    super(nama, umur);
  }

  // Method khusus guru
  mengajar(): void {
    console.log(`${this.nama} (NIP: ${this.nip}) sedang mengajar ${this.mapel}.`);
  }
}

// --- Menggunakan Class ---
const siswaRpl = new Siswa("Putra Ramadhan", 17, 351501);
const guruRpl = new Guru("Pak Budi", 35, 198706, "TypeScript OOP");

console.log("=== DATA SISWA ===");
siswaRpl.tampilkanIdentitas(); // method warisan dari Orang
siswaRpl.belajar();            // method khusus Siswa

console.log("\n=== DATA GURU ===");
guruRpl.tampilkanIdentitas();  // method warisan dari Orang
guruRpl.mengajar();            // method khusus Guru
```

Jalankan dengan perintah:
```text
tsx src/bab8/pewarisan.ts
```

## Output
```text
=== DATA SISWA ===
Nama: Putra Ramadhan | Usia: 17 tahun
Putra Ramadhan (NIS: 351501) sedang belajar pemrograman.

=== DATA GURU ===
Nama: Pak Budi | Usia: 35 tahun
Pak Budi (NIP: 198706) sedang mengajar TypeScript OOP.
```

---

## Kesalahan yang Sering Terjadi

### ❌ Menuliskan kode sebelum memanggil `super()` di constructor anak
```ts
constructor(nama: string, public nis: number) {
  this.nis = nis; // Error!
  super(nama);    // 'super' must be called before accessing 'this'
}
```

**Perbaikan:** Pastikan pemanggilan `super(...)` selalu diletakkan di **baris paling pertama** di dalam tubuh constructor class anak.

---

## Tips
:::tip[Gunakan extends Hanya Jika Logis]
Gunakan pewarisan hanya jika hubungan objek adalah hubungan *"is-a"* (adalah sebuah). Contoh: `Siswa` adalah sebuah `Orang` (logis). Jangan gunakan `extends` jika hubungannya tidak logis (misal: `Siswa extends Laptop` - tidak logis, siswa bukan sebuah laptop).
:::

---

## Latihan
1. Buat class induk `Kendaraan` dengan constructor menerima properti `merk` dan method `jalan()`.
2. Buat class anak `Mobil` yang meng-extends `Kendaraan` dan menambah properti `jumlahPintu` di constructor-nya.
3. Buat objek mobil baru dan jalankan method `jalan()` miliknya.

---

## Ringkasan
- Pewarisan menggunakan kata kunci `extends` untuk menyalin properti/method class induk ke class anak.
- Menghemat penulisan kode berulang.
- Menggunakan `super()` di constructor anak untuk menjalankan constructor induk secara aman.

:::tip[Langkah Selanjutnya]
Lanjut ke **Polymorphism** untuk belajar konsep "banyak bentuk" pada method class anak.
:::
