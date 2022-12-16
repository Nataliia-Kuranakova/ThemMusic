import image from '../img/bg.jpg'

const Hero = ({ value }) => {

  let heroStyle = { 'margin': '0 0 100px' }
  if (value !== '') {
    heroStyle = { 'margin': '0 0 40px' }
  }

  return (
    <div className='hero-wrapper' style={heroStyle}>
      <div className="hero">
        <img className='hero__img' src={image} alt="bg" />
        <div className="hero__overlay"></div>
      </div>
    </div>
  )
}

export default Hero;

