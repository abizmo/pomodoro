import { Button } from './components';
import { ReactComponent as PlayIcon } from './assets/ph_play-fill.svg';
import Theme from './theme';

function App() {
  return (
    <Theme>
      <h1>Hola mundo</h1>
      <Button size='lg' label='play' onClick={() => console.log('play')}>
        <PlayIcon />
      </Button>
      <Button size='md' label='play' onClick={() => console.log('play')}>
        <PlayIcon />
      </Button>
      <Button size='sm' label='play' onClick={() => console.log('play')}>
        <PlayIcon />
      </Button>
    </Theme>
  );
}

export default App;
