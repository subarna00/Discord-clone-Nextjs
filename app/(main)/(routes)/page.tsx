import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold text-indigo-500'>Hello world</h1>
      <Button>Click Me</Button>
    </>
  );
}
