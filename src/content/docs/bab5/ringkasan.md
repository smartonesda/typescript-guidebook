---
title: "Ringkasan BAB 5"
description: Rangkuman lengkap materi BAB 5 — tabel method array, mutabilitas, checklist, dan latihan penutup.
---

# Ringkasan BAB 5

## Selamat! 🎉

Kamu telah menyelesaikan **BAB 5: Array**! Ini adalah salah satu konsep terpenting dalam pemrograman terstruktur. Dengan menguasai array dan method-methodnya, kamu sekarang dapat mengolah sekumpulan data yang besar secara efisien dan rapi.

---

## Tabel Cheat Sheet Method Array

| Method | Kategori | Deskripsi | Asli Berubah? |
|---|---|---|---|
| `push()` | Menambah belakang | Menambah elemen ke akhir array | Ya (Mutable) |
| `pop()` | Menghapus belakang | Menghapus elemen terakhir array | Ya (Mutable) |
| `unshift()` | Menambah depan | Menambah elemen ke awal array | Ya (Mutable) |
| `shift()` | Menghapus depan | Menghapus elemen pertama array | Ya (Mutable) |
| `splice()` | Modifikasi tengah | Menambah/menghapus elemen di indeks mana saja | Ya (Mutable) |
| `slice()` | Salin sebagian | Menyalin sebagian array menjadi array baru | Tidak (Immutable) |
| `concat()` | Gabung array | Menyatukan beberapa array menjadi satu | Tidak (Immutable) |
| `includes()` | Cek keberadaan | Mengembalikan true jika nilai ada | Tidak (Immutable) |
| `indexOf()` | Cari posisi | Mengembalikan indeks pertama dari nilai | Tidak (Immutable) |
| `find()` | Cari elemen | Mengembalikan elemen pertama yang cocok | Tidak (Immutable) |
| `filter()` | Saring data | Mengembalikan array baru yang lolos kriteria | Tidak (Immutable) |
| `map()` | Transformasi | Mengubah setiap elemen menjadi bentuk baru | Tidak (Immutable) |
| `reduce()` | Akumulasi | Mereduksi array menjadi satu nilai tunggal | Tidak (Immutable) |
| `sort()` | Urutkan | Mengurutkan elemen secara alfabetis/numerik | Ya (Mutable) |
| `reverse()` | Balik urutan | Membalikkan urutan seluruh elemen | Ya (Mutable) |

---

## Mutable vs Immutable

Programmer profesional sangat berhati-hati dengan **efek samping** (*side effects*).

**Mutable methods** mengubah data pada variabel aslinya secara langsung. Contoh: `push()`, `splice()`, `sort()`.

**Immutable methods** membiarkan variabel asli tetap utuh dan mengembalikan data baru. Contoh: `slice()`, `concat()`, `filter()`, `map()`.

:::tip[Gunakan slice() untuk Keamanan Data]
Jika ingin mengurutkan atau membalik data tanpa merusak data asli, salin dahulu dengan `.slice()`:
```ts
const terurut = dataAsli.slice().sort()
```
:::

---

## Checklist BAB 5

- [ ] Memahami konsep array, elemen, dan indeks (dimulai dari 0)
- [ ] Bisa membuat array dengan `tipe[]`
- [ ] Bisa mengakses dan mengubah elemen menggunakan `array[indeks]`
- [ ] Bisa mengukur panjang array dengan `.length`
- [ ] Bisa mengiterasi array menggunakan `for`, `for...of`, dan `forEach`
- [ ] Menguasai manipulasi ujung: `push()`, `pop()`, `shift()`, `unshift()`
- [ ] Memahami perbedaan parameter `splice()` dan `slice()`
- [ ] Bisa menggabungkan array dengan `concat()` atau spread operator `[...]`
- [ ] Bisa mencari posisi elemen dengan `includes()` dan `indexOf()`
- [ ] Bisa mencari elemen pertama yang cocok dengan `find()`
- [ ] Bisa menyaring data kelompok dengan `filter()`
- [ ] Bisa mengubah seluruh elemen dengan `map()`
- [ ] Bisa menghitung total akumulasi dengan `reduce()`
- [ ] Bisa mengurutkan teks dan angka dengan `sort()` secara benar
- [ ] Bisa membalik urutan data dengan `reverse()`
- [ ] Menyelesaikan Studi Kasus dan Mini Project
- [ ] Mencoba semua Challenge
- [ ] Memahami error undefined dan perbaikan bug array

---

## Latihan Penutup

Tanpa melihat panduan, buat file `src/bab5/review-bab5.ts`:

1. Buat database array berisi 4 barang belanjaan (nama dan harga).
2. Tambahkan 1 barang baru di awal menggunakan `unshift()`.
3. Saring barang yang harganya di bawah Rp20.000 menggunakan `filter()`.
4. Ubah format setiap barang menjadi teks `"Barang: [nama] | Rp[harga]"` menggunakan `map()`.
5. Hitung total belanjaan menggunakan `reduce()`.
6. Urutkan barang dari harga termahal ke termurah.
7. Cetak semua hasil analisis ke terminal.

---

## Pesan untuk Kamu

Selamat! Kamu sudah menyelesaikan BAB 5. Array adalah materi terakhir dalam kelompok fondasi data. Di bab-bab berikutnya, kamu akan belajar konsep yang lebih luas untuk membangun aplikasi yang lebih kompleks.

Tetaplah berlatih menulis kode dengan tangan sendiri, nikmati setiap error sebagai proses belajar, dan jangan ragu untuk bertanya pada gurumu.

:::tip[Selesai BAB 5]
Pastikan semua checklist sudah terpenuhi sebelum melanjutkan ke bab berikutnya bersama guru.
:::
