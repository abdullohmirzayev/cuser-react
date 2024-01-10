// style
import "./App.css";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h2>Content</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
