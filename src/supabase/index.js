
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://ytfhfnpnqwwtbtavuqiy.supabase.co'
export const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0ZmhmbnBucXd3dGJ0YXZ1cWl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NjYwNzgsImV4cCI6MjA1NzM0MjA3OH0.XFYoNyIbEdqV0xUCnECL1GuojRpTmpCW83WtWSanq3Q"
export const supabase = createClient(supabaseUrl, supabaseKey)