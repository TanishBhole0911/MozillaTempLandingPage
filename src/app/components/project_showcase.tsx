"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import fourO4 from "../../assets/fourO4.jpeg";
import hacktober from "../../assets/Hacktober.png";

const content = [
  {
    title: "404: Treasure Not Found",
    description:
    "A spin on our classic treasure hunt with an unexpected twist! Participants will need to navigate through a maze of code-based puzzles, bugs, and logic traps to find the elusive treasure. Think you have what it takes to crack the code?",
    content: (
     <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={fourO4.src}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Contribution To Open Source",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Hacktoberfest 2024",
    description:
      "Hacktoberfest is back and better than ever! Join us for a month-long celebration of open source software and contribute to your favorite projects. Whether you're a seasoned pro or just starting out, there's something for everyone. Get involved, learn new skills, and earn some cool swag along the way!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={hacktober.src}
          width={100}
          height={100}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
