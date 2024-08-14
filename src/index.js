import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import './index.css';


function MyApp(){
  return(
    <div>
    <Header/>
    <Content/>
    <Footer/>

  </div>
  )
}

ReactDOM.render(<MyApp/>,document.getElementById("root"));


