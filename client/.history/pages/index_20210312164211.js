import ActiveLink from "../utils/ActiveLink";

const HomePage = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
      <div className="flex justify-between">
        <h2>FanFandom</h2>
        <div className="flex">
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
