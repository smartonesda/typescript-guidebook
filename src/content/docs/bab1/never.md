---
title: "Tipe Data: never"
description: Mengenal never — tipe TypeScript untuk fungsi yang tidak pernah selesai secara normal.
---

# Tipe Data: `never`

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan makna tipe `never`
- Membedakan `never` dan `void`
- Mengenali fungsi yang menghasilkan `never`
- Memahami kapan tipe ini berguna

---

## Pendahuluan

Tipe `never` terdengar aneh pada awalnya. Bagaimana mungkin sebuah tipe berarti "tidak pernah"?

`never` dipakai saat TypeScript tahu bahwa sebuah fungsi **tidak akan pernah selesai secara normal** dan tidak akan menghasilkan nilai. Contoh paling umum: fungsi yang selalu melempar error, atau perulangan tanpa akhir.

---

## Analogi: Jalan yang Tidak Pernah Sampai Tujuan

Bayangkan kamu berjalan di jalan melingkar tanpa pintu keluar. Kamu terus berjalan dan tidak pernah sampai di tujuan akhir.

```
Mulai → jalan → jalan → jalan → jalan → ...
                         tidak pernah selesai
```

Fungsi bertipe `never` seperti jalan itu. Program masuk ke fungsi, tetapi fungsi tidak pernah mengembalikan hasil normal.

---

## Penjelasan Materi

Contoh fungsi yang selalu melempar error:

```ts
function hentikanProgram(pesan: string): never {
  throw new Error(pesan)
}
```

Fungsi tersebut selalu berhenti dengan error. Karena tidak ada `return` yang normal, tipe hasilnya adalah `never`.

Contoh perulangan tak berakhir:

```ts
function jalankanSelamanya(): never {
  while (true) {
    console.log("Program masih berjalan")
  }
}
```

Fungsi ini juga tidak pernah selesai, sehingga `never` tepat digunakan.

:::caution[Jangan Jalankan Loop Tanpa Akhir]
Contoh `while (true)` di atas hanya untuk memahami konsep. Jangan jalankan di terminal sekarang karena program akan terus berjalan sampai kamu menghentikannya dengan `Ctrl + C`.
:::

---

## `never` vs `void`

Keduanya sama-sama tidak menghasilkan nilai yang bisa disimpan, tetapi maknanya berbeda:

| Tipe | Arti |
|------|------|
| `void` | Fungsi selesai normal, tetapi tidak mengembalikan nilai |
| `never` | Fungsi tidak pernah selesai normal |

```ts
function tampilkanPesan(): void {
  console.log("Halo")
  // Fungsi selesai di sini
}

function buatError(): never {
  throw new Error("Terjadi masalah")
  // Fungsi tidak pernah sampai ke akhir normal
}
```

---

## Mari Mencoba

Buat file `src/bab1/never.ts`:

```ts
function tampilkanPeringatan(pesan: string): void {
  console.log(`PERINGATAN: ${pesan}`)
}

function hentikanDenganError(pesan: string): never {
  throw new Error(pesan)
}

tampilkanPeringatan("Simpan pekerjaanmu sebelum menutup VS Code")
console.log("Program masih berjalan setelah fungsi void")

try {
  hentikanDenganError("Data siswa tidak ditemukan")
} catch (error) {
  console.log("Error berhasil ditangani")
}

console.log("Program selesai")
```

Jalankan:

```
tsx src/bab1/never.ts
```

Output:

```text
PERINGATAN: Simpan pekerjaanmu sebelum menutup VS Code
Program masih berjalan setelah fungsi void
Error berhasil ditangani
Program selesai
```

---

## Penjelasan Baris per Baris

```ts
function hentikanDenganError(pesan: string): never {
```

- `pesan: string` — fungsi menerima teks error
- `: never` — fungsi tidak akan selesai secara normal

```ts
throw new Error(pesan)
```

- `throw` — melempar error
- `new Error(pesan)` — membuat objek error dengan pesan yang diberikan
- Setelah `throw`, alur normal fungsi berhenti

```ts
try {
  hentikanDenganError("Data siswa tidak ditemukan")
} catch (error) {
  console.log("Error berhasil ditangani")
}
```

`try...catch` dipakai untuk menangkap error agar program tidak berhenti total. Kamu akan belajar penanganan error lebih dalam di bab lanjutan.

---

## Kapan `never` Dipakai?

Dalam latihan awal, kamu jarang perlu menulis `never` sendiri. Tipe ini lebih berguna ketika:

- Membuat fungsi helper yang selalu melempar error
- Memastikan semua kondisi sudah ditangani
- Menulis library atau aplikasi besar
- Membuat perulangan yang memang sengaja tidak berhenti

TypeScript kadang menyimpulkan `never` secara otomatis, sehingga kamu tidak selalu perlu menuliskannya.

---

## Kesalahan Umum

### ❌ Menggunakan `never` untuk fungsi biasa

```ts
function sapa(): never {
  console.log("Halo")
}
// Error! Function with declared return type 'never' cannot have a reachable end point.
```

Fungsi `sapa()` selesai normal. Maka tipe yang tepat adalah `void`.

```ts
function sapa(): void {
  console.log("Halo")
}
```

### ❌ Menjalankan loop tak berakhir tanpa tahu cara berhenti

```ts
while (true) {
  console.log("Berjalan")
}
```

Jika terlanjur dijalankan di terminal, tekan `Ctrl + C` untuk menghentikannya.

---

## Tips

:::tip[Cukup Kenali Dulu]
`never` bukan tipe yang akan sering kamu pakai di project biodata siswa. Cukup pahami maknanya: fungsi bertipe `never` tidak akan menghasilkan nilai dan tidak selesai secara normal.
:::

---

## Latihan

Buat file `src/bab1/latihan-never.ts`:

1. Buat fungsi `laporkanError` yang menerima pesan string
2. Beri tipe return `never`
3. Gunakan `throw new Error(pesan)` di dalamnya
4. Panggil fungsi di dalam `try...catch`
5. Tampilkan pesan setelah `catch` untuk membuktikan error tertangani

---

## Ringkasan

- `never` berarti fungsi tidak pernah selesai secara normal
- Umum dipakai pada fungsi yang selalu `throw` error atau loop tanpa akhir
- `void` selesai normal tanpa mengembalikan nilai; `never` tidak selesai normal
- Jangan gunakan `never` untuk fungsi biasa
- Jika loop tak berakhir terlanjur jalan, hentikan dengan `Ctrl + C`

:::tip[Langkah Selanjutnya]
Lanjut ke **Type Inference** untuk melihat cara TypeScript menebak tipe data secara otomatis.
:::
