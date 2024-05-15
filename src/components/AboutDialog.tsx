"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const AboutDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="cursor-pointer">About</div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>About</DialogTitle>
          </DialogHeader>
          <div className="mb-6 flex items-center justify-center">
            <img
              src="/avatar.jpg"
              alt="Profile Picture"
              className="h-24 w-24 rounded-full"
            />
          </div>
          <div className="mb-6 text-center">
            <p className="text-gray-500">
              Hi there! I&apos;m Thom Haha, a musician & DJ passionate about
              music.
            </p>
          </div>
          <div className="mb-6 flex justify-center">
            <button className="cursor-pointer">
              <a
                href="https://soundcloud.com/thomhaha" // Replace with your Twitter profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 cursor-pointer text-gray-500 hover:text-orange-500"
              >
                SoundCloud
              </a>
            </button>
            <button className="cursor-pointer">
              <a
                href="https://www.instagram.com/thom_haha/" // Replace with your LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 cursor-pointer text-gray-500 hover:text-pink-500"
              >
                Instagram
              </a>
            </button>
            <button className="cursor-pointer">
              <a
                href="https://www.youtube.com/channel/UCwHV8HZtpiNWidnZe7ik-BQ"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-500 hover:text-red-500"
              >
                YouTube
              </a>
            </button>
          </div>
          <DialogFooter>
            <DialogClose>
              <div className="cursor-pointer">Close</div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AboutDialog;
