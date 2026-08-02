---
title: "Ringkasan BAB 8"
description: Rangkuman lengkap materi Object-Oriented Programming (OOP) — tabel modifier, perbandingan class vs object, dan checklist belajar.
---

# Ringkasan BAB 8

## Selamat! 🎉

Kamu telah menyelesaikan **BAB 8: Object-Oriented Programming (OOP)**! Ini adalah pencapaian luar biasa. OOP adalah paradigma pemrograman standar industri yang digunakan oleh tim pengembang software profesional di seluruh dunia untuk membangun aplikasi besar yang kokoh dan mudah dirawat.

---

## OOP Cheat Sheet

### Deklarasi Class Dasar
```ts
class Siswa {
  constructor(public nama: string, public kelas: string) {}

  belajar(): void {
    console.log(`${this.nama} sedang belajar.`);
  }
}
```

### Instansiasi Objek
```ts
const siswa1 = new Siswa("Putra", "XI RPL 1");
siswa1.belajar();
```

---

## Perbandingan Class vs Object

| Karakteristik | Class | Object (Instance) |
|---|---|---|
| **Definisi** | Desain / sketsa cetak biru | Wujud fisik nyata hasil cetakan |
| **Wujud di Memori** | Hanya definisi tipe, belum ada data | Menempati ruang RAM dengan data nyata |
| **Jumlah** | Dibuat 1 kali | Bisa dicetak tak terbatas dari 1 class |
| **Analogi** | Blueprint sketsa kertas rumah | Rumah fisik nyata di kaveling tanah |

---

## Perbandingan Access Modifier

| Modifier | Di dalam Class? | Di Class Anak (extends)? | Di luar Class? |
|---|---|---|---|
| **`public`** | Ya ✓ | Ya ✓ | Ya ✓ |
| **`protected`** | Ya ✓ | Ya ✓ | Tidak ✗ |
| **`private`** | Ya ✓ | Tidak ✗ | Tidak ✗ |

---

## Struktur Pewarisan (Inheritance)

```text
    Superclass (Induk): Manusia
           │
           ▼ extends (Mewarisi nama & umur)
    Subclass (Anak): Siswa
    (Menambah nis, menggunakan super() di constructor)
```

---

## Checklist Pemahaman BAB 8

Tandai setiap poin yang sudah kamu kuasai:
- [ ] Memahami perbedaan cara berpikir prosedural dan berbasis objek (OOP).
- [ ] Bisa menjelaskan perbedaan Class (sketsa) dan Object (rumah fisik).
- [ ] Bisa membuat Class lengkap dengan property dan method di TypeScript.
- [ ] Menggunakan constructor standar dan Parameter Properties singkat.
- [ ] Menggunakan keyword `this` secara tepat untuk mengakses data internal class.
- [ ] Menerapkan access modifier `public`, `private`, dan `protected` dengan benar.
- [ ] Memahami pilar Enkapsulasi untuk menyembunyikan data internal objek.
- [ ] Memahami pilar Pewarisan (Inheritance) menggunakan keyword `extends`.
- [ ] Memahami pilar Polimorfisme menggunakan teknik Method Overriding.
- [ ] Bisa membuat Abstract Class dan mengimplementasikan Abstract Method di class anak.
- [ ] Bisa menggunakan Static Property dan Static Method langsung dari nama Class.
- [ ] Menggunakan Getter dan Setter modern untuk validasi data properti.
- [ ] Menyelesaikan Studi Kasus Sistem Informasi Akademik.
- [ ] Menyelesaikan 10 Challenge pemrograman berbasis objek.
- [ ] Memahami dan bisa memperbaiki error-error umum OOP.

---

## Perintah Penting
```text
tsx src/bab8/namafile.ts   ← Menjalankan file TypeScript OOP di terminal
```

---

## Latihan Penutup

Tanpa melihat panduan, buatlah file `src/bab8/review-oop.ts`:

1. Buat class induk `Pekerja` dengan properti: `public nama: string` dan `protected gajiPokok: number`.
2. Buat class anak `Programmer` yang meng-extends `Pekerja`, menambah properti `private _tunjangan: number = 0` lengkap dengan getter dan setter terproteksi.
3. Tambahkan method `hitungTotalGaji(): number` yang menjumlahkan `gajiPokok` dan `_tunjangan`.
4. Tambahkan method `kerja()` yang menimpa method induk (polimorfisme) untuk menampilkan data pendapatan total secara rapi.
5. Buat objek Programmer, set tunjangannya lewat setter, lalu panggil method `kerja()`.

Jalankan dan pastikan program berjalan lancar tanpa error kompilasi.

---

## Pesan untuk Kamu

Object-Oriented Programming (OOP) mungkin terasa rumit pada awalnya karena banyaknya istilah baru (seperti polimorfisme atau enkapsulasi). Namun, setelah kamu mulai menulis kode aplikasi nyata yang besar, kamu akan menyadari betapa indahnya OOP dalam menjaga kerapian kodemu.

Kamu kini siap melangkah ke pembuatan aplikasi nyata tingkat lanjut. Teruslah berkarya dan jangan pernah berhenti belajar! 🚀

:::tip[Selesai BAB 8]
Selamat! Seluruh materi BAB 8 dan guidebook TypeScript ini telah kamu selesaikan dengan sangat baik. Laporkan pencapaianmu kepada gurumu.
:::
