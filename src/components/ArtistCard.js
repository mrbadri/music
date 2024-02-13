export default function ArtistCard({ src, Artist }) {
  return (
    <>
      <div className="  ">
        <a href="#" className="">
          <img
            className="rounded-[300px] w-1/2 p-2 mx-auto"
            src={src}
            alt=""
          />
        </a>
        <div className="text-center">
          <a href="#">
            <p className="mb-2 text-base sm:text-xl md:text-2xl font-bold tracking-tight text-black">
              {Artist}
            </p>
          </a>
          <a
            href="#"
            className="inline-flex items-center px-3 text-base sm:text-sm font-medium text-center text-SteelBlue-600 rounded-lg  ">
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
