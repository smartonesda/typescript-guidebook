---
title: "Mengapa Best Practice?"
description: Memahami pentingnya menerapkan praktik terbaik (best practice) dalam pengembangan software nyata di industri.
---

# Mengapa Best Practice?

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan kerugian jika mengabaikan praktik terbaik dalam project jangka panjang.
- Memahami dampak buruk dari *Technical Debt* (hutang teknis).
- Menyadari peran standarisasi kode dalam kolaborasi tim.

---

## Pendahuluan
Mungkin kamu bertanya-tanya: *"Kenapa industri sangat rewel tentang cara menamai variabel, cara menaruh file, atau jumlah baris di dalam satu fungsi? Kenapa tidak dibebaskan saja asalkan aplikasinya sukses berjalan?"* 

Di halaman ini, kita akan membahas alasan logis di balik standarisasi ketat yang diterapkan oleh perusahaan teknologi dunia.

---

## Penjelasan
Di dunia nyata, siklus hidup sebuah software sangat panjang. Menulis kode baru hanya memakan waktu 20% dari total waktu pengerjaan, sementara 80% sisanya dihabiskan untuk **membaca, memahami, memperbaiki bug, dan memperluas fitur kode lama**.

Jika kode ditulis asal-asalan tanpa aturan yang jelas, project akan menumpuk masalah yang disebut **Technical Debt (Hutang Teknis)**. 

### Apa itu Technical Debt?
Hutang teknis adalah istilah untuk menggambarkan kondisi di mana developer memilih menulis kode yang cepat dan berantakan demi mengejar deadline instan, namun di masa depan mereka harus membayar "bunga" berupa waktu perbaikan bug yang sangat lama dan frustrasi karena kodenya sulit diubah. Semakin lama hutang teknis tidak dilunasi dengan merapikan kode (*refactoring*), aplikasi akan semakin rapuh dan akhirnya harus ditulis ulang dari nol.

---

## Analogi Kehidupan Sehari-hari: Montir di Bengkel yang Berantakan
Bayangkan sebuah **Bengkel Sepeda Motor**:

- **Bengkel A (Tanpa Aturan)**: Kunci pas ditaruh di lantai kotor, obeng dicampur di laci sekrup, dan oli bekas dibiarkan tumpah di lantai. Ketika ada pelanggan ingin mengganti oli, montir menghabiskan waktu 15 menit hanya untuk mencari obeng yang hilang.
- **Bengkel B (Best Practice / Rapi)**: Setiap kunci ditaruh di dinding khusus dengan bayangan label bentuk kuncinya, oli ditaruh di rak khusus, dan lantai selalu dibersihkan setiap selesai servis. Mengganti oli selesai dalam waktu 5 menit karena semua alat siap sedia.

Menulis kode program tanpa *best practice* seperti bekerja di Bengkel A: waktu berharga habis sia-sia hanya untuk mencari letak kesalahan di tengah kekacauan kode.

---

## Visual Illustration: Siklus Dampak Hutang Teknis

```text
Tulis kode asal-asalan ──► Aplikasi rilis cepat ──► Muncul bug baru
       ▲                                                 │
       │                                                 ▼
Sulit menambah fitur ◄── Kode semakin rumit ◄── Perbaikan kilat berantakan
```

---

## Example: Kode Tanpa vs Dengan Best Practice

### Bad Code (Spaghetti/Blocking/Kotor)
```ts
// Menggunakan nama variabel satu huruf dan tidak ada proteksi tipe
const x = (a: any, b: any) => {
  return a + b;
};
```
*Mengapa buruk?* Nama fungsi `x` tidak menjelaskan tindakan, parameter `a` dan `b` bertipe `any` mematikan semua fitur type-safety TypeScript.

### Good Code (Bersih/Deskriptif)
```ts
// Nama deskriptif, tipe data eksplisit, dan aman
function hitungTotalBelanja(hargaBarang: number, biayaKirim: number): number {
  return hargaBarang + biayaKirim;
}
```

---

## Common Mistakes
- **Terlalu Buru-buru**: Developer pemula langsung menulis kode tanpa merancang struktur data terlebih dahulu di kertas. Ini menyebabkan penataan file dan fungsi menjadi berantakan sejak awal.

---

## Tips
:::tip[Refactor Sering-Sering]
Lakukan *refactoring* (merapikan ulang struktur kode tanpa mengubah fungsi aplikasinya) sesering mungkin. Merapikan 5 baris kode setiap hari jauh lebih mudah dibanding merapikan 500 baris kode sekaligus di akhir semester.
:::

---

## Best Practice
- Terapkan aturan: **Tinggalkan kode dalam keadaan lebih bersih daripada saat kamu pertama kali membukanya** (Boy Scout Rule).

---

## Ringkasan
- Menulis kode asal-asalan memicu *technical debt* (hutang teknis) yang memperlambat pengembangan.
- Menjaga kebersihan kode menghemat waktu pencarian bug dan mempermudah kerja sama tim.
- Objek/fungsi wajib memiliki deskripsi tipe yang jelas dan penamaan yang bermakna.

---

## Latihan
1. Tuliskan di file latihanmu: jelaskan dengan bahasamu sendiri apa yang dimaksud dengan istilah *Technical Debt* dalam pemrograman.
