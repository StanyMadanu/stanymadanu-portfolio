import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
