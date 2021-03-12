import ActiveLink from "../utils/ActiveLink";

const HomePage = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
      <div></div>
      <h2>FanFandom</h2>
      <div>
        <ActiveLink href="/">
          <a>Home</a>
        </ActiveLink>
        <ActiveLink href="/">
          <a>About</a>
        </ActiveLink>
      </div>
    </div>
  );
};

export default HomePage;
