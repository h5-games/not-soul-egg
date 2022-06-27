import * as React from 'react';
import { useEffect } from 'react';
import game from '@/game';

const Home = () => {
  useEffect(() => {
    game.start();
  }, []);

  return <div>Home</div>;
};

export default Home;
