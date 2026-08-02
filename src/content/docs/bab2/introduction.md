---
title: "BAB 2 — Operator & Percabangan"
description: Gambaran BAB 2 — memakai operator untuk menghitung dan percabangan untuk membuat keputusan.
---

# BAB 2: Operator & Percabangan

## Tujuan Pembelajaran

Setelah menyelesaikan BAB 2, kamu dapat menghitung nilai, membandingkan data, menggabungkan syarat, lalu membuat program memilih tindakan yang tepat.

---

## Pendahuluan

BAB 1 mengajarkan cara menyimpan data. Namun data yang disimpan belum berguna jika program tidak bisa **mengolah** dan **mengambil keputusan**.

Contoh: program menyimpan nilai `82`. Program harus menghitung rata-rata, membandingkan nilai dengan batas lulus, lalu memutuskan apakah siswa lulus atau remedial. Operator dan percabangan membuat semua proses itu mungkin.

---

## Peta Materi

```text
DATA DARI BAB 1
        │
        ▼
OPERATOR
├── hitung: + - * / % **
├── bandingkan: > < >= <= === !==
├── gabungkan kondisi: && || !
└── beri nilai: = += -=
        │
        ▼
PERCABANGAN
├── if
├── if...else
├── else if
├── nested if
├── switch
└── ternary
        │
        ▼
PROGRAM MEMBUAT KEPUTUSAN
```

---

## Analogi Kehidupan Sehari-hari

Bayangkan guru memeriksa nilai siswa.

1. Guru menjumlahkan nilai tugas dan ujian.
2. Guru membandingkan rata-rata dengan batas lulus.
3. Guru memeriksa syarat tambahan, misalnya kehadiran.
4. Guru memilih hasil: lulus, remedial, atau perlu bimbingan.

Langkah 1–3 adalah kerja operator. Langkah 4 adalah percabangan.

---

## Mari Mencoba

Buat `src/bab2/pembuka-bab2.ts`:

```ts
const nilaiUjian: number = 82
const batasLulus: number = 75
const lulus: boolean = nilaiUjian >= batasLulus

console.log(`Nilai: ${nilaiUjian}`)
console.log(`Status lulus: ${lulus}`)
```

Jalankan:

```text
tsx src/bab2/pembuka-bab2.ts
```

---

## Output

```text
Nilai: 82
Status lulus: true
```

---

## Penjelasan Baris per Baris

- `const nilaiUjian: number = 82` menyimpan angka nilai.
- `const batasLulus: number = 75` menyimpan batas yang dipakai untuk membandingkan.
- `>=` berarti "lebih besar atau sama dengan". Hasilnya selalu boolean: `true` atau `false`.
- `console.log()` menampilkan hasil memakai template literal.

---

## Kesalahan Umum

```ts
const lulus: boolean = nilaiUjian = batasLulus
```

Tanda `=` dipakai untuk memberi nilai, bukan membandingkan. Untuk membandingkan gunakan `===`, `>=`, atau operator perbandingan lain.

---

## Tips

:::tip[Urutan Berpikir]
Saat membuat program keputusan: tentukan data dulu, hitung jika perlu, buat kondisi boolean, lalu pilih tindakan dengan percabangan.
:::

---

## Latihan

Buat `src/bab2/latihan-pembuka.ts`:

1. Simpan nilai tugas dan nilai ujian.
2. Hitung rata-rata.
3. Bandingkan rata-rata dengan batas `75`.
4. Tampilkan nilai rata-rata dan status boolean hasil perbandingan.

---

## Ringkasan

- Operator mengolah atau membandingkan data.
- Percabangan memilih aksi berdasarkan kondisi.
- BAB 2 memakai data dan tipe data dari BAB 1.
- Mulai dari data kecil, lalu lihat perubahan output saat nilainya diubah.

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu Operator**.
:::
