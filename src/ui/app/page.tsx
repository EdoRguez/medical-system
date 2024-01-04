'use client';

import WelcomeBanner from './components/banners/WelcomeBanner'
import SimpleLineChartCard from './components/Cards/SimpleLineChartCard';
import Container from './components/Container'

export default function Home() {
  return (
    <Container>
      <WelcomeBanner />

      <div className='mt-2 sm:flex sm:justify-between sm:items-center'>
        <SimpleLineChartCard />
        <SimpleLineChartCard />
        <SimpleLineChartCard />
      </div>
    </Container>
  );
}
