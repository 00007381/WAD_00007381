import Header from "./Header";
import Footer from "./Footer";

// props is the way for react (the base of the next js) to carry information between parent and child components
const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="max-w-screen-lg px-2 mx-auto h-full flex-auto w-full">
        Main content where fans can explore between number of animated shows
      </div>
    </div>
  );
};

export default Layout;
