import ActiveLink from "../utils/ActiveLink";

const HomePage = () => {
  return (
    <div>
      <div className=" bg-indigo-500 py-4">
        <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
          <div className="flex justify-between">
            <h2 className="text-2xl">FanFandom</h2>
            <div className="flex space-x-10 text-xl">
              <ActiveLink href="/">
                <a>Home</a>
              </ActiveLink>
              <ActiveLink href="/about">
                <a>About</a>
              </ActiveLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
