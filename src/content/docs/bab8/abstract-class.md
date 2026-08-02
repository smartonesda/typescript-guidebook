---
title: "Abstract Class"
description: Mengenal dan membuat Abstract Class sebagai cetak biru setengah jadi yang wajib diturunkan di TypeScript.
---

# Abstract Class (Kelas Abstrak)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dan kegunaan Abstract Class.
- Membuat Abstract Class dan Abstract Method.
- Mengimplementasikan Abstract Class pada subclass nyata.

---

## Pendahuluan

Pernahkah kamu membuat class induk yang sebenarnya **tidak masuk akal jika dicetak langsung menjadi objek**? 

Contoh: Class `Hewan`. Objek kucing nyata ada, objek anjing nyata ada. Tetapi bagaimana wujud objek "Hewan" saja secara fisik? Tidak ada wujudnya, karena "Hewan" adalah konsep abstrak. 

Untuk situasi ini, TypeScript menyediakan fitur **Abstract Class** — cetak biru setengah jadi yang dilarang diinstansiasi langsung.

---

## Penjelasan Materi: Apa itu Abstract Class?

**Abstract Class** adalah class yang:
1. Ditandai dengan kata kunci **`abstract`**.
2. **Tidak bisa dibuat objeknya secara langsung** menggunakan `new` (akan memicu error).
3. Hanya digunakan sebagai **induk** untuk di-extends oleh class anak.

Di dalam abstract class, kita bisa membuat **Abstract Method** — method kosong tanpa tubuh `{}` yang **wajib ditulis ulang** dan dilengkapi isinya oleh class anak.

```ts
abstract class Hewan {
  // Abstract method (tanpa tubuh {})
  abstract bersuara(): void;
}
```

---

## Analogi Kehidupan Sehari-hari: Sketsa Blueprint Cetak Biru yang Belum Selesai

Bayangkan arsitek memberikan gambar sketsa rumah setengah jadi kepada kontraktor:

```text
Arsitek: "Ini sketsa dasar. Wajib ada Pintu Depan dan Atap."
```

Sketsa dasar ini adalah **Abstract Class**. Kontraktor tidak bisa membangun rumah hanya dari coretan setengah jadi ini. Kontraktor harus melengkapi detailnya terlebih dahulu (membuat class anak konkrit seperti `RumahKayu` atau `RumahBeton`) sebelum rumah fisik bisa dibangun.

---

## Visual Illustration: Struktur Abstract Class

```text
    Abstract Class: Hewan (Tidak bisa di-new ✗)
       └── abstract bersuara() (tanpa tubuh)
                 │
                 ▼ extends
      Class Kucing (Bisa di-new ✓)
       └── bersuara() { console.log("Meong") } (wajib melengkapi tubuh method)
```

---

## Mari Mencoba: Penerapan Abstract Class

Mari kita buat program class abstrak `Bentuk` untuk menghitung luas bangun datar.

Buat file bernama `src/bab8/abstract-class.ts`:

```ts
// 1. Membuat Abstract Class
abstract class BangunDatar {
  constructor(public nama: string) {}

  // Method biasa (boleh ada di abstract class)
  tampilkanInfo(): void {
    console.log(`Bangun Datar: ${this.nama}`);
  }

  // Abstract Method (Wajib diimplementasikan di class anak)
  abstract hitungLuas(): number;
}

// 2. Class Anak Persegi (Wajib melengkapi hitungLuas)
class Persegi extends BangunDatar {
  constructor(nama: string, public sisi: number) {
    super(nama);
  }

  hitungLuas(): number {
    return this.sisi * this.sisi;
  }
}

// 3. Class Anak Lingkaran
class Lingkaran extends BangunDatar {
  constructor(nama: string, public jariJari: number) {
    super(nama);
  }

  hitungLuas(): number {
    return parseFloat((Math.PI * this.jariJari * this.jariJari).toFixed(2));
  }
}

// --- Menggunakan Class ---
// const bangun = new BangunDatar("abstrak"); // ✗ Error! Cannot create an instance of an abstract class.

const kotak = new Persegi("Persegi A", 5);
const bulat = new Lingkaran("Lingkaran B", 7);

kotak.tampilkanInfo();
console.log(`Luas Kotak: ${kotak.hitungLuas()}`);

console.log("\n");
bulat.tampilkanInfo();
console.log(`Luas Bulat: ${bulat.hitungLuas()}`);
```

Jalankan dengan perintah:
```text
tsx src/bab8/abstract-class.ts
```

## Output
```text
Bangun Datar: Persegi A
Luas Kotak: 25


Bangun Datar: Lingkaran B
Luas Bulat: 153.94
```

---

## Penjelasan Baris per Baris

- `abstract class BangunDatar` — menandai bahwa class ini bersifat abstrak, tidak bisa dibuat objeknya menggunakan `new BangunDatar()`.
- `abstract hitungLuas(): number;` — mendeklarasikan nama dan tipe return method tanpa menulis tubuh logikanya. Ini seperti memberikan "tugas wajib" bagi class anak.
- `class Persegi extends BangunDatar` — jika class anak tidak menuliskan method `hitungLuas()`, TypeScript akan menampilkan error merah di editor.

---

## Kesalahan yang Sering Terjadi

### ❌ Lupa menuliskan method abstrak di class anak
```ts
class Segitiga extends BangunDatar {
  // Error! Non-abstract class 'Segitiga' does not implement inherited abstract member 'hitungLuas'.
}
```

**Perbaikan:** Pastikan seluruh method yang ditandai `abstract` di class induk ditulis ulang dan dilengkapi tubuh `{}`-nya di dalam class anak.

---

## Latihan
1. Buat abstract class `Pekerja` dengan constructor `nama` dan abstract method `kerja(): void`.
2. Buat class anak `Guru` dan lengkapi method `kerja()` dengan pesan mengajar.
3. Buat objek Guru dan jalankan method `kerja()`.

---

## Ringkasan
- Abstract Class ditandai keyword `abstract` dan tidak bisa diinstansiasi secara langsung menggunakan `new`.
- Berguna sebagai kontrak cetak biru induk yang memaksa kesamaan struktur pada class-class anak.
- Abstract Method wajib dilengkapi tubuh kodenya oleh class anak.

:::tip[Langkah Selanjutnya]
Lanjut ke **Static Member** untuk belajar properti/method milik bersama seluruh instance objek.
:::
