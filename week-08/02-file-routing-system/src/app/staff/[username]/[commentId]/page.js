// /app/posts/[id]/[commentId]/page.js
export default async function CommentPage({ params }) {
  const slug = await params;
  console.log(slug); // Output: { id: 1, commentId: 2 }
  return (
    <h1>
      Staff {slug.username}, Message: {slug.commentId}
    </h1>
  ); // Output: Post Page ID: 1, Comment ID: 2
}
