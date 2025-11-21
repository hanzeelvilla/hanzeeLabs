import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type Props = {
  title: string;
  videoId: string;
};

export const YouTubeVideo = ({ title, videoId }: Props) => {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl shadow-blue-900/20">
        <LiteYouTubeEmbed
          id={videoId}
          title={title}
          poster="maxresdefault"
          webp={true}
        />
      </div>
    </div>
  );
};
