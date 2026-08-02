---
title: "Error Corner BAB 10"
description: Mengenali dan memperbaiki berbagai kesalahan paling umum saat menggunakan Asynchronous dan Module System di TypeScript.
---

# Error Corner BAB 10

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Mengidentifikasi penyebab error umum pada async/await dan module system.
- Membaca pesan error compiler terkait path impor dan unhandled promise rejections.
- Memperbaiki kesalahan syntax ekspor dan impor.

---

## Pendahuluan

Kesalahan pada pemrograman Asynchronous sering memicu crash program saat dijalankan (runtime error), sedangkan kesalahan pada Module System langsung memicu error kompilasi karena file tidak dapat ditemukan atau nama komponen tidak cocok.

---

## Error 1 — Lupa Menuliskan `await` pada Promise

### Kode Bermasalah
```ts
async function main() {
  const data = fetch("https://api.com/siswa");
  // console.log(data.status); // Error!
  // Property 'status' does not exist on type 'Promise<Response>'.
}
```

### Mengapa Terjadi?
`fetch()` mengembalikan objek `Promise`, bukan data respon langsung. Jika kamu lupa menulis `await`, variabel `data` akan tetap bertipe Promise (dalam status pending) dan tidak memiliki properti `.status`.

### Cara Memperbaiki
```ts
const response = await fetch("https://api.com/siswa"); // ✓ Tambahkan await
console.log(response.status);
```

---

## Error 2 — Unhandled Promise Rejection (Lupa catch)

### Kode Bermasalah
```ts
function ambilData() {
  return Promise.reject("Koneksi Terputus!");
}

ambilData().then((hasil) => console.log(hasil));
// Jika gagal, program memicu crash dengan pesan:
// UnhandledPromiseRejectionWarning: Unhandled promise rejection.
```

### Mengapa Terjadi?
Sebuah Promise yang dibatalkankan (`reject`) wajib ditangkap kegagalannya menggunakan `.catch()` atau `try...catch` agar Node.js tidak mengalami crash.

### Cara Memperbaiki
```ts
ambilData()
  .then((hasil) => console.log(hasil))
  .catch((error) => console.log("Gagal:", error)); // ✓ Tangkap error
```

---

## Error 3 — Salah Menuliskan Ekstensi `.ts` pada Path Impor

### Kode Bermasalah
```ts
import { Siswa } from "./siswa.ts"; // Error di TypeScript!
// An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.
```

### Mengapa Terjadi?
TypeScript secara default melarang penulisan ekstensi `.ts` secara langsung pada jalur impor file karena proses kompilasi akan mengubahnya menjadi `.js`.

### Cara Memperbaiki
Cukup tulis nama filenya saja tanpa ekstensi:
```ts
import { Siswa } from "./siswa"; // ✓
```

---

## Error 4 — Tertukar antara Default dan Named Import

### Kode Bermasalah
```ts
// File: siswa.ts
export default class Siswa {}

// File: main.ts (Salah memakai kurung kurawal)
import { Siswa } from "./siswa"; // Error!
// Module './siswa' has no exported member 'Siswa'. Did you mean to use 'import Siswa from "./siswa"'?
```

### Mengapa Terjadi?
Default export diimpor **tanpa** kurung kurawal `{ }`. Named export diimpor **wajib** menggunakan kurung kurawal `{ }`.

### Cara Memperbaiki
```ts
import Siswa from "./siswa"; // ✓ Tanpa kurung kurawal untuk default export
```

---

## Error 5 — Akses Variabel Async Sebelum Callback Selesai

### Kode Bermasalah
```ts
let namaSiswa = "";
ambilNilaiSiswa(1001, (siswa) => {
  namaSiswa = siswa.nama;
});
console.log(namaSiswa); // Output: "" (kosong!)
```

### Mengapa Terjadi?
`console.log` di luar callback dijalankan secara synchronous (instan), sedangkan pengisian `namaSiswa` di dalam callback baru terjadi setelah 2 detik di latar belakang.

### Cara Memperbaiki
Pindahkan seluruh kode pemrosesan data hasil ke **dalam** blok callback:
```ts
ambilNilaiSiswa(1001, (siswa) => {
  const namaSiswa = siswa.nama;
  console.log(namaSiswa); // ✓ Berhasil menampilkan data
});
```

---

## Strategi Umum Debugging Module & Async

1. **Gunakan `console.log(typeof data)`**: Cek apakah data yang kamu miliki sudah berwujud objek atau masih berwujud `Promise` (lupa await).
2. **Cek Bea Cukai BEA (Export/Import)**: Jika VS Code bertuliskan *Cannot find module*, periksa ejaan path file, pastikan file tujuan sudah memiliki keyword `export`, dan tidak menulis ekstensi `.ts`.

---

## Latihan
Perbaiki seluruh kesalahan dalam kode di bawah ini agar dapat dikompilasi tanpa error:

```ts
// Tulis ulang kode di bawah ini dengan format import dan await yang benar:
// import { Siswa } from "./siswa-default.ts"; 

// async function main() {
//   const data = fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log(data.title);
// }
```

---

## Ringkasan
- Lupa `await` membuat variabel tetap berisi Promise pending.
- Selalu gunakan `.catch()` atau `try...catch` pada Promise.
- Impor file lokal dilarang menuliskan ekstensi `.ts`.
- Default import tidak memakai `{ }`, Named import wajib memakai `{ }`.

:::tip[Langkah Selanjutnya]
Lanjut ke **Ringkasan BAB 10** untuk merangkum seluruh materi.
:::
