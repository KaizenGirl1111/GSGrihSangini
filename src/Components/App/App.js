import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar/NavigationBar';
import Header from './Header/Header';
import ServiceContainer from './Containers/ServiceContainer/ServiceContainer';
import TestimonialsContainer from './Containers/TestimonialsContainer/TestimonialsContainer';
import Footer from './Footer/Footer';
import VideoContainer from './Containers/VideoContainer/VideoContainer';

function App() {
  
  return (
    <div class="app">
      <NavigationBar />
      <Header/>
      <ServiceContainer/>
      <TestimonialsContainer/>
      <VideoContainer/>
      <Footer />
    </div>
  );
}

export default App;
