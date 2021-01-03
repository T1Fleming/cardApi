import logo from './logo.svg';

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import React, { useEffect, useState } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from 'react-bootstrap/Form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios';



async function returnOutputBoxText() {
  let value = await axios.get("/generateCardDeck")
  return value
}



function ToggleButtonExample() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  console.log('value checking: ', radioValue)

  const radios = [
    { name: 'Generate Deck', value: '1' },
    { name: 'Shuffle Card Deck', value: '2' },
    { name: 'Draw Card', value: '3' },
  ];

  return (
    <>
      {/* <ButtonGroup toggle className="mb-2">
        <ToggleButton
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
      <br /> */}
      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Hello World. This is me doing things!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>



    <div>
      <header className="Card-header">
        <h1>
          Card Api
        </h1>
        <p>
          A stateless card web api. Click a function to try!
        </p>
        <div>
          <ToggleButtonExample />
        </div>
        <form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>______________Deck Input______________</Form.Label>
            <Form.Control as="textarea" rows={9} />
          </Form.Group>
        </form>
        ______________Output______________
        <textarea cols={70} rows={7}>
          {returnOutputBoxText()}
        </textarea>
      </header>


    </div>




  );
}

export default App;
