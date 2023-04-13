import Button from "@mui/material/Button";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <div>
        <ReactMarkdown children={markdown} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
