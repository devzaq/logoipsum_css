import Cta from "./components/Cta";
import Element from "./components/Element";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Video from "./components/Video";

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Header />
        <Features />
        <Cta />
        <Video />
        <Programs />
        <Element />
      </main>
      <Footer />
    </div>
  );
}

export default App;
