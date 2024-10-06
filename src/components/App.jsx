import BackgroundHeading from "./BackgroundHeading.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import ItemList from "./ItemList.jsx";
import { ItemsContextProvider } from "../contexts/ItemsContextProvider.jsx";

function App() {

  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>
      <Footer />
    </>
  )
}

export default App
