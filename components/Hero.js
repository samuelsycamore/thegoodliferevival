import Image from "@/components/Image";
import Link from "@/components/Link";

const Hero = () => {
  return (
    <section className="flex items-center justify-center py-16 min-w-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 xl:mb-0 xl:w-6/12">
            <div className="flex flex-col md:flex-row justify-start items-center">
              <h2 className="ml-2 text-3xl font-extrabold font-display leading-tight sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-6xl z-50">
                Align your lifestyle with your landscape
              </h2>
            </div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-200">
              The Good Life Revival explores the ways that we can align our core values and our
              daily habits with a more sustainable, ecologically conscious way of life.
            </p>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-200">
              Edible wild plant identification, foraging, gardening, botany, homesteading, and more.
            </p>
            <Link href="/blog">
              <p
                className="my-3 font-bold text-sm leading-6 text-primary-500 flex flex-row items-center"
                target="_blank"
                rel="noreferrer noopener"
              >
                Start reading the blog
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </p>
            </Link>
          </div>

          <div className="w-full xl:w-5/12">
            <Link href="/shop/foraging">
              <div className="sm:flex items-center justify-between w-full col-span-1 p-6 bg-white dark:bg-gray-800 shadow rounded-xl group hover:bg-gray-100 hover:bg-opacity-40 dark:hover:bg-opacity-40 dark:hover:bg-gray-500 backdrop-filter backdrop-blur-xl bg-opacity-60 transition duration-200 cursor-pointer">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50">
                  <Image
                    src="/static/images/intro-foraging-thumbnail.png"
                    height="125"
                    width="125"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col p-3">
                  <h3 className="text-sm font-bold leading-5 text-gray-800 dark:text-white truncate sm:text-base lg:text-base">
                    Introduction to Foraging (ebook)
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                    Interested in foraging, but feeling intimidated and unsure where to begin? This
                    ebook was written with the absolute beginner in mind.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/shop/fna">
              <div className="sm:flex items-center justify-between w-full col-span-1 p-6 bg-white dark:bg-gray-800 shadow rounded-xl mt-4 group hover:bg-gray-100 hover:bg-opacity-40 dark:hover:bg-opacity-40 dark:hover:bg-gray-500 transition duration-200 cursor-pointer">
                <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50">
                  <Image
                    src="/static/images/foraging-na-thumbnail.png"
                    height="125"
                    width="125"
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col p-3">
                  <h3 className="text-sm font-bold leading-5 text-gray-800 dark:text-white truncate sm:text-base lg:text-base">
                    Foraging North America (course)
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                    Learn the pattern language of edible wild plants through this 12-week course on
                    botany, taxonomy, and ecology.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
