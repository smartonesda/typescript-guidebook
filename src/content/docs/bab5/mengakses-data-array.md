---
title: "Mengakses Data Array"
description: Memahami cara mengambil nilai dari elemen array berdasarkan indeks.
---

# Mengakses Data Array

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat mengambil elemen array menggunakan nomor indeks dan mendeteksi nilai `undefined` jika indeks di luar jangkauan.

---

## Pendahuluan

Setelah menyimpan data ke dalam array, bagaimana cara kita mengambilnya kembali untuk ditampilkan atau dihitung? Kita melakukannya menggunakan **nomor indeks** elemen tersebut.

---

## Cara Mengakses Elemen

Tulis nama variabel array diikuti nomor indeks di dalam kurung siku `[]`:

```ts
namaArray[nomorIndeks]
```

Ingat aturan paling penting: **indeks selalu mulai dari 0**.

---

## Analogi Kehidupan Sehari-hari

### Nomor Rak Loker

Kamu menyimpan tas di loker sekolah nomor sekat 0, 1, dan 2. Saat ingin mengambil tas milikmu di sekat 1, kamu harus meminta kunci sekat 1.

```text
Sekat Loker:
Sekat 0 → Tas Andi
Sekat 1 → Tas Budi  ← ambil loker[1]
Sekat 2 → Tas Citra
```

Jika kamu meminta sekat 5 padahal loker hanya sampai sekat 2, kuncinya tidak ada (menghasilkan `undefined`).

---

## Visual Illustration

```text
const siswa = ["Andi", "Budi", "Citra"]

siswa[0] ──► "Andi"
siswa[1] ──► "Budi"
siswa[2] ──► "Citra"
siswa[3] ──► undefined (indeks tidak ada)
```

---

## Mari Mencoba

Buat `src/bab5/mengakses-array.ts`:

```ts
const mataPelajaran: string[] = ["Matematika", "Bahasa Indonesia", "Pemrograman"]
const nilaiSiswa: number[] = [90, 85, 95]

// Mengakses elemen secara langsung
console.log("=== Mengakses Elemen ===")
console.log(`Pelajaran 1: ${mataPelajaran[0]}`)
console.log(`Pelajaran 2: ${mataPelajaran[1]}`)
console.log(`Pelajaran 3: ${mataPelajaran[2]}`)

// Menggunakan nilai array dalam ekspresi
console.log("\n=== Menghitung Nilai ===")
const totalNilai = nilaiSiswa[0] + nilaiSiswa[1] + nilaiSiswa[2]
const rataRata = totalNilai / 3
console.log(`Rata-rata nilai: ${rataRata}`)

// Mengakses indeks di luar jangkauan
console.log("\n=== Indeks Tidak Ada ===")
console.log(`Pelajaran 4: ${mataPelajaran[3]}`)
```

Jalankan:

```text
tsx src/bab5/mengakses-array.ts
```

## Output

```text
=== Mengakses Elemen ===
Pelajaran 1: Matematika
Pelajaran 2: Bahasa Indonesia
Pelajaran 3: Pemrograman

=== Menghitung Nilai ===
Rata-rata nilai: 90

=== Indeks Tidak Ada ===
Pelajaran 4: undefined
```

---

## Penjelasan Baris per Baris

- `mataPelajaran[0]` — mengambil elemen pertama ("Matematika").
- `nilaiSiswa[0] + nilaiSiswa[1]` — nilai yang diambil dari array langsung bertipe `number` sehingga bisa dijumlahkan.
- `mataPelajaran[3]` — indeks 3 tidak ada dalam array berisi 3 elemen. Hasilnya adalah `undefined` tanpa menimbulkan error crash program.

---

## Mengakses Elemen Terakhir

Jika panjang array berubah-ubah, kita bisa mengambil elemen terakhir dengan rumus:

```ts
const terakhir = namaArray[namaArray.length - 1]
```

Rumus ini akan dibahas lebih lengkap di halaman **Panjang Array**.

---

## Kesalahan yang Sering Terjadi

### ❌ Mengambil elemen pertama menggunakan indeks 1

```ts
const siswa = ["Andi", "Budi"]
console.log(siswa[1]) // Output: "Budi" (Andi terlewat!)
```

**Perbaikan:** Ingat indeks mulai dari 0. `siswa[0]` adalah Andi.

### ❌ Error runtime akibat undefined

```ts
const data: string[] = ["A"]
console.log(data[5].toUpperCase()) // Error saat runtime!
// Cannot read properties of undefined (reading 'toUpperCase')
```

**Perbaikan:** Selalu pastikan indeks yang diakses memang ada, atau lakukan pengecekan `if (data[5] !== undefined)`.

---

## Tips

:::tip[Gunakan Autocomplete Indeks]
Di VS Code, jika kamu mengetik `nilaiSiswa[0].`, editor otomatis memberikan saran method khusus number karena ia tahu elemen array tersebut bertipe `number`.
:::

---

## Latihan

Buat array berisi nama 3 guru. Cetak kalimat: `"Guru pemrograman saya adalah [nama guru ke-3]"` dengan mengakses indeks yang tepat.

---

## Ringkasan

- Elemen array diakses menggunakan `namaArray[indeks]`.
- Indeks array dimulai dari 0.
- Mengakses indeks yang tidak ada menghasilkan `undefined`.
- Selalu pastikan indeks berada dalam batas aman sebelum menggunakannya.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mengubah Data Array**.
:::
