---
title: "Method"
description: Memahami method sebagai fungsi khusus yang berada di dalam lingkup Class untuk melakukan tindakan.
---

# Method (Fungsi Kelas)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti method di dalam Class.
- Membuat method dengan parameter dan return value yang tepat.
- Memanggil method dari objek instance.

---

## Pendahuluan

Properti menyimpan data, tetapi data tersebut pasif. Untuk membuat objek aktif dan bisa melakukan tindakan (misalnya: menghitung rata-rata, memperbarui status, atau menembak pada game), kita membutuhkan **Method**. Method adalah fungsi yang dideklarasikan di dalam class.

---

## Penjelasan Materi: Menulis Method

Method dideklarasikan di dalam tubuh class tanpa menggunakan kata kunci `function`:

```ts
class Kalkulator {
  // Deklarasi method
  tambah(a: number, b: number): number {
    return a + b;
  }
}
```

Di dalam method, kita bisa mengakses properti milik class yang sama menggunakan keyword `this`.

---

## Analogi Kehidupan Sehari-hari: Aktivitas Penghuni Rumah

Sebuah rumah memiliki pintu dan keran air. Tindakan yang dilakukan penghuni:
- Membuka Pintu (mengubah status pintu dari tertutup menjadi terbuka)
- Menyalakan Keran Air (mengalirkan air)

```text
Method = Aktivitas/aksi yang bisa dilakukan komponen rumah
```

Aktivitas membuka pintu memodifikasi status pintu fisik itu sendiri. Method dalam pemrograman pun memodifikasi properti dari objek itu sendiri.

---

## Visual Illustration: Hubungan Property dan Method

```text
┌──────────────────────────────┐
│        OBJEK: Siswa          │
│                              │
│  Property: nilai = 70        │ ◄──┐
│                                   │ diubah oleh
│  Method: remedial(nilaiBaru) ─────┘
│    aksi: this.nilai = nilaiBaru
└──────────────────────────────┘
```

---

## Mari Mencoba: Method Pemroses Data

Mari kita buat program class `SiswaRapor` yang memiliki method untuk mengolah propertinya.

Buat file bernama `src/bab8/method-class.ts`:

```ts
class SiswaRapor {
  constructor(
    public nama: string,
    public nilaiTugas: number,
    public nilaiUjian: number
  ) {}

  // 1. Method dengan return value number
  hitungRataRata(): number {
    const rataRata = (this.nilaiTugas + this.nilaiUjian) / 2;
    return parseFloat(rataRata.toFixed(2));
  }

  // 2. Method dengan return value string
  tentukanGrade(): string {
    const rata = this.hitungRataRata();
    if (rata >= 90) return "A";
    if (rata >= 80) return "B";
    if (rata >= 70) return "C";
    return "D";
  }

  // 3. Method tanpa return value (void) untuk mencetak laporan
  tampilkanLaporan(): void {
    console.log("=".repeat(35));
    console.log(`  LAPORAN NILAI: ${this.nama.toUpperCase()}`);
    console.log("=".repeat(35));
    console.log(`  Nilai Tugas: ${this.nilaiTugas}`);
    console.log(`  Nilai Ujian: ${this.nilaiUjian}`);
    console.log(`  Rata-rata  : ${this.hitungRataRata()}`);
    console.log(`  Grade      : ${this.tentukanGrade()}`);
    console.log("=".repeat(35));
  }
}

const siswa1 = new SiswaRapor("Putra Ramadhan", 85, 92);
const siswa2 = new SiswaRapor("Dewi Rahayu", 60, 75);

// Menjalankan method
siswa1.tampilkanLaporan();
siswa2.tampilkanLaporan();
```

Jalankan dengan perintah:
```text
tsx src/bab8/method-class.ts
```

## Output
```text
===================================
  LAPORAN NILAI: PUTRA RAMADHAN
===================================
  Nilai Tugas: 85
  Nilai Ujian: 92
  Rata-rata  : 88.5
  Grade      : B
===================================
===================================
  LAPORAN NILAI: DEWI RAHAYU
===================================
  Nilai Tugas: 60
  Nilai Ujian: 75
  Rata-rata  : 67.5
  Grade      : D
===================================
```

---

## Penjelasan Baris per Baris

- `hitungRataRata(): number` — Method yang menghitung rata-rata dari properti `nilaiTugas` dan `nilaiUjian` objek.
- `this.hitungRataRata()` — Method di dalam class bisa memanggil method lain di dalam class yang sama menggunakan keyword `this`.
- `siswa1.tampilkanLaporan()` — Cara memanggil method dari luar class menggunakan instance objek.

---

## Kesalahan yang Sering Terjadi

### ❌ Menuliskan kata kunci `function` di dalam class
```ts
class Siswa {
  function perkenalan() {} // Error di TypeScript!
}
```

**Perbaikan:** Method di dalam class ditulis langsung dengan namanya tanpa keyword `function`.

---

## Tips
:::tip[Method Harus Mengubah Status / Mengembalikan Nilai]
Buatlah method yang memproses data internal objek (`this.property`) atau mengembalikan hasil perhitungan. Hindari membuat method yang tidak menggunakan data objek sama sekali (gunakan fungsi utilitas global saja untuk hal tersebut).
:::

---

## Latihan
1. Buat class bernama `Pena` dengan properti: `tintaPersen` (number = 100).
2. Tambahkan method `tulis(jumlahKarakter: number): void` yang mengurangi `tintaPersen` sebesar `0.5` per karakter yang ditulis.
3. Tampilkan sisa tinta setelah menulis kalimat `"Belajar OOP TypeScript"`.

---

## Ringkasan
- Method adalah fungsi yang dideklarasikan langsung di dalam tubuh class.
- Tidak ditulis dengan kata kunci `function`.
- Dapat memanggil properti dan method lain dalam objek yang sama menggunakan keyword `this`.

:::tip[Langkah Selanjutnya]
Lanjut ke **this Keyword** untuk memahami bagaimana pointer referensi ini bekerja.
:::
