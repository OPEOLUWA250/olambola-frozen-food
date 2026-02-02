import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || "";

let supabase = null;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn(
    "Supabase credentials not configured. Products will not load. Add VITE_SUPABASE_URL and VITE_SUPABASE_KEY to .env.local",
  );
}

export { supabase };

// Initialize tables on first load
export const initializeDatabase = async () => {
  try {
    // Check if products table exists by querying it
    const { error } = await supabase.from("products").select("count");

    if (!error) {
      console.log("Database already initialized");
      return;
    }

    // Create tables if they don't exist
    console.log("Initializing database...");

    // Note: In production, use Supabase dashboard to create tables
    // Tables needed:
    // 1. products (id, name, price, icon, category, description, image_url, created_at, updated_at)
    // 2. orders (id, customer_name, phone, address, products_json, total, created_at)
    // 3. admin_users (id, email, created_at)
  } catch (err) {
    console.error("Database initialization error:", err);
  }
};
