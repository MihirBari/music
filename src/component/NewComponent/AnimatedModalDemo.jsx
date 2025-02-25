import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { motion } from "framer-motion";
import { CgPiano } from "react-icons/cg";
import { BsMusicNote } from "react-icons/bs";
import { RiVoiceprintFill } from "react-icons/ri";
import { GiLoveSong } from "react-icons/gi";
import { MdOutlineMan } from "react-icons/md";
import img from "../../assets/Piano.webp";
import img1 from "../../assets/vocal.webp";
import img2 from "../../assets/age.webp";
import teach from "../../assets/teach1.webp";
import teach1 from "../../assets/teach2.webp";
import vocal1 from "../../assets/vocal1.webp";
import vocal2 from "../../assets/vocal2.webp";
import pamp from "../../assets/senior.jpg";
import { MdLyrics } from "react-icons/md";

const PlaneIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
  </svg>
);

const MicIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
    <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
  </svg>
);

// Dynamic content for three different views
const modalData = [
  {
    imgShow: img,
    triggerText: "PIANO",
    title: "Learn Piano From Experienced",
    destination: "Bali",
    images: [teach, teach1],
    details: [
      {
        icon: (
          <CgPiano className="mr-1 text-black-700 dark:text-black-300 h-4 w-4" />
        ),
        text: "Basic and Advance",
      },
      {
        icon: (
          <BsMusicNote className="mr-1 text-black-700 dark:text-black-300 h-4 w-4" />
        ),
        text: "All Types of western & Indian Music",
      },
      {
        icon: (
          <MdOutlineMan className="mr-1 text-black-700 dark:text-black-300 h-4 w-4" />
        ),
        text: "Age is no Bar",
      },
    ],
  },
  {
    imgShow: img1,
    triggerText: "Learn Singnig From The Best✨",
    title: "Singing Lessons",
    destination: "Paris",
    images: [vocal1, vocal2],
    details: [
      {
        icon: (
          <MdLyrics className="mr-1 text-black-700 dark:text-black-300 h-4 w-4" />
        ),
        text: "High Class vocal Trainning",
      },
      {
        icon: (
          <MicIcon className="mr-1 text-black-700 dark:text-black-300 h-4 w-4" />
        ),
        text: "All types of Bollywood and Other songs",
      },
      {
        icon: (
          <GiLoveSong className="mr-1 text-black-700 dark:text-black-300 h-4 w-4" />
        ),
        text: "Voice Training & Breath control",
      },
      {
        icon: (
          <RiVoiceprintFill className="mr-1 text-black-700 dark:text-black-300 h-4 w-4" />
        ),
        text: "Hindustan Classical Music",
      },
    ],
  },
  {
    imgShow: img2,
    triggerText: "All age groups invited",
    title: "SENIOR CITIZEN INVITATION",
    destination: "New York",
    images: [pamp],
    details: [
      {
        icon: (
          <MdLyrics className="mr-1 text-black-700 dark:text-black-300 h-4 w-4" />
        ),
        text: "we offer guidance and training in singing techniques to help you prepare.",
      },
      {
        icon: (
          <RiVoiceprintFill className="mr-1 text-black-700 dark:text-black-300 h-4 w-4" />
        ),
        text: "Every participant will be able to practice 2 workshop jam sessions and perform in a final live program once every 45 days",
      },
      {
        icon: (
          <MdLyrics className="mr-1 text-black-700 dark:text-black-300 h-4 w-4" />
        ),
        text: "Bollywood Song,All types of devotional songs, All types of Bengali songs",
      },
    ],
  },
];

export function AnimatedModalDemo() {
  return (
    <div
      id="skills"
      className="animated items-center justify-center gap-10"
    >
      {modalData.map((content, idx) => (
        <Modal key={idx}>
          <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn relative px-4 py-2 rounded-md">
            <img
              src={content.imgShow}
              alt="modal image"
              className="object-cover rounded-md"
            />
            <div className="translate-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-200 text-white z-20 backdrop-blur-md">
              {content.triggerText}
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-black-600 dark:text-black-100 font-bold text-center mb-8">
                {content.title}
              </h4>
              <div className="flex justify-center items-center">
                {content.images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    style={{ rotate: Math.random() * 20 - 10 }}
                    whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                    whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-black-800 dark:border-black-700 border border-black-100 flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${content.destination} image`}
                      width="500"
                      height="500"
                      className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-center justify-center max-w-sm mx-auto">
                {content.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    {detail.icon}
                    <span className="text-black-700 dark:text-black-300 text-sm">
                      {detail.text}
                    </span>
                  </div>
                ))}
              </div>
            </ModalContent>
            {/* <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Cancel
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Book Now
              </button>
            </ModalFooter> */}
          </ModalBody>
        </Modal>
      ))}
    </div>
  );
}
