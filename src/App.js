import React, { useState, useEffect} from 'react';
import { Title, Div, Img, Counter } from './style';
import Button from './Button';



  
import logoAcens from '../src/logo.png';

function App() {
  
  useEffect(() => {
    document.title = "ContaDavo"
 }, []);

  const [counter, setCounter] = useState(0);
  const [davo, setDavo] = useState(true);

  function counterAdd () {
    setCounter( counter + 1 );
  }

  function lombraTorta () {
    davo === false ? setDavo(true) : setDavo(false);
  }
  
  function handleAll () {
    counterAdd();
    lombraTorta();
  }

  return (
    <Div>
      <Title>Contador do Davo</Title>
      <Img davo={davo}src={logoAcens} alt="acens"/>
      <Counter counter={counter} davo={davo}>{counter}</Counter>
      <Button counter={counter} function={handleAll}/>
    </Div>
  );
}

export default App;
