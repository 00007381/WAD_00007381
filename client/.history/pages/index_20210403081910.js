import Layout from "../src/Layout";
import axios from "axios";
import useSWR from "swr";

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
    </Layout>
  );
};

export default HomePage;
