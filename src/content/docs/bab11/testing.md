---
title: "Panduan Pengujian (Testing) — BAB 11"
description: Skenario pengujian manual langkah demi langkah untuk memastikan seluruh fitur SIAKAD-Konsol bekerja dengan benar.
---

# Panduan Pengujian (Testing)

## Tujuan Pembelajaran
Setelah mengikuti halaman ini, kamu diharapkan dapat:
- Melakukan pengujian fungsional secara manual (manual testing) pada aplikasi SIAKAD.
- Menguji skenario batas (edge cases) seperti validasi nilai 150 atau NIS duplikat.
- Menguji kegagalan jaringan Fetch API saat koneksi internet dinonaktifkan.

---

## Pendahuluan
Sebuah program yang selesai ditulis belum tentu bebas dari bug. Sebagai software engineer, kita harus melakukan **pengujian** (testing) secara disiplin untuk memastikan seluruh fitur berjalan sesuai dengan dokumen requirements.

---

## Penjelasan
Pengujian di aplikasi konsol dilakukan dengan mengetikkan opsi menu di terminal secara terencana, lalu memeriksa apakah keluaran datanya sudah tepat. Kita harus menguji skenario sukses (normal flow) dan skenario gagal/batas (exception flow) untuk memastikan keandalan program.

---

## Analogi Kehidupan Sehari-hari: Uji Coba Kualitas Motor Baru di Pabrik
Menguji aplikasi seperti **tes kendali mutu (quality control) motor baru di pabrik**:

```text
Uji Kendali Mutu Motor:
- Masukkan kunci kontak ──► Starter hidup? (Test 1)
- Tarik tuas gas ──► Roda berputar lancar? (Test 2)
- Tarik tuas rem mendadak ──► Motor berhenti aman? (Test 3)
```

Jika motor langsung dilepas ke dealer tanpa tes rem, remnya bisa blong di jalan raya dan membahayakan nyawa pengendara. Pengujian manual menjamin aplikasimu "aman dikendarai" oleh pengguna.

---

## Visual Illustration: Alur Eksekusi Pengujian

```text
User input data ──► Sistem memproses ──► Bandingkan Output Aktual dengan Output Harapan
```

---

## Live Coding: Skenario Uji Coba Manual
Jalankan aplikasi di terminal dengan perintah `tsx src/main.ts`, lalu lakukan langkah pengujian berikut:

1. **Uji Tampilan Laporan**: Pilih Menu `1`. Harus muncul 2 siswa dummy.
2. **Uji Tambah Siswa**: Pilih Menu `2`. Masukkan Nama: `"Citra"`, NIS: `"1003"`, Kelas: `"XI RPL 1"`. Harus muncul pesan sukses.
3. **Uji Nilai Lebih dari 100**: Pilih Menu `3`, masukkan NIS `"1001"`, Nilai `"150"`. Harus muncul pesan: `[Validasi]: Nilai 150 tidak valid!`.
4. **Uji Fetch Asynchronous**: Pastikan internet aktif, pilih Menu `5`, masukkan ID `"1"`. Harus mencetak judul tugas `"delectus aut autem"`.

---

## Output
Hasil cetak visual yang diharapkan saat validasi batas nilai 150 terpicu:

```text
--- UPDATE NILAI SISWA ---
  Masukkan NIS Siswa: 1001
  Masukkan Nilai Baru (0-100): 150
  [Validasi]: Nilai 150 tidak valid untuk Putra!
  [Service]: Berhasil memperbarui nilai Putra.
```

---

## Penjelasan Baris per Baris
- `[Validasi]: Nilai 150 tidak...`: Pesan ini keluar langsung dari chip pengaman setter di dalam `SiswaClass` karena mendeteksi angka di atas 100.
- `[Service]: Berhasil memperbarui...`: Service tetap berjalan, namun karena nilai ditolak oleh objek, properti `_nilaiRataRata` di dalam objek tetap bernilai aman (misal: 0 atau nilai lama), tidak berubah menjadi 150.

---

## Common Mistakes
- **Menguji Hanya Skenario Sukses**: Lupa menguji input-input aneh (seperti memasukkan huruf pada kolom nilai). Selalu uji apa yang terjadi jika pengguna salah mengetikkan input.

---

## Tips
:::tip[Catat Setiap Temuan Bug]
Siapkan file `CATATAN_BUG.txt` saat melakukan testing. Jika menemukan menu yang macet, catat perilakunya dan perbaiki satu per satu sebelum membagikan project ke orang lain.
:::

---

## Ringkasan
- Pengujian manual memastikan program bekerja sesuai kebutuhan requirements.
- Skenario batas (seperti nilai di luar 0-100 atau data duplikat) wajib diuji coba secara sengaja.
- Penanganan kegagalan async (offline fetch) terbukti menjaga stabilitas aplikasi.

---

## Latihan
1. Jalankan seluruh skenario uji coba di atas pada komputer kamu.
2. Catat hasilnya dan pastikan semua fitur berfungsi 100% tanpa error crash.
