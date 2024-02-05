import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BookDetails } from "./pages/BookDetails";
import { AuthorDetails } from "./pages/AuthorDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book">
        <Route path=":bookId" element={<BookDetails />} />
      </Route>
      <Route path="/author">
        <Route path=":authorId" element={<AuthorDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
