---
title: "Generic Interface"
description: Membuat interface serbaguna menggunakan parameter tipe data Generic di TypeScript.
---

# Generic Interface

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Membuat `interface` bertipe Generic.
- Mengimplementasikan Generic Interface pada objek nyata.
- Menjelaskan keuntungan fleksibilitas dari Generic Interface.

---

## Pendahuluan

Di BAB 7 kita belajar bahwa interface menetapkan kontrak bentuk objek yang kaku. Namun, bagaimana jika salah satu properti di dalam objek tersebut harus bisa menampung tipe data yang berbeda-beda tergantung kebutuhan objek tersebut? 

Kita menggunakan **Generic Interface** untuk merancang struktur data pembungkus yang serbaguna.

---

## Penjelasan Materi: Menulis Generic Interface

Sintaks penulisan Generic Interface menggunakan tanda kurung sudut `<T>` setelah nama interface:

```ts
interface NamaInterface<T> {
  id: string;
  data: T; // tipe data akan ditentukan kemudian
}
```

Saat membuat objek dari interface ini, kita wajib menentukan tipe data `T` tersebut:

```ts
const objek: NamaInterface<number> = {
  id: "01",
  data: 100 // wajib number
}
```

---

## Analogi Kehidupan Sehari-hari: Map Laporan Hasil Belajar (Rapor)

Bayangkan selembar **Map Laporan Hasil Belajar**:

```text
Map Laporan (Generic Interface <T>)
  ├── Nama Siswa (wajib string)
  ├── Kelas      (wajib string)
  └── Hasil Ujian (Tipe data T)
```

Isi dari "Hasil Ujian" bisa berbeda-beda formatnya untuk tiap kelas:
- Kelas Teori: Hasil ujian berupa **angka** (seperti `90`, `85` - `Wadah<number>`).
- Kelas Praktik / Sikap: Hasil ujian berupa **huruf predikat** (seperti `"A"`, `"B"` - `Wadah<string>`).
- Kelas Proyek: Hasil ujian berupa **objek laporan lengkap** (seperti `{ judul: "Web Koperasi", skor: 95 }`).

Format map luarnya sama, tetapi isi format nilainya (tipe data) disesuaikan dengan jenis pelajaran.

---

## Visual Illustration: Generic Interface

```text
Interface Response<T> { status: number, data: T }

Response<Siswa>  ──► { status: 200, data: ObjekSiswa }
Response<Buku>   ──► { status: 200, data: ObjekBuku }
```

---

## Mari Mencoba: Interface Respon API Sekolah

Mari kita buat program simulasi penerimaan data dari server sekolah menggunakan Generic Interface.

Buat file bernama `src/bab9/generic-interface.ts`:

```ts
type Siswa = {
  nama: string;
  kelas: string;
};

type Guru = {
  nama: string;
  nip: number;
};

// 1. Mendefinisikan Generic Interface untuk Respon Server
interface ResponAPI<T> {
  status: string;
  code: number;
  data: T; // Tipe data dinamis sesuai kebutuhan
}

// 2. Respon berisi data objek Siswa
const responSiswa: ResponAPI<Siswa> = {
  status: "success",
  code: 200,
  data: {
    nama: "Putra Ramadhan",
    kelas: "XI RPL 1"
  }
};

// 3. Respon berisi data objek Guru
const responGuru: ResponAPI<Guru> = {
  status: "success",
  code: 200,
  data: {
    nama: "Pak Budi Santoso",
    nip: 19870615
  }
};

console.log("=== API SISWA ===");
console.log(`Status: ${responSiswa.status} | Nama: ${responSiswa.data.nama}`);

console.log("\n=== API GURU ===");
console.log(`Status: ${responGuru.status}   | NIP : ${responGuru.data.nip}`);
```

Jalankan dengan perintah:
```text
tsx src/bab9/generic-interface.ts
```

## Output
```text
=== API SISWA ===
Status: success | Nama: Putra Ramadhan

=== API GURU ===
Status: success   | NIP : 19870615
```

---

## Penjelasan Baris per Baris

- `interface ResponAPI<T>` — Membuat rancangan respon server serbaguna. Properti `data` bertipe `T`.
- `responSiswa: ResponAPI<Siswa>` — Mengisi properti `data` dengan objek bertipe `Siswa`. TypeScript otomatis memvalidasi properti di dalamnya agar memiliki `nama` dan `kelas`.
- `responGuru: ResponAPI<Guru>` — Mengisi properti `data` dengan objek bertipe `Guru` yang memiliki properti `nama` dan `nip`.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengirim tipe data data yang tidak cocok dengan cetak biru parameter
```ts
const responError: ResponAPI<Siswa> = {
  status: "success",
  code: 200,
  data: {
    nama: "Putra",
    nip: 12345 // Error! Property 'kelas' is missing, 'nip' does not exist in type 'Siswa'.
  }
};
```

---

## Latihan
1. Buat Generic Interface bernama `DaftarPilihan<T>` dengan properti `judulMenu: string` dan `pilihan: T[]` (array bertipe T).
2. Buat objek `menuString` berisi pilihan hari `["Senin", "Selasa"]` dan `menuNumber` berisi pilihan jam `[8, 10, 13]`. Tampilkan hasilnya.

---

## Ringkasan
- Generic Interface mempermudah pembuatan cetak biru objek dengan properti yang tipe datanya dinamis.
- Ditulis dengan pola `interface Nama<T> { ... }`.
- Sangat berguna untuk memodelkan respon API, data repository, atau pembungkus status data.

:::tip[Langkah Selanjutnya]
Lanjut ke **Generic Type** untuk mempelajari pembuatan tipe alias kustom bertipe Generic.
:::
