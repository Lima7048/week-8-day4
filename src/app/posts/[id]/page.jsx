import songs from "./Songlog";

export default function CommentPage({ params }) {
  console.log(params); // Output: { id: 1, commentId: 2 }
  return (
    <h1>
      Post ID: {params.id}, Comment ID: {params.commentId}
    </h1>
  ); // Output: Post ID: 1, Comment ID: 2
}
