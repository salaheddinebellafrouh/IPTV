/*
  # Create orders tracking system

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `plan` (text) - subscription plan selected
      - `first_name` (text) - customer first name
      - `last_name` (text) - customer last name
      - `email` (text) - customer email
      - `phone` (text) - customer phone number
      - `country` (text) - customer country
      - `city` (text) - customer city
      - `message` (text) - optional customer message
      - `status` (text) - order status (pending, contacted, completed)
      - `created_at` (timestamp) - order creation time
      - `updated_at` (timestamp) - last update time

  2. Security
    - Enable RLS on `orders` table
    - Add policy for authenticated users to read all orders (admin access)
    - Add policy for anyone to insert orders (customer submissions)
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  plan text NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  country text NOT NULL,
  city text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert orders (customer submissions)
CREATE POLICY "Anyone can submit orders"
  ON orders
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all orders (admin dashboard)
CREATE POLICY "Authenticated users can read all orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update order status
CREATE POLICY "Authenticated users can update orders"
  ON orders
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();