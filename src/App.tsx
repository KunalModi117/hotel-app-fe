import './App.css';
import { BookRoom } from './components/bookingSelector';
import { Facilities } from './components/facilities';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Offers } from './components/offers/index.';
import { RoundedImage } from './components/roundedImage';

function App() {
  return (
    <>
      <Header />
      <BookRoom />
      <Facilities />
      <Offers />
      <Footer />
    </>
  );
}

export default App;
