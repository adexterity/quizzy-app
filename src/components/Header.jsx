import Logo from '../../src/assets/react.svg';

function Header() {
  return (
    <header className='app-header'>
      <img src={Logo} alt='React logo' className='react-logo' />
      <h1 className='quiz-header'>Quizzy</h1>
    </header>
  );
}

export default Header;
