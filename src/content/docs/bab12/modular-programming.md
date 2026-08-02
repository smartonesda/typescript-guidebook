---
title: "Modular Programming — BAB 12"
description: Penerapan pemrograman modular untuk membangun aplikasi besar dari komponen-komponen mandiri yang saling dihubungkan.
---

# Modular Programming

## Tujuan Pembelajaran
Setelah menyelesaikan halaman ini, kamu diharapkan dapat:
- Menjelaskan konsep Pemrograman Modular.
- Membagi file program menjadi modul ekspor dan impor yang mandiri.
- Menerapkan dependency injection sederhana untuk menghubungkan modul.

---

## Pendahuluan
Kita telah mempelajari sistem modul di BAB 10. Di halaman ini, kita akan membahas **paradigma berpikir** pemrograman modular. Pemrograman modular mengajarkan kita cara mendesain aplikasi sebagai kumpulan blok komponen mandiri yang bisa dilepas-pasang dengan mudah tanpa merusak sistem secara keseluruhan.

---

## Penjelasan
Pemrograman modular memecah aplikasi besar menjadi modul-modul kecil. Setiap modul memiliki tanggung jawab mandiri dan berkomunikasi lewat gerbang resmi (`export` (BAB 10) dan `import` (BAB 10)).

Keuntungan utama:
1. **Reusability**: Modul yang sudah diuji (seperti `AcademicRepository` (BAB 11)) bisa langsung dipakai untuk data guru, siswa, atau barang koperasi tanpa perlu mengubah isinya.
2. **Ketergantungan Terkontrol (Loose Coupling)**: Modul-modul tidak saling terikat secara kaku. Jika kamu ingin mengubah database dari array RAM menjadi database file JSON, kamu cukup mengubah modul repository saja. Modul service dan tampilan tidak perlu diubah karena mereka tidak peduli cara data disimpan di latar belakang.

---

## Analogi Kehidupan Sehari-hari: Blok Lego Mainan
Bayangkan kamu sedang merakit **Mobil-mobilan dari Balok Lego**:

```text
Balok Lego Roda ──► Bisa dipasang di mobil, bisa dipasang di truk, bisa dipasang di pesawat lego.
Roda tersebut adalah modul mandiri. Ia tidak peduli badan kendaraan apa yang sedang dipasangkan padanya.
```

Jika salah satu roda lego rusak, kamu cukup mencopot roda itu saja dan menggantinya dengan roda baru. Kamu tidak perlu menghancurkan seluruh badan mobil lego tersebut untuk memperbaiki satu roda.

---

## Visual Illustration: Hubungan Antar-Modul

```text
  [ models.ts (Modul A) ] ───┐
                           ├── di-import oleh ──► [ main.ts (Program Utama) ]
  [ service.ts (Modul B) ] ──┘
```

---

## Example: Menghubungkan Modul Menggunakan Dependency Injection

### Bad Code (Instansiasi Kaku di Dalam Kelas)
```ts
import { AcademicRepository } from "./repositories/academic-repository";

class SiswaService {
  private repo = new AcademicRepository<any>("siswa"); // Ketergantungan kaku!
  // Jika konfigurasi repository berubah, class SiswaService ikut rusak.
}
```

### Good Code (Dependency Injection - Fleksibel & Teruji)
```ts
import { AcademicRepository } from "./repositories/academic-repository";

class SiswaService {
  // Objek repository dikirim dari luar lewat constructor
  constructor(private repo: AcademicRepository<any>) {}
}

// Cara instansiasi di main.ts:
const repo = new AcademicRepository<any>("siswa");
const service = new SiswaService(repo); // repo dimasukkan secara fleksibel
```

---

## Common Mistakes
- **Circular Dependency (Ketergantungan Melingkar)**: File A mengimpor dari file B, dan file B ternyata juga mengimpor dari file A. Ini memicu error tak terduga karena compiler bingung file mana yang harus dimuat terlebih dahulu. Hindari ini dengan menaruh data bersama di file ketiga (C).

---

## Tips
:::tip[Gunakan Parameter Constructor]
Biasakan mengirim objek dependency (seperti objek database) lewat parameter constructor class service (BAB 8). Ini membuat class servicemu sangat mudah diuji karena kamu bisa mengirimkan database tiruan (*mock database*) saat menulis testing otomatis.
:::

---

## Best Practice
- Pastikan satu file module `.ts` tidak mengekspor terlalu banyak komponen yang tidak saling berhubungan. Jika sebuah file mulai terlalu besar, pecahlah menjadi sub-file yang lebih kecil dan gunakan `index.ts` untuk re-export (BAB 10).

---

## Ringkasan
- Pemrograman modular membagi sistem menjadi komponen-komponen independen.
- `export` dan `import` adalah gerbang komunikasi antar-modul.
- Dependency Injection membuat komponen tidak saling terikat kaku (loose coupling).

---

## Latihan
1. Tuliskan di file latihan: jelaskan perbedaan antara hubungan *tight coupling* (kaku) dan *loose coupling* (fleksibel) pada modul program.
