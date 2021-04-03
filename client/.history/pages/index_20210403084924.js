import Layout from "../src/Layout";
import axios from "axios";
import useSWR from "swr";
import ShowCard from "../src/components/ShowCard";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const HomePage = () => {
  const { data, error } = useSWR("http://localhost:14602/api/Shows", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <Layout>
      <h2 className="text-xl">
        Main content where fans can explore between number of animated shows
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10  justify-items-auto gap-6 ">
        {data.map((item) => {
          return <ShowCard show={item} />;
        })}
      </div>
    </Layout>
  );
};

export default HomePage;
