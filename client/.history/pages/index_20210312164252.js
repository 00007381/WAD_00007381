import ActiveLink from "../utils/ActiveLink";

const HomePage = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
      <div className="flex justify-between mt-2">
        <h2 className="text-2xl">FanFandom</h2>
        <div className="flex space-x-10">
          <ActiveLink href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/about">
            <a>About</a>
          </ActiveLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
