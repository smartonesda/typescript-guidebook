---
title: "Property"
description: Memahami property sebagai variabel penyimpan data di dalam Class.
---

# Property (Variabel Kelas)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti property di dalam Class.
- Menentukan property wajib dan opsional di dalam class.
- Memahami inisialisasi default properti class.

---

## Pendahuluan

Property adalah variabel yang berada di dalam lingkup class. Properti menyimpan status, informasi, dan data yang mendeskripsikan objek tersebut. Di halaman ini, kita akan mendalami bagaimana mengelola properti di dalam class secara terstruktur.

---

## Penjelasan Materi: Karakteristik Property

Property di dalam class bekerja hampir sama dengan variabel biasa (BAB 1) dan properti objek (BAB 6), tetapi dideklarasikan di dalam tubuh class:

```ts
class Mobil {
  merk: string = "Toyota"; // Properti dengan nilai default
  harga?: number;         // Properti opsional (boleh tidak diisi)
}
```

Tipe data properti harus didefinisikan secara jelas. Kita juga bisa memberikan tanda tanya `?` untuk menandakan properti tersebut bersifat opsional.

---

## Analogi Kehidupan Sehari-hari: Ruangan di Dalam Rumah

Rumah fisik memiliki berbagai **ruangan** dengan fungsinya masing-masing:
- Ruang Tamu (menyimpan data meja dan sofa)
- Kamar Tidur (menyimpan kasur dan lemari)
- Garasi (menyimpan kendaraan)

```text
Property = Ruangan-ruangan di dalam rumah
```

Setiap objek rumah memiliki ruangan yang sama tipe strukturnya, tetapi isi barang di dalam ruangan tersebut bisa berbeda-beda untuk tiap rumah.

---

## Visual Illustration: Struktur Property

```text
Class Siswa
  ├── namaSiswa: string      (Wajib diisi teks)
  ├── nilaiMatematika: number (Wajib diisi angka)
  └── emailSiswa?: string     (Opsional, boleh kosong)
```

---

## Mari Mencoba: Property Wajib dan Opsional

Mari kita buat program class yang mendemonstrasikan penanganan properti wajib dan opsional.

Buat file bernama `src/bab8/property-class.ts`:

```ts
class ProfilSiswa {
  // Properti wajib dengan nilai awal default
  nama: string = "";
  kelas: string = "XI RPL 1";

  // Properti opsional (boleh bernilai undefined)
  nomorHP?: string;
  email?: string;

  tampilkanProfil(): void {
    console.log(`Siswa: ${this.nama} (${this.kelas})`);
    
    // Cek apakah properti opsional diisi
    if (this.nomorHP !== undefined) {
      console.log(`  HP   : ${this.nomorHP}`);
    } else {
      console.log("  HP   : (belum diisi)");
    }

    // Menggunakan nullish coalescing untuk email
    console.log(`  Email: ${this.email ?? "(tidak ada email)"}`);
    console.log("-".repeat(30));
  }
}

const siswa1 = new ProfilSiswa();
siswa1.nama = "Putra Ramadhan";
siswa1.nomorHP = "081234567890"; // mengisi properti opsional

const siswa2 = new ProfilSiswa();
siswa2.nama = "Dewi Rahayu";
// siswa2.nomorHP dan siswa2.email dibiarkan kosong (undefined)

console.log("=== DATA SISWA ===");
siswa1.tampilkanProfil();
siswa2.tampilkanProfil();
```

Jalankan dengan perintah:
```text
tsx src/bab8/property-class.ts
```

## Output
```text
=== DATA SISWA ===
Siswa: Putra Ramadhan (XI RPL 1)
  HP   : 081234567890
  Email: (tidak ada email)
------------------------------
Siswa: Dewi Rahayu (XI RPL 1)
  HP   : (belum diisi)
  Email: (tidak ada email)
------------------------------
```

---

## Properti Readonly di dalam Class

Sama seperti pada interface (BAB 7), kita juga bisa mengunci properti class menggunakan kata kunci `readonly` agar nilainya tidak bisa diubah setelah diinisialisasi:

```ts
class Siswa {
  readonly nis: number;

  constructor(nisAwal: number) {
    this.nis = nisAwal; // hanya boleh diisi di constructor
  }
}
```

---

## Kesalahan yang Sering Terjadi

### ❌ Mengakses properti opsional tanpa melakukan pengecekan undefined
```ts
// Bahaya jika email bernilai undefined saat runtime!
console.log(this.email.toUpperCase()); // Error jika undefined!
```

**Perbaikan:** Selalu gunakan optional chaining `?.` atau lakukan pengecekan `if` sebelum mengakses metode milik properti opsional:

```ts
console.log(this.email?.toUpperCase()); // ✓ Aman
```

---

## Latihan
1. Buat class bernama `Produk` dengan properti: `readonly id: string`, `nama: string`, dan properti opsional `diskon?: number`.
2. Buat constructor untuk mengisi `id` dan `nama`.
3. Buat satu objek produk, berikan diskon secara manual, lalu cetak spesifikasinya.

---

## Ringkasan
- Property menyimpan status dan data di dalam class.
- Properti opsional dideklarasikan dengan tanda tanya `?` di belakang namanya.
- Properti `readonly` mengunci data agar tidak bisa diubah setelah constructor selesai dijalankan.

:::tip[Langkah Selanjutnya]
Lanjut ke **Method** untuk memberikan kemampuan aksi pada Class.
:::
