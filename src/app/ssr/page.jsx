import NewsList from '@/app/components/NewsList';

export default async function SSR() {
  const res = await fetch('https://json-api.uz/api/project/fn37-exam/news', {
    cache: 'no-store'
  });

  const json = await res.json();

  return <NewsList data={json.data} />;
}
