import { useParams } from "react-router-dom";

export default function BookDetailPage() {
  const params = useParams();
  return (
    <main>
      <h1>Book Detail Page</h1>
      <p>{params.bookId}</p>
    </main>
  );
}
