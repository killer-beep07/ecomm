import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-900 py-4">
      <div class="container px-6 mx-auto">
        <div class="flex flex-col items-center text-center">
          <a href="#">
            {/* <img class="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt=""> */}
          </a>

          <div class="flex flex-wrap justify-center mt-4 -mx-2">
            <a
              href="#"
              class="mx-2 text-sm text-gray-600 transition-colors duration-300 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              aria-label="Acceuil"
            >
              Acceuil
            </a>

            <a
              href="#"
              class="mx-2 text-sm text-gray-600 transition-colors duration-300 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              aria-label="A propos"
            >
              A propos
            </a>

            <a
              href="#"
              class="mx-2 text-sm text-gray-600 transition-colors duration-300 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              aria-label="Partenaires"
            >
              Partenaires
            </a>

            <a
              href="#"
              class="mx-2 text-sm text-gray-600 transition-colors duration-300 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              aria-label="Privacy"
            >
              Privacy
            </a>

            <a
              href="#"
              class="mx-2 text-sm text-gray-600 transition-colors duration-300 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              aria-label="Cookies"
            >
              Cookies
            </a>
          </div>
        </div>

        <hr class="my-4 border-gray-200 dark:border-gray-700" />

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
          <p class="text-sm text-gray-500 dark:text-gray-300">
            © Copyright 2024. All Rights Reserved.
          </p>

          <div class="flex -mx-2">
            <a
              href="https://www.instagram.com/galerie.lesm.dushop"
              class="mx-2  text-gray-600 transition-colors duration-300 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
            >
              <span class="sr-only">Instagram</span>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@les.m.du.shop"
              class="mx-2  text-gray-600 transition-colors duration-300 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              aria-label="Tiktok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-5 fill-current"
                viewBox="0 0 512 512"
                fill="none"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
            </a>
            <a
              href="#"
              class="mx-2 text-gray-600 transition-colors duration-300 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
              aria-label="Whatsapp"
            >
              <svg
                class="w-5 h-5 fill-current"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
