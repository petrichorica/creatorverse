import { createClient } from '@supabase/supabase-js';

const URL = 'https://dwxlifuvksugpfcfyswj.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3eGxpZnV2a3N1Z3BmY2Z5c3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5ODgwNzMsImV4cCI6MjAwMjU2NDA3M30.dnj3jxk-yWsw7Ees68Nq4_FsrhERF4NnmZNTIz0XZns';

export const supabase = createClient(URL, API_KEY);