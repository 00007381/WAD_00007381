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
      <div className="flex items-center text-xl text-gray-700 mt-4 justify-between">
        <h2 className="text-2xl font-semibold">List of best animated shows</h2>
        <Link href="/shows/create">
          <a className="px-2 py-1 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-400">
            + Add new show
          </a>
        </Link>
      </div>
      {!data && <div>loading...</div>}
      {error && <div>failed to load, problem is with the server</div>}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-y-10  justify-items-auto gap-6 ">
        {data &&
          data.map((item) => {
            return <ShowCard show={item} />;
          })}
      </div>
    </Layout>
  );
};

export default HomePage;
