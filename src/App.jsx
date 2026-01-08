import {
  Cta,
  Element,
  Features,
  Footer,
  Header,
  Navbar,
  Programs,
  Video,
} from "./components";

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
