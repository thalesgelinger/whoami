import { createClient } from '@supabase/supabase-js'
import { error } from '../utils/error'

const supabaseUrl = 'https://zymqyccsdulrontvltro.supabase.co'
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY ?? error("No supabase key provided")
export const supabase = createClient(supabaseUrl, supabaseKey)
