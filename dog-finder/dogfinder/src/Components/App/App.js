import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Routes from '../Routes/Routes';
import duke from '../../Images/duke.jpg';
import tubby from '../../Images/tubby.jpg';
import whiskey from '../../Images/whiskey.jpg';
import perry from '../../Images/perry.jpg';
import './App.css';

function App({ dogs }) {
  return (
    <>
      <BrowserRouter>
        <NavBar dogs={dogs}></NavBar>
        <div>
          <Routes dogs={dogs}></Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: 'Whiskey',
      age: 5,
      src: whiskey,
      facts: [
        'Whiskey loves eating popcorn.',
        'Whiskey is a terrible guard dog.',
        'Whiskey wants to cuddle with you!',
      ],
    },
    {
      name: 'Duke',
      age: 3,
      src: duke,
      facts: [
        'Duke believes that ball is life.',
        'Duke likes snow.',
        'Duke enjoys pawing other dogs.',
      ],
    },
    {
      name: 'Perry',
      age: 4,
      src: perry,
      facts: [
        'Perry loves all humans.',
        'Perry demolishes all snacks.',
        'Perry hates the rain.',
      ],
    },
    {
      name: 'Tubby',
      age: 4,
      src: tubby,
      facts: [
        'Tubby is really stupid.',
        'Tubby does not like walks.',
        'Angelina used to hate Tubby, but claims not to anymore.',
      ],
    },
  ],
};

export default App;
