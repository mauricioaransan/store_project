// src/services/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nvdqylnpyayccwupvcwz.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52ZHF5bG5weWF5Y2N3dXB2Y3d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwODAzMDgsImV4cCI6MjA2MjY1NjMwOH0.AsJMikt3NS5gGk0mpBS1D_g3l-OWsBcRudskIIu6xLU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
