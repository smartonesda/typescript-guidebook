---
title: "Mini Project: Aplikasi Data Akademik"
description: Membangun aplikasi data akademik modular berbasis terminal menggunakan Interface, Type Alias, Enum, dan Union Type.
---

# Mini Project: Aplikasi Data Akademik

## Tujuan Pembelajaran

Setelah mini project ini, kamu dapat menggabungkan Interface, Type Alias, Enum, Union, Array of Object, dan modular function untuk membangun program simulasi manajemen data sekolah.

---

## Pendahuluan

Kita akan membuat aplikasi **Data Akademik Sekolah** yang mengelola daftar siswa dan guru, menentukan kelulusan berdasarkan nilai rata-rata, memfilter data, dan mencetak laporan statistik. Project ini menggabungkan pilar dasar pemrograman (BAB 1–6) dengan teknik pemodelan data TypeScript (BAB 7).

---

## Fitur Aplikasi

1. Mengelompokkan data guru dan siswa
2. Menyaring kelulusan secara otomatis menggunakan interface function
3. Membatasi status kehadiran wali kelas menggunakan Enum
4. Menangani input NIS fleksibel menggunakan Union Type
5. Menampilkan visual laporan akademik terformat di terminal

---

## Visual Architecture

```text
Enum StatusHadir { Hadir, Izin, Absen }
type NIS = string | number (Union)

interface Orang { nama, umur }
  ├── extends Siswa { nis: NIS, nilai }
  └── extends Guru  { nip, status: StatusHadir }

interface Kelas { namaKelas, waliKelas: Guru, siswa: Siswa[] }

Fungsi Laporan ──► memproses & memvalidasi data berdasarkan interface
```

---

## Mari Mencoba

Buat `src/bab7/aplikasi-akademik.ts`:

```ts
// =====================================================
// MINI PROJECT: APLIKASI DATA AKADEMIK
// Menggabungkan BAB 1 s.d. BAB 7
// =====================================================

// 1. Enum untuk Status Kehadiran Guru
enum StatusHadir {
  Hadir = "HADIR",
  Izin = "IZIN",
  Absen = "ABSEN"
}

// 2. Union Type untuk ID / NIS fleksibel
type IDAkademik = string | number;

// 3. Interface Struktur Orang (Induk)
interface Orang {
  nama: string;
  umur: number;
}

// 4. Interface Siswa & Guru (Anak)
interface Siswa extends Orang {
  nis: IDAkademik;
  nilaiRataRata: number;
}

interface Guru extends Orang {
  nip: number;
  mataPelajaran: string;
  status: StatusHadir; // menggunakan Enum
}

// 5. Interface Rombel Kelas
interface Rombel {
  namaKelas: string;
  waliKelas: Guru;
  daftarSiswa: Siswa[];
}

// ── Database Karyawan & Siswa ──────────────────────────
const waliKelas: Guru = {
  nama: "Pak Budi Santoso",
  umur: 38,
  nip: 19870615,
  mataPelajaran: "TypeScript Programming",
  status: StatusHadir.Hadir
}

const dataSiswa: Siswa[] = [
  { nama: "Putra",  umur: 17, nis: "NIS-1001", nilaiRataRata: 82 },
  { nama: "Dewi",   umur: 16, nis: 1002,       nilaiRataRata: 70 }, // NIS berupa number
  { nama: "Citra",  umur: 17, nis: "NIS-1003", nilaiRataRata: 95 },
  { nama: "Budi",   umur: 16, nis: 1004,       nilaiRataRata: 60 }  // NIS berupa number
]

const kelasXIRPL1: Rombel = {
  namaKelas: "XI RPL 1",
  waliKelas,
  daftarSiswa: dataSiswa
}

// ── Fungsi Analisis Kelulusan (Interface Function) ─────
interface AnalisisKelas {
  (r: Rombel, batasLulus?: number): void;
}

const cetakLaporanAkademik: AnalisisKelas = (kelas, batasLulus = 75) => {
  const { namaKelas, waliKelas, daftarSiswa } = kelas

  // Hitung total & rata-rata kelas
  const totalNilai = daftarSiswa.reduce((acc, s) => acc + s.nilaiRataRata, 0)
  const rataRataKelas = totalNilai / daftarSiswa.length

  // Filter siswa lulus & remedial
  const lulus = daftarSiswa.filter((s) => s.nilaiRataRata >= batasLulus)
  const remedial = daftarSiswa.filter((s) => s.nilaiRataRata < batasLulus)

  console.log("=".repeat(55))
  console.log(`      LAPORAN AKADEMIK KELAS: ${namaKelas}`)
  console.log("=".repeat(55))
  console.log(`  Wali Kelas    : ${waliKelas.nama}`)
  console.log(`  Mata Pelajar. : ${waliKelas.mataPelajaran}`)
  console.log(`  Status Wali   : ${waliKelas.status}`)
  console.log("-".repeat(55))
  console.log(`  Rata-rata Kelas: ${rataRataKelas.toFixed(2)}`)
  console.log(`  Batas Lulus    : ${batasLulus}`)
  console.log("-".repeat(55))

  console.log("  DAFTAR SISWA LULUS:")
  lulus.forEach((s) => {
    // Membaca tipe union NIS secara aman
    const nisTampil = typeof s.nis === "string" ? s.nis : `NUM-${s.nis}`
    console.log(`    [${nisTampil.padEnd(8)}] ${s.nama.padEnd(8)}: ${s.nilaiRataRata} (LULUS)`)
  })

  console.log("\n  DAFTAR SISWA REMEDIAL:")
  remedial.forEach((s) => {
    const nisTampil = typeof s.nis === "string" ? s.nis : `NUM-${s.nis}`
    console.log(`    [${nisTampil.padEnd(8)}] ${s.nama.padEnd(8)}: ${s.nilaiRataRata} (REMEDIAL)`)
  })

  console.log("=".repeat(55))
}

// Jalankan laporan dengan batas lulus default (75)
cetakLaporanAkademik(kelasXIRPL1)

// Jalankan laporan dengan batas lulus kustom (70)
console.log("\nSimulasi batas lulus diturunkan menjadi 70:")
cetakLaporanAkademik(kelasXIRPL1, 70)
```

Jalankan:

```text
tsx src/bab7/aplikasi-akademik.ts
```

---

## Output (sebagian)

```text
=======================================================
      LAPORAN AKADEMIK KELAS: XI RPL 1
=======================================================
  Wali Kelas    : Pak Budi Santoso
  Mata Pelajar. : TypeScript Programming
  Status Wali   : HADIR
-------------------------------------------------------
  Rata-rata Kelas: 76.75
  Batas Lulus    : 75
-------------------------------------------------------
  DAFTAR SISWA LULUS:
    [NIS-1001] Putra   : 82 (LULUS)
    [NIS-1003] Citra   : 95 (LULUS)

  DAFTAR SISWA REMEDIAL:
    [NUM-1002] Dewi    : 70 (REMEDIAL)
    [NUM-1004] Budi    : 60 (REMEDIAL)
=======================================================
```

---

## Penjelasan Bagian Penting

### Enum Kehadiran

```ts
enum StatusHadir { Hadir = "HADIR", ... }
```

Membatasi status wali kelas agar hanya bisa bernilai "HADIR", "IZIN", atau "ABSEN" (tidak boleh string acak).

### Union Type ID/NIS

```ts
type IDAkademik = string | number;
```

Daftar siswa memiliki NIS berbentuk string (`"NIS-1001"`) dan number (`1002`). TypeScript meloloskan keduanya karena mematuhi tipe gabungan `IDAkademik`.

### Type Guarding Union

```ts
const nisTampil = typeof s.nis === "string" ? s.nis : `NUM-${s.nis}`
```

Saat menampilkan data, program memeriksa tipe data `s.nis`. Jika string, tampilkan langsung. Jika number, tambahkan prefix `"NUM-"`. Ini membuat program aman dari bug tipe.

### Interface Function

```ts
interface AnalisisKelas {
  (r: Rombel, batasLulus?: number): void;
}
```

Interface menetapkan aturan function `cetakLaporanAkademik`: parameter ke-1 wajib `Rombel`, parameter ke-2 opsional `number`.

---

## Latihan

Kembangkan mini project ini:
1. Ubah status kehadiran wali kelas menjadi `StatusHadir.Izin` dan lihat perubahannya di laporan.
2. Tambahkan satu siswa baru dengan NIS berupa string `"NIS-1005"` dan nilai `68`, lalu jalankan ulang simulasi laporan.

---

## Ringkasan

- Interface, Type Alias, Enum, dan Union bekerja sama mendesain data sekolah yang kompleks.
- Enum menjaga keandalan string opsi.
- Type Guarding (`typeof`) wajib digunakan untuk memproses properti bertipe union.
- Laporan terminal yang teratur mempermudah visualisasi data bagi user.

:::tip[Selesai Mini Project]
Selamat! Kamu telah membangun sistem administrasi sekolah modular menggunakan TypeScript secara profesional. Hubungi gurumu untuk evaluasi.
:::
