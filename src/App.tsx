import styles from './styles/App.module.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Info from "./pages/Info";
import Greeting from "./pages/Greeting";

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />}/>
          <Route path="home" element={<Home />}/>
          <Route path="info" element={<Info />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;