---
title: "Membuat Object (Instansiasi)"
description: Belajar proses mencetak objek nyata dari cetak biru class menggunakan kata kunci new.
---

# Membuat Object (Instansiasi)

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan arti dari instansiasi (*instantiation*).
- Menggunakan kata kunci `new` untuk membuat instansi objek baru.
- Menjelaskan di mana objek disimpan di dalam memori komputer.

---

## Pendahuluan

Class hanyalah rancangan di atas kertas. Untuk menggunakannya dalam aplikasi nyata, kita harus menghidupkan rancangan tersebut menjadi benda fisik di dalam memori komputer. Proses menghidupkan class menjadi objek nyata ini disebut **Instansiasi** (*Instantiation*), dan objek yang dihasilkan disebut **Instance**.

---

## Penjelasan Materi: Kata Kunci `new`

Untuk membuat objek baru dari sebuah class, kita menggunakan kata kunci **`new`** diikuti nama class dan tanda kurung `()`:

```ts
const namaObjek = new NamaClass();
```

Saat baris ini dieksekusi, komputer akan dialokasikan tempat khusus di memori RAM untuk menyimpan seluruh property milik objek tersebut.

---

## Analogi Kehidupan Sehari-hari: Rumah Fisik yang Selesai Dibangun

Kamu memegang cetak biru (blueprint) perumahan:

```text
Class = Sketsa blueprint rumah
```

Ketika kamu menyewa tukang, membeli semen, bata, dan mulai **membangun rumah fisik** di atas tanah kaveling nomor 5:

```text
Proses "new" = Pembangunan fisik rumah
```

Rumah yang sudah berdiri kokoh di atas tanah tersebut adalah **Object (Instance)**. Rumah ini memiliki alamat fisik yang nyata (alamat memori RAM), memiliki warna dinding asli, dan siap ditinggali. Kamu bisa membangun rumah kedua di kaveling nomor 6 menggunakan blueprint yang sama.

---

## Visual Illustration: Instansiasi Objek

```text
Class Siswa (Cetak Biru)
     │
     ├─ new Siswa() ──► Objek siswa1 { nama: "Putra", umur: 17 } (tersimpan di RAM Alamat A)
     │
     └─ new Siswa() ──► Objek siswa2 { nama: "Dewi", umur: 16 }  (tersimpan di RAM Alamat B)
```

---

## Mari Mencoba: Instansiasi Banyak Objek

Mari kita buat program untuk membuat beberapa objek dari class yang sama dan membuktikan bahwa properti mereka tersimpan secara terpisah.

Buat file bernama `src/bab8/membuat-object.ts`:

```ts
class Handphone {
  merk: string = "";
  ramGB: number = 0;
  warna: string = "";

  tampilkanSpesifikasi(): void {
    console.log(`HP ${this.merk} | RAM: ${this.ramGB} GB | Warna: ${this.warna}`);
  }
}

// 1. Instansiasi Objek HP pertama
const hpAndi = new Handphone();
hpAndi.merk = "Xiaomi";
hpAndi.ramGB = 8;
hpAndi.warna = "Hitam";

// 2. Instansiasi Objek HP kedua
const hpBudi = new Handphone();
hpBudi.merk = "Samsung";
hpBudi.ramGB = 12;
hpBudi.warna = "Biru";

// 3. Menjalankan Method dari masing-masing objek
console.log("=== HP Andi ===");
hpAndi.tampilkanSpesifikasi();

console.log("\n=== HP Budi ===");
hpBudi.tampilkanSpesifikasi();
```

Jalankan dengan perintah:
```text
tsx src/bab8/membuat-object.ts
```

## Output
```text
=== HP Andi ===
HP Xiaomi | RAM: 8 GB | Warna: Hitam

=== HP Budi ===
HP Samsung | RAM: 12 GB | Warna: Biru
```

---

## Penjelasan Baris per Baris

- `const hpAndi = new Handphone()` — Mencetak objek nyata pertama bernama `hpAndi` dari rancangan `Handphone`.
- `hpAndi.merk = "Xiaomi"` — Mengubah data properti khusus milik objek `hpAndi`.
- `hpBudi.merk = "Samsung"` — Mengubah data properti khusus milik objek `hpBudi`. Data ini disimpan di lokasi RAM yang berbeda, sehingga tidak menimpa data milik `hpAndi`.
- `this.merk` di dalam method akan otomatis merujuk ke data objek pemanggilnya (hpAndi mencetak Xiaomi, hpBudi mencetak Samsung).

---

## Kesalahan yang Sering Terjadi

### ❌ Lupa menuliskan kata kunci `new` saat membuat objek
```ts
const hpC = Handphone(); // Error di TypeScript!
// Value of type 'typeof Handphone' is not callable. Did you mean to include 'new'?
```

**Perbaikan:** Ingat bahwa class tidak bisa dipanggil langsung seperti fungsi biasa. Wajib menggunakan kata kunci `new` di depannya.

---

## Tips
:::tip[Gunakan Nama Variabel Deskriptif]
Gunakan nama variabel yang jelas untuk objek (seperti `hpAndi`, `siswaRPL`), bukan huruf acak (seperti `h`, `s`, `x`). Ini mempermudah pelacakan objek mana yang sedang kamu operasikan.
:::

---

## Latihan
1. Buat class bernama `Siswa` di file baru.
2. Buat tiga objek dari class tersebut (misal: `siswa1`, `siswa2`, `siswa3`).
3. Beri nama dan umur yang berbeda pada setiap objek, lalu cetak spesifikasinya.

---

## Ringkasan
- Instansiasi adalah proses pembuatan objek nyata dari class menggunakan keyword `new`.
- Setiap objek baru yang dibuat disimpan di lokasi memori yang terpisah.
- Lupa menggunakan keyword `new` akan memicu error kompilasi di TypeScript.

:::tip[Langkah Selanjutnya]
Lanjut ke **Constructor** untuk mempermudah proses pengisian data objek saat baru dibuat.
:::
