import NewsList from '@/app/components/NewsList';

export const revalidate = false; 

export default async function SSG() {
  const res = await fetch('https://json-api.uz/api/project/fn37-exam/news', {
    cache: 'force-cache'
  });

  const json = await res.json();

  return <NewsList data={json.data} />;
}
