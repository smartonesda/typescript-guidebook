---
title: "Clean Code — BAB 12"
description: Aturan emas menulis kode program yang bersih, modular, dan mudah dipelihara di TypeScript.
---

# Clean Code

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dan pentingnya prinsip *Clean Code* (Kode Bersih).
- Mengurangi kompleksitas fungsi dengan membatasi jumlah baris dan tingkat cabang logika.
- Menulis kode yang "self-documenting" (menjelaskan dirinya sendiri tanpa butuh banyak komentar).

---

## Pendahuluan
Banyak orang mengira kode yang baik adalah kode yang sangat rumit, menggunakan trik baris singkat yang sulit dipahami, dan hanya bisa dibaca oleh si pembuatnya. Itu salah besar. 

Di dunia industri rekayasa perangkat lunak, **kode yang baik adalah kode yang paling mudah dibaca dan dipahami oleh orang lain**. Konsep ini dikenal sebagai **Clean Code**.

---

## Penjelasan
Prinsip utama menulis *Clean Code*:

### 1. Fungsi Harus Fokus (Single Responsibility)
Sebuah fungsi sebaiknya hanya melakukan **satu tugas saja** dan menyelesaikannya dengan baik. Jika fungsi kamu memiliki 50 baris kode dan melakukan pembacaan file, kalkulasi nilai, serta pencetakan laporan sekaligus, pecahlah fungsi tersebut menjadi tiga fungsi kecil yang spesifik.

### 2. Batasi Parameter Fungsi
Fungsi yang baik menerima maksimal **2 atau 3 parameter**. Jika fungsi membutuhkan lebih banyak parameter, bungkus parameter tersebut ke dalam satu objek terstruktur.

```ts
// Buruk (banyak parameter)
function daftarkanSiswa(nama: string, kelas: string, nis: number, alamat: string) {}

// Baik (menggunakan objek terstruktur)
interface DataSiswa { nama: string; kelas: string; nis: number; alamat: string; }
function daftarkanSiswa(siswa: DataSiswa) {}
```

### 3. Sembunyikan Detail Implementasi
Program utama (`main.ts`) hanya perlu tahu *apa* yang dilakukan fungsi, bukan *bagaimana* fungsi melakukannya di balik layar.

---

## Analogi Kehidupan Sehari-hari: Meja Belajar yang Rapi
Bayangkan sebuah **Meja Belajar**:

- **Kondisi Kotor**: Pensil, penggaris, buku matematika, dan bungkus makanan dicampur aduk di atas meja. Kamu merasa pusing saat melihatnya dan sulit fokus belajar.
- **Kondisi Bersih (Clean)**: Pensil ditaruh di kotak pensil, buku matematika ditumpuk rapi, dan bungkus makanan sudah dibuang ke tempat sampah. Meja terlihat luas, rapi, dan kamu siap belajar dengan fokus maksimal.

Menulis kode bersih seperti merapikan meja belajar: membuang kode yang tidak digunakan, merapikan baris yang berantakan, dan mengelompokkan logika pada tempatnya.

---

## Visual Illustration: Transformasi Kode Menjadi Bersih

```text
FUNGSI KOTOR (Campur Aduk)
  ├── hitung nilai rata-rata
  ├── cari siswa terbaik
  └── cetak laporan terminal
            │
            ▼ Refactoring (Clean Code)
TIGA FUNGSI BERSIH & FOKUS
  ├── hitungRataRata()
  ├── cariSiswaTerbaik()
  └── tampilkanLaporan()
```

---

## Example: Refactoring Fungsi yang Kompleks

### Bad Code (Fungsi Terlalu Panjang dan Banyak Tugas)
```ts
// Fungsi ini mengolah nilai, memformat teks, dan mencetak laporan sekaligus
function prosesDataSiswa(nama: string, nilaiTugas: number, nilaiUjian: number): void {
  const rata = (nilaiTugas + nilaiUjian) / 2;
  let status = "REMEDIAL";
  if (rata >= 75) {
    status = "LULUS";
  }
  console.log("=====================");
  console.log(`Nama  : ${nama}`);
  console.log(`Status: ${status}`);
  console.log("=====================");
}
```

### Good Code (Fungsi Modular Terpisah)
```ts
// Setiap fungsi memiliki satu tanggung jawab yang fokus
function hitungRataRata(nilai1: number, nilai2: number): number {
  return (nilai1 + nilai2) / 2;
}

function apakahLulus(rataRata: number): boolean {
  return rataRata >= 75;
}

function cetakLaporan(nama: string, lulus: boolean): void {
  console.log("=====================");
  console.log(`Nama  : ${nama}`);
  console.log(`Status: ${lulus ? "LULUS" : "REMEDIAL"}`);
  console.log("=====================");
}

// Cara penggunaan yang bersih
const rata = hitungRataRata(80, 90);
const statusLulus = apakahLulus(rata);
cetakLaporan("Putra", statusLulus);
```

---

## Common Mistakes
- **Tingkat Cabang Logika Terlalu Dalam (Deep Nesting)**: Menuliskan percabangan `if` di dalam `if` di dalam `if` lagi sampai 5 tingkat dalam. Ini membuat kode sangat sulit dibaca (disebut pola piramida). Gunakan *early return* (keluar fungsi lebih cepat) untuk mengatasinya.

---

## Tips
:::tip[Batasi Panjang Fungsi]
Usahakan agar satu fungsi/method **tidak lebih dari 20 baris kode**. Jika sudah melewati batas tersebut, kemungkinan besar fungsi tersebut melakukan lebih dari satu tugas dan harus dipecah.
:::

---

## Best Practice
- Berikan jarak baris kosong di antara kelompok kode yang berbeda fungsinya agar kode "bernapas" dan tidak menumpuk padat seperti dinding teks.

---

## Ringkasan
- *Clean Code* mengutamakan keterbacaan dan kesederhanaan kode untuk manusia.
- Fungsi harus fokus melakukan satu tugas spesifik (Single Responsibility).
- Batasi jumlah parameter fungsi menggunakan objek parameter terstruktur.

---

## Latihan
1. Buka kembali salah satu file latihan lamamu di folder project.
2. Identifikasi apakah ada fungsi yang terlalu panjang atau melakukan lebih dari satu tugas, lalu pecahlah menjadi beberapa fungsi kecil yang bersih.
