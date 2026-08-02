---
title: "Ringkasan BAB 4"
description: Rangkuman lengkap BAB 4 — function cheat sheet, perbandingan jenis function, checklist, dan latihan penutup.
---

# Ringkasan BAB 4

## Selamat!

Kamu telah menyelesaikan **BAB 4: Function** — salah satu bab paling penting dalam seluruh guidebook ini. Function adalah alat yang akan kamu gunakan setiap hari sebagai programmer.

---

## Function Cheat Sheet

### Bentuk Dasar

```ts
function namaFunction(param: tipe): tipeReturn {
  return nilai
}
```

### Void (Tidak Mengembalikan Nilai)

```ts
function cetakSalam(nama: string): void {
  console.log(`Halo, ${nama}!`)
}
```

### Optional Parameter

```ts
function f(wajib: string, opsional?: string): void { }
```

### Default Parameter

```ts
function f(param: string, default1: string = "nilai"): void { }
```

### Rest Parameter

```ts
function f(...angka: number[]): number { }
```

### Anonymous Function

```ts
const fn = function(a: number): number {
  return a * 2
}
```

### Arrow Function

```ts
const fn = (a: number): number => a * 2
const fnMultiline = (a: number): number => {
  return a * 2
}
```

---

## Parameter vs Argument

| | Parameter | Argument |
|---|---|---|
| Definisi | Variabel di definisi function | Nilai nyata saat memanggil |
| Letak | Di dalam `()` saat `function` | Di dalam `()` saat pemanggilan |
| Contoh | `function f(nama: string)` | `f("Andi")` |

---

## Perbandingan Gaya Function

| Gaya | Sintaks | Kapan Dipakai |
|---|---|---|
| Named | `function nama() {}` | Function utama yang dipanggil berulang |
| Anonymous | `const fn = function() {}` | Disimpan ke variabel, sekali pakai |
| Arrow | `const fn = () => {}` | Ringkas, callback, operasi sederhana |

---

## Return Value

- `return nilai` — mengembalikan nilai dan menghentikan function.
- `: void` — tidak ada return value.
- Setiap jalur kode non-void wajib ada `return`.
- Bisa ada banyak `return` (early return) di dalam percabangan.

---

## Checklist BAB 4

- [ ] Bisa membuat function dengan `function`
- [ ] Memahami perbedaan parameter dan argument
- [ ] Bisa membuat function dengan return value
- [ ] Bisa membuat function dengan beberapa parameter
- [ ] Bisa membuat optional parameter dengan `?`
- [ ] Bisa membuat default parameter dengan `=`
- [ ] Bisa membuat rest parameter dengan `...`
- [ ] Bisa membuat anonymous function
- [ ] Bisa membuat arrow function dalam berbagai bentuk
- [ ] Memahami konsep callback
- [ ] Memahami local scope vs global scope
- [ ] Menyelesaikan studi kasus sistem nilai
- [ ] Menyelesaikan mini project kalkulator
- [ ] Sudah mencoba 10 challenge

---

## Hal Penting yang Harus Diingat

```text
1. Mendefinisikan ≠ Memanggil — function harus dipanggil!
2. Tipe wajib cocok — TypeScript menjaga ini
3. Variabel lokal tidak bisa keluar function — gunakan return
4. Optional dan default parameter harus di belakang
5. Arrow function: { return x } = x (implicit return)
```

---

## Menghubungkan BAB 1–4

```text
BAB 1: let nama = "Putra"          → variabel menyimpan data
BAB 2: if (nilai >= 75) { ... }    → kondisi membuat keputusan
BAB 3: for (const n of arr) { ... }→ loop memproses banyak data
BAB 4: function hitung(a, b) { }   → function menyimpan logika
```

Bersama-sama, empat konsep ini adalah fondasi dari hampir semua program yang pernah dibuat.

---

## Latihan Penutup

Tanpa melihat contoh, buat `src/bab4/review-bab4.ts`:

1. Buat function `hitungDiskon(harga, persen = 10)`.
2. Buat function `formatHarga(nominal)` yang mengembalikan `"Rp[nominal]"`.
3. Buat array empat produk dengan nama dan harga.
4. Gunakan loop + function untuk menampilkan harga asli dan harga diskon setiap produk.
5. Hitung dan tampilkan total harga setelah diskon.

---

## Pesan untuk Kamu

Function adalah cara berpikir, bukan sekadar sintaks. Setiap kali kamu menemukan kode yang berulang atau logika yang bisa dinamai dengan jelas — buat menjadi function.

Programmer terbaik bukan yang menulis kode paling banyak. Programmer terbaik adalah yang menulis kode paling **sedikit** dan paling **jelas** — dengan function.

:::tip[Selesai BAB 4]
Pastikan semua checklist terpenuhi sebelum melanjutkan ke BAB berikutnya bersama guru.
:::
