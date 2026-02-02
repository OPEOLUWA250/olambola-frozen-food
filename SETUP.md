# Olambola Frozen Foods - Complete Setup Guide

## 🎯 PROJECT ARCHITECTURE

### Ultra-Lean System Design:

```
Customer Shop         Admin Dashboard
    ↓                       ↓
Tailwind CSS Components    Tailwind CSS Components
    ↓                       ↓
useCart Hook          useProducts Hook
useProducts Hook      useAuth Hook
useAuth Hook              ↓
    ↓                 Supabase Admin API
Supabase Client ←——————————↓
    ↓
Real-time Subscriptions
```

## 🏗️ FOLDER STRUCTURE

```
src/
├── components/
│   ├── Navbar.jsx              # Main navbar with cart button
│   ├── ProductCard.jsx         # Reusable product card
│   ├── Cart.jsx                # Cart modal with checkout
│   └── admin/
│       ├── AdminNav.jsx        # Admin navbar with logout
│       ├── ProductForm.jsx     # Form to add/edit products
│       └── ProductList.jsx     # Table of all products
├── pages/
│   ├── Shop.jsx               # Main customer store page
│   ├── Admin.jsx              # Admin dashboard
│   └── AdminLogin.jsx         # Admin authentication
├── hooks/
│   ├── useProducts.js         # Real-time product sync
│   ├── useCart.js             # Cart state management
│   └── useAuth.js             # Admin authentication
├── services/
│   └── supabase.js            # Supabase client setup
├── App.jsx                    # Router configuration
├── index.css                  # Tailwind directives
└── main.jsx                   # Entry point
```

## ⚙️ SUPABASE BACKEND SETUP

### 1. Create Supabase Project

Go to https://supabase.com and create a new project.

### 2. Create Three Tables

#### **Table 1: `products`**

```sql
CREATE TABLE products (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  icon TEXT,
  category TEXT,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### **Table 2: `orders`**

```sql
CREATE TABLE orders (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  products_json JSONB,
  total INTEGER,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### **Table 3: `admin_users`** (Optional - for future user management)

```sql
CREATE TABLE admin_users (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Enable Real-Time Subscriptions

In Supabase Dashboard:

- Go to **Realtime** → **Products** table
- Toggle **Realtime** ON for the `products` table

### 4. Row Level Security (RLS)

For now, disable RLS for development:

- Go to **Authentication** → **Policies**
- Disable RLS temporarily to test

_Later, you can add RLS to restrict admin access._

### 5. Get Your Credentials

- Go to **Settings** → **API**
- Copy **Project URL** and **Anon Key**
- Add to `.env.local`:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_KEY=your_anon_key
VITE_ADMIN_PASSWORD=your_secure_password
```

## 🚀 QUICK START

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Access URLs

- **Shop**: http://localhost:5173/
- **Admin Login**: http://localhost:5173/admin/login
- **Admin Dashboard**: http://localhost:5173/admin

## 🔐 ADMIN AUTHENTICATION

**Ultra-Simple Approach (For Now):**

- Password stored in `.env.local`
- Session stored in `localStorage`
- No database auth needed yet

**Default Password**: Set in `VITE_ADMIN_PASSWORD` env variable

**To Login**:

1. Go to `/admin/login`
2. Enter password
3. You're in the dashboard

**Later Enhancement**: Use Supabase Auth for email/password login

## 📱 CUSTOMER FLOW

1. **Browse** → Products load from Supabase (real-time)
2. **Add to Cart** → Stored in localStorage
3. **Checkout** → Enter name, phone, address
4. **Send Order** → Pre-filled WhatsApp message to: `+2347018318756`

**WhatsApp Message Format:**

```
Hello! I want to place an order:

• Product Name x Qty = Price
• Product Name x Qty = Price

Total: ₦Amount

Delivery Address: [address]
Name: [name]
Phone: [phone]
```

## 👨‍💼 ADMIN DASHBOARD FEATURES

### What Admin Can Do:

1. **Add Products**
   - Name, Price, Icon/Emoji, Category, Description
   - Instant sync to shop (real-time)

2. **Edit Products**
   - Click "Edit" on any product
   - Update fields
   - Changes reflect immediately in shop

3. **Delete Products**
   - Click "Delete"
   - Confirmation prompt
   - Auto-updates shop

4. **View Orders** (Future)
   - Orders table (stored in `orders` table)
   - Status tracking

5. **Analytics** (Future)
   - Total sales
   - Popular products
   - Orders count

### Admin Dashboard Stats (Ultra-Lean):

- Total products count
- Add/Edit/Delete buttons
- Product list table
- Clean Tailwind UI

## 🎨 TECH STACK

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS (no custom CSS)
- **Routing**: React Router v6
- **Backend**: Supabase (PostgreSQL + Real-time)
- **Real-Time**: Supabase Realtime subscriptions
- **State**: React Hooks + localStorage
- **Auth**: Simple password-based (localStorage)

## 🔄 REAL-TIME SYNCHRONIZATION

When admin updates a product:

1. Admin clicks "Update Product"
2. Data sent to Supabase
3. Supabase fires `postgres_changes` event
4. All connected Shop pages get instant update (via `useProducts` hook)
5. No page refresh needed!

**How it works:**

```javascript
// In useProducts.js
const channel = supabase
  .channel("products_changes")
  .on("postgres_changes", { event: "*", table: "products" }, (payload) => {
    // Handle INSERT, UPDATE, DELETE
    setProducts((prev) => [...prev]); // Update state
  })
  .subscribe();
```

## 📊 DATA FLOW

### Adding Product:

```
Admin Form → Supabase Insert → Real-time Event → useProducts Hook → Shop Page
```

### Customer Order:

```
Shop Cart → Checkout Form → WhatsApp Message → Admin WhatsApp
                              ↓
                         (Optional) Save to orders table
```

## 🚀 NEXT FEATURES (Easy Wins)

1. **Order Management**
   - Log orders in `orders` table
   - Admin can view order history
   - Order status tracking (pending, delivered, etc.)

2. **Product Images**
   - Upload to Supabase Storage
   - Display in product cards

3. **Categories Filter**
   - Add filter buttons on shop page
   - Group by POULTRY, SEAFOOD, etc.

4. **User Accounts** (If needed)
   - Supabase Auth for customers
   - Order history tracking
   - Wishlist

5. **Email Notifications**
   - Notify admin on new order
   - Order confirmation to customer

## 🛠️ BUILD & DEPLOY

### Build for Production:

```bash
npm run build
```

### Preview Build:

```bash
npm run preview
```

### Deploy Options:

- **Vercel**: `npm install -g vercel` → `vercel`
- **Netlify**: Push to GitHub, connect repo
- **Docker**: Create Dockerfile for production

## 🐛 TROUBLESHOOTING

### Products not loading?

- Check Supabase URL and Key in `.env.local`
- Verify products table exists
- Check browser console for errors

### Admin can't add products?

- Verify Supabase RLS is disabled (or configured)
- Check `.env.local` has correct credentials
- Verify `useProducts` hook is working

### Real-time not working?

- Check Realtime is enabled in Supabase
- Verify products table has Realtime ON
- Check browser Network tab for websocket connection

### Cart not persisting?

- Check browser allows localStorage
- Clear localStorage and retry: `localStorage.clear()`

## 📝 ENVIRONMENT VARIABLES

Create `.env.local`:

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_KEY=your-anon-key-here
VITE_ADMIN_PASSWORD=your-secure-password-here
```

**Never commit `.env.local` to Git!** Add to `.gitignore`

## 🎓 ULTRA-THINK SUMMARY

This architecture is:

- ✅ **Ultra-lean**: No bloat, only essentials
- ✅ **Real-time**: Products sync instantly
- ✅ **No accounts**: Customers checkout as guests
- ✅ **Component-based**: Easy to scale
- ✅ **Tailwind-styled**: Modern, clean UI
- ✅ **WhatsApp integrated**: Direct orders
- ✅ **Admin-friendly**: Simple password auth
- ✅ **Production-ready**: Deployable today

---

**Ready to launch!** 🚀
