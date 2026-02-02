# 🖼️ Supabase Storage Setup Guide

## Problem: Images Getting 404/400 Errors

This happens when the storage bucket doesn't have proper **RLS (Row Level Security) policies** configured.

---

## ✅ Complete Setup Instructions

### **Step 1: Create the Storage Bucket**

1. Open **Supabase Dashboard** (https://app.supabase.com)
2. Select your project
3. Click **Storage** in the left sidebar
4. Click **Create a new bucket**
5. Enter name: **`product-images`** (exact spelling!)
6. ✅ Check **Make it public** checkbox
7. Click **Create bucket**

### **Step 2: Set Up RLS Policies (CRITICAL!)**

1. In Storage, click on **product-images** bucket
2. Click the **Policies** tab
3. Click **Create Policy** button
4. Click **Create a new policy from template**
5. Select **For public access**
   - Policy name: `Allow public read`
   - Allowed operations: ✅ SELECT
6. Click **Review**
7. Click **Save policy**

8. Click **Create Policy** again
9. Select **For public access** again
   - Policy name: `Allow public insert`
   - Allowed operations: ✅ INSERT
10. Click **Review** → **Save policy**

### **Step 3: Verify Bucket Configuration**

Go back to Supabase Storage page. You should see:

```
✅ product-images (Public)
   └─ Policies: 2
```

---

## 🧪 Test Image Upload

1. Go to http://localhost:5173/admin
2. Click **+ Add Product**
3. Upload an image in the **📷 Product Image** field
4. Fill in other fields (name, price, etc.)
5. Click **Add Product**

You should see:

- ✅ "Product added successfully!" message
- ✅ Image appears on the shop page with product
- ✅ No 404/400 errors in browser console

---

## 🐛 Debugging If Still Not Working

### Check Browser Console (F12 → Console tab)

Look for messages like:

```
✅ Image uploaded successfully:
   https://ycmbqcgvpnsjoozvgllj.supabase.co/storage/v1/object/public/product-images/...
```

### If you see ❌ Upload error, check:

1. **Bucket exists?**
   - Go to Supabase Storage → See `product-images` listed?
   - Yes → ✅ Continue
   - No → Create it (Step 1)

2. **Bucket is PUBLIC?**
   - Click bucket → Settings tab
   - See "Public bucket" toggle?
   - No → Toggle it ON

3. **RLS Policies exist?**
   - Click bucket → Policies tab
   - See at least 2 policies listed?
   - No → Create them (Step 2)

4. **File size < 5MB?**
   - ProductForm validates this automatically
   - If error appears: "Image file must be less than 5MB"
   - Use smaller image

---

## 📝 File Specifications

**Accepted formats:**

- JPG/JPEG
- PNG
- GIF
- WebP

**Size limit:** 5MB max

**Naming:** Automatically sanitized (spaces → underscores, special chars removed)

---

## 🔗 What Gets Stored

When you upload an image:

1. ✅ File uploaded to Supabase Storage
2. ✅ Public URL generated automatically
3. ✅ URL saved in database `products.image_url`
4. ✅ Image displays instantly on shop page

Example stored URL:

```
https://ycmbqcgvpnsjoozvgllj.supabase.co/storage/v1/object/public/product-images/1704067200000_chicken.jpg
```

---

## ⚡ Quick Troubleshooting Checklist

- [ ] Bucket name is exactly `product-images`
- [ ] Bucket is set to PUBLIC
- [ ] At least 2 RLS policies created (SELECT and INSERT)
- [ ] Image file < 5MB
- [ ] Supported format (JPG, PNG, GIF, WebP)
- [ ] Check browser console for upload success message
- [ ] Try different image file
- [ ] Clear browser cache (Ctrl+Shift+Delete)

---

**After following these steps, your image uploads should work perfectly!** 🚀
