import React from 'react';
import PostsList from '../features/PostsList';

export default function PostsPage(){
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Posts</h2>
      <PostsList />
    </div>
  );
}
