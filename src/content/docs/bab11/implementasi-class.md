---
title: "Implementasi Class OOP — BAB 11"
description: Membangun class Manusia, SiswaClass, dan GuruClass lengkap dengan pilar-pilar OOP di TypeScript.
---

# Implementasi Class OOP

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Membuat abstract class `Manusia` di folder `models/`.
- Membuat class `SiswaClass` dan `GuruClass` yang meng-extends `Manusia`.
- Menerapkan pilar Enkapsulasi (properti private & getter-setter) pada objek siswa.

---

## Pendahuluan
Sekarang kita akan membuat wujud nyata dari model data kita menggunakan paradigma OOP (BAB 8). Kita akan membuat abstract class induk `Manusia`, lalu mewariskannya ke class `SiswaClass` dan `GuruClass` agar logika data terenkapsulasi secara aman.

---

## Penjelasan
Kita akan membagi class ini menjadi tiga file terpisah di dalam folder `src/models/` agar modular:
- `manusia-class.ts`: Abstract class induk penampung properti dasar `nama` dan `umur`.
- `siswa-class.ts`: Class representasi siswa, mewarisi `Manusia`, memiliki properti `nilaiRataRata` private terproteksi.
- `guru-class.ts`: Class representasi guru, mewarisi `Manusia`, memiliki properti `nip` dan `mataPelajaran`.

---

## Analogi Kehidupan Sehari-hari: Loker Digital dengan Chip Pengaman
Membuat class ber-enkapsulasi seperti **mendesain sistem pengaman loker digital**:

- Properti `id` disolder mati sehingga tidak bisa diganti-ganti setelah dirakit (`readonly`).
- Kolom pengisi nilai ditutup casing logam tebal (`private`). Untuk mengisinya, sistem dipasangi chip pemeriksa tegangan listrik (`set nilaiRataRata`) agar tegangan di bawah 0 atau di atas 100 volt ditolak otomatis sebelum masuk baterai.

---

## Visual Illustration: Bagan Pewarisan Class

```text
    Abstract: Manusia { nama, umur }
                 │
         ┌───────┴───────┐
         ▼ extends       ▼ extends
       SiswaClass      GuruClass
     { nis, nilai }  { nip, mapel }
```

---

## Live Coding: Implementasi Class OOP

### Langkah 1: Buat `src/models/manusia-class.ts`
```ts
// Abstract class induk
export abstract class Manusia {
  constructor(
    public nama: string,
    public umur: number
  ) {}

  abstract dapatkanInfoPeran(): string;
}
```

### Langkah 2: Buat `src/models/siswa-class.ts`
```ts
import { Manusia } from "./manusia-class";
import { NIS } from "./siswa-model";

export class SiswaClass extends Manusia {
  readonly id: number; // properti readonly
  private _nilaiRataRata: number = 0; // properti private

  constructor(
    id: number,
    nama: string,
    umur: number,
    public nis: NIS,
    public kelas: string
  ) {
    super(nama, umur); // panggil constructor induk
    this.id = id;
  }

  // Getter
  get nilaiRataRata(): number {
    return this._nilaiRataRata;
  }

  // Setter dengan filter
  set nilaiRataRata(nilaiBaru: number) {
    if (nilaiBaru >= 0 && nilaiBaru <= 100) {
      this._nilaiRataRata = nilaiBaru;
    } else {
      console.log(`  [Validasi]: Nilai ${nilaiBaru} tidak valid untuk ${this.nama}!`);
    }
  }

  dapatkanInfoPeran(): string {
    return `Siswa Kelas ${this.kelas}`;
  }
}
```

### Langkah 3: Buat `src/models/guru-class.ts`
```ts
import { Manusia } from "./manusia-class";
import { StatusHadir } from "./guru-model";

export class GuruClass extends Manusia {
  readonly id: number;

  constructor(
    id: number,
    nama: string,
    umur: number,
    public nip: number,
    public mataPelajaran: string,
    public status: StatusHadir = StatusHadir.Hadir
  ) {
    super(nama, umur);
    this.id = id;
  }

  dapatkanInfoPeran(): string {
    return `Guru ${this.mataPelajaran}`;
  }
}
```

### Langkah 4: Perbarui Gerbang `src/models/index.ts`
```ts
export * from "./guru-model";
export * from "./siswa-model";
export * from "./manusia-class";
export * from "./siswa-class";
export * from "./guru-class";
```

---

## Output
Jika kamu melakukan instansiasi objek `new SiswaClass(...)`, objek tersebut otomatis mewarisi properti `nama` dan `umur` dari `Manusia`, serta terlindung properti `_nilaiRataRata`-nya.

---

## Penjelasan Baris per Baris
- `super(nama, umur);`: Memanggil constructor class induk `Manusia` di baris pertama constructor anak (BAB 8).
- `get nilaiRataRata()` & `set nilaiRataRata(...)`: Method getter & setter modern (BAB 8) untuk mengontrol alur pembacaan dan penulisan data private.
- `export * from "./siswa-class";`: Mengekspor kembali class agar terpusat di modul index (BAB 10).

---

## Common Mistakes
- **Lupa memanggil super() di baris pertama**: Menuliskan `this.id = id;` sebelum memanggil `super()`. TypeScript mewajibkan `super()` dijalankan pertama kali sebelum kita mengakses keyword `this`.

---

## Tips
:::tip[Gunakan Private Underscore]
Gunakan awalan garis bawah (underscore) pada nama variabel private (seperti `_nilaiRataRata`) jika kamu ingin membuat nama getter/setter yang sama tanpa bentrok nama properti.
:::

---

## Ringkasan
- Class OOP dideklarasikan di folder `src/models/`.
- `Manusia` bertindak sebagai abstract class induk.
- Enkapsulasi diimplementasikan menggunakan properti `private` dan `getter-setter`.
- Semua class di-reexport lewat `models/index.ts`.

---

## Latihan
1. Buat berkas-berkas class di atas di folder `src/models/` komputermu.
2. Pastikan file `index.ts` diperbarui dan tidak ada error merah di editor VS Code.
