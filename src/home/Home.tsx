import { YouTubeVideo } from "../shared/components/YouTubeVideo";
import { Hero } from "./components/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <section className="px-6 py-16">
        <YouTubeVideo
          videoId="k9iYm9PEAHg"
        />
      </section>
    </>
  );
};
