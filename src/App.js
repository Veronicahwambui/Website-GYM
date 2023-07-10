import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Plans from './components/Plans';
import Testimonial from './components/Testimonials';
import Join from './components/Join';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

{/* <Header/> */}



<Hero/>

<Programs/>
<Reasons/>
<Plans/>
<Testimonial/>
<Join/>
<Footer/>
      {/* <Routes>
       
       <Route path="/" element={<Hero/>} />  
      <Route path="/" element={ <Programs/>} />  
      <Route path="/" component={ <Reasons/>} />  
      <Route path="/" component= {<Plans/>} />  
      <Route path="/testimonial" component={<Testimonial/> } />  
      <Route path="/join" component={ <Join/> } />  

      </Routes> */}

   

   

  

      </div>

  )  
}

export default App;
