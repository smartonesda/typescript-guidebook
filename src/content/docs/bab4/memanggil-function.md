---
title: "Memanggil Function"
description: Memahami cara memanggil function dan menggunakan hasilnya.
---

# Memanggil Function

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat memanggil function dengan benar, menangkap return value, dan memanggil function di berbagai konteks.

---

## Pendahuluan

Mendefinisikan function hanya menyiapkan "resep". Untuk menjalankan kodenya, kamu harus **memanggil** (call) function tersebut.

---

## Cara Memanggil Function

```ts
namaFunction(argumen1, argumen2)
```

- Tulis nama function diikuti tanda kurung.
- Di dalam kurung, masukkan argumen sesuai parameter yang didefinisikan.

---

## Analogi Kehidupan Sehari-hari

Memanggil function seperti menyalakan mesin jus.

```text
DEFINISI FUNCTION             MEMANGGIL FUNCTION
────────────────              ──────────────────
Membuat mesin jus         →   Menyalakan mesin
Menentukan slot buah      →   Memasukkan mangga
Menentukan keluaran jus   →   Mendapatkan jus mangga
```

Mesin tidak bekerja hanya karena ada. Ia harus dinyalakan (dipanggil).

---

## Empat Cara Menggunakan Return Value

### 1. Langsung cetak

```ts
console.log(tambah(5, 3))   // 8
```

### 2. Simpan ke variabel

```ts
const hasil = tambah(5, 3)
console.log(hasil)          // 8
```

### 3. Gunakan dalam ekspresi

```ts
const total = tambah(5, 3) * 2   // 16
```

### 4. Kirim ke function lain

```ts
console.log(tambah(tambah(1, 2), 3))  // 6
```

---

## Mari Mencoba

Buat `src/bab4/memanggil-function.ts`:

```ts
function tambah(a: number, b: number): number {
  return a + b
}

function sapa(nama: string): string {
  return `Halo, ${nama}!`
}

function apakahPositif(angka: number): boolean {
  return angka > 0
}

// Cara 1: langsung cetak
console.log(tambah(10, 5))

// Cara 2: simpan ke variabel
const hasilTambah = tambah(20, 30)
console.log(`Hasil: ${hasilTambah}`)

// Cara 3: gunakan dalam ekspresi
const duaKaliLipat = tambah(4, 6) * 2
console.log(`Dua kali lipat: ${duaKaliLipat}`)

// Cara 4: kirim ke function lain
const salam = sapa("Dewi")
console.log(salam)

// Memanggil berulang dengan argumen berbeda
for (let i = 1; i <= 5; i++) {
  const status = apakahPositif(i - 3)
  console.log(`apakahPositif(${i - 3}) = ${status}`)
}
```

Jalankan:

```text
tsx src/bab4/memanggil-function.ts
```

## Output

```text
15
Hasil: 50
Dua kali lipat: 20
Halo, Dewi!
apakahPositif(-2) = false
apakahPositif(-1) = false
apakahPositif(0) = false
apakahPositif(1) = true
apakahPositif(2) = true
```

---

## Penjelasan Baris per Baris

- `tambah(10, 5)` — memanggil function dengan dua argumen, hasilnya langsung masuk `console.log`.
- `const hasilTambah = tambah(20, 30)` — return value disimpan, bisa dipakai berkali-kali.
- `tambah(4, 6) * 2` — return value langsung dikalikan 2 dalam satu ekspresi.
- Loop memanggil `apakahPositif` lima kali dengan argumen berbeda.

---

## Kesalahan yang Sering Terjadi

```ts
function hitungPersegi(sisi: number): number {
  return sisi * sisi
}

// Memanggil tapi tidak menggunakan hasilnya
hitungPersegi(5)   // kode berjalan, tapi hasil 25 langsung hilang

// Benar: simpan atau langsung gunakan
const luas = hitungPersegi(5)
console.log(luas)
```

---

## Tips

:::tip[Function Bisa Dipanggil di Mana Saja]
Function bisa dipanggil di dalam loop, di dalam kondisi, di dalam function lain, atau bahkan sebagai argumen function lain. Kamu sudah melihat contohnya di atas.
:::

---

## Latihan

1. Buat function `kuadrat(n)` yang mengembalikan n².
2. Panggil `kuadrat` dalam loop dari 1 sampai 10 dan tampilkan hasilnya.
3. Simpan hasil `kuadrat(7)` ke variabel dan cetak.

---

## Ringkasan

- Panggil function dengan menulis nama dan kurung berisi argumen.
- Return value bisa disimpan, langsung dicetak, dipakai dalam ekspresi, atau dikirim ke function lain.
- Function yang sudah didefinisikan bisa dipanggil berkali-kali.

:::tip[Langkah Selanjutnya]
Lanjut ke **Parameter & Argument** untuk memahami perbedaan keduanya secara mendalam.
:::
