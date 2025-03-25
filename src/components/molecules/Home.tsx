import UpcomingEventTimeline from "@/components/molecules/events/UpcomingEventTimeline";
import Feature from "@/components/molecules/home/Feature";
import Hero from "@/components/molecules/home/Hero";
import NewsSection from "@/components/molecules/news/NewsSection";
import { encryptAES } from "@/utils/helpers/CryptoJS";

type Props = {};

const Home = (props: Props) => {
  const tes = encryptAES("test");

  return (
    <main>
      {tes}
      <Hero />
      <Feature />
      <NewsSection />
      <UpcomingEventTimeline />
    </main>
  );
};

export default Home;
