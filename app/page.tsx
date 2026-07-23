import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

export default function Portifolio() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFA] text-black">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}