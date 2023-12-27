
export const CardService = ({ icon, titleService, descriptionService }) => {
  return (
    <div className=" h-auto">
      <div className="relative flex max-w-[350px] flex-col rounded-xl max-md:mx-auto  bg-BackgroundCard bg-clip-border text-gray-700 shadow-md  hover:shadow-backgroundIcons transition-all ">
        <div className=" h-[100px] ">
          <span className="w-[100px] grid h-[100px] rounded-[50%] mx-auto text-center shadow-md shadow-Blue place-items-center mt-4 hover:shadow-xl hover:shadow-Blue">
            <i className="">{icon}</i>
          </span>
        </div>
        <div className="p-4 text-center">
          <h2 className="block mt-4 font-sans text-2xl font-semibold leading-snug tracking-normal uppercase text-blue-gray-900 antialiased">
            {titleService}
          </h2>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            {descriptionService}
          </p>
        </div>
      </div>
    </div>
  );
};
