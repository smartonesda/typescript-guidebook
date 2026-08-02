---
title: "Ringkasan BAB 0"
description: Rangkuman lengkap semua konsep yang dipelajari di BAB 0 — dari pengenalan programming hingga program pertama TypeScript.
---

## Selamat! 🎉

Kamu telah menyelesaikan **BAB 0** dari TypeScript Guidebook. Ini adalah pencapaian yang nyata — banyak orang yang berniat belajar programming tapi tidak pernah sampai sejauh ini.

Mari kita rangkum semua yang sudah kamu pelajari.

---

## Apa yang Sudah Kamu Pelajari

### Konsep Dasar Programming

**Programming** adalah proses memberikan instruksi kepada komputer. Komputer sangat "literal" — ia melakukan persis apa yang diperintahkan, tidak lebih, tidak kurang.

**Computational Thinking** adalah cara berpikir programmer:

- **Decomposition** — pecah masalah besar menjadi bagian kecil
- **Pattern Recognition** — temukan pola dan kesamaan
- **Abstraction** — fokus pada yang penting
- **Algorithm** — buat langkah-langkah solusi yang runtut

---

### Dunia Web

Sebuah halaman web dibangun dari tiga teknologi:

| Teknologi      | Fungsi           |
| -------------- | ---------------- |
| **HTML**       | Struktur halaman |
| **CSS**        | Tampilan halaman |
| **JavaScript** | Interaktivitas   |

**TypeScript** adalah JavaScript dengan tambahan sistem tipe yang membuat kode lebih aman dan mudah dipelihara.

---

### Mengapa TypeScript

- JavaScript tidak memeriksa tipe data, sehingga error bisa terlewat
- TypeScript menambahkan **sistem tipe** yang mendeteksi error lebih awal
- TypeScript digunakan oleh perusahaan teknologi besar di seluruh dunia
- Belajar TypeScript = belajar JavaScript + kebiasaan baik

```
TypeScript = JavaScript + Sistem Tipe + Fitur Modern
```

---

### Tools yang Sudah Diinstall

| Software       | Fungsi                        | Verifikasi       |
| -------------- | ----------------------------- | ---------------- |
| **Node.js**    | Runtime JavaScript/TypeScript | `node --version` |
| **npm**        | Manajer paket                 | `npm --version`  |
| **VS Code**    | Editor kode                   | Buka VS Code     |
| **TypeScript** | Compiler                      | `tsc --version`  |
| **TSX**        | Runner TypeScript             | `tsx --version`  |

---

### Workflow Belajar

Selama belajar di guidebook ini, alur kerjamu adalah:

```
1. Buka VS Code
2. Buka terminal (Ctrl + `)
3. Tulis kode TypeScript (.ts)
4. Jalankan: tsx namafile.ts
5. Lihat hasilnya
6. Perbaiki jika ada error
7. Ulangi dari langkah 3
```

---

### Kode Pertamamu

Kamu sudah berhasil menulis dan menjalankan program TypeScript:

```ts
let namaSiswa: string = "Dewi Rahayu";
let kelas: string = "XI RPL 2";
let nilaiRataRata: number = 88.5;

console.log("=== KARTU IDENTITAS SISWA ===");
console.log(`Nama          : ${namaSiswa}`);
console.log(`Kelas         : ${kelas}`);
console.log(`Nilai Rata-rata: ${nilaiRataRata}`);
console.log("=============================");
```

---

### Menghadapi Error

Error adalah bagian normal dari coding. Empat jenis error yang perlu kamu ketahui:

| Jenis Error       | Kapan Muncul                   | Contoh                    |
| ----------------- | ------------------------------ | ------------------------- |
| **Syntax Error**  | Saat penulisan kode salah      | Tanda kutip tidak ditutup |
| **Type Error**    | Tipe data tidak sesuai         | String ke number          |
| **Runtime Error** | Saat program berjalan          | Nilai NaN                 |
| **Logic Error**   | Program jalan tapi hasil salah | Rumus salah               |

Strategi menghadapi error: **Jangan panik → Baca → Pahami → Perbaiki → Coba lagi**

---

## Checklist BAB 0

Tandai yang sudah kamu selesaikan:

- [ ] Memahami apa itu programming
- [ ] Memahami computational thinking
- [ ] Mengenal HTML, CSS, JavaScript
- [ ] Memahami mengapa TypeScript lebih baik dari JavaScript
- [ ] Node.js terinstall ✓
- [ ] VS Code terinstall ✓
- [ ] TypeScript terinstall ✓
- [ ] TSX terinstall ✓
- [ ] Project pertama berhasil dibuat
- [ ] Program pertama berhasil dijalankan
- [ ] Memahami cara membaca pesan error

---

## Konsep-konsep Baru yang Kamu Pelajari

Selama BAB 0, kamu sudah bertemu dengan beberapa konsep TypeScript secara singkat:

```ts
let nama: string = "Budi"; // variabel dengan tipe string
let umur: number = 17; // variabel dengan tipe number
console.log("Halo!"); // menampilkan output
console.log(`Halo ${nama}`); // template literal
```

Semua konsep ini akan dipelajari **jauh lebih mendalam** di BAB 1.

---

## Apa yang Menanti di BAB 1?

Di BAB 1, kamu akan belajar:

- **Variabel** — cara menyimpan data dalam program
- **Tipe data** — string, number, boolean, dan lainnya
- **Operator** — cara melakukan operasi matematika dan logika
- **Kondisi** — cara membuat program mengambil keputusan
- **Perulangan** — cara membuat program melakukan sesuatu berulang kali

BAB 1 adalah inti dari belajar TypeScript — dan kamu sudah lebih dari siap untuk menghadapinya.

---

## Pesan untuk Kamu

Belajar programming adalah maraton, bukan sprint. Mungkin ada momen di mana kamu merasa bingung, frustrasi, atau ingin menyerah.

Itu normal.

Yang terpenting adalah **konsistensi** — belajar sedikit demi sedikit setiap hari, jauh lebih efektif daripada belajar banyak sekaligus tapi tidak teratur.

Ingat: setiap programmer hebat yang ada sekarang pernah berada di posisimu — tidak tahu apa-apa, baru mulai, penuh pertanyaan.

Mereka berhasil karena tidak berhenti. Kamu pun bisa. 💪

---

## Glosarium BAB 0

Kumpulan istilah baru yang kamu pelajari di BAB 0:

| Istilah              | Artinya                                              |
| -------------------- | ---------------------------------------------------- |
| **Programming**      | Proses memberikan instruksi kepada komputer          |
| **Algorithm**        | Langkah-langkah solusi yang runtut                   |
| **Browser**          | Program untuk membuka website                        |
| **Server**           | Komputer yang menyimpan dan mengirimkan data website |
| **HTML**             | Bahasa markup untuk struktur halaman web             |
| **CSS**              | Bahasa untuk mengatur tampilan halaman web           |
| **JavaScript**       | Bahasa pemrograman untuk web                         |
| **TypeScript**       | JavaScript dengan sistem tipe                        |
| **Node.js**          | Program untuk menjalankan JS/TS di luar browser      |
| **npm**              | Manajer paket untuk Node.js                          |
| **TSX**              | Alat untuk menjalankan TypeScript langsung           |
| **Compiler**         | Program yang mengubah kode ke bahasa mesin           |
| **Terminal**         | Antarmuka teks untuk berkomunikasi dengan komputer   |
| **Syntax Error**     | Error karena penulisan kode yang salah               |
| **Type Error**       | Error karena tipe data yang tidak sesuai             |
| **console.log()**    | Fungsi untuk menampilkan output di terminal          |
| **Template Literal** | Cara menggabungkan teks dan variabel dengan backtick |

---

:::tip[Siap untuk BAB 1?]
BAB 1 akan segera hadir. Untuk sekarang, pastikan kamu sudah menyelesaikan semua langkah di BAB 0 — terutama instalasi software dan menjalankan program pertama.
:::
