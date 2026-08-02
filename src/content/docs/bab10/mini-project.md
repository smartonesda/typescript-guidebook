---
title: "Mini Project: Aplikasi Sistem Akademik Berbasis OOP & Asynchronous"
description: Membangun aplikasi sistem repositori akademik sekolah modular yang memuat data secara asynchronous dan mengelolanya dengan paradigma OOP di TypeScript.
---

# Mini Project: Aplikasi Sistem Akademik Berbasis OOP & Asynchronous

## Tujuan Pembelajaran
Setelah menyelesaikan mini project ini, kamu diharapkan dapat:
- Memisahkan struktur project besar menjadi beberapa file module yang rapi.
- Memproses data dari internet secara asynchronous dan menyimpannya ke dalam Repository OOP.
- Menggabungkan konsep Interface, Class, Generic, Asynchronous, dan Module System dalam satu aplikasi utuh.

---

## Pendahuluan

Kita akan membuat aplikasi **Sistem Informasi Akademik dengan Data API**. 

Aplikasi ini akan mem-fetch daftar tugas sekolah dari internet secara asynchronous (asumsi sebagai database tugas), menyaring tugas yang dikerjakan oleh siswa, menyimpannya ke dalam `Repository` OOP bertipe Generic, dan mencetak laporan rapi.

Kita memisahkan aplikasi menjadi tiga file module:
1. `src/bab10/models.ts` (Berisi Interface Siswa dan data tipe).
2. `src/bab10/repository.ts` (Berisi Class Generic `AcademicRepository` yang di-export).
3. `src/bab10/main-siakad.ts` (Program utama yang mem-fetch data internet, memasukkan ke repo, dan mencetak statistik).

---

## Analogi Kehidupan Sehari-hari: Sistem Pengisian Loker Sekolah Digital

Bayangkan sistem lemari loker digital otomatis:
- **`models.ts`** adalah kartu spesifikasi resmi. Ia menjamin jenis ukuran loker (Siswa/Tugas) yang diizinkan.
- **`repository.ts`** adalah mekanisme loker fisik itu sendiri yang memiliki fungsi buka, tutup, dan simpan. Loker ini serbaguna (Generic), bisa menyimpan HP maupun Laptop.
- **`main-siakad.ts`** adalah server internet sekolah. Ia memanggil database pusat secara online (Fetch Async), memilah barang milik siswa yang terdaftar, lalu mendistribusikannya ke loker masing-masing secara teratur.

---

## Visual Illustration: Alur Integrasi Sistem

```text
  [ models.ts (Interface) ] ───┐
                               ├── ekspor ──► [ main-siakad.ts (Utama) ]
  [ repository.ts (Class) ] ───┘                  (fetch API async + proses OOP)
```

---

## Mari Mencoba: Implementasi Project SIAKAD Lengkap

### Langkah 1: Buat file `src/bab10/models.ts`
```ts
// Interface model data siswa
export interface Siswa {
  id: number;
  nama: string;
  kelas: string;
}

// Interface model tugas dari API internet
export interface TugasAPI {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
```

### Langkah 2: Buat file `src/bab10/repository.ts`
```ts
// Class Generic Repository untuk mengelola data bertipe T
export class AcademicRepository<T extends { id: number }> {
  private database: T[] = [];

  constructor(public namaDB: string) {}

  public tambah(item: T): void {
    const ada = this.database.some((d) => d.id === item.id);
    if (ada) {
      console.log(`  [${this.namaDB}]: Gagal, ID ${item.id} sudah ada.`);
      return;
    }
    this.database.push(item);
  }

  public ambilSemua(): T[] {
    return this.database;
  }

  public cariBerdasarkanId(id: number): T | undefined {
    return this.database.find((d) => d.id === id);
  }
}
```

### Langkah 3: Buat file utama `src/bab10/main-siakad.ts`
```ts
// Mengimpor komponen dari berbagai module
import { Siswa, TugasAPI } from "./models";
import { AcademicRepository } from "./repository";

// Instansiasi Database Repository
const dbSiswa = new AcademicRepository<Siswa>("DB_SISWA");
const dbTugas = new AcademicRepository<TugasAPI>("DB_TUGAS");

// Isi data siswa secara synchronous
dbSiswa.tambah({ id: 101, nama: "Putra", kelas: "XI RPL 1" });
dbSiswa.tambah({ id: 102, nama: "Dewi", kelas: "XI RPL 2" });

// Fungsi async untuk mem-fetch data tugas dari internet dan menyimpannya ke repo
async function muatTugasSekolah(daftarId: number[]): Promise<void> {
  console.log("[Sistem]: Memulai pemuatan data tugas dari internet...");

  try {
    for (const id of daftarId) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const data: TugasAPI = await response.json();
      
      // Simpan ke dalam Repository OOP
      dbTugas.tambah(data);
    }
    console.log("✓ [Sistem]: Seluruh data tugas berhasil dimuat ke Repository.\n");

  } catch (error) {
    console.log("⚠ [Sistem]: Gagal memuat data dari internet:", error);
  }
}

// Fungsi utama untuk memproses dan mencetak laporan
async function jalankanAplikasi() {
  // Pemuatan data async
  await muatTugasSekolah([1, 2, 3, 4, 5]);

  // Cetak laporan gabungan
  console.log("=".repeat(55));
  console.log("          LAPORAN DATA TUGAS AKADEMIK");
  console.log("=".repeat(55));
  
  const semuaSiswa = dbSiswa.ambilSemua();
  const semuaTugas = dbTugas.ambilSemua();

  semuaSiswa.forEach((siswa, indeks) => {
    // Cari tugas yang berpasangan berdasarkan indeks simulasi
    const tugas = semuaTugas[indeks];
    const status = tugas?.completed ? "✓ SELESAI" : "✗ BELUM";
    const judulTugas = tugas?.title.substring(0, 20) ?? "(Tugas tidak tersedia)";

    console.log(
      `  ${indeks + 1}. ${siswa.nama.padEnd(8)} | ` +
      `Tugas: ${judulTugas.padEnd(20)} | ` +
      `Status: ${status}`
    );
  });
  console.log("=".repeat(55));
}

// Jalankan program utama
jalankanAplikasi();
```

Jalankan dengan perintah:
```text
tsx src/bab10/main-siakad.ts
```

---

## Penjelasan Bagian Penting

1. **Modul models.ts**: Hanya berfokus menyimpan struktur interface tipe data. Di-import oleh file-file yang membutuhkan.
2. **Modul repository.ts**: Hanya berfokus mendefinisikan logic class engine data. Ini bisa dipakai ulang untuk project koperasi, perpus, dll karena bersifat Generic.
3. **Pemuatan Async**: Menggunakan `await fetch()` di dalam perulangan `for` menjamin seluruh data tugas selesai ter-fetch dan masuk ke dalam `dbTugas` sebelum laporan dicetak di baris berikutnya.

---

## Latihan
1. Tambahkan data siswa ketiga (`id: 103, nama: "Citra"`) di file `main-siakad.ts`.
2. Jalankan kembali program dan amati bagaimana Citra otomatis mendapatkan pasangan data tugas ID 3 dari internet pada laporan.

---

## Ringkasan
- Project besar dirancang modular dengan memisahkan model, data engine (repository), dan program utama.
- Kombinasi OOP (`Repository<T>`) dan Asynchronous (`fetch`) adalah standar arsitektur web modern.
- TypeScript menjaga agar pertukaran data antar file tetap aman dan konsisten tipenya.

:::tip[Selesai Mini Project]
Selamat! Kamu telah menyelesaikan mini project Asynchronous dan Module. Laporkan hasil belajarmu kepada gurumu.
:::
