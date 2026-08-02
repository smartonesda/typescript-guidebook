---
title: "Kontrol Loop: continue"
description: Melewati satu putaran loop menggunakan perintah continue.
---

# Perintah `continue`

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggunakan `continue` untuk melewati putaran tertentu tanpa menghentikan loop secara keseluruhan.

---

## Pendahuluan

`continue` berbeda dari `break`. Jika `break` menghentikan seluruh loop, `continue` hanya melewati satu putaran dan langsung melanjutkan ke putaran berikutnya.

---

## Analogi Kehidupan Sehari-hari

### Absensi Kelas

Guru memanggil nomor absen satu per satu. Jika seorang siswa tidak hadir, guru melewatinya dan langsung memanggil nomor berikutnya.

```text
Untuk setiap nomor absen 1-36:
  Jika siswa tidak hadir → lewati (continue)
  Jika siswa hadir → panggil nama
```

---

## Penjelasan Materi

```ts
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue // lewati angka 5
  }
  console.log(i)
}
```

Angka 5 tidak dicetak, tetapi loop tetap berjalan sampai angka 10.

---

## Visual Illustration

```text
i=1 → cetak
i=2 → cetak
i=3 → cetak
i=4 → cetak
i=5 → continue → LANGSUNG KE i=6 (lewati cetak)
i=6 → cetak
...
i=10 → cetak
SELESAI
```

---

## Mari Mencoba

Buat `src/bab3/continue.ts`:

```ts
const nilaiSiswa: number[] = [80, 55, 90, 45, 75, 30, 88]

console.log("=== Siswa yang Lulus (nilai >= 75) ===")
for (const nilai of nilaiSiswa) {
  if (nilai < 75) {
    continue // lewati siswa yang belum lulus
  }
  console.log(`Lulus dengan nilai: ${nilai}`)
}

console.log("\n=== Angka Kecuali Kelipatan 3 ===")
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) {
    continue
  }
  console.log(i)
}
```

Jalankan:

```text
tsx src/bab3/continue.ts
```

## Output

```text
=== Siswa yang Lulus (nilai >= 75) ===
Lulus dengan nilai: 80
Lulus dengan nilai: 90
Lulus dengan nilai: 75
Lulus dengan nilai: 88

=== Angka Kecuali Kelipatan 3 ===
1
2
4
5
7
8
10
11
13
14
```

---

## Penjelasan Baris per Baris

- `if (nilai < 75) { continue }` — nilai di bawah 75 dilewati, loop langsung ke nilai berikutnya.
- Nilai 55, 45, dan 30 dilewati.
- `i % 3 === 0` — kelipatan 3 dilewati (3, 6, 9, 12, 15 tidak muncul).

---

## break vs continue

| | `break` | `continue` |
|---|---|---|
| Efek | Keluar dari loop | Lewati putaran ini |
| Putaran setelahnya | Tidak ada | Tetap berjalan |
| Analogi | Bel ujian berbunyi | Siswa absen, lanjut |

---

## Kesalahan yang Sering Terjadi

```ts
for (let i = 1; i <= 5; i++) {
  console.log(i)
  continue
  console.log("Ini tidak akan pernah tercetak") // kode mati
}
```

Kode setelah `continue` dalam blok yang sama tidak akan pernah dijalankan. Letakkan `continue` di akhir logika yang ingin dilewati.

---

## Tips

:::tip[continue vs if-else]
Kadang `continue` bisa diganti dengan logika `if-else`. Gunakan `continue` saat ingin menghindari kode bersarang yang terlalu dalam.
:::

---

## Latihan

1. Buat loop 1-20. Tampilkan hanya angka yang **bukan** kelipatan 2 atau 5.
2. Buat array nama siswa. Tampilkan semua kecuali nama yang panjangnya kurang dari 4 karakter.

---

## Ringkasan

- `continue` melewati sisa kode dalam putaran saat ini dan melanjutkan ke putaran berikutnya.
- Loop tetap berjalan — hanya satu putaran yang dilewati.
- Berguna untuk memfilter data atau melewati kasus tertentu.

:::tip[Langkah Selanjutnya]
Lanjut ke **Infinite Loop** untuk belajar menghindari loop yang tidak pernah berhenti.
:::
