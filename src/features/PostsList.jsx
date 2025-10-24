import React, { useEffect, useMemo, useState } from 'react';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';

export default function PostsList(){
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 10;

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter(p => p.title.includes(query) || p.body.includes(query));
  }, [data, query]);

  const pageCount = Math.ceil(filtered.length / perPage);
  const pageItems = filtered.slice((page-1)*perPage, page*perPage);

  useEffect(()=> setPage(1), [query]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input className="flex-1 p-2 border rounded" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search posts..." />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {pageItems.map(post => (
          <Card key={post.id}>
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.body}</p>
          </Card>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1} className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700">Prev</button>
        <span>Page {page} / {pageCount}</span>
        <button onClick={()=>setPage(p=>Math.min(pageCount,p+1))} disabled={page===pageCount} className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700">Next</button>
      </div>
    </div>
  );
}
