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

function ToggleButtonExample() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

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
            <Form.Control as="textarea" rows={10} />
          </Form.Group>
        </form>
        <textarea cols={70} rows={5}>
          {JSON.stringify([{ "suite": "Diamonds", "displayedValue": "Ace", "value": 0, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "Ace", "value": 0, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "Ace", "value": 0, "subValue": 2 }, { "suite": "Spades", "displayedValue": "Ace", "value": 0, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "2", "value": 1, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "2", "value": 1, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "2", "value": 1, "subValue": 2 }, { "suite": "Spades", "displayedValue": "2", "value": 1, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "3", "value": 2, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "3", "value": 2, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "3", "value": 2, "subValue": 2 }, { "suite": "Spades", "displayedValue": "3", "value": 2, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "4", "value": 3, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "4", "value": 3, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "4", "value": 3, "subValue": 2 }, { "suite": "Spades", "displayedValue": "4", "value": 3, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "5", "value": 4, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "5", "value": 4, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "5", "value": 4, "subValue": 2 }, { "suite": "Spades", "displayedValue": "5", "value": 4, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "6", "value": 5, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "6", "value": 5, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "6", "value": 5, "subValue": 2 }, { "suite": "Spades", "displayedValue": "6", "value": 5, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "7", "value": 6, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "7", "value": 6, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "7", "value": 6, "subValue": 2 }, { "suite": "Spades", "displayedValue": "7", "value": 6, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "8", "value": 7, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "8", "value": 7, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "8", "value": 7, "subValue": 2 }, { "suite": "Spades", "displayedValue": "8", "value": 7, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "9", "value": 8, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "9", "value": 8, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "9", "value": 8, "subValue": 2 }, { "suite": "Spades", "displayedValue": "9", "value": 8, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "10", "value": 9, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "10", "value": 9, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "10", "value": 9, "subValue": 2 }, { "suite": "Spades", "displayedValue": "10", "value": 9, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "Jack", "value": 10, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "Jack", "value": 10, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "Jack", "value": 10, "subValue": 2 }, { "suite": "Spades", "displayedValue": "Jack", "value": 10, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "Queen", "value": 11, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "Queen", "value": 11, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "Queen", "value": 11, "subValue": 2 }, { "suite": "Spades", "displayedValue": "Queen", "value": 11, "subValue": 3 }, { "suite": "Diamonds", "displayedValue": "King", "value": 12, "subValue": 0 }, { "suite": "Clubs", "displayedValue": "King", "value": 12, "subValue": 1 }, { "suite": "Hearts", "displayedValue": "King", "value": 12, "subValue": 2 }, { "suite": "Spades", "displayedValue": "King", "value": 12, "subValue": 3 }])}
        </textarea>
      </header>


    </div>




  );
}

export default App;
