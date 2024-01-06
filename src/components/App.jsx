import "./App.css";
import { favouriteBooks, BookList, Card } from "./Product";

export default function App() {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      <Card>Text between opening and closing tag</Card>
    </>
  );
}