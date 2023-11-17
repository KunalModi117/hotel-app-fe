import './App.css';
import { BookRoom } from './components/bookingSelector';
import { Facilities } from './components/facilities';
import { Header } from './components/header';
import { RoundedImage } from './components/roundedImage';

function App() {
  return (
    <>
      <Header />
      <BookRoom />
      <Facilities />
    </>
  );
}

export default App;
