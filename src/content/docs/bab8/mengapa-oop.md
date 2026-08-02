---
title: "Mengapa OOP?"
description: Memahami alasan mengapa Object-Oriented Programming (OOP) sangat penting untuk pengembangan aplikasi skala besar.
---

# Mengapa OOP?

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan masalah yang timbul dari kode prosedural yang tidak terstruktur (Spaghetti Code).
- Menyebutkan minimal tiga keuntungan menggunakan paradigma OOP.
- Menjelaskan mengapa modern framework (seperti Angular, NestJS, Nest) menggunakan OOP.

---

## Pendahuluan

Di sekolah, kamu mungkin pernah membuat tugas membuat program kalkulator atau sistem kasir sederhana. Kodenya mungkin hanya sekitar 50 sampai 100 baris. Menulis dengan cara prosedural biasa tentu terasa mudah dan cepat.

Namun, bayangkan jika kamu bekerja di perusahaan teknologi dan diminta untuk membangun game online atau sistem pendaftaran siswa baru skala nasional yang memiliki ratusan ribu baris kode. Tanpa struktur yang jelas, kodemu akan menjadi kekacauan besar yang disebut **Spaghetti Code**.

---

## Masalah Prosedural: Spaghetti Code

**Spaghetti Code** adalah sebutan untuk kode program yang alurnya berbelit-belit, rumit, dan variabelnya berhamburan ke mana-mana, mirip seperti tumpukan mie spaghetti. 

Masalah utama dari kode prosedural pada aplikasi besar:
1. **Global State Danger**: Variabel yang diletakkan di global scope bisa diubah secara tidak sengaja oleh fungsi mana pun. Ini memicu bug yang sangat sulit dilacak.
2. **Ketergantungan Tinggi (Tight Coupling)**: Mengubah satu baris kode di bagian atas bisa membuat sepuluh fungsi di bagian bawah ikut rusak karena mereka saling bergantung secara langsung.
3. **Duplikasi Kode**: Karena tidak terstruktur, kamu akan sering menyalin (*copy-paste*) kode yang sama di berbagai file berbeda.

---

## Analogi Kehidupan Sehari-hari: Ruang Mesin Mobil

Bayangkan dua tipe perakitan mesin mobil:

### Tipe A: Tanpa OOP (Kabel Berserakan)
Seluruh komponen mesin — piston, busi, aki, tangki bensin — disambungkan secara langsung menggunakan kabel-kabel panjang tanpa wadah pelindung. Kabel-kabel tersebut saling menyilang di dalam kap mesin.
- **Efeknya**: Jika kabel aki rusak, mekanik akan sangat kesulitan mencari kabel yang mana. Saat menarik satu kabel, komponen piston bisa saja ikut bergeser dan rusak.

### Tipe B: Dengan OOP (Modular / Blok Komponen)
Mesin dirancang secara modular. Komponen aki dibungkus di dalam kotak aki tertutup dengan dua terminal colokan. Komponen kelistrikan memiliki blok tersendiri.
- **Efeknya**: Aki rusak? Cukup cabut blok aki lama, masukkan blok aki baru. Komponen piston dan bensin tidak akan terganggu karena mereka terisolasi di dalam bloknya masing-masing.

OOP adalah metode perakitan tipe B: membuat kode programmu menjadi modul-modul mandiri yang rapi.

---

## Visual Illustration: Spaghetti vs Modular

```text
SPAGHETTI (Prosedural Tidak Terstruktur)
   Var1 ──┬── Function1 ──┬── Var2
          │               │
   Var3 ──┴── Function2 ──┴── Function3 ── Var1 (Saling silang!)

MODULAR (OOP)
   ┌───────────────┐      ┌───────────────┐
   │  Objek Aki    │ ◄──► │ Objek Piston  │
   │  - Properti   │      │ - Properti    │
   │  - Method     │      │ - Method      │
   └───────────────┘      └───────────────┘
   (Setiap komponen aman terisolasi di dalam bloknya)
```

---

## Mari Mencoba: Perbandingan Kode

Mari kita lihat simulasi bahaya variabel global pada prosedural dibanding keamanan dengan enkapsulasi sederhana objek.

Buat file bernama `src/bab8/mengapa-oop.ts`:

```ts
// --- VERSI 1: PROSEDURAL (Bahaya Variabel Global) ---
let saldoGlobal: number = 10000;

function kurangiSaldoProsedural(jumlah: number): void {
  saldoGlobal -= jumlah;
}

// Di bagian lain kode, ada developer lain yang tidak sengaja mengubah variabel global
saldoGlobal = -50000; // Bug berbahaya! Saldo menjadi negatif tanpa kontrol
console.log(`[Prosedural] Saldo saat ini: ${saldoGlobal}`);


// --- VERSI 2: OOP (Keamanan Data Terjaga) ---
class RekeningBank {
  // Properti saldo dilindungi (hanya bisa diubah melalui method resmi)
  private saldo: number = 10000;

  tarikUang(jumlah: number): void {
    if (jumlah > this.saldo) {
      console.log("⚠ Transaksi Ditolak: Saldo tidak cukup!");
      return;
    }
    if (jumlah <= 0) {
      console.log("⚠ Transaksi Ditolak: Jumlah tidak valid!");
      return;
    }
    this.saldo -= jumlah;
    console.log(`✓ Tarik Rp${jumlah} berhasil. Saldo sisa: Rp${this.saldo}`);
  }

  getSaldo(): number {
    return this.saldo;
  }
}

const dompetKu = new RekeningBank();
dompetKu.tarikUang(4000);   // ✓ Berhasil
dompetKu.tarikUang(20000);  // ⚠ Ditolak (Saldo aman!)
// dompetKu.saldo = -999999; // ✗ Error! TypeScript langsung melarang akses langsung ke saldo private
```

Jalankan menggunakan perintah:
```text
tsx src/bab8/mengapa-oop.ts
```

---

## Keuntungan Utama OOP

1. **Reusability (Penggunaan Ulang Kode)**: Kita bisa membuat satu class cetak biru, lalu mencetak ribuan objek darinya dengan cepat tanpa menulis ulang kode.
2. **Maintenance (Perawatan Mudah)**: Jika ada fungsi yang error, kita cukup mencari di class objek mana yang bermasalah. Bagian program lain tetap berjalan aman.
3. **Security (Keamanan Data)**: Properti sensitif bisa disembunyikan menggunakan kata kunci `private` agar tidak bisa diubah sembarangan dari luar (Enkapsulasi).

---

## Latihan
1. Tuliskan tanggapanmu di kolom komentar file latihan: mengapa framework modern seperti NestJS dan Angular memilih menggunakan Class dan OOP daripada fungsi prosedural biasa?
2. Jalankan kembali program `mengapa-oop.ts` dan amati bagaimana TypeScript mencegah perubahan data tidak sah pada baris terakhir.

---

## Ringkasan
- Kode prosedural tanpa struktur memicu terjadinya Spaghetti Code yang sulit dirawat.
- OOP mengelompokkan kode menjadi modul objek mandiri seperti blok perakitan mesin.
- Tiga manfaat utama OOP: kemudahan penggunaan ulang (Reusability), kemudahan perawatan (Maintenance), dan keamanan data (Security).

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu Class** untuk memahami cetak biru pembuat objek.
:::
