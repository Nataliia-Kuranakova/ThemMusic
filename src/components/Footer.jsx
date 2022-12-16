import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import twitter from '../img/twitter.svg';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg'

const Footer = () => {
  const path = 'https://developer.musixmatch.com/'
  return (
    <footer className="footer">
      <h2 className="footer__title">
        ThemMusic
      </h2>
      <Row className="align-items-center footer__icons">
        <Col>
          <a href={path}>
            <img src={twitter} alt="twitter" className="footer__icon" />
          </a>
        </Col>
        <Col>
          <a href={path}>
            <img src={facebook} alt="twitter" className="footer__icon" />
          </a>
        </Col>
        <Col>
          <a href={path}>
            <img src={instagram} alt="twitter" className="footer__icon" />
          </a>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer;