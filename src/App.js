import './App.css';
import Hero from './components/hero/hero';
import Programs from './components/programs/programs';
import Reasons from './components/reasons/reasons';
import Plans from './components/plans/plans';
import Testimonials from './components/testimonials/testimonials';
import Join from './components/join/join';
import Footer from './components/footer/footer';



function App() {
  return (

    <div className="App">
       <Hero/>
       <Programs/>
       <Reasons/>
       <Plans/>
       <Testimonials/>
       <Join/>
       <Footer/>
    </div>
  );
}

export default App;
