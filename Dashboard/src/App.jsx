import HeadBlock from './components/HeadBlock';
import Card from './components/Card';
import FootBlock from './components/FootBlock';
import WhatsappLogo from './components/WhatsappLogo';
import './App.css'

export default function App() {
  return (
    <>
      <HeadBlock />
      <h1 className="main-h1">Trekking Gear on rent</h1>
      <Card />
      <WhatsappLogo />
      <FootBlock />
    </>
  );
}
