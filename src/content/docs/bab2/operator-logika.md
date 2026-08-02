---
title: "Operator Logika"
description: Menggabungkan kondisi dengan &&, ||, dan ! di TypeScript.
---

# Operator Logika

## Tujuan Pembelajaran

Setelah halaman ini, kamu dapat menggabungkan atau membalik kondisi boolean dengan `&&`, `||`, dan `!`.

---

## Pendahuluan

Keputusan nyata jarang bergantung pada satu syarat saja. Untuk lulus, siswa mungkin membutuhkan nilai cukup **dan** kehadiran cukup. Untuk masuk ruang ujian, siswa mungkin memakai kartu peserta **atau** surat izin.

---

## Analogi Kehidupan Sehari-hari

Bayangkan gerbang keamanan sekolah.

```text
Boleh masuk jika:
Kartu siswa ADA dan seragam LENGKAP
```

Dua syarat harus benar. Ini adalah `&&`.

```text
Boleh masuk jika:
Punya kartu siswa atau punya surat izin
```

Salah satu syarat cukup. Ini adalah `||`.

---

## Penjelasan Materi

| Operator | Dibaca | Hasil true jika |
|---|---|---|
| `&&` | dan | semua kondisi true |
| `||` | atau | minimal satu kondisi true |
| `!` | tidak/bukan | membalik boolean |

Tabel singkat `&&` dan `||`:

```text
A      B      A && B     A || B
true   true   true       true
true   false  false      true
false  true   false      true
false  false  false      false
```

---

## Mari Mencoba

Buat `src/bab2/operator-logika.ts`:

```ts
const nilaiAkhir: number = 80
const kehadiran: number = 85
const batasNilai: number = 75
const batasKehadiran: number = 75

const nilaiCukup: boolean = nilaiAkhir >= batasNilai
const hadirCukup: boolean = kehadiran >= batasKehadiran
const lulus: boolean = nilaiCukup && hadirCukup
const dapatRemedial: boolean = !lulus && nilaiAkhir >= 60

console.log(`Nilai cukup: ${nilaiCukup}`)
console.log(`Kehadiran cukup: ${hadirCukup}`)
console.log(`Lulus: ${lulus}`)
console.log(`Dapat remedial: ${dapatRemedial}`)
```

Jalankan:

```text
tsx src/bab2/operator-logika.ts
```

---

## Output

```text
Nilai cukup: true
Kehadiran cukup: true
Lulus: true
Dapat remedial: false
```

---

## Penjelasan Baris per Baris

- `nilaiCukup` membandingkan nilai dengan batas.
- `hadirCukup` membandingkan kehadiran dengan batas.
- `&&` menghasilkan `true` hanya jika dua kondisi itu `true`.
- `!lulus` membalik nilai lulus. Jika lulus `true`, maka `!lulus` adalah `false`.
- `&&` kedua memastikan remedial hanya untuk siswa belum lulus dengan nilai minimal 60.

---

## Kesalahan Umum

```ts
const hasil = nilaiAkhir >= 75 || kehadiran >= 75
```

Jika aturan sebenarnya mengharuskan **dua-duanya** cukup, penggunaan `||` salah. Nilai bagus tetapi kehadiran rendah bisa tetap dianggap lulus.

```ts
const selaluBenar = nilaiAkhir >= 75 || nilaiAkhir <= 100
```

Untuk nilai normal, salah satu kondisi hampir selalu benar. Gunakan `&&` jika maksudnya nilai berada antara 75 dan 100.

---

## Tips

:::tip[Pecah Kondisi Panjang]
Buat variabel boolean kecil seperti `nilaiCukup` dan `hadirCukup` sebelum menggabungkannya. Ini lebih mudah diperiksa daripada satu kondisi yang sangat panjang.
:::

---

## Latihan

Buat program yang menentukan apakah seseorang boleh memilih ketua kelas: umur minimal 15 **dan** status siswa aktif. Tampilkan hasil boolean dan ubah data untuk mencoba hasil lain.

---

## Ringkasan

- `&&` membutuhkan semua syarat benar.
- `||` membutuhkan minimal satu syarat benar.
- `!` membalik nilai boolean.
- Pecah kondisi panjang menjadi variabel boolean yang jelas.

:::tip[Langkah Selanjutnya]
Lanjut ke **Operator Unary**.
:::
