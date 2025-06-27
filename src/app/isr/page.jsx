import NewsList from '@/app/components/NewsList';

export const revalidate = 20;

export default async function ISR() {
  const res = await fetch('https://json-api.uz/api/project/fn37-exam/news', { cache: 'force-cache' });
  const json = await res.json();

  return <NewsList data={json.data} />; 
}
