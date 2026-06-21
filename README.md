# Creator Pal 🚀

**Creator Pal** adalah platform asisten berbasis AI yang dirancang khusus untuk membantu konten kreator, *digital marketer*, dan pemilik bisnis dalam mempercepat proses produksi konten mereka. Ditenagai oleh **Gemini AI**, aplikasi ini mampu menghasilkan berbagai jenis aset teks kreatif secara instan, mulai dari ide konten hingga optimasi SEO.

---

## ✨ Fitur Utama

Creator Pal menyediakan berbagai generator konten pintar yang disesuaikan dengan kebutuhan multi-platform:

* **E-Commerce & Bisnis:** Generator deskripsi dan tagline produk yang persuasif dan menjual.
* **Blogging & Artikel:** Pembuat topik blog, judul blog yang memicu klik, hingga draf isi blog secara utuh.
* **Media Sosial:** 
    * **Instagram:** Pembuat *caption* dan ide visual post/reel.
    * **TikTok:** Riset dan generator *trending hashtags*.
    * **YouTube:** Generator judul video, deskripsi, dan tag.

---

## 🛠️ Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan *stack* teknologi modern untuk memastikan performa yang cepat dan pengalaman pengguna yang responsif:

* **Frontend & Framework:** [Next.js](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **AI Engine:** [Google Gemini API](https://ai.google.dev/)
* **Authentication:** [Clerk](https://clerk.com/)

---

## 🚀 Memulai

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda.

### Prasyarat

Pastikan Anda sudah menginstal:
* Node.js (versi 18 atau terbaru).
* API Key dari Google AI Studio (Gemini API).

### Langkah Instalasi

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/username/creator-pal.git](https://github.com/username/creator-pal.git)
    cd creator-pal
    ```

2.  **Instal Dependensi**
    *Jika menggunakan Node.js/React:*
    ```bash
    npm install
    ```

3.  **Konfigurasi Environment**
    Salin file `.env.example` menjadi `.env` dan masukkan API Key Gemini Anda:
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_api_key_here
    CLERK_SECRET_KEY=your_api_key_here
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=your_api_key_here
    NEXT_PUBLIC_DRIZZLE_DB_URL=your_url_key_here
    NEXT_PUBLIC_CLIENT=your_api_key_here
    NEXT_PUBLIC_SECRET=your_api_key_here
    ```

4.  **Jalankan Aplikasi**
    ```bash
    npm run dev
    # atau sesuai perintah runner backend Anda
    ```

---

## 💡 Cara Penggunaan

1.  Buka aplikasi di peramban Anda (biasanya `localhost:3000` atau `localhost:8000`).
2.  Pilih menu generator konten yang Anda butuhkan pada *sidebar* atau halaman utama (misal: **Instagram Post**).
3.  Masukkan beberapa kata kunci atau deskripsi singkat mengenai topik yang ingin dibuat.
4.  Klik tombol **"Generate"**.
5.  Salin hasilnya dan konten Anda siap dipublikasikan!

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License**.

---

## 🤝 Kontribusi

Kontribusi selalu terbuka! Jika Anda memiliki ide fitur baru atau menemukan *bug*, silakan buka *Issue* atau kirimkan *Pull Request*.

Made with ❤️ for Content Creators.