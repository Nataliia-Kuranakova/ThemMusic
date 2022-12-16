import { useState } from "react";
import { Container } from 'react-bootstrap';

import Header from './Header';
import Hero from './Hero';
import ListLyrics from './ListLyrics';
import Footer from "./Footer";

const Main = () => {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="body">
      <Header onChange={handleChange} value={value} />
      <Container>
        <Hero value={value} />
        <ListLyrics value={value} />
        <Footer />
      </Container>
    </div>
  )
}

export default Main;