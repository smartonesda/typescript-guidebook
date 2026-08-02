---
title: "Belajar Git & GitHub — BAB 13"
description: Pentingnya menguasai Git dan GitHub sebagai alat kolaborasi utama developer.
---

# Belajar Git & GitHub

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan perbedaan antara Git dan GitHub.
- Menyebutkan alur kerja kolaborasi Git (Branch, Pull Request).
- Mengoptimalkan profil GitHub sebagai portofolio coding online.

---

## Pendahuluan
Menguasai bahasa pemrograman seperti TypeScript tanpa menguasai **Git** adalah hal yang sia-sia di industri modern. Git adalah standar mutlak bagi semua tim developer di seluruh dunia untuk berkolaborasi menulis kode secara bersamaan.

---

## Penjelasan: Git vs GitHub

Banyak pemula mengira Git dan GitHub adalah benda yang sama. Padahal keduanya berbeda:

### 1. Git (Version Control System / Mesin Pelacak)
Git adalah **software mesin pelacak riwayat perubahan file** yang berjalan secara lokal di komputermu. Ia bertindak seperti mesin waktu: kamu bisa menyimpan riwayat revisi kodemu (`commit`) dan kembali ke versi masa lalu jika kodemu tidak sengaja rusak di masa sekarang.

### 2. GitHub (Perpustakaan Cloud)
GitHub adalah **layanan cloud di internet** tempat menyimpan dan membagikan database Git milikmu agar bisa diakses oleh orang lain. GitHub adalah media sosialnya para programmer.

### Alur Kerja Kolaborasi (Workflow):
- **Branch (Cabang)**: Membuat salinan alur kode utama untuk membuat fitur baru secara aman tanpa mengganggu kode utama yang sedang berjalan.
- **Pull Request (PR)**: Mengajukan permohonan penggabungan kode dari cabang fiturmu ke cabang utama setelah kodenya lolos review dari tim developer lain.

---

## Visual Illustration: Alur Cabang Git (Branching)

```text
Branch main:   O ─── O ───────────────────── O ──► Deploy Live
                      \                     / (Pull Request Merged)
Branch fitur:          └── O ─── O ─── O ──┘ (Developer membuat fitur login)
```

---

## Tips Dunia Industri
:::note[Rapikan Profil GitHub-mu]
Gunakan foto profil profesional (bukan avatar anime/game), tulis bio singkat tentang keahlianmu (misal: *"Student at SMK RPL | TypeScript Enthusiast"*), dan buatlah berkas **GitHub Profile README** khusus untuk mempercantik halaman depan profilmu.
:::

---

## Langkah Selanjutnya
Mari bersiap menghadapi Prakerin/PKL pada halaman **Persiapan Magang**.

---

## Ringkasan
- Git adalah pelacak riwayat file lokal; GitHub adalah cloud penyimpan database Git.
- Kolaborasi Git menggunakan konsep `Branch` (cabang) dan `Pull Request` (penggabungan kode).
- Profil GitHub adalah cerminan identitas profesional seorang programmer.
