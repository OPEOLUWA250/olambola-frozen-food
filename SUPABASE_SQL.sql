-- SUPABASE SQL SETUP
-- Copy & paste these commands in Supabase SQL Editor

-- Table 1: PRODUCTS
CREATE TABLE IF NOT EXISTS products (
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

-- Enable RLS (Row Level Security) - for now set to DISABLED for development
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy: Allow all for development (CHANGE THIS FOR PRODUCTION)
CREATE POLICY "Allow all" ON products
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Table 2: ORDERS
CREATE TABLE IF NOT EXISTS orders (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  products_json JSONB,
  total INTEGER,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS for orders
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policy for orders
CREATE POLICY "Allow all" ON orders
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Table 3: ADMIN_USERS (Optional - for future use)
CREATE TABLE IF NOT EXISTS admin_users (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS for admin_users
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policy for admin_users
CREATE POLICY "Allow all" ON admin_users
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- SAMPLE DATA (for testing)
INSERT INTO products (name, price, icon, category, description) VALUES
('Premium Chicken', 3500, '🐔', 'POULTRY', 'Fresh frozen whole chicken, wings, drumsticks, and chicken parts. Sourced from trusted farms.'),
('Frozen Turkey', 8500, '🦃', 'POULTRY', 'Premium quality whole turkey and turkey parts. Perfect for special occasions and family meals.'),
('Premium Beef', 5000, '🥩', 'RED MEAT', 'Quality frozen beef cuts including steak, ribs, and ground beef. Tender and flavorful.'),
('Frozen Fish', 2500, '🐟', 'SEAFOOD', 'Wide variety of frozen fish including mackerel, croaker, tilapia, and more. Ocean fresh quality.'),
('Prawns & Shrimp', 6000, '🦐', 'SEAFOOD', 'Premium frozen prawns and shrimp. Perfect for soups, stir-fries, and special dishes.'),
('Mixed Vegetables', 1800, '🥦', 'VEGETABLES', 'Assorted frozen vegetables including carrots, peas, green beans, and mixed veggies.');

-- ENABLE REALTIME
-- Go to Supabase Dashboard:
-- 1. Click "Realtime" in left sidebar
-- 2. Find "products" table
-- 3. Toggle "Realtime" ON
--
-- This enables instant updates when products are added/edited/deleted

-- To see your data:
-- SELECT * FROM products;
-- SELECT * FROM orders;

-- To delete all data (for testing):
-- DELETE FROM products;
-- DELETE FROM orders;

-- INDEXES (for performance)
CREATE INDEX IF NOT EXISTS products_category_idx ON products(category);
CREATE INDEX IF NOT EXISTS orders_customer_idx ON orders(customer_name);
CREATE INDEX IF NOT EXISTS orders_created_idx ON orders(created_at);
