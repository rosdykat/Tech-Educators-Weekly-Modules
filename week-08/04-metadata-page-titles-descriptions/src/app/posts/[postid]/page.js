// in our dynamic route, we need dynamic metadata

export async function generateMetadata({ params, searchParams }, parent) {
  const id = (await params).postid;
  // load the post
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return {
    title: post.title,
  };
}

export default async function IdPage({ params }) {
  const id = (await params).postid;
  // load the post
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return (
    <>
      <h1>This is the post id page!!</h1>
      <p>{post.title}</p>
    </>
  );
}
