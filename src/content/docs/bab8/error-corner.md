---
title: "Error Corner BAB 8"
description: Mengenali dan memperbaiki berbagai kesalahan paling umum saat menulis kode Object-Oriented Programming (OOP) di TypeScript.
---

# Error Corner BAB 8

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Mengidentifikasi penyebab error umum dalam OOP (seperti akses private ilegal atau lupa new).
- Membaca pesan error compiler TypeScript terkait Class dengan tenang.
- Memperbaiki kesalahan syntax dan struktur logika class.

---

## Pendahuluan

Menulis kode OOP membutuhkan ketelitian tinggi. Kesalahan penulisan tipe, pelanggaran access modifier, atau salah urutan dalam memanggil constructor induk seringkali memicu error merah. Halaman ini merangkum kesalahan-kesalahan tersebut beserta cara memperbaikinya.

---

## Error 1 — Lupa Menuliskan Kata Kunci `new`

### Kode Bermasalah
```ts
class Siswa {
  constructor(public nama: string) {}
}

const siswaA = Siswa("Putra"); // Error!
// Value of type 'typeof Siswa' is not callable. Did you mean to include 'new'?
```

### Mengapa Terjadi?
Class bukan fungsi biasa yang bisa dipanggil langsung. Class adalah rancangan yang membutuhkan proses instansiasi fisik menggunakan `new`.

### Cara Memperbaiki
```ts
const siswaA = new Siswa("Putra"); // ✓
```

---

## Error 2 — Mengakses Properti `private` dari Luar Class

### Kode Bermasalah
```ts
class Akun {
  private pin: number = 1234;
}

const akunKu = new Akun();
console.log(akunKu.pin); // Error!
// Property 'pin' is private and only accessible within class 'Akun'.
```

### Mengapa Terjadi?
Properti yang ditandai `private` dikunci rapat dan hanya boleh diakses oleh kode yang berada di dalam tubuh class `Akun` itu sendiri.

### Cara Memperbaiki
Buatlah method public (seperti getter) untuk mengakses datanya secara terkontrol:
```ts
class Akun {
  private pin: number = 1234;

  public dapatkanPin(): number {
    return this.pin;
  }
}
// Di luar: akunKu.dapatkanPin()
```

---

## Error 3 — Lupa Memanggil `super()` di Constructor Anak

### Kode Bermasalah
```ts
class Orang {
  constructor(public nama: string) {}
}

class Siswa extends Orang {
  constructor(nama: string, public nis: number) {
    // Lupa memanggil super(nama)
    this.nis = nis; // Error!
    // Constructors for derived classes must contain a 'super' call.
  }
}
```

### Mengapa Terjadi?
Class anak yang mewarisi class induk wajib menjalankan constructor milik induknya terlebih dahulu agar data induk terinisialisasi secara utuh.

### Cara Memperbaiki
Panggil `super(...)` di **baris paling pertama** di dalam constructor anak:
```ts
constructor(nama: string, public nis: number) {
  super(nama); // ✓ Wajib di baris pertama
  this.nis = nis;
}
```

---

## Error 4 — Lupa Menuliskan Keyword `this` saat Mengakses Properti internal

### Kode Bermasalah
```ts
class Siswa {
  nama: string = "Andi";

  sapa() {
    console.log(`Halo, saya ${nama}`); // Error!
    // Cannot find name 'nama'.
  }
}
```

### Mengapa Terjadi?
Meskipun berada di dalam class yang sama, compiler tidak otomatis mencari variabel ke tingkat properti class. Kamu harus mengarahkannya secara eksplisit.

### Cara Memperbaiki
```ts
console.log(`Halo, saya ${this.nama}`); // ✓ Gunakan this.
```

---

## Error 5 — Mencoba Membuat Objek dari Abstract Class

### Kode Bermasalah
```ts
abstract class Hewan {}
const h = new Hewan(); // Error!
// Cannot create an instance of an abstract class.
```

### Mengapa Terjadi?
Abstract Class adalah class konsep/setengah jadi yang dilarang diinstansiasi langsung secara fisik.

### Cara Memperbaiki
Buatlah class anak konkrit yang mewarisinya, lalu buatlah objek dari class anak tersebut:
```ts
class Kucing extends Hewan {}
const k = new Kucing(); // ✓
```

---

## Error 6 — Lupa Menulis Parameter pada Setter

### Kode Bermasalah
```ts
class Siswa {
  private _nilai = 0;
  
  set nilai() { // Error!
    // A 'set' accessor must have exactly one parameter.
  }
}
```

### Cara Memperbaiki
Method setter wajib menerima tepat satu parameter nilai baru yang akan dimasukkan:
```ts
set nilai(nilaiBaru: number) {
  this._nilai = nilaiBaru;
}
```

---

## Strategi Umum Debugging OOP

1. **Baca baris error paling atas**: VS Code biasanya memberikan petunjuk class mana yang memiliki properti kurang atau salah tipe.
2. **Periksa keyword `this`**: Jika variabel dianggap tidak ada padahal kamu sudah mendeklarasikannya di atas, periksa apakah kamu lupa mengetik `this.`.
3. **Periksa access modifier**: Pastikan kamu tidak tidak sengaja memanggil variabel `private` atau `protected` dari luar objek.

---

## Latihan
Perbaiki seluruh kesalahan dalam kode di bawah ini agar dapat dikompilasi tanpa error:

```ts
abstract class Kendaraan {
  constructor(public merk: string) {}
}

class Mobil extends Kendaraan {
  constructor(merk: string, public pintu: number) {
    this.pintu = pintu;
    super(merk);
  }
  
  info() {
    console.log(`Mobil merk ${merk} pintu ${pintu}`);
  }
}

const k = new Kendaraan("Toyota");
const m = Mobil("Suzuki", 4);
m.info();
```

---

## Ringkasan
- Class wajib dibuat menggunakan keyword `new`.
- Properti `private` dilarang diakses dari luar class.
- Constructor anak wajib memanggil `super()` di baris pertama.
- Selalu gunakan `this.` untuk mengakses properti/method se-class.

:::tip[Langkah Selanjutnya]
Lanjut ke **Ringkasan BAB 8** untuk merangkum seluruh materi sebelum ujian kompetensi.
:::
