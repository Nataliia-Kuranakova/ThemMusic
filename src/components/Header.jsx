import Input from './Input';

import { Container } from 'react-bootstrap';

const Header = ({ value, onChange }) => {

  return (
    <div className='wrapper-header wrapper-header--blur'>
      <Container>
        <header className="header wrapper-header--blur">
          <h1 className="title">
            ThemMusic
          </h1>
          <form>
            <Input name="search" value={value} onChange={onChange} type="text" />
          </form>
        </header>
      </Container>
    </div>
  )
}

export default Header;