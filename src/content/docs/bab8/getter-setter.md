---
title: "Getter & Setter"
description: Menggunakan method get dan set untuk mengontrol pembacaan dan penulisan properti objek di TypeScript.
---

# Getter & Setter

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan fungsi dari Getter dan Setter.
- Membuat method `get` dan `set` dengan sintaks modern di TypeScript.
- Menambahkan validasi keamanan data di dalam method `set`.

---

## Pendahuluan

Di halaman Enkapsulasi, kita belajar cara melindungi properti private dengan membuat method public seperti `getSaldo()` dan `tarikUang()`. 

TypeScript menyediakan cara yang lebih modern dan elegan untuk membaca dan menulis properti private seolah-olah kita sedang berinteraksi dengan properti biasa, yaitu menggunakan kata kunci **`get`** dan **`set`**.

---

## Penjelasan Materi: Getter & Setter Modern

Sintaks penulisan di TypeScript menggunakan kata kunci `get` dan `set` sebelum nama method:

```ts
class Siswa {
  private _nama: string = "";

  // 1. Getter (untuk mengambil data)
  get nama(): string {
    return this._nama;
  }

  // 2. Setter (untuk mengubah data)
  set nama(nilaiBaru: string) {
    this._nama = nilaiBaru;
  }
}
```

Dari luar class, kita menggunakannya seperti variabel biasa tanpa menggunakan tanda kurung `()`:

```ts
const s = new Siswa();
s.nama = "Putra";   // memanggil setter otomatis
console.log(s.nama); // memanggil getter otomatis
```

:::note[Konvensi Nama Properti]
Bila menggunakan getter & setter, properti private internal biasanya diberi awalan garis bawah (underscore) seperti `_nama` agar namanya tidak bentrok dengan nama getter/setter `nama`.
:::

---

## Analogi Kehidupan Sehari-hari: Petugas Pengambil & Pengubah Berkas

Bayangkan kamu ingin melihat atau mengubah data rapor di ruang arsip:

### Getter = Petugas Pengambil Berkas
Kamu dilarang masuk ke ruang arsip untuk mengambil rapor sendiri. Kamu mendatangi loket dan berkata: *"Tolong ambilkan rapor saya."* Petugas (Getter) masuk ke dalam, mengambil berkas, lalu menyerahkannya kepadamu.
```text
Getter = Petugas yang mengambil data dari dalam ruang rahasia
```

### Setter = Petugas Pengubah Berkas
Kamu ingin mengubah alamat di rapor. Kamu tidak boleh menulis langsung di rapor tersebut. Kamu menyerahkan formulir alamat baru kepada petugas (Setter). Petugas memeriksa keabsahan tanda tanganmu (validasi), lalu ia sendiri yang menuliskan alamat baru tersebut di dalam berkas rapor asli.
```text
Setter = Petugas yang memeriksa dan menuliskan data baru ke ruang rahasia
```

---

## Visual Illustration: Alur Kerja Getter & Setter

```text
AKSES DARI LUAR                           AKSI DI DALAM CLASS
siswa.nilai = 80   ───► memanggil set nilai(80) ──► lakukan validasi ──► _nilaiUjian = 80
                             │
console.log(siswa.nilai) ◄───┴── memanggil get nilai() ◄── return _nilaiUjian
```

---

## Mari Mencoba: Getter & Setter Terproteksi

Mari kita buat program class `RekeningKoperasi` yang memproteksi perubahan saldo menggunakan getter dan setter.

Buat file bernama `src/bab8/getter-setter.ts`:

```ts
class RekeningKoperasi {
  // Properti internal dilindungi dengan underscore (_)
  private _saldo: number = 0;

  constructor(public namaPemilik: string) {}

  // 1. Getter untuk membaca saldo
  get saldo(): number {
    return this._saldo;
  }

  // 2. Setter untuk mengubah saldo dengan validasi keamanan
  set saldo(jumlahBaru: number) {
    if (jumlahBaru < 0) {
      console.log("⚠ Gagal Set: Saldo tidak boleh negatif!");
      return;
    }
    this._saldo = jumlahBaru;
    console.log(`✓ Saldo ${this.namaPemilik} diperbarui menjadi: Rp${this._saldo}`);
  }
}

const tabungan = new RekeningKoperasi("Putra Ramadhan");

// Memanggil SETTER (secara otomatis lewat tanda =)
tabungan.saldo = 50000;  // ✓ Berhasil
tabungan.saldo = -10000; // ⚠ Ditolak oleh validasi setter!

// Memanggil GETTER (secara otomatis saat dibaca)
console.log(`\nSaldo Akhir: Rp${tabungan.saldo}`); // tanpa kurung kurung ()
```

Jalankan dengan perintah:
```text
tsx src/bab8/getter-setter.ts
```

## Output
```text
✓ Saldo Putra Ramadhan diperbarui menjadi: Rp50000
⚠ Gagal Set: Saldo tidak boleh negatif!

Saldo Akhir: Rp50000
```

---

## Penjelasan Baris per Baris

- `get saldo(): number` — mendefinisikan method pembaca properti. Memiliki tipe return data.
- `set saldo(jumlahBaru: number)` — mendefinisikan method penulis properti. Menerima tepat satu parameter nilai baru.
- `tabungan.saldo = 50000` — meskipun terlihat seperti pengisian variabel biasa, baris ini sebenarnya menjalankan method `set saldo(50000)`.
- `tabungan.saldo` — dibaca seperti variabel biasa, tetapi menjalankan method `get saldo()`.

---

## Kesalahan yang Sering Terjadi

### ❌ Menuliskan tipe return pada method Setter
```ts
set saldo(nilai: number): void { ... } // Error di TypeScript!
// Setters cannot have a return type annotation.
```

**Perbaikan:** Method setter dilarang menuliskan tipe return (`: void` atau tipe lainnya) karena ia hanya bertugas menulis data, bukan mengembalikan hasil.

---

## Latihan
1. Buat class `SiswaNilai` dengan properti private `_nilai: number = 0`.
2. Buat getter `nilai` yang mengembalikan `_nilai`.
3. Buat setter `nilai` yang menolak jika nilai kurang dari 0 atau lebih dari 100.
4. Buat objeknya dan lakukan pengisian data.

---

## Ringkasan
- Getter (`get`) digunakan untuk membaca properti secara terkontrol.
- Setter (`set`) digunakan untuk menulis/memperbarui properti dengan validasi.
- Diakses menggunakan sintaks variabel biasa tanpa tanda kurung `()`.
- Setter dilarang mencantumkan anotasi tipe return.

:::tip[Langkah Selanjutnya]
Lanjut ke **Studi Kasus** untuk mengimplementasikan OOP pada sistem data akademik sekolah.
:::
