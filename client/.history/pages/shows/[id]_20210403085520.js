import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";

const ShowPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div></div>;
};

export default ShowPage;
