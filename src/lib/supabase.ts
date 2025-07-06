import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Hospital = {
  id: string
  name: string
  address: string
  contact_email: string
  phone: string
  created_at: string
}

export type Appointment = {
  id: string
  full_name: string
  email: string
  phone: string
  hospital_id: string
  appointment_date: string
  time_slot: string
  message?: string
  created_at: string
}

export type InsertAppointment = {
  full_name: string
  email: string
  phone: string
  hospital_id: string
  appointment_date: string
  time_slot: string
  message?: string
}