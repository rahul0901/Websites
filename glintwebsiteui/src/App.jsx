// import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
// import Header from './Components/Header';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000)

    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <div className="App">
      {loading ? <Loader /> : <Home />}
      {/* <Routes>
        <Header />
        <Route exact path='/' element={<Home />} />
        </Routes> */}
    </div>
  );
}

export default App;