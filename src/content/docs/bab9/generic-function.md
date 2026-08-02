---
title: "Generic Function"
description: Panduan lengkap membuat dan memanggil fungsi Generic di TypeScript dengan type inference otomatis.
---

# Generic Function

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menulis fungsi Generic menggunakan tanda kurung sudut `<T>`.
- Memanggil fungsi Generic dengan mendefinisikan tipe data secara eksplisit.
- Memanfaatkan Type Inference pada fungsi Generic agar kode lebih ringkas.

---

## Pendahuluan

Fungsi Generic adalah bentuk penerapan Generic yang paling sering kita gunakan sehari-hari. Dengan membuat fungsi Generic, kita bisa menulis satu fungsi manipulasi data (seperti membalik array, mencari elemen, atau memformat data) yang bisa dipakai untuk seluruh tipe data di aplikasi kita.

---

## Penjelasan Materi: Sintaks Fungsi Generic

Untuk membuat fungsi Generic, kita letakkan parameter tipe `<T>` tepat sebelum tanda kurung parameter fungsi `()`:

```ts
function namaFungsi<T>(parameter: T): T {
  return parameter;
}
```

Kita juga bisa menggunakan arrow function (fungsi panah) dengan sintaks berikut:

```ts
const namaFungsi = <T>(parameter: T): T => {
  return parameter;
}
```

---

## Analogi Kehidupan Sehari-hari: Mesin Stempel Label Nama

Bayangkan **mesin stempel label nama otomatis**:

```text
Bahan Masuk (Parameter Tipe <T>)
  ├── Kertas Stiker ──► Mesin mencetak ──► Keluar Stiker Nama
  ├── Pita Kain     ──► Mesin mencetak ──► Keluar Pita Nama
  └── Plat Besi     ──► Mesin mencetak ──► Keluar Plat Nama
```

Mesin stempelnya sama (satu mesin), namun bahan dasarnya bisa diganti-ganti. Hasil akhir yang keluar dari mesin stempel selalu memiliki jenis bahan yang sama dengan bahan yang dimasukkan ke dalam mesin.

---

## Visual Illustration: Alur Pengiriman Tipe pada Fungsi

```text
IDENTITY FUNCTION
   Identity<T>(value: T): T

Identity<string>("Budi") ──► identity(value: string): string ──► return "Budi"

Identity<number>(90)     ──► identity(value: number): number ──► return 90
```

---

## Mari Mencoba: Fungsi Pembalik Array Generic

Mari buat fungsi Generic yang bertugas menukar/membalik isi sebuah array tipe apa saja secara fleksibel.

Buat file bernama `src/bab9/generic-function.ts`:

```ts
// 1. Deklarasi Fungsi Generic
function balikArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

// 2. Pemanggilan Eksplisit (Menuliskan tipe data secara jelas)
const namaSiswa = ["Andi", "Budi", "Citra"];
const namaDibalik = balikArray<string>(namaSiswa);
console.log("Siswa dibalik:", namaDibalik);

const daftarNilai = [80, 85, 90];
const nilaiDibalik = balikArray<number>(daftarNilai);
console.log("Nilai dibalik:", nilaiDibalik);

// 3. Pemanggilan Implisit (TypeScript menebak otomatis / Type Inference)
const statusKehadiran = [true, false, true];
const statusDibalik = balikArray(statusKehadiran); // TypeScript tahu ini boolean[]
console.log("Status dibalik:", statusDibalik);
```

Jalankan dengan perintah:
```text
tsx src/bab9/generic-function.ts
```

## Output
```text
Siswa dibalik: [ 'Citra', 'Budi', 'Andi' ]
Nilai dibalik: [ 90, 85, 80 ]
Status dibalik: [ true, false, true ]
```

---

## Penjelasan Baris per Baris

- `function balikArray<T>(arr: T[]): T[]` — Mendeklarasikan fungsi `balikArray` yang menerima array bertipe `T[]` dan mengembalikan array baru bertipe `T[]` juga.
- `balikArray<string>(namaSiswa)` — Kita secara eksplisit mengirimkan tipe data `<string>`. TypeScript memastikan hanya array string yang boleh dimasukkan dan hasil keluarannya pasti berupa array string.
- `balikArray(statusKehadiran)` — Kita tidak menulis `<boolean>`. Namun karena array yang dimasukkan berisi boolean, TypeScript secara cerdas melakukan **Type Inference** (menebak otomatis) bahwa `T` pada putaran ini bernilai `boolean`.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengira tipe data T bisa digunakan untuk operasi matematika langsung
```ts
function kuadrat<T>(nilai: T): T {
  // return nilai * nilai; // Error di TypeScript!
  // Operator '*' cannot be applied to types 'T' and 'T'.
}
```

**Mengapa terjadi?** Karena `T` bisa berupa apa saja (termasuk string atau boolean yang tidak bisa dikalikan). TypeScript melarang operasi matematika langsung pada tipe `T` bebas. Untuk mengizinkannya, kita butuh **Generic Constraints** (akan dibahas di halaman berikutnya).

---

## Latihan
1. Buat fungsi Generic bernama `ambilTerakhir<T>(arr: T[]): T` yang mengembalikan elemen paling terakhir dari sebuah array.
2. Panggil fungsi tersebut dengan array berisi objek siswa dan array berisi angka, lalu tampilkan hasilnya.

---

## Ringkasan
- Fungsi Generic dideklarasikan menggunakan `<T>` sebelum kurung parameter `()`.
- Pemanggilan bisa secara eksplisit (`fungsi<string>(...)`) atau implisit via tebakan TypeScript (*Type Inference*).
- Menjaga tipe data input dan output tetap konsisten dan aman.

:::tip[Langkah Selanjutnya]
Lanjut ke **Generic Interface** untuk menerapkan parameter tipe pada kontrak objek.
:::
