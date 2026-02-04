-- Create admins table
CREATE TABLE IF NOT EXISTS admins (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_admins_email ON admins(email);

-- Enable RLS (Row Level Security)
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for development
CREATE POLICY "Allow all" ON admins
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Insert a default main admin (email: admin@example.com, password: admin123)
INSERT INTO admins (email, password_hash, role) 
VALUES ('admin@example.com', 'YWRtaW4xMjM=', 'main_admin')
ON CONFLICT (email) DO NOTHING;
