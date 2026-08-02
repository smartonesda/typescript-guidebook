---
title: "Static Member"
description: Menggunakan Static Property dan Static Method untuk membuat anggota Class milik bersama di TypeScript.
---

# Static Member

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan perbedaan properti instance dan properti static.
- Membuat Static Property dan Static Method di dalam Class.
- Mengakses static member langsung menggunakan nama Class tanpa kata kunci new.

---

## Pendahuluan

Normalnya, setiap kali kita membuat objek baru menggunakan `new`, objek tersebut memiliki properti masing-masing yang tersimpan di lokasi memori yang terpisah. 

Namun, bagaimana jika kita ingin memiliki data atau fungsi yang **dimiliki bersama** oleh seluruh objek, dan tidak terpisah-pisah? Kita menggunakan kata kunci **`static`**.

---

## Penjelasan Materi: Apa itu Static Member?

**Static Member** (properti atau method static) adalah anggota dari class yang **menempel langsung pada Class itu sendiri**, bukan pada objek hasil cetakannya (instance).

Sintaks dasar:

```ts
class Siswa {
  static totalSiswa: number = 0; // Properti Static
}
```

Cara mengakses properti static dari luar class:
```ts
console.log(Siswa.totalSiswa); // Diakses langsung menggunakan nama Class
```

Kamu **tidak perlu** menggunakan kata kunci `new` untuk mengakses static member.

---

## Analogi Kehidupan Sehari-hari: Tempat Parkir Bersama di Sekolah

Bayangkan fasilitas di sekolah:

### Properti Non-Static (Alat Tulis Siswa)
Setiap siswa memiliki pulpen dan buku tulis masing-masing di dalam tas mereka. Pulpen Budi adalah miliknya sendiri, pulpen Andi adalah milik Andi.
```text
Instance Property = Pulpen di dalam tas masing-masing siswa (terpisah)
```

### Properti Static (Tempat Parkir Sekolah)
Sekolah memiliki area parkir motor bersama. Semua siswa memarkir motor mereka di area yang sama. Area parkir ini bukan milik satu siswa tertentu, melainkan fasilitas milik bersama yang menempel pada sekolah tersebut.
```text
Static Property = Area parkir motor sekolah (satu fasilitas untuk semua)
```

---

## Visual Illustration: Penunjukan Static vs Instance

```text
Instance (new) ──► siswa1 { nama: "Putra" }
               ──► siswa2 { nama: "Dewi" }  (data nama terpisah untuk tiap objek)

Static (Class) ──► Siswa.totalSiswa = 2     (hanya ada satu data untuk seluruh sistem)
```

---

## Mari Mencoba: Menghitung Jumlah Objek Secara Otomatis

Mari kita buat program class `SiswaRPL` yang menghitung secara otomatis berapa kali objek baru dicetak dari class tersebut menggunakan properti static.

Buat file bernama `src/bab8/static-member.ts`:

```ts
class SiswaRPL {
  // Properti static milik bersama seluruh sistem
  public static totalSiswa: number = 0;

  constructor(public nama: string) {
    // Setiap kali objek dibuat, naikkan jumlah totalSiswa
    SiswaRPL.totalSiswa++;
  }

  // Method static (fungsi bantu bersama)
  public static hitungSetengahSiswa(): number {
    return SiswaRPL.totalSiswa / 2;
  }
}

console.log("Total awal:", SiswaRPL.totalSiswa); // 0 (belum ada objek)

// Membuat objek-objek baru
const s1 = new SiswaRPL("Andi");
const s2 = new SiswaRPL("Budi");
const s3 = new SiswaRPL("Citra");

console.log("Setelah 3 objek dibuat:");
console.log(`  Total Siswa Saat Ini: ${SiswaRPL.totalSiswa}`); // Output: 3
console.log(`  Setengah Total      : ${SiswaRPL.hitungSetengahSiswa()}`); // Output: 1.5

// Mencoba akses static dari instance objek (Error!)
// console.log(s1.totalSiswa); // ✗ Error! Property 'totalSiswa' is a static member.
```

Jalankan dengan perintah:
```text
tsx src/bab8/static-member.ts
```

## Output
```text
Total awal: 0
Setelah 3 objek dibuat:
  Total Siswa Saat Ini: 3
  Setengah Total      : 1.5
```

---

## Penjelasan Baris per Baris

- `public static totalSiswa` — Properti static dideklarasikan dengan tambahan kata kunci `static`.
- `SiswaRPL.totalSiswa++` — Di dalam constructor, setiap kali objek baru dibuat, kita menaikkan nilai properti static menggunakan nama class-nya (`SiswaRPL`).
- `SiswaRPL.hitungSetengahSiswa()` — Memanggil method static secara langsung tanpa instansiasi objek.
- Properti static tidak bisa diakses dari instance objek (`s1.totalSiswa` akan memicu error compiler).

---

## Contoh Penggunaan Static: Fungsi Utilitas Matematika

Class `Math` bawaan JavaScript adalah contoh class static. Kamu tidak pernah menulis `const m = new Math(); m.sqrt(4)`. Kamu langsung memanggil:

```ts
const hasil = Math.sqrt(16); // 4
const pi = Math.PI;          // 3.14...
```

---

## Latihan
1. Buat class bernama `KonverterSuhu` dengan method static `celsiusKeFahrenheit(c: number): number`.
2. Panggil method tersebut secara langsung dari luar class tanpa menggunakan `new` dan tampilkan hasilnya di terminal.

---

## Ringkasan
- Anggota `static` menempel langsung pada Class, bukan pada instance objek.
- Dapat berupa properti maupun method.
- Diakses langsung menggunakan nama Class: `NamaClass.anggotaStatic`.
- Bagus untuk menyimpan data global kelas atau fungsi utilitas bantuan bersama.

:::tip[Langkah Selanjutnya]
Lanjut ke **Getter & Setter** untuk mempelajari pengontrol akses properti objek.
:::
