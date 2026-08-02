---
title: "Type Inference"
description: Memahami kemampuan TypeScript menebak tipe data secara otomatis dari nilai awal.
---

# Type Inference

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu akan mampu:

- Menjelaskan arti type inference
- Mengenali tipe yang TypeScript tebak dari nilai awal
- Menentukan kapan tipe eksplisit diperlukan
- Menulis kode lebih ringkas tanpa kehilangan keamanan tipe

---

## Pendahuluan

Selama ini kita sering menulis tipe secara eksplisit:

```ts
let nama: string = "Putra"
let umur: number = 17
```

Penulisan itu benar. Namun TypeScript punya kemampuan untuk melihat nilai awal lalu **menebak tipe datanya secara otomatis**. Kemampuan ini disebut **type inference**.

---

## Penjelasan Materi

Jika TypeScript melihat string, ia menyimpulkan tipe `string`. Jika melihat angka, ia menyimpulkan `number`. Jika melihat `true` atau `false`, ia menyimpulkan `boolean`.

```ts
let nama = "Putra"     // TypeScript menebak: string
let umur = 17           // TypeScript menebak: number
let aktif = true        // TypeScript menebak: boolean
```

Walau kita tidak menulis `: string`, TypeScript tetap melindungi variabel tersebut:

```ts
let nama = "Putra"
// nama = 17
// Error! Type 'number' is not assignable to type 'string'.
```

---

## Analogi: Guru Menebak Kelas Siswa

Bayangkan seorang guru melihat seragam siswa lengkap dengan badge kelas X RPL 1. Guru tidak perlu bertanya, "Kamu kelas berapa?" Ia bisa menebak dengan benar dari informasi yang terlihat.

```
Nilai awal: "Putra"
        │
        ▼
TypeScript melihat tanda kutip
        │
        ▼
Kesimpulan: ini string
```

Begitu pula TypeScript. Nilai awal adalah "seragam" yang membantu TypeScript mengenali tipe variabel.

---

## Visual Illustration

```
let nama = "Putra"
           └───────┘
          nilai string
                │
                ▼
      TypeScript menyimpulkan
                │
                ▼
       nama bertipe string

let nilai = 90
            └──┘
         nilai number
                │
                ▼
       nilai bertipe number
```

---

## Mari Mencoba

Buat file `src/bab1/type-inference.ts`:

```ts
// TypeScript menebak tipe dari nilai awal
let namaSiswa = "Dewi Rahayu"
let umurSiswa = 17
let nilaiRataRata = 88.5
let statusAktif = true

console.log("Nama:", namaSiswa)
console.log("Umur:", umurSiswa)
console.log("Nilai:", nilaiRataRata)
console.log("Aktif:", statusAktif)

// Coba buka salah satu baris di bawah ini.
// TypeScript akan menampilkan error di VS Code.
// namaSiswa = 100
// umurSiswa = "tujuh belas"
// statusAktif = "ya"
```

Jalankan:

```
tsx src/bab1/type-inference.ts
```

Output:

```text
Nama: Dewi Rahayu
Umur: 17
Nilai: 88.5
Aktif: true
```

---

## Penjelasan Baris per Baris

```ts
let namaSiswa = "Dewi Rahayu"
```

TypeScript melihat nilai di sebelah kanan berupa teks dalam tanda kutip. Maka `namaSiswa` disimpulkan sebagai `string`.

```ts
let nilaiRataRata = 88.5
```

Nilai `88.5` adalah angka. Maka `nilaiRataRata` disimpulkan sebagai `number`.

```ts
let statusAktif = true
```

Nilai `true` adalah boolean. Maka `statusAktif` disimpulkan sebagai `boolean`.

---

## Kapan Type Inference Sangat Berguna?

Type inference cocok saat tipe sudah jelas dari nilai awal:

```ts
const nama = "Putra"        // jelas: string
const tahun = 2026           // jelas: number
const sudahLulus = false     // jelas: boolean
```

Kode menjadi lebih pendek, tetapi tetap aman.

---

## Kapan Tipe Eksplisit Lebih Baik?

Gunakan tipe eksplisit jika:

### 1. Variabel belum punya nilai awal

```ts
let nilaiAkhir: number
nilaiAkhir = 90
```

Tanpa `: number`, TypeScript tidak punya informasi untuk menebak tipe.

### 2. Variabel boleh menerima beberapa tipe

```ts
let email: string | null = null
```

Nilai awalnya `null`, tetapi kita ingin nanti bisa menyimpan string juga. Jadi tipe perlu dijelaskan.

### 3. Kamu ingin membuat maksud kode sangat jelas

```ts
const batasLulus: number = 75
```

Walau TypeScript bisa menebak, anotasi `: number` tetap boleh digunakan untuk membuat aturan data terlihat jelas.

---

## Type Inference Bukan Berarti Tipe Berubah Bebas

Pemula kadang mengira tanpa anotasi tipe, variabel bebas berubah apa saja. Itu keliru.

```ts
let skor = 0
skor = 100      // ✓ masih number
// skor = "seratus"
// Error! tetap terkunci sebagai number
```

Type inference tetap menghasilkan tipe yang dijaga TypeScript.

---

## Kesalahan Umum

### ❌ Mengira `let data = null` bisa diisi string nanti tanpa tipe

```ts
let email = null
// email = "putra@smk.sch.id"
// Bisa bergantung konfigurasi, tetapi maksud tipe menjadi tidak jelas.
```

**Perbaikan:** jelaskan kemungkinan nilainya:

```ts
let email: string | null = null
email = "putra@smk.sch.id"
```

### ❌ Menulis tipe yang bertentangan dengan nilai awal

```ts
let umur: string = 17
// Error! number tidak bisa dimasukkan ke string
```

---

## Tips

:::tip[Gunakan Secukupnya]
Type inference membuat kode bersih. Jangan menulis tipe eksplisit berulang-ulang jika TypeScript sudah bisa menebaknya dengan jelas. Namun jangan juga mengorbankan kejelasan saat nilai awal tidak cukup menjelaskan maksudmu.
:::

---

## Latihan

Buat file `src/bab1/latihan-inference.ts`:

1. Buat empat variabel tanpa anotasi tipe: nama, umur, nilai, status aktif
2. Tampilkan semua variabel
3. Coba ubah satu variabel menjadi tipe yang salah
4. Amati pesan error VS Code
5. Kembalikan kode ke tipe yang benar

---

## Ringkasan

- Type inference adalah kemampuan TypeScript menebak tipe dari nilai awal
- `let nama = "Putra"` otomatis menjadi string
- Variabel tetap dijaga tipenya meski anotasi tipe tidak ditulis
- Gunakan tipe eksplisit saat belum ada nilai awal atau tipe punya beberapa kemungkinan
- Type inference membuat kode lebih ringkas tanpa menghapus keamanan TypeScript

:::tip[Langkah Selanjutnya]
Lanjut ke **Literal Type** untuk membuat tipe yang hanya menerima nilai tertentu.
:::
