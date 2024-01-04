'use client';

import WelcomeBanner from './components/banners/WelcomeBanner'
import Container from './components/Container'

export default function Home() {
  return (
    <Container>
      <WelcomeBanner />

      <div className='mt-2 sm:flex sm:justify-between sm:items-center'>

      </div>
    </Container>
  );
}
