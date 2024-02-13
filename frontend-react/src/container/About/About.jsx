import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { images } from "../../constants";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <section class="bg-bgWhite dark:bg-gray-900 flex-1 w-full">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div class="text-center">
            <img
              class="object-contain w-auto mx-auto dark:hidden"
              src={images.banner}
              alt="Banner of Jasmine P Vo"
            />

            <div class="flex flex-col items-center justify-center gap-4 mt-4 sm:mt-5 sm:gap-8 sm:flex-row">
              {/* <a
                href="#"
                title=""
                class="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
              >
                Visit the website
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-1.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a> */}

              <a
                href="mailto:jasminepvo.dev@gmail.com"
                title=""
                class="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
              >
                Let's work together
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-1.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="max-w-5xl mx-auto mt-8 lg:mt-16">
            {/* <img class="w-full rounded-lg shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/computer-dark.png"
                alt="Content image"> */}
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2 lg:mt-16">
            <div>
              <div>
                <h3 class="text-2xl font-extrabold text-gray-900 dark:text-white">
                  About Me
                </h3>
                <p class="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Hello! I'm Jasmine Vo, a Frontend Developer with a passion for
                  crafting seamless user experiences and a penchant for
                  minimalistic design. I bring to the table a blend of technical
                  proficiency and a zen-like focus on user-centered design
                  principles.
                </p>
                <p class="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  In my world, every pixel counts and is meticulously placed
                  with intention and care. My approach is detail-oriented and
                  organized, mirroring my commitment to both my personal growth
                  and my professional work. I find joy in the journey of
                  continual learning, striving each day to be 1% better in my
                  craft and self-development.
                </p>
              </div>

              <ul class="grid grid-cols-1 mt-8 sm:grid-cols-2 gap-x-4 gap-y-3">
                <li class="flex items-center gap-2.5">
                  <svg
                    class="w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Clean Code Advocate
                  </span>
                </li>

                <li class="flex items-center gap-2.5">
                  <svg
                    class="w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Detail-Oriented Developer
                  </span>
                </li>

                <li class="flex items-center gap-2.5">
                  <svg
                    class="w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Empathetic UX Enthusiast
                  </span>
                </li>

                <li class="flex items-center gap-2.5">
                  <svg
                    class="w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Effective Team Collaborator
                  </span>
                </li>

                <li class="flex items-center gap-2.5">
                  <svg
                    class="w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Continuous Learner
                  </span>
                </li>

                <li class="flex items-center gap-2.5">
                  <svg
                    class="w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Clear Communicator
                  </span>
                </li>

                <li class="flex items-center gap-2.5">
                  <svg
                    class="w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Passionate Creator
                  </span>
                </li>

                <li class="flex items-center gap-2.5">
                  <svg
                    class="w-5 h-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Resilient Spirit
                  </span>
                </li>
              </ul>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-2xl font-extrabold text-gray-900 dark:text-white">
                  My Background
                </h3>
                <p class="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  My journey into tech was fueled by a passion for coding that
                  ignited instantly. Despite a detour during my college years,
                  where financial challenges led me to work in restaurants and
                  real estate, the dream of building better software that made
                  an impact on the end user never faded. Through self-discipline
                  and determination, I mastered the skills needed to pivot back
                  into tech, landing my role as a Software Developer.
                </p>
                <p class="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  When I'm not coding, you'll find me embracing holistic health
                  and wellness, from the tranquility of a strength training
                  session to the adrenaline rush of a good workout. I believe in
                  a balanced life where technology and personal well-being
                  harmoniously coexist.
                </p>
              </div>

              <div>
                <h3 class="text-2xl font-extrabold text-gray-900 dark:text-white">
                  What I'm Looking For
                </h3>
                <p class="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  I thrive in collaborative environments, cherishing the synergy
                  of a motivated team and the excitement of turning bold ideas
                  into reality. If you're looking for a developer who not only
                  writes clean code but also lives and breathes a lifestyle of
                  wellness and productivity, let's connect and create something
                  beautiful together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppWrap(About, "about");
