---
title: "Implementasi main.ts — BAB 11"
description: Membangun pintu masuk utama program (main.ts) berupa loop menu konsol interaktif menggunakan modul readline Node.js.
---

# Implementasi main.ts (Presentation Layer)

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Membuat berkas entry point utama `main.ts` di folder `src/`.
- Menggunakan modul bawaan Node.js `readline` untuk menerima input ketikan terminal secara asynchronous.
- Menyusun loop menu konsol interaktif (menu 1-6 dan 0 untuk keluar).

---

## Pendahuluan
Ini adalah langkah perakitan akhir! Kita akan membuat file `src/main.ts` yang bertindak sebagai Presentation Layer. File ini bertugas menampilkan menu angka, menerima pilihan pengguna dari terminal, memanggil service yang sesuai, lalu mengulangi menu tersebut sampai pengguna memilih keluar.

---

## Penjelasan
Berkas `src/main.ts` menghubungkan semua layer:
1. Mengimpor database `AcademicRepository` (BAB 9).
2. Mengimpor logis bisnis `SiswaService` (BAB 7).
3. Menggunakan modul `readline` Node.js untuk menangkap input ketikan keyboard secara asynchronous agar terminal tidak membeku (BAB 10).
4. Menyajikan loop menu di dalam `while(berjalan)` dengan opsi switch-case.

---

## Analogi Kehidupan Sehari-hari: Kemudi Setir Mobil
Mengimplementasikan berkas `main.ts` seperti **memasang kemudi setir dan tombol dashboard di kabin pengemudi**:

```text
Tombol Dashboard (Menu main.ts):
- Tekan tombol 1 ──► speedometer menyala menampilkan info (tampilkanLaporan)
- Putar tombol 2 ──► AC menyala mendinginkan kabin (tambahSiswa)
- Tekan tombol 0 ──► mesin mobil mati total (keluar)
```

Dashboard tidak tahu bagaimana cara silinder mesin memicu pembakaran bensin. Ia hanya mengirimkan sinyal elektronik (memanggil method) saat tombol ditekan oleh pengemudi.

---

## Visual Illustration: Alur Input User

```text
User ketik angka 2 ──► main.ts ──► SiswaService.tambahSiswaBaru() ──► Repo.tambah()
```

---

## Live Coding: Implementasi main.ts

### Langkah 1: Tulis Kode Pintu Masuk di `src/main.ts`
```ts
import * as readline from "readline";
import { AcademicRepository } from "./repositories/academic-repository";
import { SiswaService } from "./services/siswa-service";
import { SiswaClass, GuruClass, StatusHadir } from "./models";
import { cetakGaris } from "./helpers/utility";

// ── Setup Database & Service ─────────────────────────
const repoSiswa = new AcademicRepository<SiswaClass>("DB_SISWA");
const repoGuru = new AcademicRepository<GuruClass>("DB_GURU");
const siswaService = new SiswaService(repoSiswa);

// Isi database awal secara instan (Dummy Data)
repoSiswa.tambah(new SiswaClass(1, "Putra", 17, "1001", "XI RPL 1"));
repoSiswa.tambah(new SiswaClass(2, "Dewi", 16, "1002", "XI RPL 2"));
repoGuru.tambah(new GuruClass(101, "Pak Budi", 35, 198702, "TypeScript", StatusHadir.Hadir));

// ── Setup Readline Node.js untuk Input Terminal ──────
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Mengubah pertanyaan readline menjadi Promise agar bisa di-await
const tanyaUser = (pertanyaan: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(pertanyaan, (jawaban) => resolve(jawaban.trim()));
  });
};

// ── Loop Menu Utama Asynchronous ──────────────────────
async function menuUtama(): Promise<void> {
  let berjalan = true;

  while (berjalan) {
    console.log("\n");
    cetakGaris();
    console.log("       SISTEM INFORMASI AKADEMIK SMK AMANAH v4.0");
    cetakGaris();
    console.log("  [1] Tampilkan Laporan Siswa");
    console.log("  [2] Tambah Siswa Baru");
    console.log("  [3] Update Nilai Siswa");
    console.log("  [4] Tampilkan Daftar Guru");
    console.log("  [5] Ambil Data Tugas Online (Fetch Async)");
    console.log("  [0] Keluar Aplikasi");
    cetakGaris();

    const pilihan = await tanyaUser("  Pilih Menu (0-5): ");

    switch (pilihan) {
      case "1":
        siswaService.tampilkanLaporanLengkap();
        break;

      case "2":
        console.log("\n--- TAMBAH SISWA BARU ---");
        const nama = await tanyaUser("  Masukkan Nama Siswa: ");
        const nis = await tanyaUser("  Masukkan NIS Siswa : ");
        const kelas = await tanyaUser("  Masukkan Kelas Siswa: ");
        siswaService.tambahSiswaBaru(nama, nis, kelas);
        break;

      case "3":
        console.log("\n--- UPDATE NILAI SISWA ---");
        const nisCari = await tanyaUser("  Masukkan NIS Siswa: ");
        const nilaiInput = await tanyaUser("  Masukkan Nilai Baru (0-100): ");
        const nilaiNum = Number(nilaiInput);
        
        if (isNaN(nilaiNum)) {
          console.log("  [Input]: Nilai harus berupa angka!");
        } else {
          siswaService.updateNilaiSiswa(nisCari, nilaiNum);
        }
        break;

      case "4":
        console.log("\n=== DAFTAR GURU PENGAJAR ===");
        cetakGaris(40, "-");
        repoGuru.ambilSemua().forEach((g, index) => {
          console.log(`  ${index + 1}. ${g.nama} | Mapel: ${g.mataPelajaran} | Status: ${g.status}`);
        });
        cetakGaris(40, "-");
        break;

      case "5":
        console.log("\n--- AMBIL TUGAS ONLINE (FETCH API) ---");
        const idInput = await tanyaUser("  Masukkan ID Tugas (1-100): ");
        const idNum = Number(idInput);
        if (isNaN(idNum) || idNum <= 0) {
          console.log("  [API]: ID Tugas tidak valid!");
        } else {
          try {
            const judulTugas = await siswaService.muatTugasOnline(idNum);
            console.log(`\n  [Hasil API] Judul Tugas: "${judulTugas}"`);
          } catch (err) {
            console.log(`\n  [API Error]: Gagal mengambil data (${err})`);
          }
        }
        break;

      case "0":
        console.log("\n  Terima kasih telah menggunakan sistem SIAKAD. Sampai jumpa!");
        berjalan = false;
        rl.close(); // tutup input terminal
        break;

      default:
        console.log("  ⚠ Pilihan tidak valid! Masukkan angka 0 sampai 5.");
    }

    // Jeda sejenak sebelum menu utama dicetak kembali
    if (berjalan) {
      await tanyaUser("\n  Tekan ENTER untuk kembali ke menu...");
    }
  }
}

// Jalankan aplikasi pertama kali
menuUtama();
```

---

## Output
Jalankan di terminal dengan perintah `tsx src/main.ts`. Output visual yang diharapkan saat menu dijalankan:

```text
=======================================================
       SISTEM INFORMASI AKADEMIK SMK AMANAH v4.0
=======================================================
  [1] Tampilkan Laporan Siswa
  [2] Tambah Siswa Baru
  [3] Update Nilai Siswa
  [4] Tampilkan Daftar Guru
  [5] Ambil Data Tugas Online (Fetch Async)
  [0] Keluar Aplikasi
=======================================================
  Pilih Menu (0-5): 
```

---

## Penjelasan Baris per Baris
- `readline.createInterface(...)`: Menyiapkan stream pembaca input keyboard di terminal (BAB 10).
- `await tanyaUser(...)`: Menggunakan `await` untuk menahan jalannya loop `while` sampai pengguna selesai mengetik dan menekan ENTER (BAB 10).
- `rl.close()`: Menutup stream input agar proses Node.js bisa berhenti secara normal (tidak menggantung).

---

## Common Mistakes
- **Lupa memanggil rl.close()**: Lupa menutup readline saat pengguna memilih menu `0`. Ini menyebabkan proses terminal menggantung aktif terus di latar belakang meskipun program terlihat sudah selesai.

---

## Tips
:::tip[Gunakan as keyof]
Jika ingin mengakses properti dinamis berdasarkan input user kustom, pastikan melakukan type assertion `as keyof typeof objek` agar compiler TypeScript tetap tenang dan tidak mengeluarkan error type safety.
:::

---

## Ringkasan
- Berkas `src/main.ts` bertindak sebagai entry point (Presentation Layer) utama.
- Menggunakan modul `readline` Node.js untuk menangkap input ketikan keyboard.
- `while(berjalan)` dan `await` menjaga siklus hidup program konsol agar tetap berjalan secara interaktif.

---

## Latihan
1. Buat file `main.ts` di folder `src/` komputermu, salin kode di atas.
2. Jalankan dan uji coba menu `1` dan `4` di terminal.
