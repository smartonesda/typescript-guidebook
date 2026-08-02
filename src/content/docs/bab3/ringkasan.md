---
title: "Ringkasan BAB 3"
description: Rangkuman lengkap BAB 3 — perbandingan loop, kapan pakai masing-masing, checklist, dan latihan penutup.
---

# Ringkasan BAB 3

## Selamat!

Kamu telah menyelesaikan **BAB 3: Perulangan**. Ini adalah bab yang mengubah cara kamu berpikir tentang program. Dengan loop, program tidak lagi terbatas pada data yang sudah diketahui — ia bisa memproses jumlah data berapapun secara otomatis.

---

## Tabel Perbandingan Loop

| Loop | Kondisi diperiksa | Kapan dipakai |
|---|---|---|
| `while` | Sebelum setiap putaran | Jumlah putaran tidak diketahui |
| `do...while` | Setelah setiap putaran | Harus jalan minimal sekali |
| `for` | Sebelum setiap putaran | Jumlah putaran sudah diketahui |
| `for...of` | Otomatis | Iterasi nilai array atau string |
| `for...in` | Otomatis | Iterasi key object |

---

## Kapan Menggunakan Loop yang Mana?

```text
Ada array atau string yang ingin diiterasi?
  ├─ Butuh nilai → for...of
  ├─ Butuh indeks juga → for biasa
  └─ Iterasi key object → for...in

Jumlah pengulangan sudah diketahui?
  └─ Ya → for biasa

Harus jalan minimal satu kali?
  └─ Ya → do...while

Kondisi bergantung pada proses di dalam loop?
  └─ Ya → while
```

---

## Kontrol Loop

| Perintah | Efek | Analogi |
|---|---|---|
| `break` | Keluar dari loop | Bel sekolah berbunyi |
| `continue` | Lewati satu putaran | Siswa absen, lanjut |

---

## Pola Iterasi Array yang Sering Dipakai

```ts
// Total semua nilai
let total = 0
for (const n of array) total += n

// Nilai maksimum
let max = array[0]
for (const n of array) if (n > max) max = n

// Filter elemen
const lulus: number[] = []
for (const n of array) {
  if (n >= 75) lulus.push(n)
}
```

---

## Hal Penting yang Harus Diingat

### Tiga komponen loop wajib ada

```ts
while (kondisi) {
  // aksi
  // perubahan yang menuju false
}
```

### Indeks array dimulai dari 0

```ts
const arr = ["A", "B", "C"]
// arr[0] = "A", arr[1] = "B", arr[2] = "C"
// loop: i < arr.length (bukan <=)
```

### break vs continue

```ts
break    // keluar dari seluruh loop
continue // lewati putaran ini, lanjut ke berikutnya
```

### Infinite loop bisa terjadi jika

- Lupa perubahan variabel.
- Perubahan ke arah yang salah.
- Kondisi `!==` melewati nilai target.

Hentikan dengan **`Ctrl + C`**.

---

## Checklist BAB 3

- [ ] Memahami konsep loop: kondisi, aksi, perubahan
- [ ] Bisa membuat `while` loop
- [ ] Bisa membuat `do...while` loop
- [ ] Bisa membuat `for` loop dengan tiga komponen
- [ ] Bisa menggunakan `for...of` untuk array
- [ ] Bisa menggunakan `for...in` untuk object
- [ ] Bisa menggunakan `break` untuk menghentikan loop
- [ ] Bisa menggunakan `continue` untuk melewati putaran
- [ ] Memahami nested loop dan alur eksekusinya
- [ ] Bisa mendeteksi dan menghindari infinite loop
- [ ] Menyelesaikan studi kasus absensi
- [ ] Menyelesaikan mini project daftar nilai
- [ ] Sudah mencoba 10 challenge
- [ ] Mengerti error umum loop dan cara memperbaikinya

---

## Perintah Berguna

```text
tsx src/bab3/namafile.ts   ← jalankan file TypeScript
Ctrl + C                   ← hentikan program yang berjalan
```

---

## Konsep yang Menghubungkan BAB 1, 2, 3

```text
BAB 1 (Variabel & Tipe Data)
  ↓ menyimpan data: string[], number[], object
BAB 2 (Operator & Percabangan)
  ↓ kondisi loop, grade, filter data
BAB 3 (Perulangan)
  ↓ memproses banyak data secara otomatis
```

---

## Latihan Penutup

Tanpa melihat contoh sebelumnya, buat `src/bab3/review-bab3.ts`:

1. Buat array 6 siswa dengan nama dan nilai rata-rata.
2. Tampilkan semua siswa dengan nomor urut.
3. Hitung rata-rata kelas menggunakan loop.
4. Tampilkan nama siswa dengan nilai tertinggi.
5. Filter dan tampilkan siswa yang nilainya di bawah rata-rata kelas.
6. Buat baris pemisah menggunakan `"=".repeat(40)`.

Jalankan dan pastikan output berubah jika data diubah.

---

## Pesan untuk Kamu

Loop adalah salah satu konsep yang paling sering dipakai oleh programmer. Setiap kali kamu melihat data yang banyak — nilai, nama, produk, transaksi — di situlah loop bekerja.

Kamu sudah menguasai alat yang dipakai di setiap program komputer yang pernah dibuat.

:::tip[Selesai BAB 3]
Pastikan semua checklist sudah terpenuhi sebelum melanjutkan ke BAB berikutnya bersama guru.
:::
