---
title: "Interface pada Function"
description: Menggunakan interface untuk memvalidasi tipe parameter dan hasil return value pada function.
---

# Interface pada Function

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan interface sebagai tipe parameter function dan mendefinisikan tipe bentuk function (*function type*) secara lengkap menggunakan interface.

---

## Pendahuluan

Interface tidak hanya bisa memvalidasi objek biasa. Ia juga bisa digunakan untuk **memvalidasi parameter function** dan bahkan **mendefinisikan tanda tangan function** (*call signature*) secara keseluruhan.

---

## Dua Cara Penerapan Interface pada Function

### Cara 1: Sebagai Tipe Parameter (Paling Sering)

Kita memberitahu function bahwa parameter yang diterimanya harus berupa objek yang mematuhi interface tertentu:

```ts
interface Siswa {
  nama: string;
}

function sapaSiswa(s: Siswa): void {
  console.log(`Halo, ${s.nama}`)
}
```

### Cara 2: Menetapkan Tipe Function Itu Sendiri

Interface juga bisa mendefinisikan bentuk dari suatu function (fungsi apa saja parameternya dan apa return valuenya):

```ts
interface FungsiHitung {
  (a: number, b: number): number;
}

const tambah: FungsiHitung = (x, y) => x + y
```

---

## Analogi Kehidupan Sehari-hari

### Aturan Mengirim Paket (Parameter Function)

Bayangkan kantor pos (function). Kantor pos memiliki aturan: "Setiap paket yang dikirim harus dibungkus kotak kardus standar pos (interface)."

```text
Kantor Pos (Function)
  └── Syarat: Bungkus kotak standar (Interface)

Paket A: dibungkus kotak standar ──► Diterima pos ✓
Paket B: dibungkus kertas tisu tipis ──► Ditolak pos ✗
```

Kantor pos tidak peduli apa isi paketnya, selama bungkus luarnya memenuhi standar keamanan kotak yang diwajibkan.

---

## Mari Mencoba

Buat `src/bab7/interface-function.ts`:

```ts
interface Siswa {
  nama: string;
  nilai: number;
}

// 1. Interface sebagai tipe parameter
function cetakKelulusan(s: Siswa): void {
  const status = s.nilai >= 75 ? "LULUS" : "REMEDIAL"
  console.log(`Siswa: ${s.nama.padEnd(8)} | Status: ${status}`)
}

// 2. Interface sebagai tipe function
interface OperasiMatematika {
  (x: number, y: number): number;
}

const kali: OperasiMatematika = (a, b) => a * b
const bagi: OperasiMatematika = (a, b) => a / b

// Uji coba
const putra: Siswa = { nama: "Putra", nilai: 82 }
const budi: Siswa = { nama: "Budi", nilai: 60 }

console.log("=== Status Kelulusan ===")
cetakKelulusan(putra)
cetakKelulusan(budi)

console.log("\n=== Operasi Matematika ===")
console.log(`10 kali 5: ${kali(10, 5)}`)
console.log(`10 bagi 5: ${bagi(10, 5)}`)
```

Jalankan:

```text
tsx src/bab7/interface-function.ts
```

## Output

```text
=== Status Kelulusan ===
Siswa: Putra    | Status: LULUS
Siswa: Budi     | Status: REMEDIAL

=== Operasi Matematika ===
10 kali 5: 50
10 bagi 5: 2
```

---

## Penjelasan Baris per Baris

- `cetakKelulusan(s: Siswa)` — parameter `s` wajib dikirimkan objek yang memiliki `nama` dan `nilai`.
- `interface OperasiMatematika { (x: number, y: number): number }` — mendefinisikan interface yang mencetak tanda tangan fungsi: menerima dua number dan mengembalikan number.
- `const kali: OperasiMatematika` — variabel `kali` diisi arrow function yang otomatis divalidasi strukturnya agar cocok dengan parameter `x` dan `y`.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengirim objek parameter yang tidak lengkap ke function

```ts
cetakKelulusan({ nama: "Citra" }) // Error!
// Property 'nilai' is missing in type '{ nama: string; }' but required in type 'Siswa'.
```

**Perbaikan:** Kirimkan objek lengkap dengan semua properti yang diminta oleh interface parameter.

---

## Latihan

1. Buat interface `Persegi` dengan properti `sisi` (number).
2. Buat fungsi `hitungLuas(p: Persegi)` yang mengembalikan nilai luas (sisi × sisi).
3. Panggil fungsi tersebut dengan objek persegi dan tampilkan hasilnya.

---

## Ringkasan

- Interface bisa digunakan sebagai tipe parameter function untuk mengamankan input.
- Interface bisa menentukan bentuk function (*function type*) menggunakan sintaks call signature: `(param: tipe): tipeReturn;`.
- Mencegah error salah kirim parameter di dalam aplikasi.

:::tip[Langkah Selanjutnya]
Lanjut ke **Extend Interface** untuk belajar pewarisan interface.
:::
