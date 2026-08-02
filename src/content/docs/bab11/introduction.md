---
title: "Introduction — BAB 11"
description: Pendahuluan Bab 11 — Capstone Project integrasi seluruh konsep pemrograman TypeScript.
---

# Introduction: Capstone Project

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Memahami tujuan dan peta jalan dari pengerjaan Final Project.
- Menjelaskan pentingnya melakukan integrasi kode dari BAB 0 hingga BAB 10.
- Menyiapkan diri mental dan teknis untuk menyusun program modular.

---

## Pendahuluan
Selamat! Kamu telah berada di bab terakhir, yaitu **BAB 11**. Ini adalah puncak dari seluruh materi dasar, menengah, hingga tingkat lanjut yang telah kamu pelajari di buku ini. Dari membuat variabel sederhana di BAB 1, membuat percabangan di BAB 2, mengulang data dengan loop di BAB 3, menyusun modul terpisah di BAB 10, semuanya akan kita satukan di sini.

Final Project ini bukan sekadar tugas biasa, melainkan simulasi pengerjaan aplikasi nyata di dunia kerja. Kamu akan ditantang untuk berpikir sebagai seorang **Software Engineer** yang merancang struktur aplikasi yang kokoh dan modular.

---

## Penjelasan
Di dalam dunia industri, pembuatan software dilakukan secara terencana. Kita tidak bisa langsung mengetik kode tanpa desain arsitektur yang jelas. Di bab ini, kita akan merancang sistem informasi sekolah sederhana berbasis terminal (konsol) bernama **SIAKAD-Konsol**. 

Tujuan utama dari pembuatan aplikasi ini adalah menyatukan seluruh konsep pemrograman yang sudah kamu pelajari. Hal ini penting agar kamu memiliki pemahaman yang utuh tentang bagaimana komponen-komponen program saling berinteraksi: bagaimana data mengalir dari ketikan keyboard user, divalidasi oleh class OOP, disimpan oleh Generic Repository, dan disinkronkan dengan data online.

---

## Analogi Kehidupan Sehari-hari: Merakit Sepeda Motor dari Komponen
Bayangkan kamu adalah seorang mekanik di pabrik perakitan sepeda motor:

```text
BAB 1-4  : Menyiapkan mur, baut, kabel, piston, dan rantai (Komponen dasar)
BAB 5-6  : Mengelompokkan komponen ke dalam kotak perkakas (Array & Object)
BAB 7-9  : Membuat blueprint panduan ukuran presisi agar mur tidak longgar (Interface & Generic)
BAB 10   : Menghubungkan tangki bensin ke karburator dan kabel gas (Module & Asynchronous)
BAB 11   : Merakit semuanya menjadi satu sepeda motor utuh yang bisa dikendarai! (Final Project)
```

Kamu tidak bisa mengendarai sekerup atau kabel saja secara terpisah. Kamu harus merakitnya menjadi satu kesatuan mesin barulah motor tersebut bisa berjalan dengan aman dan berguna.

---

## Visual Illustration: Peta Integrasi Konsep

```text
┌──────────────────────────────────────────────────────────────┐
│                  FINAL PROJECT: SIAKAD                       │
├──────────────────────────────────────────────────────────────┤
│  Presentation Layer (main.ts)  ◄─── inputs/outputs (BAB 2,4) │
│            │                                                 │
│            ▼                                                 │
│  Service Layer (SiswaService)  ◄─── async, fetch (BAB 4,10)   │
│            │                                                 │
│            ▼                                                 │
│  Repository Layer (Generic)    ◄─── class, generic (BAB 8,9) │
│            │                                                 │
│            ▼                                                 │
│  Data Store (Array of Objects) ◄─── array, objects (BAB 5,6) │
└──────────────────────────────────────────────────────────────┘
```

---

## Live Coding: Uji Kesiapan Awal
Sebelum kita membangun modul yang rumit, mari buat berkas sederhana untuk memastikan compiler dan terminal TSX kamu siap memproses integrasi syntax tingkat lanjut.

Buat berkas `src/bab11/test-koneksi.ts`:

```ts
interface Identitas {
  nama: string;
}

class SiswaTest implements Identitas {
  constructor(public nama: string, public skor: number) {}
}

async function dapatkanStatus<T extends SiswaTest>(item: T): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Siswa ${item.nama} memiliki nilai ${item.skor}`);
    }, 1000);
  });
}

const siswa = new SiswaTest("Putra", 90);
console.log("Memproses...");
dapatkanStatus(siswa).then((hasil) => console.log(hasil));
```

---

## Output
Jalankan di terminal dengan perintah `tsx src/bab11/test-koneksi.ts`. Output yang diharapkan:

```text
Memproses...
Siswa Putra memiliki nilai 90
```

---

## Penjelasan Baris per Baris
- `interface Identitas { nama: string; }`: Mendefinisikan kontrak minimal (BAB 7).
- `class SiswaTest implements Identitas`: Class yang mengimplementasikan interface tersebut (BAB 8).
- `async function dapatkanStatus<T extends SiswaTest>`: Fungsi asynchronous yang menggunakan Generic Constraint (BAB 9 & 10).
- `setTimeout(...)` di dalam `Promise`: Simulasi tugas async (BAB 10).

---

## Common Mistakes
- **Mengabaikan Versi TypeScript**: Pastikan compiler-mu sudah mendukung ES2022 agar Promise dan syntax async berjalan lancar. Cek dengan `tsc -v`.
- **Salah Path Folder**: Pastikan semua folder dibuat di dalam direktori `src` yang benar, bukan di luar root project.

---

## Tips
:::tip[Fokus pada Alur Data]
Saat merakit project ini, ikuti alur data dari file ke file. Jangan mencoba menulis semua kode sekaligus. Tulislah dari file model paling dasar, baru naik ke atas.
:::

---

## Ringkasan
- Capstone Project menyatukan semua teori dari awal bab sampai akhir.
- Membantu pemahaman modular dan kolaborasi antar bagian program.
- Memastikan semua syntax dari interface, class, generic, hingga async berjalan harmonis.

---

## Latihan
1. Buat folder baru bernama `siakad-final` di komputermu sebagai ruang kerja kosong untuk project ini.
2. Buat file `test-koneksi.ts` di atas dan jalankan menggunakan TSX. Pastikan tidak ada error kompilasi.
