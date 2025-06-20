// /app/posts/page.js

import Link from "next/link";
export default async function PostsPage({ searchParams }) {
  const query = await searchParams;
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // call the API
  const posts = await response.json(); // parse the response as JSON

  // reverse the posts array if the sort parameter is set to descending
  if (query.sort === "desc") {
    posts.reverse();
  }
  return (
    <div>
      <h1>Posts</h1>
      <Link href="/posts?sort=asc">Sort ascending</Link>
      <Link href="/posts?sort=desc">Sort descending</Link>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <li key={post.id}>{post.title}</li>
          </Link>
        </div>
      ))}
    </div>
  );
}
