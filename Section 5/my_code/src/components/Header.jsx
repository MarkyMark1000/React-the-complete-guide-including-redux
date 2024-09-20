import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt='bag of money'/>
            <h1>Investment App</h1>
        </header>
    );
}