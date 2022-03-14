import React from 'react';
import Header from './Header/Header';
import ServiceContainer from './Containers/ServiceContainer/ServiceContainer';
import TestimonialsContainer from './Containers/TestimonialsContainer/TestimonialsContainer';
import Footer from './Footer/Footer';
import VideoContainer from './Containers/VideoContainer/VideoContainer';
import NavigationBar from './NavigationBar/NavigationBar';

function Home(){

  return (
 <div>
   <NavigationBar />
    <Header/>
    <ServiceContainer/>
    <TestimonialsContainer/>
    <VideoContainer/>
    <Footer />
    </div>
  );

}

export default Home;
