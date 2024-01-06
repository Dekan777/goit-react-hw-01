import "./App.css";
import { favouriteBook, BookList, Card } from "./Product";

const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

export default function App() {
  return (
    <>
      <h1>Books of the week</h1>
      
      <BookList books={favouriteBook} />

      <Card>
      
        <h1>Card title</h1>

      </Card>
      <p style={alertStyles}>Please update your email!</p>
      <p style={alertStyles}>There was an error during transaction!</p>
      <p style={alertStyles}>Payment received, thank you for your purchase!</p>
    </>
  );
}
