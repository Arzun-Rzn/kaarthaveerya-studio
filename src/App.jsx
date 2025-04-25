import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection.jsx';
import Footer from './components/Footer.jsx';
import './styles/main.css';
import './App.css';

const App = () => {
  return (
    <Router>
       <ScrollToTop />
       <div className="app-container">
        <header>
          <Sidebar/>
          <Header />
          <Navbar />
        </header>

        <main>
          <MainSection />
        </main>
                    
        <footer>
          <Footer />
        </footer>
     </div>
    </Router>
  );
};

export default App;
