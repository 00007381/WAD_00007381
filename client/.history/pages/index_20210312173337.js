import ActiveLink from "../utils/ActiveLink";
import Layout from "../src/Layout";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-red-500">
      <div className=" bg-purple-500 m-2 rounded-lg py-2 text-white">
        <div className="max-w-screen-lg px-2 mx-auto">
          <div className="flex justify-between">
            <h2 className="text-2xl">FanFandom</h2>
            <div className="flex space-x-10 text-xl">
              <ActiveLink href="/" activeClassName="border-b-2 border-white">
                <a className="hover:text-blue-300">Home</a>
              </ActiveLink>
              <ActiveLink
                href="/about"
                activeClassName="border-b-2 border-white"
              >
                <a className="hover:text-blue-300">About</a>
              </ActiveLink>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg px-2 mx-auto h-full flex-auto w-full">
        Main content where fans can explore between number of animated shows
        <div className="h-96">dsom</div>
        <div className="h-96">dsom</div>
      </div>
      <div className="bg-purple-600 text-white h-32">
        <div className="max-w-screen-lg px-2 mx-auto">Footer part</div>
      </div>
    </div>
  );
};

export default HomePage;
