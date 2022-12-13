import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MainContainer } from "./newmovies/MainContainer";
import { AppProvider } from "./newmovies/context";

// import App1 from "./authapp/App";


function App() {
  return (
    <AppProvider>
      <MainContainer /> 
    </AppProvider>
    // <App1 />
  );
}

export default App;
