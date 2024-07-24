import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
        <ul className='footer__ul'>
            <li>©2024</li>
            <li><a href={`mailto:"hola.marinafernandez@gmail.com"?subject=Hi`} target='_blank'>(∩ ^-^)⊃━☆ﾟ.*・｡ﾟ :・ﾟ✧  Hi!</a></li>
            <li><a href="https://github.com/marina-fdz" target='_blank'>Github</a></li>
        </ul>
    </footer>
  )
}

export default Footer