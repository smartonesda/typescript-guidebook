---
title: "Pengenalan SOLID Principle — BAB 12"
description: Pengenalan dasar terhadap 5 prinsip desain software SOLID untuk menulis kode berorientasi objek yang fleksibel.
---

# Pengenalan SOLID Principle

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan apa itu prinsip SOLID secara garis besar.
- Menjelaskan arti dari *Single Responsibility Principle* (SRP) pada Class.
- Memahami konsep dasar pembuatan class yang fleksibel dan mudah diperluas.

---

## Pendahuluan
Dalam pemrograman berorientasi objek (OOP) tingkat lanjut yang kamu pelajari di BAB 8, ada 5 prinsip desain software yang diakui di seluruh dunia sebagai panduan membuat sistem yang sangat fleksibel. Kumpulan prinsip ini dikenal dengan singkatan **SOLID**.

Sebagai anak SMK, kamu tidak harus langsung menghafal kelima prinsip ini secara mendalam sekarang. Cukup pahami konsep dasarnya agar kamu tidak bingung saat mendengarnya di dunia industri nanti.

---

## Penjelasan: Apa itu SOLID?

SOLID adalah singkatan dari 5 prinsip desain berorientasi objek yang diperkenalkan oleh Robert C. Martin (Uncle Bob):

```text
S ──► Single Responsibility Principle (SRP)
O ──► Open/Closed Principle (OCP)
L ──► Liskov Substitution Principle (LSP)
I ──► Interface Segregation Principle (ISP)
D ──► Dependency Inversion Principle (DIP)
```

Mari kita bahas prinsip yang paling dasar dan wajib kamu kuasai sekarang:

### Single Responsibility Principle (SRP)
Satu class sebaiknya hanya memiliki **satu alasan saja untuk diubah**. Artinya, class tersebut hanya boleh menangani satu fokus tanggung jawab.

- **Melanggar SRP**: Class `Siswa` bertugas menyimpan data nama siswa, *sekaligus* bertugas menghitung rata-rata nilai database, *sekaligus* bertugas mencetak struk laporan PDF ke printer. Jika ada perubahan format printer, class `Siswa` terpaksa harus diubah.
- **Mematuhi SRP**: Class `Siswa` hanya menyimpan data biodata. Urusan mencetak laporan dipindahkan ke class khusus bernama `LaporanCetak`.

---

## Analogi Kehidupan Sehari-hari: Pembagian Tugas Guru di Sekolah

Bayangkan struktur organisasi guru di sekolahmu:

```text
- Pak Budi: Khusus mengajar mata pelajaran Pemrograman Web (SRP dipatuhi)
- Bu Ani: Khusus mengajar mata pelajaran Desain Grafis (SRP dipatuhi)
```

Jika sekolah memaksa **Pak Budi mengajar Pemrograman Web, sekaligus mengajar Olahraga, sekaligus mencuci piring di kantin, sekaligus mengecat gedung sekolah**:

```text
Guru serbaguna = Melanggar Single Responsibility (Pak Budi akan kelelahan dan stress!)
```

Pak Budi tidak akan bisa mengajar dengan fokus maksimal karena terlalu banyak tanggung jawab yang berbeda.

---

## Visual Illustration: Perbedaan Class SRP vs Non-SRP

```text
CLASS NON-SRP (Campur Aduk)
class Siswa {
  nama: string;
  hitungNilai() {}
  simpanKeDatabase() {}
  cetakKePrinter() {}
}

CLASS SRP (Semua Komponen Terpisah Sesuai Tugas)
class Siswa { nama: string; }
class SiswaRepository { simpan() {} } (BAB 11)
class PrinterService { cetak() {} }
```

---

## Example: Penerapan SRP pada Class

### Bad Code (Class Melanggar SRP)
```ts
class LaporanSiswa {
  constructor(public nama: string, public nilai: number) {}

  // Tugas 1: Logika data
  hitungPersentase(): number { return this.nilai * 100; }

  // Tugas 2: Logika presentasi visual (melanggar SRP!)
  cetakFormatKertas(): void {
    console.log(`Laporan: ${this.nama}`);
  }
}
```

### Good Code (Class Mematuhi SRP)
```ts
class LaporanSiswa {
  constructor(public nama: string, public nilai: number) {}
  hitungPersentase(): number { return this.nilai * 100; }
}

class LaporanPrinter {
  // Hanya fokus mengurusi cetak visual kertas
  cetak(laporan: LaporanSiswa): void {
    console.log(`Laporan: ${laporan.nama}`);
  }
}
```

---

## Common Mistakes
- **Menumpuk Semua Fungsi ke Class Model**: Menuliskan koneksi database, visual console, dan parsing file ke dalam class `SiswaClass` (BAB 11). Ini merusak modularitas dan keterbacaan kode secara drastis.

---

## Tips
:::tip[Satu Alasan untuk Berubah]
Saat merancang sebuah Class, tanyakan: *"Jika bagian program ini diubah, apakah saya terpaksa mengubah Class ini?"*. Jika jawabannya iya untuk banyak skenario berbeda, pecahlah Class tersebut menjadi beberapa bagian yang lebih kecil.
:::

---

## Best Practice
- Class `AcademicRepository` yang kamu buat di BAB 11 adalah contoh terbaik dari penerapan SRP: ia hanya fokus menangani penyimpanan data array murni, ia tidak peduli cara mencetak laporannya.

---

## Ringkasan
- SOLID adalah 5 prinsip desain software berorientasi objek agar sistem fleksibel.
- *Single Responsibility Principle* (SRP) mewajibkan satu Class hanya memiliki satu tugas fokus spesifik.
- Memisahkan tugas class membuat kode mudah dirawat saat aplikasi berkembang besar.

---

## Latihan
1. Jelaskan dengan bahasamu sendiri mengapa kita perlu menerapkan *Single Responsibility Principle* (SRP) saat merancang Class di TypeScript.
