import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { DefaultInput } from './components/DefaultInput';

import './Styles/global.css';
import './Styles/therme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='taskId'
              labelText='Task'
              type='text'
              placeholder='Digite algo'
              defaultValue='Valor preenchido'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
