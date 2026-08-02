---
title: "Prinsip KISS (Keep It Simple, Stupid) — BAB 12"
description: Mengenal prinsip KISS untuk menulis kode yang sederhana dan menghindari over-engineering.
---

# Prinsip KISS (Keep It Simple, Stupid)

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dan pentingnya prinsip KISS dalam penulisan kode.
- Menghindari *Over-Engineering* (membuat kode terlalu rumit tanpa alasan).
- Menulis solusi program yang paling sederhana dan mudah dipahami.

---

## Pendahuluan
Banyak programmer pemula merasa bangga jika berhasil menulis kode yang sangat rumit, menggunakan nested loop 3 tingkat, atau menggunakan logika ternary bertumpuk 4 baris yang hanya dipahami oleh mereka sendiri. Mereka mengira itu menunjukkan kecerdasan. 

Industri justru membenci kode yang terlalu rumit. Prinsip utama industri adalah **KISS** — tulis kode sesederhana mungkin agar mudah dipelihara.

---

## Penjelasan
Prinsip **KISS** (*Keep It Simple, Stupid* / Buat Ini Sederhana, Bodoh!) menyatakan bahwa **sebagian besar sistem dapat bekerja paling baik jika dibuat sederhana, bukan dibuat rumit**. 

Oleh karena itu, kesederhanaan harus menjadi tujuan utama dalam desain software, dan kerumitan yang tidak perlu harus dihindari sejak awal.

### Apa itu Over-Engineering?
*Over-engineering* adalah tindakan merancang solusi yang jauh lebih rumit daripada masalah aslinya. Misalnya: kamu hanya diminta membuat aplikasi mencetak nama, tetapi kamu malah membuat arsitektur bertumpuk-tumpuk, membuat 5 abstract class (BAB 8), dan database terdistribusi cloud. Hasilnya aplikasimu menjadi lambat, rumit, dan sulit digunakan.

---

## Analogi Kehidupan Sehari-hari: Instruksi Merakit Kipas Angin
Bayangkan lembar buku panduan perakitan kipas angin baru:

- **Instruksi Rumit (Bukan KISS)**: *"Ambil poros silinder besi A, masukkan secara rotasi 45 derajat searah jarum jam sambil menahan mur penahan B di bagian kolong bawah..."* (User bingung dan kipas angin tidak terakit).
- **Instruksi Sederhana (KISS)**: *"Colokkan baling-baling ke besi tengah, lalu putar penutup ke kanan sampai kencang."* (Selesai dalam 10 detik).

Tulis kode programmu seperti instruksi sederhana: langsung ke inti masalah tanpa berbelit-belit.

---

## Visual Illustration: Perbandingan Kompleksitas Solusi

```text
Masalah: Hitung luas persegi
  ├── Solusi Over-Engineering: Buat abstract class Bangun, buat interface Sisi, buat factory class... ✗
  └── Solusi KISS: function hitung(sisi: number) { return sisi * sisi } ✓ (Langsung, ringkas)
```

---

## Example: Penyederhanaan Kondisi Bertumpuk

### Bad Code (Over-Engineering / Sulit Dibaca)
```ts
// Menggunakan ternary bertingkat-tingkat yang memusingkan kepala
const dapatStatus = (n: number) => n >= 90 ? "A" : n >= 80 ? "B" : n >= 70 ? "C" : "D";
```

### Good Code (KISS / Mudah Dibaca Sekilas)
```ts
// Lebih panjang beberapa baris, tetapi dibaca 1 detik langsung paham maksudnya
function tentukanGrade(nilai: number): string {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  return "D";
}
```

---

## Common Mistakes
- **Trik Kode Pintar**: Menulis baris kode super pendek tanpa spasi agar terlihat hebat di forum online. Kode pintar yang sulit dibaca oleh teman satu timmu hanya akan menjadi beban saat terjadi error.

---

## Tips
:::tip[Pilih Solusi Paling Sederhana]
Jika kamu dihadapkan pada dua pilihan cara menulis kode: satu cara terlihat canggih menggunakan class generic bertumpuk (BAB 9), satu cara lagi terlihat biasa menggunakan `if-else` (BAB 2) sederhana. Jika `if-else` sudah cukup untuk menyelesaikan masalah dengan aman, pilihlah **`if-else`** tersebut.
:::

---

## Best Practice
- Utamakan keterbacaan kode (*readability*) di atas keringkasan (*conciseness*). Lebih baik kode panjang 5 baris tapi langsung paham daripada 1 baris tapi harus berpikir 5 menit untuk memahaminya.

---

## Ringkasan
- KISS menuntut penulisan kode sesederhana mungkin tanpa kerumitan tak perlu.
- *Over-engineering* memperlambat pengerjaan dan mempersulit pemeliharaan program.
- Pilihlah solusi yang paling intuitif dan mudah dipahami oleh programmer lain.

---

## Latihan
1. Periksa kode fungsi pencarian siswa di dalam project final SIAKAD-mu (BAB 11).
2. Jika ada logika `if` bersarang yang terlalu dalam, tulislah kembali agar menjadi lebih sederhana menggunakan metode early return.
