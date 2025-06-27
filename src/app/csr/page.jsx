'use client';
import { useState, useEffect } from 'react';
import Loader from '@/app/components/Loader';
import NewsList from '@/app/components/NewsList';

export default function CSR() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://json-api.uz/api/project/fn37-exam/news')
      .then((r) => r.json())
      .then((json) => {
        console.log(json); 
        setData(json.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  return <NewsList data={data} />;
}
