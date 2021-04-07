import Layout from "../src/Layout";
import axios from "axios";
import useSWR from "swr";
import ShowCard from "../src/components/ShowCard";
import Link from "next/link";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const HomePage = () => {
  const { data, error } = useSWR("http://localhost:14602/api/Shows", fetcher);

  return (
    <Layout>
      <div className="flex items-center text-xl text-gray-700 my-6 justify-between">
        <h2 className="text-2xl font-semibold">List of best animated shows</h2>
        <Link href="/shows/create">
          <a className="px-2 py-1 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-400">
            + Add new show
          </a>
        </Link>
      </div>
      {!data && !error && <div>loading...</div>}
      {error && (
        <div>
          failed to load the data, problem is with the server API, make sure to
          run the server through visual studio or check console for more info
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10  justify-items-auto gap-6 ">
        {data.length !== 0 &&
          data.map((item) => {
            return <ShowCard show={item} />;
          })}
      </div>
    </Layout>
  );
};

export default HomePage;
