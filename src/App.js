import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LatestArticles from './components/LatestArticles/LatestArticles';
function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <LatestArticles/>
      <Footer/>
    </div>
  );
}

export default App;
