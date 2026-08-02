---
title: "Pendahuluan — BAB 12"
description: Pendahuluan bab praktik terbaik (best practice) dalam menulis kode TypeScript yang profesional.
---

# Pendahuluan: Melangkah Menuju Kode Profesional

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Memahami peta materi dan tujuan utama dari BAB 12.
- Menyadari bahwa menulis kode program bukan hanya tentang membuat komputer paham, melainkan tentang membuat manusia lain juga paham.
- Mengetahui alur belajar praktik terbaik (best practice) TypeScript yang akan dipelajari di bab ini.

---

## Pendahuluan
Selamat! Kamu telah merakit aplikasi final yang lengkap pada bab sebelumnya. Kamu telah menggabungkan seluruh konsep dasar pemrograman hingga pemrograman asynchronous dan module system. Namun, ada satu pertanyaan krusial yang sering membedakan antara programmer pemula dengan programmer profesional: **"Bagaimana cara menulis kode yang bersih, rapi, dan mudah dibaca oleh orang lain?"**

Di sekolah, kita sering menulis kode yang penting jalan. Namun di dunia industri nyata, kode yang kamu tulis akan dibaca, dirawat, dan dikembangkan oleh puluhan programmer lain di timmu. Menulis kode yang berantakan hanya akan memicu banyak bug dan memperlambat pengerjaan project.

---

## Penjelasan
Di BAB 12 ini, kita tidak akan mempelajari syntax TypeScript yang baru. Kita akan belajar cara **menulis dan mengorganisasikan** kode TypeScript secara profesional. Kita akan mempelajari konsep *Clean Code*, aturan penamaan (*Naming Convention*), struktur folder industri, prinsip-prinsip desain software seperti *DRY* dan *KISS*, serta pengenalan awal terhadap arsitektur *SOLID*.

Kita juga akan berkenalan dengan perkakas pendukung otomatis seperti **ESLint** dan **Prettier**, memahami peran file konfigurasi `tsconfig.json` dan `package.json`, mengelola variabel lingkungan (*Environment Variables*), memahami alur kerja Git (*Git Workflow*), serta mendokumentasikan project secara profesional melalui berkas `README`.

---

## Analogi Kehidupan Sehari-hari: Menata Kamar Tidur
Bayangkan kamarmu sendiri di rumah:
- **Kondisi A (Kotor/Berantakan)**: Pakaian kotor ditaruh di atas kasur, buku sekolah berserakan di lantai, dan piring kotor menumpuk di meja belajar. Meskipun kamu masih bisa tidur di kasur itu (program tetap jalan), kamu akan kesulitan mencari buku saat ingin belajar dan kamarmu berbau tidak sedap.
- **Kondisi B (Rapi/Bersih)**: Pakaian kotor ditaruh di keranjang cucian, buku sekolah ditata rapi di rak sesuai mata pelajaran, dan meja belajar bersih. Kamar terasa nyaman, dan kamu bisa menemukan barang apapun dalam waktu 5 detik.

Menulis kode program dengan *best practice* seperti menata kamarmu agar selalu bersih (Kondisi B). Kode yang rapi membuat proses pencarian bug dan penambahan fitur baru menjadi sangat cepat dan menyenangkan.

---

## Visual Illustration: Peta Konsep Best Practice

```text
       BEST PRACTICE TYPESCRIPT
┌──────────────────────────────────────┐
│  Desain Kode: Clean Code, DRY, KISS  │ ◄── Cara berpikir modular
├──────────────────────────────────────┤
│  Perkakas: ESLint, Prettier          │ ◄── Pemeriksa kerapian otomatis
├──────────────────────────────────────┤
│  Konfigurasi: tsconfig, package.json │ ◄── Aturan main project
├──────────────────────────────────────┤
│  Kolaborasi: Git Workflow, README    │ ◄── Standar kerja tim
└──────────────────────────────────────┘
```

---

## Mari Mencoba
Buka file `src/bab12/latihan-intro.ts` di folder kerjamu (buat foldernya jika belum ada):

```ts
// Tulis kode sederhana ini
const batasLulusUjianSiswa = 75;

function apakahSiswaLulus(nilai: number): boolean {
  return nilai >= batasLulusUjianSiswa;
}

console.log("Status kelulusan nilai 80:", apakahSiswaLulus(80));
```

---

## Output
Jalankan di terminal dengan perintah `tsx src/bab12/latihan-intro.ts`. Output yang diharapkan:

```text
Status kelulusan nilai 80: true
```

---

## Penjelasan Baris per Baris
- `const batasLulusUjianSiswa = 75;`: Menggunakan penamaan variabel yang sangat deskriptif dan panjang (BAB 1) daripada menggunakan nama satu huruf yang membingungkan seperti `const x = 75`.
- `apakahSiswaLulus`: Nama fungsi diawali dengan kata kerja untuk menunjukkan tindakan (BAB 4).

---

## Kesalahan yang Sering Terjadi
- **Mengira kode rapi itu tidak penting**: Banyak pemula terburu-buru menulis kode tanpa spasi atau indentasi yang benar karena *"yang penting kan jalan"*. Ingat, komputer tidak peduli kerapian kodemu, tetapi **manusia** (teman timmu dan gurumu) sangat memedulikannya.

---

## Tips
:::tip[Tulis Kode untuk Manusia]
Tulis seolah-olah orang yang akan merawat kodemu berikutnya adalah seorang psikopat pemarah yang tahu di mana kamu tinggal. Kalimat humor programmer ini mengingatkan kita untuk selalu menulis kode serapi mungkin.
:::

---

## Best Practice
- Biasakan melakukan formatting kode secara otomatis di VS Code dengan menekan shortcut `Alt + Shift + F` secara berkala selama mengetik kode.

---

## Ringkasan
- Best practice TypeScript berfokus pada kerapian, efisiensi, dan standarisasi kode program.
- Menulis kode bersih bertujuan mempermudah pembacaan kode oleh manusia, bukan hanya komputer.
- Kerapian folder, kode modular, dan perkakas otomatis seperti ESLint/Prettier akan dibahas di bab ini.

---

## Latihan
1. Tuliskan di catatanmu: apa perbedaan antara kode yang sekadar "jalan" dengan kode yang "bersih dan profesional"?
