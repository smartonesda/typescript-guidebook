---
title: "Mengenal Dunia Web"
description: Memahami bagaimana internet dan website bekerja — dari browser, server, hingga bagaimana sebuah halaman web ditampilkan.
---

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan bagaimana website bekerja secara sederhana
- Membedakan peran browser dan server
- Memahami posisi HTML, CSS, dan JavaScript dalam ekosistem web

---

## Pengantar

Kita belajar TypeScript karena TypeScript adalah bahasa yang digunakan untuk membangun aplikasi web dan program-program modern. Sebelum masuk ke TypeScript, kita perlu mengenal **dunia web** terlebih dahulu.

Kamu pasti sudah sering menggunakan internet — membuka YouTube, Instagram, atau Google. Tapi pernahkah kamu berpikir: **bagaimana semua itu bisa bekerja?**

---

## Penjelasan: Bagaimana Website Bekerja?

### Browser dan Server

Ada dua aktor utama dalam dunia web:

**Browser** adalah program di komputermu yang digunakan untuk membuka website — seperti Google Chrome, Firefox, atau Edge.

**Server** adalah komputer lain (biasanya di suatu tempat yang jauh) yang menyimpan file-file website dan mengirimkannya ke browsermu saat diminta.

### Prosesnya Seperti Ini:

1. Kamu mengetik `www.google.com` di browser
2. Browser mengirim **permintaan** ke server Google: "Tolong kirimkan halaman utama Google"
3. Server Google menerima permintaan itu
4. Server mengirimkan balik **file-file** berisi halaman Google (berupa HTML, CSS, JavaScript)
5. Browser menerima file-file itu dan **menampilkannya** sebagai halaman yang kamu lihat

---

## Analogi: Pesan Antar Makanan

Bayangkan kamu memesan makanan lewat aplikasi:

| Dunia Nyata           | Dunia Web                   |
| --------------------- | --------------------------- |
| Kamu (yang pesan)     | Browser                     |
| Restoran              | Server                      |
| Aplikasi pesan antar  | Internet                    |
| Makanan yang dikirim  | File HTML, CSS, JS          |
| Kamu makan makanannya | Browser menampilkan halaman |

Saat kamu pesan makanan, kamu tidak perlu tahu bagaimana cara memasak makanan itu di restoran. Kamu hanya perlu tahu: pesan → tunggu → makan.

Begitu juga browser: ia tidak perlu tahu bagaimana server menyimpan data. Ia hanya perlu tahu: minta → terima → tampilkan.

---

## Ilustrasi: Alur Request-Response

```
[Browser kamu]                    [Server]
      │                               │
      │  1. "Tolong kirim google.com" │
      │──────────────────────────────►│
      │                               │
      │  2. Server menyiapkan file    │
      │                               │
      │  3. Mengirim file HTML/CSS/JS │
      │◄──────────────────────────────│
      │                               │
      │  4. Browser menampilkan       │
      │     halaman web ✓             │
```

---

## Apa Itu URL?

URL (_Uniform Resource Locator_) adalah alamat lengkap dari sebuah halaman web.

Contoh URL: `https://www.google.com/search?q=typescript`

Kalau dipecah-pecah:

```
https://       → Protokol (cara komunikasi)
www.google.com → Nama domain (alamat server)
/search        → Path (halaman yang diminta)
?q=typescript  → Query (parameter pencarian)
```

Kamu tidak perlu hafal semua ini sekarang. Yang penting kamu tahu bahwa URL adalah **alamat** untuk menemukan sesuatu di internet.

---

## Tiga Komponen Halaman Web

Setiap halaman web yang kamu lihat dibangun dari tiga bahan utama:

| Komponen       | Fungsi            | Analogi                   |
| -------------- | ----------------- | ------------------------- |
| **HTML**       | Struktur dan isi  | Rangka/tulang bangunan    |
| **CSS**        | Tampilan dan gaya | Cat, dekorasi, furnitur   |
| **JavaScript** | Interaktivitas    | Listrik yang menghidupkan |

Bayangkan membangun sebuah rumah:

- **HTML** adalah dinding, lantai, dan atapnya
- **CSS** adalah cat dinding, pilihan ubin, dan dekorasinya
- **JavaScript** adalah listrik — yang membuat lampu bisa dinyalakan, AC bisa dikontrol, dan pintu otomatis bisa terbuka

---

## Frontend vs Backend

Kamu mungkin akan sering mendengar istilah ini:

**Frontend** adalah bagian yang dilihat dan dirasakan oleh pengguna — yang berjalan di browser. HTML, CSS, dan JavaScript adalah teknologi frontend.

**Backend** adalah bagian yang bekerja di server, tersembunyi dari pengguna — menyimpan data, memproses logika bisnis, dll.

TypeScript bisa digunakan untuk **keduanya** — baik frontend maupun backend. Ini salah satu alasan mengapa TypeScript sangat populer.

:::note[Catatan]
Untuk saat ini, kita akan fokus belajar TypeScript sebagai bahasa backend sederhana (dijalankan di komputer, bukan di browser). Nanti, setelah kamu mahir, TypeScript bisa digunakan untuk membangun website dan aplikasi lengkap.
:::

---

## Ringkasan

- **Browser** meminta halaman web dari **server**
- Server mengirimkan file **HTML, CSS, dan JavaScript**
- Browser menampilkan file-file itu sebagai halaman yang kita lihat
- **HTML** = struktur, **CSS** = tampilan, **JavaScript** = interaktivitas
- **Frontend** = berjalan di browser, **Backend** = berjalan di server
- TypeScript bisa digunakan untuk keduanya

:::tip[Langkah Selanjutnya]
Lanjut ke halaman **HTML, CSS, JavaScript** untuk penjelasan lebih detail tentang ketiga teknologi itu.
:::
