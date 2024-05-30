import "./App.css";
import {
  Header,
  MainContent,
  Footer,
  ProductSection,
  FAQ,
} from "./components/WebComponents";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Header />
        <MainContent />
        <ProductSection />
        <FAQ />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
