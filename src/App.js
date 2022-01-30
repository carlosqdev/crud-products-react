import AllProducts from "./components/AllProducts";
import Form from "./components/Form";

function App() {
  return (
    <section className="container" style={{height: "100vh"}}>
      <div className="row">
        <Form />
        <AllProducts />
      </div>
    </section>
  );
}

export default App;
