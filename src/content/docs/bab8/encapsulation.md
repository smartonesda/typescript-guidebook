---
title: "Encapsulation"
description: Menerapkan konsep Enkapsulasi (penyembunyian data) untuk menjaga integritas objek di TypeScript.
---

# Encapsulation (Enkapsulasi)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan definisi dari pilar Enkapsulasi.
- Menerapkan pembatasan data menggunakan properti private.
- Membuat interface akses terkontrol melalui method public.

---

## Pendahuluan

**Encapsulation** atau **Enkapsulasi** (artinya: pengkapsulan / pembungkusan) adalah salah satu dari 4 pilar utama dalam Object-Oriented Programming. Konsep ini mengajarkan kita untuk menyembunyikan detail informasi internal objek dan hanya menyediakan akses terkontrol melalui method resmi.

---

## Penjelasan Materi: Mengapa Butuh Enkapsulasi?

Bayangkan jika semua bagian mobil bisa diakses langsung oleh pengemudi. Saat ingin berbelok, pengemudi harus menarik tuas besi roda secara manual di kolong mobil. Ini sangat tidak praktis dan berbahaya.

Dalam dunia pemrograman, jika objek lain di luar class bisa mengubah property internal secara bebas, data objek akan menjadi tidak konsisten. 

Enkapsulasi membungkus data sensitif di dalam "kapsul" pengaman (menggunakan properti `private`) dan menyediakan "setir kemudi" resmi berupa method `public`.

---

## Analogi Kehidupan Sehari-hari: Kotak Brankas Rahasia

Bayangkan sebuah **Kotak Brankas Uang** di koperasi sekolah:

```text
Brankas Koperasi (Objek)
  ├── private uangDiDalam (dikunci rapat di dalam brankas)
  └── public setorUang()   ← lubang masuk uang (terbuka)
  └── public ambilUang()   ← lubang keluar uang dengan sidik jari (terkontrol)
```

Uang disimpan aman di dalam brankas (private). Siswa tidak bisa merogoh langsung ke dalam brankas untuk mengambil uang. Siswa harus melalui lubang setor atau lubang ambil resmi (method public) yang akan memverifikasi kartu dan identitas mereka terlebih dahulu.

---

## Visual Illustration: Enkapsulasi Data

```text
LUAR CLASS                                   DALAM KAPSUL CLASS
┌────────────┐                               ┌────────────────────┐
│            │  ─── direct access (blocked) ─┼─► private saldo    │
│            │                               │                    │
│ Objek Lain │  ─── Panggil method public ───┼─► public ambil()   │
│            │                               │        │           │
└────────────┘                               │        ▼           │
                                             │   ubah saldo       │
                                             └────────────────────┘
```

---

## Mari Mencoba: Enkapsulasi Nilai Siswa

Mari kita buat program class `NilaiSiswa` yang mengamankan datanya agar tidak bisa diisi dengan nilai yang tidak masuk akal (seperti nilai `150` atau `-50`).

Buat file bernama `src/bab8/enkapsulasi.ts`:

```ts
class EvaluasiSiswa {
  public nama: string;
  // Properti nilai diamankan (private)
  private nilaiUjian: number = 0;

  constructor(namaSiswa: string) {
    this.nama = namaSiswa;
  }

  // Method public untuk mengisi nilai dengan validasi (Setter resmi)
  public inputNilai(nilaiBaru: number): void {
    if (nilaiBaru < 0 || nilaiBaru > 100) {
      console.log(`⚠ Gagal Input: Nilai ${nilaiBaru} tidak valid (harus 0-100)!`);
      return;
    }
    this.nilaiUjian = nilaiBaru;
    console.log(`✓ Nilai ${this.nama} berhasil diperbarui menjadi: ${this.nilaiUjian}`);
  }

  // Method public untuk membaca nilai (Getter resmi)
  public dapatkanNilai(): number {
    return this.nilaiUjian;
  }
}

const siswaA = new EvaluasiSiswa("Putra Ramadhan");

// Mengisi data secara terkontrol
siswaA.inputNilai(85);   // ✓ Berhasil
siswaA.inputNilai(150);  // ⚠ Ditolak (Proteksi Enkapsulasi bekerja!)
siswaA.inputNilai(-10);  // ⚠ Ditolak

console.log(`\nNilai akhir ${siswaA.nama} di database: ${siswaA.dapatkanNilai()}`);

// siswaA.nilaiUjian = 999; // ✗ Error! TypeScript langsung memblokir akses langsung ini
```

Jalankan dengan perintah:
```text
tsx src/bab8/enkapsulasi.ts
```

## Output
```text
✓ Nilai Putra Ramadhan berhasil diperbarui menjadi: 85
⚠ Gagal Input: Nilai 150 tidak valid (harus 0-100)!
⚠ Gagal Input: Nilai -10 tidak valid (harus 0-100)!

Nilai akhir Putra Ramadhan di database: 85
```

---

## Penjelasan Baris per Baris

- `private nilaiUjian: number = 0` — Properti `nilaiUjian` disembunyikan dari luar.
- `inputNilai(nilaiBaru: number): void` — Method ini bertindak sebagai gerbang filter keamanan. Ia memverifikasi nilai sebelum menyimpannya ke dalam `nilaiUjian`.
- `dapatkanNilai(): number` — Method ini digunakan untuk mengambil data secara aman tanpa mengizinkan perubahan langsung.

---

## Keuntungan Enkapsulasi

1. **Integritas Data Terjaga**: Data objek dijamin selalu valid karena melewati filter validasi di dalam method.
2. **Keleluasaan Mengubah Kode Internal**: Kita bebas mengubah nama properti private di dalam class (misal dari `nilaiUjian` menjadi `nilaiAkhir`) tanpa perlu khawatir merusak kode di luar class, karena luar class hanya mengenal method `inputNilai()`.

---

## Latihan
1. Buat class `SuhuRuangan` dengan properti `private celsius: number = 24`.
2. Tambahkan method `setSuhu(celsiusBaru: number)` yang menolak suhu di bawah 16°C atau di atas 30°C.
3. Tambahkan method `getSuhu()` untuk membaca nilainya.
4. Buat objeknya dan lakukan simulasi perubahan suhu.

---

## Ringkasan
- Enkapsulasi adalah pilar OOP untuk menyembunyikan data internal objek dari luar.
- Memanfaatkan access modifier `private` pada properti sensitif.
- Menyediakan method `public` sebagai pintu akses dan manipulasi data secara terkontrol dan aman.

:::tip[Langkah Selanjutnya]
Lanjut ke **Inheritance** untuk mempelajari pewarisan sifat antar class.
:::
