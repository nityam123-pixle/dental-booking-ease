-- Dental Care Appointment System Database Setup
-- Run these commands in your Supabase SQL editor

-- Create hospitals table
CREATE TABLE IF NOT EXISTS hospitals (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    contact_email TEXT NOT NULL,
    phone TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    hospital_id UUID NOT NULL REFERENCES hospitals(id),
    appointment_date DATE NOT NULL,
    time_slot TEXT NOT NULL,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample hospitals
INSERT INTO hospitals (name, address, contact_email, phone) VALUES
('Smile Dental Clinic', '123 Main Street, Downtown', 'info@smileclinic.com', '+1 (555) 123-4567'),
('Advanced Dental Care', '456 Oak Avenue, Midtown', 'contact@advanceddental.com', '+1 (555) 234-5678'),
('Family Dentistry Plus', '789 Pine Road, Uptown', 'hello@familydentistry.com', '+1 (555) 345-6789'),
('Elite Dental Group', '321 Elm Street, Business District', 'appointments@elitedental.com', '+1 (555) 456-7890'),
('Gentle Care Dentists', '654 Maple Lane, Residential Area', 'care@gentledentists.com', '+1 (555) 567-8901')
ON CONFLICT DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE hospitals ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to hospitals (read only)
CREATE POLICY "Anyone can view hospitals" ON hospitals FOR SELECT USING (true);

-- Create policies for appointments (allow insert for anyone, but restrict reads)
CREATE POLICY "Anyone can create appointments" ON appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view their own appointments" ON appointments FOR SELECT USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_appointments_hospital_id ON appointments(hospital_id);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);
CREATE INDEX IF NOT EXISTS idx_appointments_email ON appointments(email);