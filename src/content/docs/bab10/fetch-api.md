---
title: "Fetch API"
description: Mengambil data nyata dari internet secara asynchronous menggunakan Fetch API di TypeScript.
---

# Fetch API

## Tujuan Pembelajaran
Setelah membaca halaman ini, kamu diharapkan dapat:
- Menjelaskan kegunaan Fetch API.
- Melakukan HTTP request GET ke data API gratis di internet.
- Mengonversi respon Fetch menjadi format JSON secara asynchronous.
- Memproses data hasil Fetch menggunakan interface TypeScript.

---

## Pendahuluan

Hampir tidak ada aplikasi modern yang datanya hanya ditulis manual di dalam kode program (*hardcoded*). Aplikasi game, cuaca, sosial media, dan sistem sekolah mengambil data dari server terpisah di internet menggunakan protokol HTTP.

TypeScript menyediakan method bawaan bernama **`fetch()`** untuk melakukan pengambilan data tersebut.

---

## Penjelasan Materi: Apa itu Fetch API?

**Fetch API** adalah fungsi asynchronous bawaan web browser dan Node.js modern untuk mengirimkan permintaan (request) dan mengambil tanggapan (response) dari suatu alamat URL web server (API Endpoint).

Karena proses mengambil data lewat internet membutuhkan waktu perjalanan paket data, fungsi `fetch()` selalu mengembalikan objek **`Promise`**.

Alur penggunaan Fetch API:
1. Hubungi alamat API: `const response = await fetch(url)`.
2. Ubah respon teks mentah menjadi format objek JSON: `const data = await response.json()`.
3. Gunakan data tersebut di dalam program.

---

## Analogi Kehidupan Sehari-hari: Memesan Buku ke Toko Pusat

Kamu ingin membaca buku novel terbaru yang tidak ada di perpustakaan sekolahmu:

```text
1. Kamu mengirim surat pesanan (fetch) ke Toko Buku Pusat di Jakarta.
2. Kamu menunggu paket dikirimkan lewat kurir ekspedisi (Promise).
3. Paket tiba di sekolah ──► paket masih terbungkus lakban segel coklat (Response mentah).
4. Kamu membuka segel pembungkus dan mengambil buku aslinya (Konversi ke JSON).
5. Kamu membaca isi buku tersebut.
```

---

## Endpoint API Gratis untuk Latihan

Untuk latihan, kita akan menggunakan API gratis dari **JSONPlaceholder** — server simulasi yang menyediakan data dummy gratis untuk programmer:

`https://jsonplaceholder.typicode.com/todos/1`

Data tersebut berisi status tugas dalam format JSON:

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

---

## Mari Mencoba: Mengambil Data Tugas Ujian Nyata

Mari kita buat program pengambil data tugas di file `src/bab10/fetch-api.ts`.

Buat file bernama `src/bab10/fetch-api.ts`:

```ts
// 1. Definisikan Interface agar data hasil fetch aman tipenya
interface TugasSiswa {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// 2. Fungsi async untuk mengambil data
async function ambilTugasSekolah(idTugas: number): Promise<void> {
  const url = `https://jsonplaceholder.typicode.com/todos/${idTugas}`;

  try {
    console.log(`[Fetch]: Meminta data tugas ID ${idTugas} ke server...`);
    
    // Langkah 1: Kirim request ke internet (Fetch)
    const response = await fetch(url);
    
    // Cek apakah HTTP status sukses (200-299)
    if (!response.ok) {
      throw new Error(`Gagal memuat data (HTTP Status: ${response.status})`);
    }

    // Langkah 2: Konversi response mentah ke JSON (asynchronous juga!)
    const data: TugasSiswa = await response.json();

    // Langkah 3: Gunakan data
    console.log("\n=== DATA DARI SERVER INTERNET ===");
    console.log(`ID Tugas : ${data.id}`);
    console.log(`Judul    : ${data.title}`);
    console.log(`Selesai? : ${data.completed ? "✓ Sudah" : "✗ Belum"}`);
    console.log("=================================");

  } catch (error) {
    console.log("⚠ Terjadi kesalahan pengambilan data:", error);
  }
}

// Jalankan pengambilan tugas ID 1 dan ID 5
async function main() {
  await ambilTugasSekolah(1);
  console.log("\n");
  await ambilTugasSekolah(5);
}

main();
```

Jalankan dengan perintah (pastikan laptopmu terhubung internet):
```text
tsx src/bab10/fetch-api.ts
```

## Output
```text
[Fetch]: Meminta data tugas ID 1 ke server...

=== DATA DARI SERVER INTERNET ===
ID Tugas : 1
Judul    : delectus aut autem
Selesai? : ✗ Belum
=================================


[Fetch]: Meminta data tugas ID 5 ke server...

=== DATA DARI SERVER INTERNET ===
ID Tugas : 5
Judul    : laboriosam mollitia et enim quasi adipisci quia provident illum
Selesai? : ✗ Belum
=================================
```

---

## Penjelasan Baris per Baris

- `const response = await fetch(url)` — Mengirimkan HTTP request GET ke server. Program menunggu sampai server merespon.
- `response.ok` — Boolean bawaan yang bernilai `true` jika HTTP status sukses (biasanya 200).
- `const data: TugasSiswa = await response.json()` — Mengonversi isi respon mentah menjadi objek. Karena proses parsing data besar juga bisa memblokir program, method `.json()` juga mengembalikan Promise sehingga wajib dipasangi `await`.

---

## Kesalahan yang Sering Terjadi

### ❌ Lupa menuliskan `await` pada `response.json()`
Jika kamu menulis `const data = response.json();` tanpa `await`, variabel `data` akan berisi objek `Promise { <pending> }`, bukan data objek aslinya. Kamu akan bingung mengapa datanya tidak bisa dibaca.

**Perbaikan:**

```ts
const data = await response.json(); // ✓ Wajib pakai await
```

---

## Latihan
1. Ganti URL API di atas dengan alamat pengambil data user: `https://jsonplaceholder.typicode.com/users/1`.
2. Buat interface kustom `User` yang memiliki properti: `id` (number), `name` (string), `email` (string), dan `website` (string).
3. Buat fungsi untuk mem-fetch data user tersebut dan mencetaknya.

---

## Ringkasan
- `fetch()` digunakan untuk mengambil data dari server web eksternal (HTTP Request).
- Fungsi `fetch()` mengembalikan Promise.
- Mengonversi data respon menggunakan `await response.json()` (wajib pakai `await`).
- Interface digunakan untuk memetakan data JSON agar tipe datanya terproteksi di TypeScript.

:::tip[Langkah Selanjutnya]
Selamat! Kamu telah menyelesaikan bagian Asynchronous. Sekarang kita masuk ke bagian kedua: **Apa itu Module** untuk mengelola file project besar.
:::
