# Authentication Flow Documentation

## 🔄 System Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    USER VISITS APP                           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │  Check Authentication      │
        │      Status                │
        └────────┬──────────┬────────┘
                 │          │
         ┌───────┘          └───────┐
         │                          │
         ▼                          ▼
    ┌─────────────┐        ┌──────────────┐
    │  User Logged│        │  User NOT    │
    │     IN      │        │   Logged IN  │
    └──────┬──────┘        └──────┬───────┘
           │                      │
           ▼                      ▼
    ┌──────────────────┐   ┌────────────────────────┐
    │  Redirect to     │   │ Show WELCOME PAGE      │
    │   /inventory     │   │  (app/page.tsx)        │
    │   (Dashboard)    │   │                        │
    └──────────────────┘   └────────────────────────┘
                                    │
                           ┌────────┴────────┐
                           │                 │
                    Click Login/Sign Up      │
                           │                 │
                           ▼                 ▼
                    ┌────────────────┐   ┌──────────────────┐
                    │ /login page    │   │ Form Submitted   │
                    │ (Form)         │   │ Success          │
                    └────────────────┘   │                  │
                                         └────────┬─────────┘
                                                  │
                                                  ▼
                                         ┌──────────────────┐
                                         │ Redirect to      │
                                         │ /inventory       │
                                         │ (Dashboard)      │
                                         └──────────────────┘
```

## 📄 Page Behavior

### **Home Page (`/` → `app/page.tsx`)**
- **For Unauthenticated Users:**
  - ✅ Display welcome page with hero section
  - ✅ Show "Sign In" button in top navigation
  - ✅ Show "Get Started" CTA buttons
  - ✅ Display features and demo section

- **For Authenticated Users:**
  - 🔄 Auto-redirect to `/inventory` (during loading check)
  - ❌ Never display welcome content

### **Login Page (`/login` → `app/login/page.tsx`)**
- **For Unauthenticated Users:**
  - ✅ Display login/signup form
  - ✅ Allow toggle between Sign In and Sign Up modes
  - ✅ Show error messages if login fails

- **For Authenticated Users:**
  - 🔄 Auto-redirect to `/inventory` (during loading check)
  - ❌ Never display login form

### **Inventory Page (`/inventory` → `app/inventory/page.tsx`)**
- **For Unauthenticated Users:**
  - ❌ Show loading state briefly
  - 🔄 Auto-redirect to `/login`
  - 🔐 Protected route

- **For Authenticated Users:**
  - ✅ Display full inventory dashboard
  - ✅ Show search/filter functionality
  - ✅ Display inventory table with data
  - ✅ Show user dropdown in navbar

## 🔐 Protection Mechanism

### **App Layout (`app/layout.tsx`)**
```
<AuthProvider>
  └─ All pages wrapped with authentication context
  └─ useAuth() hook available to all pages
```

### **Authentication Context (`lib/authContext.tsx`)**
```typescript
const { user, loading, session } = useAuth();

// user: User object if authenticated, null if not
// loading: true while checking session, false when done
// session: Supabase session object
```

### **Flow Protection**
1. **Page mounts** → checks `authLoading` state
2. **While `authLoading === true`** → show loading spinner
3. **After loading completes:**
   - If `user` exists → redirect to next page
   - If `user` is null → stay on current page (for login/home)

## 🎯 Key Changes

✅ **Home page (`app/page.tsx`)**
- Added `useEffect` to redirect authenticated users to `/inventory`
- Added loading state with spinner
- Only unauthenticated users see welcome page

✅ **Login page (`app/login/page.tsx`)**
- Added `useEffect` to redirect authenticated users to `/inventory`
- Added loading state with spinner
- Only unauthenticated users see login form

✅ **Inventory page (`app/inventory/page.tsx`)**
- Already had protection logic (redirect if not authenticated)
- Only authenticated users can access dashboard

## 🧪 Testing the Flow

### **Test Case 1: Unauthenticated User**
```bash
1. Clear browser cookies/localStorage
2. Visit http://localhost:3000
3. ✅ Should see welcome page
4. Click "Sign In" button
5. ✅ Should see login page
6. Fill form and sign up
7. ✅ Should redirect to inventory page
```

### **Test Case 2: Authenticated User**
```bash
1. Logged in with valid Supabase account
2. Visit http://localhost:3000
3. ✅ Should auto-redirect to inventory
4. Try to visit http://localhost:3000/login
5. ✅ Should auto-redirect to inventory
6. Logout from navbar
7. ✅ Should redirect back to home
```

### **Test Case 3: Session Persistence**
```bash
1. Login successfully
2. Refresh page
3. ✅ Should stay logged in (session persists)
4. Close and reopen browser
5. ✅ Session should restore automatically
```

## 📊 Component Dependencies

```
app/layout.tsx (Root)
├─ lib/authContext.tsx (AuthProvider)
├─ app/page.tsx (Home)
│  └─ useAuth() → redirect if user exists
├─ app/login/page.tsx (Login)
│  └─ useAuth() → redirect if user exists
├─ app/inventory/page.tsx (Inventory)
│  └─ useAuth() → redirect if user null
└─ components/Navbar.tsx (Navigation)
   └─ useAuth() → show Login/Logout buttons based on user state
```

## 🔧 Supabase Integration Required

To make login functional, you must:

1. ✅ Run SQL migration: `supabase/migrations/01_setup_auth.sql`
2. ✅ Ensure Supabase **Email/Password** auth is enabled
3. ✅ Verify environment variables are set:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

See `SUPABASE_SETUP.md` for detailed setup instructions.

## 📱 Responsive Design

All pages are fully responsive:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

Navigation automatically adapts:
- Mobile: Hamburger menu (mobile Navbar)
- Desktop: Full navigation bar

