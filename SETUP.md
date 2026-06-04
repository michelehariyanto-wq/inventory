# Inventory Management System - Setup Guide

## 📋 Prasyarat
- Node.js v18+ dan npm
- GitHub Account
- Vercel Account
- Supabase Account

---

## 🚀 Step 1: Setup Supabase Database

### 1.1 Buat Project Supabase
1. Buka https://supabase.com dan login
2. Klik **"New Project"**
3. Isi form:
   - **Project Name**: `inventory-system`
   - **Database Password**: Simpan password ini (catat!)
   - **Region**: `Singapore` (atau pilihan Anda)
4. Tunggu hingga project selesai dibuat (5-10 menit)

### 1.2 Ambil API Credentials
1. Buka project yang baru dibuat
2. Pergi ke **Settings → API**
3. Catat:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 1.3 Setup Auth di Supabase (Opsional)
Supabase sudah memiliki built-in authentication. Tidak perlu setup tambahan untuk user table karena Supabase auth menangani semuanya.

---

## 🔧 Step 2: Konfigurasi Lokal

### 2.1 Setup Environment Variables
Buat file `.env.local` di root project (sudah dibuat):

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 2.2 Install Dependencies
```bash
npm install
```

### 2.3 Jalankan Development Server
```bash
npm run dev
```

Buka http://localhost:3000 di browser

---

## 🧪 Step 3: Test Login Functionality

### 3.1 Sign Up (Daftar)
1. Buka http://localhost:3000/login
2. Toggle ke **Sign Up**
3. Masukkan email dan password
4. Klik **Sign Up**
5. Verifikasi email dari Supabase

### 3.2 Sign In (Login)
1. Klik toggle ke **Sign In**
2. Gunakan email dan password yang terdaftar
3. Jika berhasil, akan redirect ke `/inventory`

---

## 📦 Step 4: Deploy ke Vercel (Auto-Deploy)

### 4.1 Push Perubahan ke GitHub
```bash
git add .
git commit -m "feat: Add Supabase authentication"
git push origin master
```

### 4.2 Hubungkan GitHub ke Vercel
1. Buka https://vercel.com dan login
2. Klik **"New Project"**
3. Pilih GitHub dan cari repository `inventory`
4. Klik **"Import"**

### 4.3 Konfigurasi Environment Variables di Vercel
1. Di halaman **Environment Variables**
2. Tambahkan:
   - Key: `NEXT_PUBLIC_SUPABASE_URL`
     Value: `https://your-project.supabase.co`
   - Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     Value: `your-anon-key-here`
3. Klik **"Deploy"**

### 4.4 Setup Auto-Deploy
Vercel sudah auto-deploy default! Setiap kali Anda:
```bash
git push origin master
```
Vercel akan otomatis deploy perubahan. Cek status di https://vercel.com/dashboard

---

## 📁 Project Structure

```
inventory/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout dengan providers
│   ├── providers.tsx         # Auth provider wrapper
│   ├── globals.css
│   ├── login/
│   │   └── page.tsx         # Login page dengan Supabase auth
│   ├── inventory/
│   │   └── page.tsx         # Inventory dashboard
│   └── favicon.ico
├── components/
│   └── Navbar.tsx           # Navigation bar
├── lib/
│   ├── supabaseClient.ts    # Supabase client config
│   └── authContext.tsx      # Auth context & hooks
├── public/                   # Static files
├── .env.local               # Local env variables (git ignored)
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript config
```

---

## 🔌 Cara Menggunakan Auth Context

### Import dan Use Hook
```typescript
import { useAuth } from '@/lib/authContext';

export default function MyComponent() {
  const { user, session, loading, signIn, signOut } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <p>Please sign in</p>;
  }

  return (
    <div>
      <p>Welcome, {user.email}!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

---

## 🐛 Troubleshooting

### Error: "SUPABASE_URL is not set"
- Pastikan `.env.local` sudah dibuat dengan credentials yang benar
- Restart dev server: `npm run dev`

### Login tidak bekerja
- Cek di Supabase Dashboard → Authentication → Users
- Verifikasi email sudah dikonfirmasi
- Cek credentials di `.env.local`

### Vercel deployment gagal
- Pastikan environment variables sudah di-set di Vercel dashboard
- Cek logs di Vercel → Deployments → View logs

---

## 📚 Resources
- [Supabase Docs](https://supabase.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)

---

## ✅ Checklist Selesai
- [x] Project di-setup dengan Supabase
- [x] Authentication berfungsi
- [x] Push ke GitHub
- [x] Connected ke Vercel
- [ ] Test di production Vercel
- [ ] Setup custom domain (opsional)
