---
title: "Studi Kasus: Sistem Penilaian Siswa"
description: Merancang dan membangun sistem kategori nilai siswa dengan operator perbandingan, logika, dan else if.
---

# Studi Kasus: Sistem Penilaian Siswa

## Tujuan Pembelajaran

Setelah studi kasus ini, kamu dapat menggabungkan operator perbandingan, operator logika, dan percabangan untuk menentukan status dan kategori nilai siswa.

---

## Pendahuluan

Studi kasus ini mensimulasikan sistem penilaian sederhana yang dipakai guru untuk mengelola hasil ujian. Program menerima data siswa lalu menentukan:

- Apakah siswa **Lulus**, **Remedial**, atau **Tidak Valid**
- Kategori nilai: **Sangat Baik**, **Baik**, **Cukup**, **Perlu Bimbingan**

---

## Perancangan Sebelum Coding

Sebelum membuka editor, rencanakan logikanya:

| Kondisi | Status |
|---|---|
| nilai `>= 90` | Sangat Baik — Lulus |
| nilai `>= 75` | Baik — Lulus |
| nilai `>= 60` | Cukup — Remedial |
| nilai `< 60` | Perlu Bimbingan — Remedial |
| nilai `< 0` atau `> 100` | Tidak Valid |

Selain itu, tambahkan syarat kehadiran minimal 75%.

```text
Lulus = nilai >= 75 && kehadiran >= 75
```

---

## Analogi Kehidupan Sehari-hari

Guru memeriksa nilai dan absensi sebelum mengumumkan hasil:

```text
1. Periksa data valid: nilai antara 0-100?
2. Periksa kehadiran: minimal 75%?
3. Periksa nilai akhir: masuk kategori mana?
4. Umumkan hasil
```

---

## Visual Illustration

```text
nilai valid (0-100)?
    ├─ tidak → "Data Tidak Valid"
    └─ ya
         │
         ▼
   kehadiran >= 75?
         │
     ya  │ tidak
         │
         ▼
   nilai >= 90? → Sangat Baik — Lulus
   nilai >= 75? → Baik — Lulus
   nilai >= 60? → Cukup — Remedial
   lainnya      → Perlu Bimbingan — Remedial
```

---

## Mari Mencoba

Buat `src/bab2/studi-kasus-penilaian.ts`:

```ts
const namaSiswa: string = "Dewi Rahayu"
const nilaiAkhir: number = 83
const persentaseKehadiran: number = 88
const batasKehadiran: number = 75

const nilaiValid: boolean = nilaiAkhir >= 0 && nilaiAkhir <= 100

let kategori: string
let status: string
let catatan: string

if (!nilaiValid) {
  kategori = "Tidak Valid"
  status = "Tidak Dapat Diproses"
  catatan = "Harap periksa kembali nilai yang dimasukkan."
} else if (persentaseKehadiran < batasKehadiran) {
  kategori = "Kehadiran Kurang"
  status = "Tidak Lulus"
  catatan = `Kehadiran ${persentaseKehadiran}% di bawah batas minimal ${batasKehadiran}%.`
} else if (nilaiAkhir >= 90) {
  kategori = "Sangat Baik"
  status = "Lulus"
  catatan = "Pertahankan prestasi yang luar biasa!"
} else if (nilaiAkhir >= 75) {
  kategori = "Baik"
  status = "Lulus"
  catatan = "Kamu lulus. Tingkatkan lagi di semester berikutnya."
} else if (nilaiAkhir >= 60) {
  kategori = "Cukup"
  status = "Remedial"
  catatan = "Kamu perlu mengikuti remedial. Jangan menyerah!"
} else {
  kategori = "Perlu Bimbingan"
  status = "Remedial"
  catatan = "Silakan temui wali kelas untuk bimbingan lebih lanjut."
}

const laporan: string = `
=========================================
       HASIL PENILAIAN AKHIR
=========================================
Nama         : ${namaSiswa}
Nilai Akhir  : ${nilaiAkhir}
Kehadiran    : ${persentaseKehadiran}%
-----------------------------------------
Status       : ${status}
Kategori     : ${kategori}
-----------------------------------------
Catatan      : ${catatan}
=========================================
`

console.log(laporan)
```

Jalankan:

```text
tsx src/bab2/studi-kasus-penilaian.ts
```

---

## Output

```text
=========================================
       HASIL PENILAIAN AKHIR
=========================================
Nama         : Dewi Rahayu
Nilai Akhir  : 83
Kehadiran    : 88%
-----------------------------------------
Status       : Lulus
Kategori     : Baik
-----------------------------------------
Catatan      : Kamu lulus. Tingkatkan lagi di semester berikutnya.
=========================================
```

---

## Penjelasan Baris per Baris

### Validasi nilai

```ts
const nilaiValid: boolean = nilaiAkhir >= 0 && nilaiAkhir <= 100
```

Operator `&&` memastikan nilai berada antara 0 dan 100. Salah satu syarat saja tidak cukup.

### Cabang pertama: data tidak valid

```ts
if (!nilaiValid) {
```

`!nilaiValid` berarti jika nilai tidak valid. Program langsung memberi status tidak dapat diproses.

### Cabang kehadiran

Jika data valid, program mengecek kehadiran lebih dulu sebelum memeriksa nilai.

### Cabang kategori

Seperti yang direncanakan: dari Sangat Baik ke Perlu Bimbingan, diperiksa dari tertinggi ke terendah.

### Template literal laporan

`${}` memasukkan variabel ke dalam teks multi-baris.

---

## Ubah Data untuk Eksperimen

Coba nilai dan kehadiran berbeda:

| Skenario | nilai | kehadiran |
|---|---|---|
| Sangat baik | 95 | 95 |
| Tidak hadir cukup | 85 | 60 |
| Nilai tidak valid | 110 | 80 |
| Perlu bimbingan | 45 | 80 |

---

## Kesalahan Umum

```ts
} else if (nilaiAkhir >= 60) {
  status = "Remedial"
} else if (nilaiAkhir >= 75) {
  status = "Lulus"
}
```

Urutan kondisi salah. Nilai 82 masuk `>= 60` dulu, sehingga status Lulus tidak pernah tercapai.

---

## Latihan

Tambahkan satu fitur ke studi kasus:

- Nilai praktik terpisah dari nilai teori.
- Rata-rata dihitung dari keduanya.
- Laporan menyertakan nilai teori, praktik, dan rata-rata.

---

## Ringkasan

- Perancangan logika lebih dulu membuat kode lebih mudah.
- Validasi data sebelum melanjutkan ke logika utama adalah kebiasaan baik.
- Urutan kondisi `else if` mempengaruhi hasil.
- Template literal multi-baris berguna untuk laporan terminal.

:::tip[Langkah Selanjutnya]
Lanjut ke **Mini Project**.
:::
