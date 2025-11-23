type Props = {
  videoId: string;
};

export const YouTubeVideo = ({ videoId }: Props) => {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="aspect-video overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl shadow-blue-900/20">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};
