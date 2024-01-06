import "./App.css";
import { favouriteBook, BookList, Card } from "./Product";



export default function App() {
  return (
    <>
      <h1>Books of the week</h1>
      
      <BookList books={favouriteBook} />

      <Card>
      
        <h1>Card title</h1>

      </Card>

    </>
  );
}
