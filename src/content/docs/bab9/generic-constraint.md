---
title: "Generic Constraint"
description: Menggunakan kata kunci extends untuk membatasi tipe data pada Generic di TypeScript.
---

# Generic Constraint (Batasan Generic)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dari Generic Constraint.
- Menggunakan kata kunci `extends` untuk membatasi parameter tipe Generic.
- Mengakses properti objek di dalam fungsi Generic secara aman menggunakan constraint.

---

## Pendahuluan

Secara default, parameter tipe `<T>` di Generic bisa diisi dengan **tipe apa saja**: string, number, array, objek kosong, dll.

Namun, bagaimana jika kita ingin membuat fungsi Generic untuk mencetak nama siswa, tetapi kita ingin memastikan tipe data yang dimasukkan **wajib** memiliki properti `nama`? Jika kita membiarkan `T` bebas, kita tidak bisa mengakses `value.nama` karena belum tentu objek tersebut memilikinya. Kita butuh membatasi `T` menggunakan **Generic Constraint**.

---

## Penjelasan Materi: Kata Kunci `extends`

Untuk memberikan batasan pada Generic, kita menggunakan kata kunci **`extends`** di dalam parameter tipe. Ini memberitahu TypeScript: *"Tipe T boleh apa saja, asalkan memiliki properti minimum yang diwajibkan."*

Sintaks dasar:

```ts
interface MemilikiNama {
  nama: string;
}

function sapa<T extends MemilikiNama>(objek: T): void {
  console.log(`Halo, ${objek.nama}`); // ✓ Aman diakses!
}
```

Tipe `T` wajib memiliki properti `nama` bertipe string. Objek boleh memiliki properti tambahan lain (seperti `umur` atau `nis`), tetapi properti `nama` adalah syarat mutlak.

---

## Analogi Kehidupan Sehari-hari: Pintu Detektor Ukuran Koper

Bayangkan sebuah **gerbang pemeriksaan bagasi pesawat**:

```text
Gerbang Bagasi (Generic Constraint <T extends KoperBatas>)
  ├── Koper Standard (T)  ──► Lolos pemeriksaan gerbang ✓
  ├── Tas Ransel Kecil (T) ──► Lolos pemeriksaan gerbang ✓
  └── Kardus Raksasa (T)   ──► Ditolak (Melewati batas ukuran koper) ✗
```

Gerbang tersebut bisa menerima berbagai macam bentuk tas (fleksibel/generic), namun ia memberikan batasan tegas (constraint): ukuran tas tidak boleh melebihi batas yang ditentukan. Jika melanggar, tas ditolak masuk pesawat.

---

## Visual Illustration: Alur Constraint

```text
T extends { nama: string }

Input: { nama: "Putra", kelas: "XI" } ──► Memiliki properti nama? YA ──► Lolos ✓
Input: { umur: 17 }                   ──► Memiliki properti nama? TIDAK ──► DITOLAK ✗
```

---

## Mari Mencoba: Fungsi Cetak Identitas Ber-Constraint

Mari buat program fungsi Generic yang mencetak panjang data dari objek yang dikirim. Objek wajib memiliki properti `length`.

Buat file bernama `src/bab9/generic-constraint.ts`:

```ts
// 1. Membuat interface syarat minimum
interface MemilikiLength {
  length: number;
}

// 2. Membuat fungsi Generic dengan batasan (Constraint)
function cetakPanjang<T extends MemilikiLength>(item: T): void {
  console.log(`Panjang objek: ${item.length}`);
}

// Uji coba
cetakPanjang("TypeScript"); // ✓ String memiliki properti .length bawaan
cetakPanjang([1, 2, 3]);    // ✓ Array memiliki properti .length bawaan
cetakPanjang({ length: 10, nama: "Putra" }); // ✓ Objek kustom memiliki properti .length

// Coba lakukan ini (Error!)
// cetakPanjang(12345); // ✗ Error! number tidak memiliki properti .length
// Argument of type 'number' is not assignable to parameter of type 'MemilikiLength'.
```

Jalankan dengan perintah:
```text
tsx src/bab9/generic-constraint.ts
```

## Output
```text
Panjang objek: 10
Panjang objek: 3
Panjang objek: 10
```

---

## Penjelasan Baris per Baris

- `<T extends MemilikiLength>` — Membatasi tipe `T` agar harus memiliki properti `length: number`.
- `cetakPanjang("TypeScript")` — Lolos karena tipe data string memiliki properti `.length` secara bawaan untuk menghitung jumlah huruf.
- `cetakPanjang(12345)` — Ditolak oleh TypeScript saat kompilasi karena angka biasa tidak memiliki properti `.length`.

---

## Latihan
1. Buat interface `SiswaMinimal` yang memiliki properti `nama: string`.
2. Buat fungsi Generic `tampilkanNamaSiswa<T extends SiswaMinimal>(siswa: T): void` yang mencetak nama siswa tersebut.
3. Panggil fungsi dengan objek siswa valid dan amati outputnya.

---

## Ringkasan
- Generic Constraint membatasi tipe data apa saja yang diizinkan untuk parameter tipe Generic.
- Menggunakan kata kunci `extends` diikuti interface atau tipe syarat minimum.
- Memungkinkan akses properti secara aman di dalam tubuh fungsi/class Generic.

:::tip[Langkah Selanjutnya]
Lanjut ke **keyof** untuk mempelajari operator pencari kunci properti objek.
:::
