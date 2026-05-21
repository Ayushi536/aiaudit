import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { error } = await supabase.from('audits').select('id').limit(1)
  console.log('Supabase connected:', !error)
  return <main>Connection test</main>
}