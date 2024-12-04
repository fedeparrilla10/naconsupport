import "./App.css";
import MainSupport from "./components/MainSupport";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
