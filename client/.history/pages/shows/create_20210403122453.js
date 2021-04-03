import { useRouter } from "next/router";
import { createRef } from "react";
import axios from "axios";
import useSWR from "swr";
import Layout from "../../src/Layout";
import InputLabel from "../../src/components/InputLabel";
import DatePicker from "react-date-picker";

const CreatePage = () => {
  const titleRef = createRef(); // titleRef.current.value
  const creatorsRef = createRef();
  const episodeNumRef = createRef();
  const ratingRef = createRef();
  const coverRef = createRef();
  const bgRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titleRef.current.value);
  };

  return (
    <Layout>
      <h1 className="text-3xl mt-6 font-semibold text-gray-700">
        Form for adding a new Show
      </h1>
      <form onSubmit={handleSubmit} className="my-4 space-y-6">
        <InputLabel
          name={"Title of the show"}
          titleRef={titleRef}
          isRequired={true}
        />
        <InputLabel
          name={"Full name of creators"}
          titleRef={creatorsRef}
          isRequired={true}
        />
        <div className="space-x-4 text-xl">
          <label> First episode release date *</label>
          <span className="p-2 bg-blue-50 border border-blue-300">
            <DatePicker onChange={onChange} value={value} />
          </span>
        </div>
        <InputLabel
          name={"Cover image URL"}
          titleRef={coverRef}
          isRequired={true}
        />
        <InputLabel
          name={"Background image URL"}
          titleRef={bgRef}
          isRequired={false}
        />
        <InputLabel
          name={"Number of episodes"}
          isNumber={true}
          titleRef={episodeNumRef}
          isRequired={false}
        />
        <InputLabel
          name={"Average rating"}
          isNumber={true}
          titleRef={ratingRef}
          isRequired={false}
        />

        <input
          type="submit"
          value="Submit"
          className="py-2 px-4 text-xl bg-blue-500 text-white rounded-lg float-right"
        />
      </form>
    </Layout>
  );
};

export default CreatePage;
