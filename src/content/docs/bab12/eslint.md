---
title: "ESLint — BAB 12"
description: Pengenalan ESLint sebagai alat static code analysis untuk mendeteksi kesalahan penulisan kode TypeScript secara otomatis.
---

# ESLint

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan apa itu linter (ESLint).
- Memahami kegunaan ESLint dalam mendeteksi kode mati atau variabel tidak terpakai.
- Menjelaskan cara kerja analisis statis (*static code analysis*) pada editor VS Code.

---

## Pendahuluan
Bagaimana jika ada asisten otomatis yang berdiri di belakangmu saat kamu mengetik kode, lalu langsung menepuk pundakmu dan berkata: *"Hei, kamu membuat variabel nama tapi tidak pernah kamu gunakan di baris manapun, hapus saja"*?

Asisten otomatis itu di dunia pemrograman disebut **Linter**, dan alat terpopuler untuk JavaScript/TypeScript adalah **ESLint**.

---

## Penjelasan: Apa itu ESLint?

**ESLint** adalah perkakas *Static Code Analysis* (analisis kode statis) yang memeriksa file kode programmu tanpa menjalankannya, bertujuan untuk mencari kesalahan pola penulisan, bug potensial, gaya penulisan yang tidak konsisten, atau kode mati yang tidak berguna.

Beberapa contoh aturan yang ditegakkan oleh ESLint:
1. **no-unused-vars**: Melarang pembuatan variabel yang dideklarasikan tetapi tidak pernah digunakan di bagian program manapun.
2. **no-explicit-any**: Melarang penggunaan tipe data `any` secara eksplisit demi menjaga keamanan tipe TypeScript (BAB 9).
3. **prefer-const**: Menyarankan penggunaan `const` daripada `let` jika nilai variabel tersebut tidak pernah diubah sepanjang program (BAB 1).

---

## Analogi Kehidupan Sehari-hari: Guru yang Memeriksa Ejaan Tulisan
Bayangkan saat kamu menulis **Esai Laporan Tugas** di lembar kertas:

```text
Kamu: Mengetik esai dengan cepat.
Linter (Guru Bahasa): Berdiri di sampingmu sambil memberi garis bawah merah pada kata-kata typo:
- Kata "aktif" ditulis "aktip" ──► Guru menunjuk ejaan yang benar
- Kalimat tidak lengkap   ──► Guru memintamu merapikannya
```

Guru bahasa tidak membaca isi ide tulisanmu, ia hanya memastikan tata bahasa dan aturan penulisan ejaan yang kamu gunakan sudah sesuai dengan Kamus Besar Bahasa Indonesia. ESLint adalah guru bahasa untuk kodemu.

---

## Visual Illustration: Alur Kerja ESLint

```text
Tulis kode program ──► ESLint menganalisis ──► Ada variabel tidak terpakai?
                                                    │
                                            ya ─────┼─────► Muncul garis merah di VS Code ✗
                                            tidak ──┴─────► Kode bersih & aman lulus ✓
```

---

## Live Practice: Pengujian Aturan Linting
Buka VS Code di folder projectmu. Secara default, VS Code sudah memiliki linter internal untuk TypeScript. Mari buat simulasi kode yang melanggar aturan best practice:

```ts
// Tulis kode simulasi ini
const batasKkm = 75; // Nilai tidak pernah diubah, sebaiknya pakai const (TypeScript menyarankan ini)
let namaSiswa = "Putra"; // Variabel dibuat tapi tidak pernah digunakan!

function sapa(): void {
  console.log("Halo");
}
```

Buka tab **Problems** di bagian bawah VS Code (atau tekan `Ctrl + Shift + M`). Kamu akan melihat peringatan:

```text
'namaSiswa' is declared but its value is never read.
```

---

## Common Mistakes
- **Mengabaikan Peringatan Linter**: Membiarkan tab *Problems* berisi puluhan peringatan kuning/merah. Biasakan selalu merapikan kode sampai tab *Problems* bersih dari peringatan sebelum melakukan commit Git.

---

## Tips
:::tip[Install Ekstensi ESLint]
Install ekstensi resmi **ESLint** buatan Microsoft di VS Code. Ekstensi ini akan menampilkan garis bergelombang kuning/merah langsung di bawah kode yang melanggar aturan saat kamu mengetik, sehingga kamu bisa memperbaikinya saat itu juga.
:::

---

## Best Practice
- Pastikan dalam file konfigurasi ESLint (`.eslintrc.json` atau `eslint.config.js`) kamu mengaktifkan aturan `@typescript-eslint/recommended` agar projectmu mematuhi standar best practice TypeScript dunia.

---

## Ringkasan
- ESLint adalah alat analisis kode statis untuk mencari pola penulisan kode yang salah atau tidak konsisten.
- Membantu menjaga kebersihan project dengan melarang kode mati (variabel tak terpakai).
- Ditegakkan langsung lewat garis peringatan di dalam VS Code.

---

## Latihan
1. Tuliskan di file latihanmu: sebutkan minimal 2 keuntungan menggunakan ESLint dalam pengerjaan project bersama tim.
