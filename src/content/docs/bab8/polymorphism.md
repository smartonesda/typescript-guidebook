---
title: "Polymorphism"
description: Memahami konsep Polimorfisme (banyak bentuk) dan method overriding di TypeScript.
---

# Polymorphism (Polimorfisme)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dari pilar Polimorfisme.
- Melakukan method overriding di dalam class anak.
- Memanggil method overriding menggunakan array polimorfis.

---

## Pendahuluan

**Polymorphism** (berasal dari bahasa Yunani: *poly* = banyak, *morph* = bentuk) adalah pilar OOP ketiga yang memungkinkan sebuah method memiliki implementasi (cara kerja) yang **berbeda-beda** pada objek-objek yang berbeda, meskipun nama method-nya sama.

---

## Penjelasan Materi: Method Overriding

Cara termudah menerapkan polimorfisme adalah dengan **Method Overriding** (menimpa method). Class anak menulis ulang method yang diwarisinya dari class induk agar memiliki perilaku khusus yang berbeda dari induknya.

```ts
class Manusia {
  sapa(): void {
    console.log("Halo");
  }
}

class OrangSunda extends Manusia {
  // Menimpa method sapa() milik Manusia
  sapa(): void {
    console.log("Sampurasun");
  }
}
```

---

## Analogi Kehidupan Sehari-hari: Remote Control Universal

Bayangkan kamu memiliki **Remote Control TV Universal**. Remote tersebut memiliki tombol **`POWER`** (nama method sama).

```text
Tombol POWER ditekan:
  ├── Jika diarahkan ke TV Samsung  ──► TV Samsung menyala
  ├── Jika diarahkan ke AC LG       ──► AC LG menyala
  └── Jika diarahkan ke Audio Sony  ──► Audio Sony menyala
```

Aksi yang dilakukan sama: menekan tombol `POWER`. Tetapi respon setiap perangkat berbeda-beda tergantung benda apa yang menerimanya. Inilah esensi polimorfisme: satu perintah, banyak bentuk respon.

---

## Visual Illustration: Method Overriding

```text
               Class Induk: Hewan { bersuara() }
                             │
            ┌────────────────┴────────────────┐
            ▼ extends                         ▼ extends
   Class Kucing                      Class Anjing
   { bersuara() ──► "Meong" }        { bersuara() ──► "Guk" }
```

---

## Mari Mencoba: Polimorfisme & Method Overriding

Mari buat program yang mendemonstrasikan bagaimana method dengan nama yang sama bekerja secara berbeda pada beberapa objek hewan.

Buat file bernama `src/bab8/polimorfisme.ts`:

```ts
// 1. Class Induk
class Hewan {
  constructor(public nama: string) {}

  // Method umum
  bersuara(): void {
    console.log("Hewan ini mengeluarkan suara.");
  }
}

// 2. Class Anak Kucing (Menimpa bersuara)
class Kucing extends Hewan {
  bersuara(): void {
    console.log(`${this.nama} mengeong: Meooong... 🐾`);
  }
}

// 3. Class Anak Anjing (Menimpa bersuara)
class Anjing extends Hewan {
  bersuara(): void {
    console.log(`${this.nama} menggonggong: Guk Guk! 🐕`);
  }
}

// --- Menggunakan Polimorfisme ---
// Membuat daftar hewan dalam satu tipe array induk (Hewan[])
const daftarHewan: Hewan[] = [
  new Kucing("Kitty"),
  new Anjing("Blacky"),
  new Kucing("Meongy")
];

console.log("=== PADUAN SUARA HEWAN ===");
for (const hewan of daftarHewan) {
  // Memanggil nama method yang sama, tapi responnya berbeda sesuai jenis objeknya
  hewan.bersuara();
}
```

Jalankan dengan perintah:
```text
tsx src/bab8/polimorfisme.ts
```

## Output
```text
=== PADUAN SUARA HEWAN ===
Kitty mengeong: Meooong... 🐾
Blacky menggonggong: Guk Guk! 🐕
Meongy mengeong: Meooong... 🐾
```

---

## Penjelasan Baris per Baris

- `const daftarHewan: Hewan[]` — kita menyimpan objek `Kucing` dan `Anjing` ke dalam satu tipe array induk `Hewan[]`. Ini adalah fitur hebat polimorfisme: objek anak bisa dianggap sebagai tipe objek induknya.
- `hewan.bersuara()` — loop memanggil method `bersuara()`. Komputer otomatis mencari apakah class anak memiliki versi method yang menimpa method induk, lalu menjalankannya.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengubah nama parameter saat menimpa (overriding) method induk
Jika method induk menerima parameter `(pesan: string)`, maka method anak yang menimpanya juga harus menerima tipe parameter yang sama. Mengubah tipe atau jumlah parameter akan membuat TypeScript error karena tanda tangan method tidak cocok.

---

## Tips
:::tip[Manfaatkan Array Polimorfis]
Gunakan polimorfisme saat kamu memiliki banyak jenis data (seperti jenis pembayaran: `OVO`, `Gopay`, `TransferBank`) yang semuanya memiliki method yang sama (seperti `prosesPembayaran()`). Kamu bisa menyimpannya dalam satu array dan memprosesnya dalam satu loop sederhana.
:::

---

## Latihan
1. Buat class induk `Pekerjaan` dengan method `tugas()`.
2. Buat dua class anak: `Guru` dan `Programmer` yang meng-extends `Pekerjaan` dan menulis ulang method `tugas()` dengan tindakan yang berbeda.
3. Buat array berisi objek Guru dan Programmer, jalankan method `tugas()` menggunakan loop.

---

## Ringkasan
- Polimorfisme memungkinkan satu method memiliki banyak bentuk implementasi berbeda.
- Penerapan utamanya menggunakan **Method Overriding** di class anak.
- Membantu menyederhanakan pemrosesan banyak jenis objek sejenis dalam satu array terpadu.

:::tip[Langkah Selanjutnya]
Lanjut ke **Abstract Class** untuk belajar membuat class cetakan setengah jadi.
:::
