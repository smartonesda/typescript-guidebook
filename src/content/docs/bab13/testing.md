---
title: "Testing (Pengujian Kode Otomatis) — BAB 13"
description: Pengenalan konsep pengujian kode otomatis menggunakan Unit Testing, Integration Testing, dan E2E Testing.
---

# Testing (Pengujian Kode Otomatis)

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan pentingnya pengujian kode secara otomatis.
- Menyebutkan perbedaan Unit Testing, Integration Testing, dan E2E Testing.
- Mengenali tools testing terpopuler (Jest, Vitest, Cypress).

---

## Pendahuluan
Di BAB 11, kita menguji aplikasi SIAKAD secara manual dengan mengetik angka menu satu per satu di terminal. Cara ini membuang waktu jika dilakukan berulang-ulang setiap kali kita merilis fitur baru. 

Di dunia industri, pengembang membuat kode program khusus yang bertugas **menguji kode program lainnya secara otomatis**. Proses ini disebut **Automated Testing**.

---

## Penjelasan: Tiga Level Pengujian

Ada tiga tingkatan utama dalam pengujian kode otomatis:

### 1. Unit Testing (Pengujian Unit)
Menguji bagian terkecil dari kode program secara terisolasi (misalnya: menguji satu fungsi matematika `hitungRataRata` saja).
- **Tools**: **Jest** atau **Vitest** (Vitest sangat cepat dan populer untuk ekosistem modern).

### 2. Integration Testing (Pengujian Integrasi)
Menguji apakah beberapa komponen yang berbeda dapat bekerja sama dengan baik saat dihubungkan (misalnya: menguji apakah `SiswaService` dapat menyimpan data ke `AcademicRepository` secara benar).

### 3. End-to-End (E2E) Testing
Menguji seluruh aliran aplikasi dari awal hingga akhir dari sudut pandang pengguna asli (misalnya: robot otomatis membuka browser Chrome, mengetik username, mengklik tombol login, dan memastikan halaman dashboard terbuka).
- **Tools**: **Cypress** atau **Playwright**.

---

## Visual Illustration: Piramida Testing

```text
       ▲    / \      E2E Testing (Paling sedikit, lambat, meniru user asli)
      / \  /   \     
     /   \/     \    Integration Testing (Sedang)
    /     \      \   
   /_______\______\  Unit Testing (Paling banyak, sangat cepat mengecek fungsi kecil)
```

---

## Tips Dunia Industri
:::note[Tulis Unit Test untuk Fungsi Kritis]
Sebagai pemula, kamu tidak harus menulis test untuk semua kode. Prioritaskan menulis unit test untuk fungsi-fungsi kritis yang berisi rumus matematika atau aturan logika bisnis penting agar tidak tidak sengaja rusak saat kamu melakukan update kode di masa depan.
:::

---

## Langkah Selanjutnya
Mari kita pelajari cara meluncurkan aplikasi ke internet agar bisa diakses seluruh dunia pada halaman **Deployment**.

---

## Ringkasan
- Automated testing menguji kode program menggunakan kode program bantuan lain secara otomatis.
- Unit Testing menguji satu fungsi terisolasi; E2E Testing menguji seluruh alur di browser tiruan.
- Tools populer: Jest/Vitest (Unit), Cypress/Playwright (E2E).
