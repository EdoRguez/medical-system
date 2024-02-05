"use client";

import WelcomeBanner from "./components/banners/WelcomeBanner";
import BarChartCard from "./components/Cards/BarChartCard";
import DoughnutChartCard from "./components/Cards/DoughnutChartCard";
import ListCard from "./components/Cards/ListCard";
import SimpleLineChartCard from "./components/Cards/SimpleLineChartCard";
import Container from "./components/Container";

export default function Home() {
  return (
    <Container>
      <WelcomeBanner />

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SimpleLineChartCard />
        <SimpleLineChartCard />
        <SimpleLineChartCard />
      </div>

      <div className="mt-4">
        <BarChartCard />
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DoughnutChartCard />
        <ListCard />
      </div>
    </Container>
  );
}
