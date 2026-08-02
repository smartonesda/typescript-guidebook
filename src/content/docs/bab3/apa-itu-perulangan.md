---
title: "Apa itu Perulangan?"
description: Memahami konsep dasar loop sebagai cara program mengulang tindakan secara otomatis.
---

# Apa itu Perulangan?

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menjelaskan apa itu perulangan, menyebutkan komponen loop, dan membayangkan alur kerja loop sederhana.

---

## Pendahuluan

Salah satu kemampuan paling berharga dari komputer adalah kemampuan melakukan hal yang sama berkali-kali tanpa lelah dan tanpa salah. Manusia mudah bosan saat mengerjakan hal berulang. Komputer tidak pernah bosan.

**Perulangan** (loop) adalah cara memberitahu program: "Lakukan ini terus sampai syarat tertentu terpenuhi."

---

## Penjelasan Materi

Sebuah loop memiliki tiga komponen utama:

| Komponen | Fungsi | Contoh |
|---|---|---|
| **Kondisi** | Kapan loop berjalan | `i <= 10` |
| **Aksi** | Apa yang dilakukan setiap putaran | `console.log(i)` |
| **Perubahan** | Memastikan kondisi akhirnya berhenti | `i++` |

Jika salah satu komponen hilang atau salah, loop bisa berjalan selamanya — ini disebut **infinite loop** dan akan menyebabkan program hang.

---

## Analogi Kehidupan Sehari-hari

### Satpam yang Berkeliling

Satpam bertugas mengelilingi gedung setiap malam.

```text
Selama waktu < pukul 06.00:
  Keliling gedung
  Cek setiap pintu
  Catat temuan
Jika sudah pukul 06.00 → berhenti
```

- **Kondisi:** waktu belum pukul 06.00
- **Aksi:** keliling + cek + catat
- **Perubahan:** waktu terus bertambah hingga 06.00

---

## Visual Illustration

```text
MULAI
  │
  ▼
Cek Kondisi ──── false ──► SELESAI
  │
 true
  │
  ▼
Jalankan Aksi
  │
  ▼
Perubahan (i++)
  │
  └─────────────► Kembali ke Cek Kondisi
```

---

## Mari Mencoba

Buat `src/bab3/apa-itu-perulangan.ts`:

```ts
let hitungan: number = 1

while (hitungan <= 5) {
  console.log(`Hitungan ke-${hitungan}`)
  hitungan++
}

console.log("Selesai menghitung!")
```

Jalankan:

```text
tsx src/bab3/apa-itu-perulangan.ts
```

## Output

```text
Hitungan ke-1
Hitungan ke-2
Hitungan ke-3
Hitungan ke-4
Hitungan ke-5
Selesai menghitung!
```

---

## Penjelasan Baris per Baris

- `let hitungan: number = 1` — variabel penghitung dimulai dari 1, memakai `let` karena nilainya berubah.
- `while (hitungan <= 5)` — selama hitungan belum melebihi 5, loop berjalan.
- `console.log(...)` — mencetak nomor saat ini.
- `hitungan++` — menambah satu setiap putaran (**komponen perubahan** yang sangat penting).
- Setelah `hitungan` menjadi 6, kondisi `6 <= 5` bernilai `false`, loop berhenti.

---

## Kesalahan yang Sering Terjadi

```ts
let hitungan: number = 1

while (hitungan <= 5) {
  console.log(hitungan)
  // lupa hitungan++
}
```

Tanpa `hitungan++`, nilai tidak pernah berubah. Loop berjalan selamanya. Program harus dihentikan paksa dengan `Ctrl + C`.

---

## Tips

:::tip[Tiga Komponen Wajib]
Sebelum menulis loop apapun, pastikan kamu sudah menyiapkan: kondisi berhenti, aksi yang diulang, dan perubahan yang memastikan kondisi akhirnya terpenuhi.
:::

---

## Latihan

Modifikasi program di atas:

1. Ubah batas atas menjadi `10`.
2. Ubah agar hanya menampilkan angka **genap** (tambahkan `hitungan += 2` dan mulai dari `2`).

---

## Ringkasan

- Loop terdiri dari tiga komponen: kondisi, aksi, dan perubahan.
- Loop berhenti saat kondisi menjadi `false`.
- Lupa perubahan menyebabkan infinite loop.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mengapa Perlu Loop** untuk memahami alasan loop sangat penting.
:::
