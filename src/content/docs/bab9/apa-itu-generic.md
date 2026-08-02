---
title: "Apa itu Generic?"
description: Memahami konsep dasar Generic di TypeScript sebagai parameter tipe data.
---

# Apa itu Generic?

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan definisi Generic di TypeScript.
- Memahami konsep parameter tipe data `<T>`.
- Mengidentifikasi sintaksis dasar deklarasi Generic.

---

## Pendahuluan

Di pemrograman biasa, kita sering membuat fungsi yang menerima parameter nilai. Contohnya, fungsi `sapa(nama: string)` menerima parameter nilai berupa string. 

Di dalam TypeScript, selain mengirimkan parameter **nilai**, kita juga bisa mengirimkan parameter **tipe data** ke dalam fungsi atau class. Parameter tipe data tersebut ditulis menggunakan tanda kurung sudut `<...>` (biasanya disimbolkan dengan huruf `T` untuk *Type*). Fitur inilah yang disebut **Generic**.

---

## Penjelasan Materi: Mengenal Generic

**Generic** adalah fitur di TypeScript yang memungkinkan kita mendefinisikan fungsi, interface, type, atau class dengan **parameter tipe** sehingga tipe data tersebut baru ditentukan ketika komponen tersebut benar-benar dipanggil atau digunakan.

Sintaks dasar parameter tipe:
```ts
<T>
```
Huruf `T` hanyalah sebuah nama variabel tipe. Kamu bebas menggantinya dengan kata lain seperti `<TipeData>` atau `<U>`, namun industri software menyepakati penggunaan huruf `T` sebagai standar singkatan dari *Type*.

Saat kita memanggil fungsi generic:
- Kita mengirimkan tipe data di dalam tanda kurung sudut: `<string>` atau `<number>`.
- TypeScript otomatis mengganti seluruh simbol `T` pada fungsi tersebut dengan tipe data yang kita kirimkan.

---

## Analogi Kehidupan Sehari-hari: Cetakan Botol Minum (Wadah)

Bayangkan pabrik botol plastik yang memproduksi **botol kosong serbaguna**:

```text
Cetak Botol (Generic <T>)
  ├── Diisi Air Mineral  ──► Menjadi Botol Air (Tipe: Air)
  ├── Diisi Sirup Merah  ──► Menjadi Botol Sirup (Tipe: Sirup)
  └── Diisi Madu Hutan   ──► Menjadi Botol Madu (Tipe: Madu)
```

Mesin cetak botol tidak dirancang hanya untuk air mineral atau hanya untuk sirup. Desain botolnya sama (serbaguna), namun jenis cairan di dalamnya (tipe data) baru ditentukan saat botol tersebut diisi oleh pembeli. Begitu diisi madu, botol tersebut terkunci fungsinya sebagai tempat madu.

---

## Visual Illustration: Alur Penggantian Tipe data T

```text
Fungsi: identity<T>(value: T): T

identity<string>("Halo")
         │
         ▼ Tipe string menggantikan T
identity(value: string): string ──► Mengembalikan "Halo"

identity<number>(100)
         │
         ▼ Tipe number menggantikan T
identity(value: number): number ──► Mengembalikan 100
```

---

## Mari Mencoba: Objek Wadah Generic Sederhana

Mari buat kode program sederhana untuk melihat bagaimana sebuah interface menggunakan Generic agar bisa membungkus data tipe apa saja.

Buat file bernama `src/bab9/apa-itu-generic.ts`:

```ts
// Mendefinisikan interface Generic dengan parameter tipe <T>
interface Wadah<T> {
  isi: T;
  label: string;
}

// 1. Membuat wadah khusus berisi string
const wadahBuku: Wadah<string> = {
  isi: "Kamus Bahasa Inggris Kelas XI",
  label: "Rak Buku Perpustakaan"
};

// 2. Membuat wadah khusus berisi number
const wadahSkor: Wadah<number> = {
  isi: 95,
  label: "Skor Ujian Praktik RPL"
};

console.log(`[Wadah Buku]: ${wadahBuku.isi} (${wadahBuku.label})`);
console.log(`[Wadah Skor]: ${wadahSkor.isi} (${wadahSkor.label})`);

// Coba lakukan ini (Error!)
// wadahSkor.isi = "Sembilan Puluh"; 
// Error: Type 'string' is not assignable to type 'number'.
```

Jalankan menggunakan perintah:
```text
tsx src/bab9/apa-itu-generic.ts
```

## Output
```text
[Wadah Buku]: Kamus Bahasa Inggris Kelas XI (Rak Buku Perpustakaan)
[Wadah Skor]: 95 (Skor Ujian Praktik RPL)
```

---

## Penjelasan Baris per Baris

- `interface Wadah<T>` — Membuat rancangan interface dengan satu parameter tipe bebas bernama `T`. Properti `isi` memiliki tipe `T`.
- `const wadahBuku: Wadah<string>` — Menentukan bahwa pada objek `wadahBuku`, parameter `T` diganti dengan tipe `string`. Akibatnya, properti `isi` wajib diisi string.
- `const wadahSkor: Wadah<number>` — Menentukan bahwa parameter `T` diganti dengan tipe `number`. Properti `isi` wajib berupa number.
- TypeScript langsung mendeteksi jika ada kesalahan tipe, misalnya jika kita mencoba mengisi `wadahSkor.isi` dengan teks string.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengabaikan parameter tipe saat tipe data tidak bisa ditebak
```ts
const wadahAneh: Wadah = { isi: "Halo", label: "Aneh" }; // Error di TypeScript!
// Generic type 'Wadah<T>' requires 1 type argument(s).
```

**Perbaikan:** Selalu cantumkan parameter tipe di dalam tanda kurung sudut `<...>` saat membuat objek dari interface atau class yang bertipe Generic.

---

## Tips
:::tip[Gunakan Nama Parameter Tipe yang Jelas]
Meskipun huruf `T` adalah standar, jika sebuah komponen menggunakan lebih dari satu tipe Generic, berikan nama yang lebih jelas seperti `<TKey, TValue>` untuk memudahkan pemahaman kode.
:::

---

## Latihan
1. Buat interface Generic bernama `Kotak<T>` dengan properti `namaKotak: string` dan `barang: T`.
2. Buat objek `kotakMainan` bertipe `Kotak<string>` dan objek `kotakUang` bertipe `Kotak<number>`.
3. Tampilkan isi propertinya ke terminal.

---

## Ringkasan
- Generic menggunakan parameter tipe data `<T>` agar kode fleksibel namun aman.
- Tipe data sebenarnya baru ditentukan saat komponen (fungsi/interface) digunakan.
- TypeScript memvalidasi tipe data yang dikirim secara ketat untuk mencegah bug salah tipe data.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mengapa Generic** untuk melihat mengapa data dinamis tanpa generic sangat berbahaya di TypeScript.
:::
