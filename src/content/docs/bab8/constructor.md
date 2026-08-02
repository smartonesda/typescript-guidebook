---
title: "Constructor"
description: Memahami constructor sebagai method khusus yang dipanggil otomatis saat objek pertama kali dibuat.
---

# Constructor

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari constructor dalam class.
- Membuat constructor untuk menerima argumen inisialisasi data.
- Menggunakan fitur Parameter Properties di TypeScript untuk menyingkat penulisan constructor.

---

## Pendahuluan

Pada halaman sebelumnya, setelah membuat objek dengan `new Handphone()`, kita harus mengisi propertinya satu per satu secara manual:

```ts
const hp = new Handphone();
hp.merk = "Xiaomi";
hp.ramGB = 8;
```

Cara ini tidak efisien jika kita ingin membuat banyak objek. Di dalam OOP, kita bisa mengirimkan data awal langsung di dalam tanda kurung instansiasi `new Handphone("Xiaomi", 8)`. Fitur yang menangani hal ini disebut **Constructor**.

---

## Penjelasan Materi: Apa itu Constructor?

**Constructor** adalah method khusus di dalam class yang akan **dijalankan secara otomatis** oleh sistem komputer tepat ketika objek baru sedang dicetak (diinstansiasi menggunakan kata kunci `new`).

Sintaks penulisan di TypeScript:

```ts
class Siswa {
  nama: string;

  constructor(namaSiswa: string) {
    this.nama = namaSiswa; // mengisi data saat objek dibuat
  }
}
```

Constructor ditulis menggunakan nama method khusus yaitu `constructor` (huruf kecil semua).

---

## Analogi Kehidupan Sehari-hari: Proses Membangun Rumah

Bayangkan ketika kamu mendatangi kontraktor pembangunan rumah. Kontraktor tidak membangun rumah kosong polos, lalu mengecatnya belakangan setelah jadi.

Saat tanda tangan kontrak, kamu memberikan pesanan: **"Saya ingin rumah dicat warna Biru dan memiliki 3 kamar tidur."**

```text
Argumen constructor = Warna Biru, 3 Kamar Tidur
```

Tukang bangunan akan **langsung mengecat warna biru** dan **langsung membuat 3 kamar tidur** selama proses pembangunan berlangsung. Begitu rumah jadi (objek selesai di-`new`), warna dindingnya sudah biru dan kamarnya sudah ada 3.

---

## Visual Illustration: Alur Kerja Constructor

```text
Mulai Instansiasi: new Siswa("Putra")
        │
        ▼
Panggil method constructor("Putra") secara otomatis
        │
        ▼
Di dalam constructor: this.nama = "Putra"
        │
        ▼
Objek selesai dibuat dengan property nama berisi "Putra"
```

---

## Mari Mencoba: Constructor Standar

Mari kita buat class yang memanfaatkan constructor untuk menginisialisasi nilai properti.

Buat file bernama `src/bab8/constructor-standar.ts`:

```ts
class SiswaAkademik {
  nama: string;
  nilai: number;

  // Mendefinisikan constructor
  constructor(namaAwal: string, nilaiAwal: number) {
    console.log(`[Constructor]: Sedang membuat objek siswa ${namaAwal}...`);
    this.nama = namaAwal;
    this.nilai = nilaiAwal;
  }

  cetakInfo(): void {
    console.log(`Siswa: ${this.nama} | Nilai: ${this.nilai}`);
  }
}

// Membuat objek sekaligus mengirim data ke constructor
const siswa1 = new SiswaAkademik("Putra Ramadhan", 85);
const siswa2 = new SiswaAkademik("Dewi Rahayu", 78);

console.log("\n--- INFO SISWA ---");
siswa1.cetakInfo();
siswa2.cetakInfo();
```

Jalankan dengan perintah:
```text
tsx src/bab8/constructor-standar.ts
```

## Output
```text
[Constructor]: Sedang membuat objek siswa Putra Ramadhan...
[Constructor]: Sedang membuat objek siswa Dewi Rahayu...

--- INFO SISWA ---
Siswa: Putra Ramadhan | Nilai: 85
Siswa: Dewi Rahayu | Nilai: 78
```

---

## Fitur Keren TypeScript: Parameter Properties

TypeScript memiliki fitur singkat yang sangat disukai programmer: **Parameter Properties**. Kita bisa mendeklarasikan property sekaligus parameter constructor hanya dengan satu baris menggunakan access modifier (seperti `public` atau `private`):

```ts
// Jauh lebih singkat!
class Siswa {
  constructor(public nama: string, public nilai: number) {}
}
```

TypeScript otomatis membuat property `nama` dan `nilai` di luar constructor, lalu memasukkan nilainya secara otomatis. Tidak perlu lagi menulis `this.nama = nama` di dalam tubuh constructor.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengirim jumlah argumen yang salah ke constructor
```ts
const siswaA = new SiswaAkademik("Putra"); // Error!
// Expected 2 arguments, but got 1.
```

**Perbaikan:** Sesuaikan argumen yang dikirim di dalam tanda kurung `new Class(...)` dengan parameter yang dideklarasikan di dalam constructor.

---

## Tips
:::tip[Gunakan Parameter Properties untuk Kode Bersih]
Biasakan menggunakan gaya singkat TypeScript `constructor(public nama: string)` saat membuat class biasa. Ini menghemat banyak baris penulisan kode dan sangat umum digunakan pada framework modern seperti NestJS.
:::

---

## Latihan
1. Buat class bernama `Buku` menggunakan gaya Parameter Properties singkat TypeScript dengan properti: `judul` (string) dan `harga` (number).
2. Buat tiga objek buku baru dengan harga berbeda-beda.
3. Cetak total harga seluruh buku menggunakan operator penjumlahan biasa.

---

## Ringkasan
- Constructor adalah method khusus yang dijalankan otomatis saat objek dibuat.
- Ditulis menggunakan nama `constructor`.
- Berguna untuk menginisialisasi nilai awal properti objek.
- Parameter Properties di TypeScript mempermudah penulisan constructor menjadi satu baris singkat.

:::tip[Langkah Selanjutnya]
Lanjut ke **Property** untuk mendalami tipe dan jenis data di dalam Class.
:::
