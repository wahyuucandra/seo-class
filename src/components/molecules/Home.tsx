import UpcomingEventTimeline from "@/components/molecules/events/UpcomingEventTimeline";
import Feature from "@/components/molecules/home/Feature";
import Hero from "@/components/molecules/home/Hero";
import NewsSection from "@/components/molecules/news/NewsSection";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <Hero />
      <Feature />
      <NewsSection />
      <UpcomingEventTimeline />
    </main>
  );
};

export default Home;
