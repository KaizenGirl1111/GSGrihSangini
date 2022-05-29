import React from 'react';
import Header from './Header/Header';
import ServiceContainer from './Containers/ServiceContainer/ServiceContainer';
import TestimonialsContainer from './Containers/TestimonialsContainer/TestimonialsContainer';
import Footer from './Footer/Footer';
import VideoContainer from './Containers/VideoContainer/VideoContainer';
import NavigationBar from './NavigationBar/NavigationBar';
import ScrollBtn from '../ScrollToTopButton/Scrollbtn';

function Home(){
  const [offset, setOffset] = React.useState(0);

    React.useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
  return (
 <div>
   <NavigationBar />
    <Header/>
    <ServiceContainer/>
    <TestimonialsContainer/>
    <VideoContainer/>
    <Footer />
    { offset>0 && 
    <ScrollBtn/>}
    </div>
  );

}

export default Home;
