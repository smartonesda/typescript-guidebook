---
title: "Apa itu Function?"
description: Memahami konsep function sebagai blok kode yang dapat diberi nama dan dipanggil kapan saja.
---

# Apa itu Function?

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan apa itu function dan mengidentifikasi komponen-komponen utamanya.

---

## Pendahuluan

Kita sudah belajar cara menyimpan data (variabel) dan cara mengolah data (operator dan percabangan) dan cara mengulang proses (loop). Tapi masih ada satu kemampuan penting yang belum kita kuasai: **cara menyimpan** dan **menggunakan ulang** serangkaian instruksi.

Itulah fungsi dari **function**.

---

## Penjelasan Materi

**Function** (fungsi) adalah blok kode yang:

1. Diberi **nama**
2. Dapat **dipanggil** kapan saja
3. Dapat menerima **input** (parameter)
4. Dapat menghasilkan **output** (return value)

Sekali didefinisikan, function bisa dipanggil berkali-kali dari mana saja dalam program.

---

## Analogi Kehidupan Sehari-hari

### Mesin Pembuat Jus

Bayangkan sebuah mesin pembuat jus di dapur.

```text
INPUT                  PROSES              OUTPUT
────────────           ──────────────      ──────────────
Buah yang       ──►   [Mesin memeras]  ──► Jus yang siap
dimasukkan             dan menyaring        diminum
```

Kamu tidak harus mempelajari cara mesin bekerja setiap kali ingin membuat jus. Kamu cukup:
1. **Mengisi** buah (memberikan input)
2. **Menyalakan** mesin (memanggil function)
3. **Mengambil** jus (mendapatkan output)

Function dalam TypeScript bekerja persis seperti itu.

---

## Komponen Function

```text
function  namafungsi  (parameter)  :  tipeOutput  {
─────────  ──────────  ───────────     ──────────
kata kunci  nama yang   data input      tipe hasil
            dipilih                     yang keluar
}
```

| Bagian | Contoh | Penjelasan |
|---|---|---|
| Kata kunci | `function` | Memberitahu TypeScript: "ini adalah function" |
| Nama | `hitungLuas` | Nama yang kita pilih untuk mengidentifikasi function |
| Parameter | `(panjang: number)` | Data yang diterima function |
| Tipe return | `: number` | Tipe data yang dikembalikan |
| Blok kode | `{ ... }` | Instruksi yang dijalankan saat function dipanggil |

---

## Visual Illustration

```text
┌──────────────────────────────────────────────┐
│  function hitungLuasPersegiPanjang(          │
│      panjang: number,                        │
│      lebar: number                           │
│  ): number {                                 │
│      return panjang * lebar                  │  ← instruksi
│  }                                           │
└──────────────────────────────────────────────┘
           │
           │ dipanggil dengan
           ▼
hitungLuasPersegiPanjang(5, 3) → 15
```

---

## Mari Mencoba

Buat `src/bab4/apa-itu-function.ts`:

```ts
function sapaPagi(nama: string): void {
  console.log(`Selamat pagi, ${nama}!`)
  console.log(`Semangat belajar TypeScript hari ini.`)
}

function sapaMalam(nama: string): void {
  console.log(`Selamat malam, ${nama}.`)
  console.log(`Istirahat yang cukup ya.`)
}

sapaPagi("Dewi")
sapaMalam("Putra")
sapaPagi("Rani")
```

Jalankan:

```text
tsx src/bab4/apa-itu-function.ts
```

## Output

```text
Selamat pagi, Dewi!
Semangat belajar TypeScript hari ini.
Selamat malam, Putra.
Istirahat yang cukup ya.
Selamat pagi, Rani!
Semangat belajar TypeScript hari ini.
```

---

## Penjelasan Baris per Baris

- `function sapaPagi(nama: string): void` — mendefinisikan function bernama `sapaPagi` yang menerima parameter `nama` bertipe string. `: void` berarti tidak mengembalikan nilai.
- `console.log(...)` — instruksi yang dijalankan setiap kali function dipanggil.
- `sapaPagi("Dewi")` — memanggil function dengan argumen `"Dewi"`. Nilai ini akan menjadi isi variabel `nama` di dalam function.

---

## Kesalahan yang Sering Terjadi

```ts
function sapaPagi(nama: string): void {
  console.log(`Selamat pagi, ${nama}!`)
}

// Lupa memanggil function!
```

Function yang didefinisikan tapi tidak pernah dipanggil tidak akan menghasilkan apapun. Mendefinisikan ≠ menjalankan.

---

## Tips

:::tip[Nama Function Harus Deskriptif]
Beri nama function yang menjelaskan apa yang dilakukannya. Nama seperti `hitungRataRata` atau `tampilkanBiodata` jauh lebih mudah dipahami daripada `hitung` atau `fn1`.
:::

---

## Latihan

1. Buat function `perkenalan()` yang mencetak namamu, kelasmu, dan sekolahmu.
2. Panggil function tersebut tiga kali.

---

## Ringkasan

- Function adalah blok kode yang diberi nama dan bisa dipanggil kapan saja.
- Komponen: kata kunci `function`, nama, parameter, tipe return, blok kode.
- Mendefinisikan function tidak menjalankannya — function harus dipanggil.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mengapa Function** untuk memahami mengapa function sangat penting.
:::
