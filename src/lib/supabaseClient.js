import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kouyqhjjpfbhvixypwkj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvdXlxaGpqcGZiaHZpeHlwd2tqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwMDQwMzQsImV4cCI6MjAyNzU4MDAzNH0.ZxEAFf5W3WMjZgJIsVOEEOrrp6uzt3qr0R2f8ySQJa0",
);
