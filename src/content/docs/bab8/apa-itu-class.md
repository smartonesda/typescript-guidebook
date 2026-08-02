---
title: "Apa itu Class?"
description: Mengenal konsep Class sebagai cetak biru (blueprint) untuk mencetak objek di TypeScript.
---

# Apa itu Class?

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan perbedaan antara Class dan Object.
- Mengidentifikasi bagian-bagian utama dari sebuah Class.
- Memahami konsep cetak biru (blueprint) dalam OOP.

---

## Pendahuluan

Di halaman-halaman sebelumnya kita sering menggunakan objek literal biasa seperti ini:

```ts
const siswaA = { nama: "Putra", umur: 17 }
const siswaB = { nama: "Dewi", umur: 16 }
```

Cara ini memiliki kelemahan: kita harus mengetik ulang seluruh nama properti (`nama`, `umur`) untuk setiap objek baru. Jika ingin membuat 100 objek siswa, kita harus menulis kurung kurawal `{}` sebanyak 100 kali.

Dalam OOP, kita membuat **cetakan cetak biru** satu kali, lalu menggunakannya untuk mencetak objek sebanyak yang kita mau. Cetakan itu disebut **Class**.

---

## Penjelasan Materi: Class adalah Cetak Biru

**Class** adalah rancangan, cetakan, template, atau cetak biru (*blueprint*) yang menentukan property dan method apa saja yang akan dimiliki oleh objek yang dicetak darinya.

Class sendiri belum menjadi objek nyata yang berisi data. Class baru berupa **sketsa desain**.

**Object** (atau disebut juga *instance*) adalah wujud nyata dari Class yang sudah diisi dengan data konkrit dan siap digunakan di memori komputer.

---

## Analogi Kehidupan Sehari-hari: Cetak Biru Rumah

### Class = Blueprint (Sketsa Arsitek)
Arsitek menggambar sketsa rumah di atas selembar kertas besar. Kertas itu berisi rancangan: rumah harus memiliki 3 kamar tidur, 2 kamar mandi, pintu depan, dan garasi.
- Kertas sketsa itu adalah **Class**. Kamu tidak bisa tinggal di dalam kertas sketsa tersebut, karena ia belum berwujud fisik.

### Object = Rumah Fisik
Kontraktor menggunakan sketsa tersebut untuk membangun rumah nyata menggunakan batu bata, semen, dan kayu di sebidang tanah.
- Rumah fisik yang sudah jadi tersebut adalah **Object** (Instance). Kamu bisa masuk, tidur, dan tinggal di dalamnya.
- Menggunakan sketsa yang sama, kontraktor bisa membangun 100 perumahan dengan bentuk yang sama persis di seluruh Indonesia.

```text
       CLASS (Sketsa Kertas)
┌─────────────────────────────────┐
│ Rencana: 3 kamar, 2 kamar mandi │
└─────────────────────────────────┘
                 │
                 ▼ proses pembangunan (new)
       OBJECT (Rumah Fisik Nyata)
┌─────────────────────────────────┐
│ Rumah di Jl. Pahlawan No. 10    │
└─────────────────────────────────┘
```

---

## Visual Illustration: Alur Class ke Object

```text
   CLASS (Cetak Biru)
┌─────────────────────────┐
│ class Siswa             │
│  - property: nama, kelas│
│  - method: belajar()    │
└─────────────────────────┘
             │
             ▼ dicetak menggunakan keyword "new"
   OBJECT (Hasil Cetak Nyata)
┌─────────────────────────┐
│ siswa1                  │
│  - nama: "Putra"        │
│  - kelas: "XI RPL 1"    │
└─────────────────────────┘
```

---

## Anatomi Struktur Class

Sebuah Class secara umum memiliki bagian-bagian berikut:

```ts
class NamaClass {
  // 1. Properti (Tempat menyimpan informasi data)
  namaProperti: tipeData;

  // 2. Constructor (Fungsi khusus untuk membuat objek baru)
  constructor() { ... }

  // 3. Method (Aksi / perilaku objek)
  namaMethod() { ... }
}
```

Kita akan mempelajari cara menulis masing-masing bagian ini secara mendalam di halaman-halaman berikutnya.

---

## Latihan
1. Tuliskan jawabanmu di file latihan: apa perbedaan utama antara Class dan Object menurut pemahamanmu?
2. Berikan contoh satu Class lain dari dunia sekitar sekolahmu lengkap dengan rencana properti dan method-nya.

---

## Ringkasan
- **Class** adalah cetak biru (blueprint) atau template untuk membuat objek.
- **Object** (Instance) adalah hasil cetak nyata dari Class yang telah diisi data.
- Satu Class dapat digunakan untuk mencetak objek dalam jumlah tidak terbatas menggunakan keyword `new`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Membuat Class** untuk mulai menulis class pertamamu di TypeScript.
:::
