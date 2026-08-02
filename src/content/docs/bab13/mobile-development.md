---
title: "Mobile Development — BAB 13"
description: Menggunakan TypeScript untuk membangun aplikasi mobile cross-platform menggunakan React Native.
---

# Mobile Development dengan TypeScript

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dari aplikasi *Cross-Platform* mobile.
- Mengenali framework utama pembuat aplikasi mobile menggunakan TypeScript (React Native, Capacitor).
- Memahami keuntungan memprogram aplikasi Android & iOS dalam satu basis kode.

---

## Pendahuluan
Aplikasi di smartphone yang kamu gunakan sehari-hari — seperti Instagram, Gojek, atau Spotify — berjalan di sistem operasi Android atau iOS. Dulu, jika ingin membuat aplikasi untuk kedua OS tersebut, kita harus menulis dua kode berbeda (Java/Kotlin untuk Android, Swift untuk iOS). 

Kini, dengan TypeScript, kita bisa membangun aplikasi untuk Android sekaligus iOS menggunakan **satu basis kode** yang sama.

---

## Penjelasan: Mobile Development Modern

Teknik membuat aplikasi mobile yang bisa berjalan di beberapa sistem operasi sekaligus menggunakan satu bahasa pemrograman disebut **Cross-Platform Development**.

Dalam ekosistem TypeScript, ada dua pilihan utama untuk membuat aplikasi mobile:

### 1. React Native (Terpopuler)
Dibuat oleh Meta (Facebook). React Native memungkinkan kita menggunakan React dan TypeScript untuk membangun aplikasi mobile yang menghasilkan komponen **native** asli Android dan iOS. Kecepatan dan tampilan aplikasi yang dihasilkan setara dengan aplikasi asli buatan Kotlin atau Swift.

### 2. Capacitor (Web-based hybrid)
Capacitor mengubah aplikasi web buatan React/Vue/HTML menjadi aplikasi mobile dengan membungkusnya di dalam web view khusus. Sangat cepat dideploy jika kamu sudah memiliki website yang siap pakai.

---

## Visual Illustration: Alur Kerja Cross-Platform

```text
              [ KODE TYPESCRIPT (REACT NATIVE) ]
                              │
             ┌────────────────┴────────────────┐
             ▼ kompilasi ke                    ▼ kompilasi ke
      [ Aplikasi Android ]               [ Aplikasi iOS ]
       (Format file: .apk)             (Format file: .ipa)
```

---

## Tips Dunia Industri
:::note[React Native adalah Skill Sangat Dicari]
Banyak perusahaan startup di Indonesia memilih membangun aplikasi mobile mereka menggunakan React Native karena menghemat biaya dibanding merekrut dua tim native terpisah. Menguasai React Native dan TypeScript memberikan nilai tawar yang sangat tinggi bagi lulusan SMK RPL.
:::

---

## Langkah Selanjutnya
Mari kita lihat alternatif pembuatan aplikasi untuk komputer: **Desktop Development**.

---

## Ringkasan
- Cross-platform development mempermudah pembuatan aplikasi Android & iOS dari satu basis kode.
- **React Native** adalah framework terpopuler menggunakan React & TypeScript.
- Menghasilkan komponen native asli yang memiliki performa sangat cepat.
