# Setup Database di Supabase

## 📝 Langkah-Langkah Setup

### **1. Login ke Supabase Dashboard**
- Buka: https://app.supabase.com
- Login dengan akun Anda

### **2. Pilih Project**
- Cari project: `inventory` (atau project dengan URL qliwhrlzuzfsgsnhkjmo)

### **3. Jalankan SQL Migration**
Setelah masuk ke project dashboard:
1. Di sidebar kiri, klik **SQL Editor**
2. Klik **New Query**
3. Copy-paste seluruh isi file: `supabase/migrations/01_setup_auth.sql`
4. Klik **Run** (atau Ctrl+Enter)

### **4. Verifikasi Setup**
- Klik **Tables** di sidebar
- Pastikan ada table `users` dengan columns:
  - `id` (UUID, primary key)
  - `email` (VARCHAR)
  - `full_name` (VARCHAR)
  - `created_at` (TIMESTAMP)
  - `updated_at` (TIMESTAMP)

### **5. Enable Authentication**
1. Di sidebar, klik **Authentication**
2. Pastikan **Email/Password** sudah enabled
3. Klik **Settings** → cek opsi:
   - ✅ Enable email confirmations (optional)
   - ✅ Enable auto confirm (untuk testing)

---

## 🔐 Apa yang Setup Ini Lakukan

✅ Membuat table `users` yang linked ke `auth.users`  
✅ Enable Row Level Security (RLS) untuk keamanan  
✅ Buat policies agar user hanya bisa akses data mereka sendiri  
✅ Auto-create user profile saat signup  

---

## ✅ Verifikasi Setelah Setup

Test login di aplikasi Anda:

```bash
cd c:\inventory
npm run dev
```

Buka: http://localhost:3000/login
- Klik **Sign Up**
- Isi email dan password
- Klik **Sign Up**

Jika berhasil:
- ✅ User baru dibuat di Supabase
- ✅ Redirect ke halaman inventory
- ✅ User profile otomatis tersimpan di table users

---

## 🐛 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Error: "Permission denied" | Pastikan RLS policies sudah ter-create dengan benar |
| Tidak bisa signup | Cek Authentication → Email/Password sudah enabled |
| User profile tidak tersimpan | Jalankan ulang SQL migration, pastikan trigger ter-create |

---

## 📁 File Yang Digunakan

- `supabase/migrations/01_setup_auth.sql` - SQL migration untuk setup database
- `lib/authContext.tsx` - Context untuk handle authentication
- `app/login/page.tsx` - Login/Signup page

