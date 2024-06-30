import CountdownTimer from '@/components/CountdownTimer';
import Home from './(pages)/Home/page';

export default function App() {
  return (
    <div className="w-full  flex flex-col items-start gap-5">
      <Home />
      <CountdownTimer />
    </div>
  );
}
