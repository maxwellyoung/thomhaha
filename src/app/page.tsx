// HomePage.js
import Video from "~/components/Video";
import AboutDialog from "~/components/AboutDialog";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <Video />
      <div className="absolute right-0 top-0 m-4">
        <AboutDialog />
      </div>
    </main>
  );
}
