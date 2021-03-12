import ActiveLink from "../utils/ActiveLink";

const HomePage = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className=" bg-indigo-500 m-2 rounded-lg py-2 text-white">
        <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
          <div className="flex justify-between">
            <h2 className="text-2xl">FanFandom</h2>
            <div className="flex space-x-10 text-xl">
              <ActiveLink href="/">
                <a className="hover:text-indigo-200">Home</a>
              </ActiveLink>
              <ActiveLink href="/about">
                <a className="hover:text-indigo-200">About</a>
              </ActiveLink>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto px-5 lg:px-0 h-full flex-auto">
        main content
      </div>
    </div>
  );
};

export default HomePage;
