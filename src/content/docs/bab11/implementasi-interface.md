---
title: "Implementasi Interface Kontrak — BAB 11"
description: Membuat kontrak method formal untuk Class Repository dan Service di dalam folder interfaces/.
---

# Implementasi Interface Kontrak

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Membuat file `repository-interface.ts` bertipe Generic.
- Membuat file `service-interface.ts`.
- Menjelaskan pentingnya interface kontrak dalam arsitektur aplikasi berlapis.

---

## Pendahuluan
Sebelum kita membuat Class database (Repository) dan Class logika bisnis (Service), kita harus membuat **kontrak formal** yang menentukan method apa saja yang wajib disediakan oleh class-class tersebut. Ini memastikan seluruh layer terhubung secara konsisten.

---

## Penjelasan
Folder `src/interfaces/` menyimpan file interface kontrak:
- `repository-interface.ts`: Mendefinisikan method dasar operasi database (tambah, cari, update, hapus) menggunakan tipe Generic `T` agar bisa dipakai untuk objek apa saja.
- `service-interface.ts`: Mendefinisikan method khusus alur bisnis akademik siswa.

---

## Analogi Kehidupan Sehari-hari: Buku SOP Petugas Sekolah
Membuat interface kontrak seperti **menulis buku Standard Operating Procedure (SOP) resmi sekolah**:

```text
SOP Petugas Database (IRepository)
  ├── Harus bisa MENAMBAH data (tambah)
  ├── Harus bisa MENCARI data (cariBerdasarkanId)
  └── Harus bisa MENGHAPUS data (hapus)
```

Buku SOP tidak menuliskan *bagaimana* cara petugas mengarsipkan map di lemari (apakah diurutkan abjad atau nomor). SOP hanya mewajibkan bahwa tindakan tersebut **harus bisa dilakukan** oleh siapa pun petugas yang berjaga.

---

## Visual Illustration: Kontrak Kerja Class

```text
Interface IRepository<T> ──► Mengharuskan adanya method [tambah, cari, update, hapus]
                                  │
                                  ▼ diimplementasikan oleh
Class AcademicRepository<T> implements IRepository<T>
(Wajib menulis kode instruksi untuk ke-4 method tersebut)
```

---

## Live Coding: Implementasi Interface Kontrak

### Langkah 1: Buat `src/interfaces/repository-interface.ts`
```ts
// Interface kontrak database Generic
export interface IRepository<T> {
  tambah(item: T): boolean;
  ambilSemua(): T[];
  cariBerdasarkanId(id: number): T | undefined;
  update(id: number, dataBaru: Partial<T>): boolean;
  hapus(id: number): boolean;
}
```

### Langkah 2: Buat `src/interfaces/service-interface.ts`
```ts
import { Siswa } from "../models";

// Interface kontrak logika bisnis siswa
export interface ISiswaService {
  tambahSiswaBaru(nama: string, nis: string | number, kelas: string): void;
  updateNilaiSiswa(nis: string | number, nilai: number): void;
  hitungRataRataKelas(): number;
  tampilkanLaporanLengkap(): void;
}
```

---

## Output
Kedua interface kontrak ini berhasil dibuat dan siap untuk di-`implements` oleh class-class di folder `repositories/` dan `services/`.

---

## Penjelasan Baris per Baris
- `IRepository<T>`: Menggunakan Generic `<T>` agar interface ini fleksibel digunakan untuk tipe data apa saja (Siswa, Guru, Buku, dll) di halaman selanjutnya (BAB 9).
- `dataBaru: Partial<T>`: Menggunakan Utility Type `Partial` bawaan TypeScript agar data update bisa dikirim secara sebagian/parsial (BAB 9).

---

## Common Mistakes
- **Menulis tubuh fungsi di dalam interface**: Menulis `{ console.log("tambah") }` setelah nama method. Interface hanya boleh menampung tanda tangan fungsi (nama, parameter, return type), tidak boleh ada logika program di dalamnya.

---

## Tips
:::tip[Gunakan I untuk Penanda]
Banyak programmer menggunakan huruf `I` besar di awal nama file interface (seperti `IRepository`) untuk mempermudah membedakannya dengan class nyata saat di-import.
:::

---

## Ringkasan
- Interface kontrak disimpan di folder `src/interfaces/`.
- `IRepository<T>` menggunakan Generic agar serbaguna untuk berbagai entitas.
- Menjamin semua class implementasi mematuhi aturan method secara konsisten.

---

## Latihan
1. Buat file `repository-interface.ts` dan `service-interface.ts` di folder `src/interfaces/` komputermu.
2. Pastikan tidak ada error sintaks saat file disimpan.
