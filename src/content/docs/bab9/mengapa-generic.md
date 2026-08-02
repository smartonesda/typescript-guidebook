---
title: "Mengapa Generic?"
description: Memahami masalah duplikasi tipe data dan bahaya tipe any yang diselesaikan oleh Generic.
---

# Mengapa Generic?

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan masalah duplikasi kode akibat menulis fungsi terpisah untuk setiap tipe data.
- Menjelaskan bahaya keamanan tipe jika menggunakan tipe `any`.
- Menjelaskan bagaimana Generic memberikan solusi terbaik (fleksibel dan aman).

---

## Pendahuluan

Ketika kamu menulis kode program, kamu pasti ingin kodemu efisien. Jika kamu memiliki data string, data number, dan data objek, bagaimana cara menulis satu fungsi pembantu yang bisa memproses ketiganya tanpa membuat ulang fungsi tersebut tiga kali?

Ada dua pendekatan buruk sebelum kita mengenal Generic: **menduplikasi fungsi** atau **menggunakan tipe `any`**. Mari kita pelajari mengapa kedua cara tersebut tidak efisien.

---

## Masalah 1: Duplikasi Kode (Tidak Efisien)

Misalkan kita ingin membuat fungsi untuk mencetak elemen pertama dari sebuah array.

```ts
// Fungsi khusus untuk array string
function cetakPertamaString(arr: string[]): string {
  return arr[0];
}

// Fungsi khusus untuk array number
function cetakPertamaNumber(arr: number[]): number {
  return arr[0];
}
```

Jika nanti kita memiliki array boolean, array objek siswa, dan array lainnya, kita harus menyalin dan menulis ulang fungsi yang sama berkali-kali. Ini melanggar prinsip **DRY (Don't Repeat Yourself)**.

---

## Masalah 2: Bahaya Tipe `any` (Tidak Aman)

Untuk menghindari duplikasi, kamu mungkin berpikir untuk menggunakan tipe `any`:

```ts
function cetakPertamaAny(arr: any[]): any {
  return arr[0];
}

const hasil = cetakPertamaAny(["Andi", "Budi"]); // bertipe 'any'
console.log(hasil.toFixed(2)); // Tidak ada error di VS Code, tapi CRASH saat runtime!
```

Tipe `any` mematikan semua proteksi TypeScript. Komputer tidak tahu bahwa `hasil` sebenarnya adalah string, sehingga ia mengizinkan kita memanggil method `.toFixed(2)` (khusus number) yang akan merusak aplikasi saat dijalankan.

---

## Solusi: Keindahan Generic

Generic memberikan jalan tengah terbaik: **satu fungsi serbaguna** (seperti tipe `any`), tetapi **tetap aman 100%** (seperti tipe eksplisit).

```ts
function cetakPertama<T>(arr: T[]): T {
  return arr[0];
}

const hasilString = cetakPertama<string>(["Andi", "Budi"]); // dikunci bertipe string
// hasilString.toFixed(2); // Langsung error merah di VS Code! Aman ✓
```

---

## Analogi Kehidupan Sehari-hari: Blender Jus vs Stopkontak Serbaguna

### Pendekatan Duplikasi (Mesin Khusus)
Ini seperti kamu harus membeli **mesin pembuat jus khusus apel**, **mesin khusus mangga**, dan **mesin khusus jeruk**. Dapurmu akan penuh dengan mesin yang hampir sama fungsinya.

### Pendekatan `any` (Mesin Penghancur Sampah)
Ini seperti memasukkan buah ke dalam mesin penghancur sampah serbaguna. Buahnya hancur menjadi jus, tetapi karena mesin itu bisa dimasukkan apa saja, ada risiko batu atau plastik ikut hancur di dalamnya dan meracuni minumanmu.

### Pendekatan Generic (Blender dengan Kontainer Khusus)
Ini seperti **satu mesin blender serbaguna** yang dipasangkan kontainer khusus buah. Blender bisa menghancurkan buah apa saja, namun kontainer memastikan hanya bahan makanan sehat yang boleh masuk dan keluar.

---

## Visual Illustration: Mengapa Butuh Generic

```text
PENDEKATAN PROSEDURAL (DUPLIKASI)
[Fungsi String] ──► proses string saja
[Fungsi Number] ──► proses number saja (Banyak kode duplikat!)

PENDEKATAN ANY (BAHAYA)
[Fungsi Any] ──► terima apa saja ──► kembalikan any (Kehilangan proteksi tipe!)

PENDEKATAN GENERIC (MODERN & AMAN)
[Fungsi Generic <T>] ──► terima tipe data T ──► kembalikan tipe T (Satu fungsi, tipe aman!)
```

---

## Mari Mencoba

Mari kita bandingkan bahaya `any` dan keamanan Generic secara langsung.

Buat file bernama `src/bab9/mengapa-generic.ts`:

```ts
// 1. Menggunakan any (Bahaya)
function dapatkanElemenPertamaAny(arr: any[]): any {
  return arr[0];
}

const hasilAny = dapatkanElemenPertamaAny(["Putra", "Dewi"]);
console.log("[Any Output]:", hasilAny.trim()); // Oke karena string punya trim

const hasilAnyAngka = dapatkanElemenPertamaAny([10, 20]);
// console.log(hasilAnyAngka.trim()); // ✗ CRASH SAAT RUNTIME! trim() bukan untuk number. 
// Tapi VS Code diam saja karena tipenya 'any'.


// 2. Menggunakan Generic (Aman)
function dapatkanElemenPertamaGeneric<T>(arr: T[]): T {
  return arr[0];
}

const hasilGenericString = dapatkanElemenPertamaGeneric<string>(["Putra", "Dewi"]);
console.log("[Generic Output]:", hasilGenericString.trim()); // ✓ Valid

const hasilGenericNumber = dapatkanElemenPertamaGeneric<number>([10, 20]);
// console.log(hasilGenericNumber.trim()); 
// ✗ ERROR LANGSUNG DI VS CODE! 
// TypeScript tahu hasilGenericNumber adalah 'number', dan number tidak punya method 'trim'.
```

Jalankan dengan perintah:
```text
tsx src/bab9/mengapa-generic.ts
```

---

## Latihan
1. Tuliskan opini singkatmu di bagian komentar file latihan: mengapa menggunakan `any` dianggap sebagai kebiasaan buruk dalam pemrograman TypeScript?
2. Jalankan kembali program `mengapa-generic.ts` dan pastikan kamu memahami bagaimana error terdeteksi lebih awal pada versi Generic.

---

## Ringkasan
- Menduplikat fungsi untuk setiap tipe data melanggar prinsip DRY (Don't Repeat Yourself).
- Tipe `any` mematikan semua perlindungan tipe data TypeScript dan memicu crash saat runtime.
- Generic memberikan fleksibilitas tinggi dengan tetap mempertahankan keamanan tipe data (*type safety*).

:::tip[Langkah Selanjutnya]
Lanjut ke **Generic Function** untuk mempelajari cara menulis fungsi Generic yang lengkap.
:::
