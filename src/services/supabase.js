import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lohfitjfapqndchwxjun.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvaGZpdGpmYXBxbmRjaHd4anVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MjgzMjYsImV4cCI6MjAxMzQwNDMyNn0.RnA0I8CFopywtTyN4R0Ay2vOpNDSCFR-ibRbhKVXfj8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
