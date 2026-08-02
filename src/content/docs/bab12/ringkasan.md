---
title: "Ringkasan BAB 12"
description: Rangkuman akhir materi best practice TypeScript — clean code checklist, naming convention, linter/formatter, dan git.
---

# Ringkasan BAB 12

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Merangkum seluruh aturan emas best practice penulisan kode TypeScript.
- Membaca dan meninjau kembali checklist kelayakan program industri.
- Memahami langkah-langkah finalisasi project agar siap dipajang di portofolio.

---

## Pendahuluan
Kamu telah mempelajari seluruh pilar cara menulis kode program secara profesional di bab ini. Menulis kode yang bersih, modular, dan terstandardisasi adalah tanda bahwa kamu siap masuk ke dunia industri rekayasa perangkat lunak sesungguhnya.

---

## Penjelasan: Rangkuman Prinsip Utama

### 1. Desain Kode Bersih (Clean Code)
- **DRY (Don't Repeat Yourself)**: Hindari duplikasi logika.
- **KISS (Keep It Simple, Stupid)**: Hindari *over-engineering* yang tidak perlu.
- **Single Responsibility (SRP)**: Satu class/fungsi hanya melakukan satu tugas fokus.

### 2. Aturan Penamaan (Naming Convention)
- `camelCase` untuk variabel, properti, dan fungsi.
- `PascalCase` untuk Class, Interface, Type Alias, dan Enum.
- `UPPER_SNAKE_CASE` untuk konstanta global permanen.

### 3. Perkakas Otomatis (Tooling)
- **ESLint**: Linter otomatis untuk memeriksa kualitas logika dan mencari bug/kode mati.
- **Prettier**: Formatter otomatis untuk merapikan visual spasi dan indentasi.
- **tsconfig.json**: Mengatur aturan main compiler `tsc` (target, outDir, strict).
- **package.json**: Akte pendirian project (dependencies, devDependencies, npm scripts).

### 4. Kolaborasi (Git & README)
- **Git**: Pelacak riwayat perubahan file (*save point*).
- **README.md**: Buku panduan manual repositori GitHub.

---

## Analogi Kehidupan Sehari-hari: Lembar Checklist Kelayakan Lomba Kebersihan
Menyelesaikan bab best practice ini seperti **mengisi formulir checklist kelayakan lomba kebersihan kelas**:

```text
Checklist Kelayakan Kelas:
- [ ] Lantai disapu bersih bebas sampah kertas (Linter ESLint)
- [ ] Baris meja sejajar lurus presisi (Formatter Prettier)
- [ ] Papan tulis bersih dari coretan tidak penting (Anti-Any & Hapus Komentar Mati)
- [ ] Papan struktur pengurus kelas terpajang di dinding (README.md)
```

Begitu semua kotak dicentang, kelasmu dinyatakan siap dinilai juri dan berpeluang besar memenangkan piala penghargaan kelas terbersih.

---

## Visual Illustration: Siklus Kerja Best Practice Developer

```text
Tulis Kode ──► Simpan (Format Prettier) ──► Periksa Problems (ESLint) ──► Commit Git (Semantic Commit)
```

---

## Clean Code & Project Checklist

Gunakan checklist ini untuk meninjau kembali kelayakan kodemu sebelum di-upload ke GitHub:

- [ ] **Checklist Naming**: Semua variabel camelCase, Class PascalCase, Konstanta UPPER_SNAKE_CASE.
- [ ] **Checklist DRY**: Tidak ada rumus atau visual cetak garis yang ditulis duplikat di beberapa file.
- [ ] **Checklist Tooling**: ESLint dan Prettier terinstall dan aktif tanpa ada warning di tab *Problems*.
- [ ] **Checklist Git**: Semua commit menggunakan pesan terstruktur semantic commits (`feat:`, `fix:`).
- [ ] **Checklist README**: Berkas `README.md` terisi panduan instalasi lengkap dan deskripsi project yang jelas.

---

## Langkah Selanjutnya
Lanjut ke **BAB 13** bersama guru untuk menjelajahi ekosistem kelanjutan setelah menyelesaikan buku panduan ini.

---

## Ringkasan
- Rangkuman akhir materi best practice TypeScript meliputi penulisan, tooling, dan kolaborasi.
- Checklist digunakan sebagai panduan jaminan kualitas kode.
- Selamat atas penyelesaian materi bab best practice!

---

## Latihan
1. Tulis ulang kode di bawah ini menjadi versi yang bersih dan mematuhi seluruh checklist di atas:
   ```ts
   const x = "Andi";
   let y = 17;
   function s(a: any) {
     console.log(a);
   }
   ```
2. Jalankan dan uji coba di terminal komputermu.

:::tip[Selesai BAB 12]
Bagus sekali! Seluruh materi BAB 12 telah selesai diimplementasikan secara utuh. Laporkan pencapaian belajarmu kepada gurumu.
:::
