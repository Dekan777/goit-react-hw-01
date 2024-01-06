import "./App.css";
import { favouriteBook, BookList, Card } from "./Product";
import { Alert } from "./Alert";


export default function App() {
  return (
    <>
      <h1>Books of the week</h1>
      
      <BookList books={favouriteBook} />

      <Card>
      
        <h1>Card title</h1>

      </Card>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
}
