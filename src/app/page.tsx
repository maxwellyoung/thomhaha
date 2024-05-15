// HomePage.js
import Video from "~/components/Video";
import AboutDialog from "~/components/AboutDialog";
import Hero from "~/components/Hero";

export default function HomePage() {
  return (
    <main className=" min-h-screen items-center justify-center bg-black text-white">
      <Video />
      <div className="absolute right-0 top-0 m-4">
        <AboutDialog />
      </div>
      <Hero />
    </main>
  );
}
