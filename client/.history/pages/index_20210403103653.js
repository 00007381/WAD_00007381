import Layout from "../src/Layout";
import axios from "axios";
import useSWR from "swr";
import ShowCard from "../src/components/ShowCard";
import Link from "next/link";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const HomePage = () => {
  const { data, error } = useSWR("http://localhost:14602/api/Shows", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <Layout>
      <div className="flex items-center text-xl text-gray-700 mt-4 justify-between">
        <h2 className=" ">List of best animated shows</h2>
        <Link href="/">
          <a className="p-2 bg-blue-500">Create new show</a>
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-y-10  justify-items-auto gap-6 ">
        {data.map((item) => {
          return <ShowCard show={item} />;
        })}
      </div>
    </Layout>
  );
};

export default HomePage;
