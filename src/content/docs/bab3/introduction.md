---
title: "BAB 3 — Perulangan"
description: Gambaran BAB 3 — mengotomatiskan tugas berulang menggunakan loop di TypeScript.
---

# BAB 3: Perulangan

## Tujuan Pembelajaran

Setelah menyelesaikan BAB 3, kamu dapat menjelaskan konsep loop, memilih jenis loop yang tepat, dan membangun program yang memproses banyak data secara otomatis.

---

## Pendahuluan

Bayangkan kamu diminta menuliskan angka 1 sampai 100 di papan tulis. Jika dilakukan manual satu per satu, butuh waktu lama dan mudah salah. Tapi jika ada mesin yang mengulang proses tersebut secara otomatis, selesai dalam hitungan detik.

Itulah esensi **loop** atau perulangan dalam pemrograman.

---

## Peta Materi

```text
PERULANGAN (LOOP)
├── Konsep Dasar
│   ├── Apa itu perulangan?
│   └── Mengapa program butuh loop?
├── Jenis Loop
│   ├── while
│   ├── do...while
│   ├── for
│   ├── for...of
│   └── for...in
├── Kontrol Loop
│   ├── break
│   ├── continue
│   └── infinite loop (bahaya!)
└── Terapan
    ├── nested loop
    ├── iterasi array
    ├── studi kasus absensi
    └── mini project daftar nilai
```

---

## Analogi Awal

Perulangan seperti jadwal piket kelas. Setiap hari ada satu kelompok yang bertugas. Proses yang sama diulang setiap hari sampai semester selesai.

```text
Hari 1 → Kelompok A piket
Hari 2 → Kelompok B piket
Hari 3 → Kelompok C piket
...
Hari 180 → Selesai
```

Loop di TypeScript bekerja seperti pola itu: ulangi tindakan tertentu sampai kondisi berhenti terpenuhi.

---

## Mari Mencoba

Buat `src/bab3/cek-kesiapan.ts`:

```ts
for (let i = 1; i <= 5; i++) {
  console.log(`Perulangan ke-${i}`)
}
console.log("Loop selesai!")
```

Jalankan:

```text
tsx src/bab3/cek-kesiapan.ts
```

Output:

```text
Perulangan ke-1
Perulangan ke-2
Perulangan ke-3
Perulangan ke-4
Perulangan ke-5
Loop selesai!
```

Lima baris muncul dari lima kata baris kode. Ini kekuatan loop.

---

## Latihan

Ubah angka `5` menjadi `10` pada kode di atas. Lihat bagaimana output bertambah tanpa menambah baris kode.

---

## Ringkasan

- Loop mengotomatiskan proses berulang.
- Jenis loop yang akan dipelajari: `while`, `do...while`, `for`, `for...of`, `for...in`.
- `break` dan `continue` mengontrol jalannya loop.
- Loop sangat berguna untuk memproses daftar data (array).

:::tip[Langkah Selanjutnya]
Lanjut ke **Apa itu Perulangan** untuk memahami konsep dasar loop.
:::
