---
title: "Membuat Class"
description: Panduan praktis membuat class pertamamu di TypeScript lengkap dengan property dan constructor dasar.
---

# Membuat Class

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menulis sintaks deklarasi `class` di TypeScript.
- Menentukan property dan tipenya di dalam class.
- Memahami alur pembuatan class dasar tanpa error kompilasi.

---

## Pendahuluan

Mari kita mulai menulis kode class pertama kita. Di TypeScript, deklarasi class sedikit berbeda dengan JavaScript biasa karena TypeScript mengharuskan kita mendefinisikan tipe data dari setiap property yang ada di dalam class tersebut.

---

## Sintaks Dasar Class

Gunakan kata kunci `class` diikuti nama class menggunakan format **PascalCase**:

```ts
class Siswa {
  // Properti wajib dideklarasikan di sini sebelum digunakan
  nama: string;
  umur: number;

  // Constructor dan method ditulis di bawahnya
}
```

Setiap property harus dituliskan tipenya secara eksplisit (seperti `: string` atau `: number`).

---

## Analogi Kehidupan Sehari-hari: Format Blanko KTP

Membuat class seperti **mencetak lembaran kertas blanko KTP kosong**. Di dalam kertas blanko tersebut, terdapat kotak-kotak berlabel:
- Nama (wajib diisi teks)
- NIK (wajib diisi angka)

Blanko tersebut masih kosong, belum ada nama warga yang tertera. Di halaman ini, kita hanya membuat cetakan blanko kosongnya saja.

---

## Mari Mencoba: Deklarasi Class Pertama

Mari buat class bernama `Siswa` di file baru `src/bab8/membuat-class.ts`. 

:::note[Catatan Penting]
Di TypeScript, secara default jika kamu mendeklarasikan property pada class, kamu **harus langsung mengisinya** atau **mengisinya di dalam constructor**. Di halaman ini, kita akan mengisi nilai awal secara langsung terlebih dahulu sebagai contoh dasar.
:::

Buat file bernama `src/bab8/membuat-class.ts`:

```ts
// 1. Membuat Desain Cetak Biru (Class)
class Siswa {
  // Mendeklarasikan property dengan tipe datanya
  nama: string = "";
  umur: number = 0;
  kelas: string = "XI RPL 1";

  // Method sederhana
  perkenalan(): void {
    console.log(`Halo, nama saya ${this.nama}, usia saya ${this.umur} tahun.`);
    console.log(`Saya duduk di kelas ${this.kelas}.`);
  }
}

// 2. Mencoba mencetak objek (simulasi awal)
const siswaA = new Siswa();
siswaA.nama = "Putra Ramadhan";
siswaA.umur = 17;

const siswaB = new Siswa();
siswaB.nama = "Dewi Rahayu";
siswaB.umur = 16;

// Menjalankan aksi
console.log("=== Profil Siswa A ===");
siswaA.perkenalan();

console.log("\n=== Profil Siswa B ===");
siswaB.perkenalan();
```

Jalankan dengan perintah:
```text
tsx src/bab8/membuat-class.ts
```

## Output
```text
=== Profil Siswa A ===
Halo, nama saya Putra Ramadhan, usia saya 17 tahun.
Saya duduk di kelas XI RPL 1.

=== Profil Siswa B ===
Halo, nama saya Dewi Rahayu, usia saya 16 tahun.
Saya duduk di kelas XI RPL 1.
```

---

## Penjelasan Baris per Baris

- `class Siswa { ... }` — Membuat cetak biru class bernama `Siswa`.
- `nama: string = ""` — Mendeklarasikan property `nama` bertipe string dan memberi nilai default string kosong `""`.
- `perkenalan(): void { ... }` — Method di dalam class yang mencetak info. Menggunakan `this.nama` untuk merujuk pada properti objek pembangun.
- `const siswaA = new Siswa()` — Menggunakan keyword **`new`** untuk membuat (instansiasi) objek baru berdasarkan class `Siswa`.
- `siswaA.nama = "Putra Ramadhan"` — Mengisi nilai properti secara manual setelah objek dibuat.

---

## Kesalahan yang Sering Terjadi

### ❌ Lupa memberikan tipe data atau inisialisasi pada property class
```ts
class Siswa {
  nama; // Error di TypeScript! Properti harus memiliki tipe atau inisialisasi.
}
```

**Perbaikan:** Selalu berikan tipe data dan nilai awal, atau gunakan constructor untuk menginisialisasinya.

---

## Tips
:::tip[Gunakan PascalCase untuk Nama Class]
Gaya penulisan nama class yang baku adalah PascalCase (huruf besar di awal kata, contoh: `SiswaRpl`, `RekeningBank`). Ini mempermudah kita membedakannya dengan variabel biasa yang menggunakan camelCase.
:::

---

## Latihan
1. Buat class bernama `Kendaraan` dengan properti: `merk` (string = "") dan `kecepatan` (number = 0).
2. Tambahkan method `info()` yang mencetak kecepatan kendaraan tersebut.
3. Buat dua objek dari class tersebut di dalam file latihan, isi datanya, dan panggil method `info()`.

---

## Ringkasan
- Class dideklarasikan dengan kata kunci `class NamaClass`.
- Properti wajib dideklarasikan di bagian atas tubuh class sebelum digunakan.
- Objek baru dibuat dari class menggunakan kata kunci `new`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Membuat Object** untuk memahami proses instansiasi objek secara mendalam.
:::
