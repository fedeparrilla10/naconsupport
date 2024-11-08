import "./App.css";
import MainSupport from "./components/MainSupport";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <MainSupport />
      <Footer />
    </Container>
  );
}

export default App;
