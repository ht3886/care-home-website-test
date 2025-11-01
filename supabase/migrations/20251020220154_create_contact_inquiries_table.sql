/*
  # Create Contact Inquiries Table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Name of the person contacting
      - `email` (text) - Email address
      - `phone` (text, nullable) - Phone number (optional)
      - `message` (text) - Message content
      - `created_at` (timestamptz) - When the inquiry was submitted

  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for anonymous users to insert their own inquiries
    - Add policy for authenticated users to read all inquiries (for admin purposes)
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact inquiry
CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users (admins) to view all inquiries
CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);
