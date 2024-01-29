import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import HowItWorks from './Pages/HowItWorks';
import Explore from './Pages/Explore';
import Blog from './Pages/Blog';
import Review from './Pages/Review';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/how-it-works' element={<HowItWorks />} />
        <Route exact path='/explore' element={<Explore />} />
        <Route exact path='/review' element={<Review />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} /> 
      </Routes>    
    </div>
  );
}

export default App;
