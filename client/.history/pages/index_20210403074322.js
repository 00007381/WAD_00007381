import Layout from "../src/Layout";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const HomePage = () => {
  const { data, error } = useSWR("/api/data", fetcher);

  return (
    <Layout>
      <h2 className="text-xl">
        Main content where fans can explore between number of animated shows
      </h2>
    </Layout>
  );
};

export default HomePage;
