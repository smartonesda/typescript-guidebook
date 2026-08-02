---
title: "Studi Kasus: Sistem Data Siswa & Kelas"
description: Studi kasus lengkap merancang dan memvalidasi struktur data siswa, guru, dan kelas menggunakan Interface di TypeScript.
---

# Studi Kasus: Sistem Data Siswa & Kelas

## Tujuan Pembelajaran

Setelah studi kasus ini, kamu dapat merancang struktur data sekolah secara modular menggunakan interface, memperluas tipe data dengan extends, dan memvalidasi struktur objek kompleks.

---

## Pendahuluan

Kita akan membuat sistem pemodelan data akademik sekolah. Kita membutuhkan rancangan data yang jelas untuk mewakili Siswa, Guru, dan Kelas. Semua entitas ini harus terhubung satu sama lain dengan tipe data yang aman dan terproteksi.

---

## Perancangan Struktur Data

Struktur data yang dirancang:

```text
Orang (Base Interface)
  ├── nama (string)
  └── umur (number)

Siswa (extends Orang)
  ├── nis (number)
  └── kelas (string)

Guru (extends Orang)
  ├── nip (number)
  └── mataPelajaran (string)

Rombel / Rombongan Belajar (Interface Kelas)
  ├── namaKelas (string)
  ├── waliKelas (Guru)
  └── daftarSiswa (Siswa[])
```

---

## Visual Illustration

```text
Orang { nama, umur }
  ├── extends ──► Siswa { nama, umur, nis, kelas }
  └── extends ──► Guru  { nama, umur, nip, mataPelajaran }

Rombel {
  namaKelas: string,
  waliKelas: Guru,
  daftarSiswa: Siswa[]
}
```

---

## Mari Mencoba

Buat `src/bab7/studi-kasus-akademik.ts`:

```ts
// 1. Definisikan Interface Orang (Induk)
interface Orang {
  nama: string;
  umur: number;
}

// 2. Definisikan Interface Siswa dan Guru (Anak)
interface Siswa extends Orang {
  nis: number;
  kelas: string;
}

interface Guru extends Orang {
  nip: number;
  mataPelajaran: string;
}

// 3. Definisikan Interface Rombel (Menggabungkan objek & array)
interface Rombel {
  namaKelas: string;
  waliKelas: Guru;
  daftarSiswa: Siswa[];
}

// ── Membuat Objek Guru & Siswa ─────────────────────────
const waliKelasRPL: Guru = {
  nama: "Pak Budi",
  umur: 35,
  nip: 19890102,
  mataPelajaran: "Pemrograman Web"
}

const siswa1: Siswa = { nama: "Putra", umur: 17, nis: 1001, kelas: "XI RPL 1" }
const siswa2: Siswa = { nama: "Dewi", umur: 16, nis: 1002, kelas: "XI RPL 1" }
const siswa3: Siswa = { nama: "Budi", umur: 17, nis: 1003, kelas: "XI RPL 1" }

// ── Membuat Objek Rombel Kelas ─────────────────────────
const kelasXIRPL1: Rombel = {
  namaKelas: "XI RPL 1",
  waliKelas: waliKelasRPL,
  daftarSiswa: [siswa1, siswa2, siswa3]
}

// ── Fungsi Tampilan Laporan Akademik ───────────────────
function cetakLaporanKelas(r: Rombel): void {
  console.log("=".repeat(50))
  console.log(`  LAPORAN KELAS: ${r.namaKelas}`)
  console.log("=".repeat(50))
  console.log(`  Wali Kelas   : ${r.waliKelas.nama} (NIP: ${r.waliKelas.nip})`)
  console.log(`  Mata Pelaj.  : ${r.waliKelas.mataPelajaran}`)
  console.log("-".repeat(50))
  console.log("  Daftar Siswa :")

  r.daftarSiswa.forEach((s, indeks) => {
    console.log(`    ${indeks + 1}. [NIS ${s.nis}] ${s.nama.padEnd(8)} (usia ${s.umur} th)`)
  })
  console.log("=".repeat(50))
}

// Jalankan cetak laporan
cetakLaporanKelas(kelasXIRPL1)
```

Jalankan:

```text
tsx src/bab7/studi-kasus-akademik.ts
```

---

## Output

```text
==================================================
  LAPORAN KELAS: XI RPL 1
==================================================
  Wali Kelas   : Pak Budi (NIP: 19890102)
  Mata Pelaj.  : Pemrograman Web
--------------------------------------------------
  Daftar Siswa :
    1. [NIS 1001] Putra    (usia 17 th)
    2. [NIS 1002] Dewi     (usia 16 th)
    3. [NIS 1003] Budi     (usia 17 th)
==================================================
```

---

## Penjelasan Baris per Baris

- `interface Rombel` — menggunakan properti `waliKelas` bertipe `Guru` (nested object) dan `daftarSiswa` bertipe `Siswa[]` (array of objects).
- `kelasXIRPL1` — divalidasi secara ketat oleh TypeScript agar data wali kelas dan daftar siswa memenuhi kontrak masing-masing interface.
- `r.daftarSiswa.forEach` — mengiterasi array siswa di dalam objek kelas untuk mencetak laporan.

---

## Latihan

Tambahkan properti opsional `prestasi?: string` pada interface `Siswa`. Tambahkan prestasi pada objek `siswa1`. Update fungsi `cetakLaporanKelas` agar menampilkan prestasi tersebut jika tersedia menggunakan optional chaining `?.` atau nullish coalescing `??`.

---

## Ringkasan

- Interface modular mempermudah perancangan sistem data sekolah yang kompleks.
- Pewarisan `extends` menghemat kode dengan berbagi properti umum (`Orang`).
- Objek terintegrasi (nested objek dan array objek) divalidasi otomatis oleh compiler.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mini Project** untuk membuat Aplikasi Data Akademik lengkap.
:::
