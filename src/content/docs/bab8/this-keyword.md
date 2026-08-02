---
title: "this Keyword"
description: Memahami arti dan kegunaan keyword this sebagai pointer penunjuk objek pemilik di dalam Class.
---

# this Keyword

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan definisi keyword `this` di dalam Class.
- Menggunakan `this` untuk membedakan properti class dengan variabel lokal.
- Menghindari bug akibat hilangnya konteks `this`.

---

## Pendahuluan

Ketika kita menulis kode di dalam class, komputer perlu tahu: *"Variabel mana yang dimaksud? Apakah variabel lokal di dalam fungsi, atau properti milik objek ini?"* 

Kata kunci **`this`** adalah kunci pengenal untuk memberitahu komputer agar mengakses data milik objek itu sendiri.

---

## Penjelasan Materi: Apa itu `this`?

Kata kunci `this` di dalam class merujuk pada **instance objek yang saat ini sedang memanggil method tersebut**.

```ts
class Siswa {
  nama: string = "Andi";

  sapa(): void {
    console.log(`Halo, saya ${this.nama}`); // "this" merujuk pada objek pemanggil
  }
}
```

Jika objek `siswa1` memanggil `sapa()`, maka `this.nama` berarti `siswa1.nama`. Jika `siswa2` yang memanggil, maka `this.nama` berarti `siswa2.nama`.

---

## Analogi Kehidupan Sehari-hari: Kata Ganti "Saya"

Bayangkan kata "saya" di dunia nyata:
- Jika **Andi** berkata: "Kamera **saya** berwarna hitam." → "Saya" merujuk pada Andi.
- Jika **Budi** berkata: "Kamera **saya** berwarna merah." → "Saya" merujuk pada Budi.

```text
Keyword "this" = Kata ganti "Saya" / "Milik saya"
```

Kata "saya" tidak menunjuk satu orang tertentu secara permanen. Artinya berubah secara dinamis tergantung **siapa yang sedang berbicara**. Begitu pula `this`: artinya berubah tergantung **objek mana yang sedang menjalankan kode**.

---

## Visual Illustration: Alur Penunjukan `this`

```text
hp1 (merk: "Xiaomi")  ──► memanggil tampilkan() ──► this.merk ──► "Xiaomi"

hp2 (merk: "Samsung") ──► memanggil tampilkan() ──► this.merk ──► "Samsung"
```

---

## Mari Mencoba: Membedakan Properti vs Parameter

Keyword `this` sangat berguna untuk membedakan properti class dengan parameter method yang memiliki nama yang sama.

Buat file bernama `src/bab8/this-keyword.ts`:

```ts
class SiswaProfil {
  nama: string = "Siswa Baru";

  // Nama parameter sama dengan nama properti class
  perbaruiNama(nama: string): void {
    console.log(`Parameter nama   : ${nama}`);
    console.log(`Properti awal    : ${this.nama}`);
    
    // Menggunakan this untuk membedakan
    this.nama = nama; 
    
    console.log(`Properti sekarang: ${this.nama}`);
  }
}

const siswaA = new SiswaProfil();
siswaA.perbaruiNama("Putra Ramadhan");
```

Jalankan dengan perintah:
```text
tsx src/bab8/this-keyword.ts
```

## Output
```text
Parameter nama   : Putra Ramadhan
Properti awal    : Siswa Baru
Properti sekarang: Putra Ramadhan
```

---

## Penjelasan Baris per Baris

- `this.nama = nama` — `this.nama` merujuk pada properti `nama` di bagian atas class (Siswa Baru). Sedangkan `nama` tanpa `this` di sebelah kanan merujuk pada parameter input fungsi (Putra Ramadhan).
- Tanpa `this`, komputer akan bingung atau salah mengambil cakupan scope variabel.

---

## Kesalahan yang Sering Terjadi

### ❌ Menulis nama properti tanpa `this` di dalam method
```ts
class Siswa {
  nama: string = "Andi";
  sapa() {
    console.log(nama); // Error di TypeScript! Cannot find name 'nama'.
  }
}
```

**Perbaikan:** Meskipun berada di dalam class yang sama, setiap kali kamu ingin mengakses properti atau method milik class, kamu **wajib** menuliskan `this.` di depannya.

---

## Tips
:::tip[Gunakan this Secara Konsisten]
Jadikan kebiasaan otomatis: jika ingin memanggil data atau fungsi yang berada di luar method tetapi masih satu class, mulailah dengan mengetik `this.`.
:::

---

## Latihan
1. Buat class `KalkulatorSederhana` dengan properti `angka` (number = 10).
2. Tambahkan method `tambahDengan(angka: number): void` yang menambahkan parameter `angka` ke properti `this.angka` milik class.
3. Tampilkan hasil akhirnya di terminal.

---

## Ringkasan
- Keyword `this` merujuk pada objek instance yang saat ini sedang aktif.
- Berfungsi membedakan properti class dengan variabel lokal atau parameter method.
- Wajib menggunakan `this.` untuk mengakses data internal class dari dalam method.

:::tip[Langkah Selanjutnya]
Lanjut ke **Access Modifier** untuk mulai membatasi keamanan akses properti class.
:::
