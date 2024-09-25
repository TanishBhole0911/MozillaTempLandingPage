"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import fourO4 from "../../assets/fourO4.jpeg";
import hacktober from "../../assets/Hacktober.png";
import VersionControl from "../../assets/VersionControl.jpeg";

const content = [
  {
    title: "404: Treasure Not Found",
    description:
      "A spin on our classic treasure hunt with an unexpected twist! Participants will need to navigate through a maze of puzzles, bugs, and logic traps to find the elusive treasure. Think you have what it takes to crack the code?",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={fourO4}
          width={300}
          height={300}
          className="h-full w-full object-contain bg-black" // Changed from object-cover to object-contain
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Introduction To Open Source",
    description:
      "In this workshop, we taught the basics of Git and GitHub, including how to create repositories, commit changes, and collaborate with others. Participants learned the benefits of version control, such as tracking changes, reverting to previous states, and managing contributions from multiple developers.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={VersionControl}
          width={300}
          height={300}
          className="h-full w-full object-contain bg-black" // Changed from object-cover to object-contain
          alt="linear board demo"
        />
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
          src={hacktober}
          width={100}
          height={100}
          className="h-full w-full object-contain bg-black" // Changed from object-cover to object-contain
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
