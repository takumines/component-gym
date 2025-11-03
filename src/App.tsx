import { useState } from 'react';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-center'>
      <div className='mb-8 flex gap-8'>
        <a
          href='https://vite.dev'
          target='_blank'
          className='hover:drop-shadow-[0_0_2em_#646cffaa]'
        >
          <img
            src={viteLogo}
            className='h-24 w-24 transition-transform hover:drop-shadow-[0_0_2em_#61dafbaa]'
            alt='Vite logo'
          />
        </a>
      </div>
      <h1 className='mb-8 text-5xl font-bold'>Vite + React</h1>
      <div className='p-8'>
        <button
          onClick={() => setCount(count => count + 1)}
          className='cursor-pointer rounded-lg border border-transparent bg-zinc-300 px-5 py-3 text-base font-medium transition-colors hover:bg-zinc-600'
        >
          count is {count}
        </button>
        <p className='mt-4'>
          Edit <code className='rounded bg-zinc-300 px-2 py-1'>src/App.tsx</code> and save to test
          HMR
        </p>
      </div>
      <p className='text-gray-500'>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
