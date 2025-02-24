"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { motion } from "framer-motion";

// Icon components (you can also move these to a separate file)
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

const VacationIcon = ({ className }) => (
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
    <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
    <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
    <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
    <path d="M15 9l-3 5.196" />
    <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
  </svg>
);

const ElevatorIcon = ({ className }) => (
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
    <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
    <path d="M10 10l2 -2l2 2" />
    <path d="M10 14l2 2l2 -2" />
  </svg>
);

const FoodIcon = ({ className }) => (
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
    <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
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

const ParachuteIcon = ({ className }) => (
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
    <path d="M22 12a10 10 0 1 0 -20 0" />
    <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
    <path d="M2 12l10 10l-3.5 -10" />
    <path d="M15.5 12l-3.5 10l10 -10" />
  </svg>
);

// Dynamic content for three different views
const modalData = [
  {
    triggerText: "Book your flight to Bali",
    title: "Book your trip to Bali now! ✈️",
    destination: "Bali",
    images: [
      "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop",
    ],
    details: [
      {
        icon: <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
        text: "5 connecting flights",
      },
      {
        icon: <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
        text: "12 hotels",
      },
      {
        icon: <VacationIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
        text: "69 visiting spots",
      },
    ],
  },
  {
    triggerText: "Book your flight to Paris",
    title: "Experience the magic of Paris! ✨",
    destination: "Paris",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522098543979-ffc7f79d5d42?q=80&w=3425&auto=format&fit=crop",
    ],
    details: [
      {
        icon: <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
        text: "Direct flights available",
      },
      {
        icon: <FoodIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
        text: "Gourmet dining",
      },
      {
        icon: <MicIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
        text: "Evening shows",
      },
    ],
  },
  {
    triggerText: "Book your flight to New York",
    title: "Discover the energy of New York! 🗽",
    destination: "New York",
    images: [
      "https://images.unsplash.com/photo-1575908524151-55b7b19003c7?q=80&w=3000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549921296-3b87b1de509d?q=80&w=3425&auto=format&fit=crop",
    ],
    details: [
      {
        icon: <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
        text: "Multiple flight options",
      },
      {
        icon: <ParachuteIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
        text: "Adventure tours",
      },
      {
        icon: <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />,
        text: "Luxury hotels",
      },
    ],
  },
];

export function AnimatedModalDemo() {
  return (
    <div className="py-40 animated items-center justify-center gap-10">
      {modalData.map((content, idx) => (
        <Modal key={idx}>
          <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn relative px-4 py-2 rounded-md">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              {content.triggerText}
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              ✈️
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                {content.title}
              </h4>
              <div className="flex justify-center items-center">
                {content.images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    style={{ rotate: Math.random() * 20 - 10 }}
                    whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                    whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
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
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      {detail.text}
                    </span>
                  </div>
                ))}
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Cancel
              </button>
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Book Now
              </button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      ))}
    </div>
  );
}
