import { useRouter } from "next/router";
import { createRef, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import Layout from "../../src/Layout";
import InputLabel from "../../src/components/InputLabel";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CreatePage = () => {
  const [titleState, setTitleState] = useState(null);
  const [creatorsState, setCreatorsState] = useState(null);
  const [episodeState, setEpisodeState] = useState(null);
  const [ratingState, setRatingState] = useState(null);
  const [coverState, setCoverState] = useState(null);
  const [bgState, setBgState] = useState(null);
  const [dateState, setDateState] = useState(null);
  const [descriptionState, setDescriptionState] = useState(null);

  const [errorState, setErrorState] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dateState);
  };

  return (
    <Layout>
      <h1 className="text-3xl mt-6 font-semibold text-gray-700">
        Form for adding a new Show
      </h1>
      <form onSubmit={handleSubmit} className="mt-4 mb-32 space-y-6">
        <InputLabel
          state={titleState}
          setState={setTitleState}
          holder={"Powerpuff girls"}
          name={"Title of the show"}
          isRequired={true}
        />
        <InputLabel
          name={"Full name of creators"}
          holder={"Craig McCracken, Lauren Faust"}
          state={creatorsState}
          setState={setCreatorsState}
          isRequired={true}
        />
        <div className="space-x-4 text-xl">
          <label> First episode release date *</label>
          <span className="p-2 bg-blue-50 border border-blue-300 rounded">
            <input
              type="date"
              className="bg-transparent"
              state={dateState}
              onChange={(e) => {
                setDateState(e.target.value);
              }}
              setState={setDateState}
            />
          </span>
        </div>
        <InputLabel
          holder={"URL"}
          name={"Cover image URL"}
          isRequired={true}
          state={coverState}
          setState={setCoverState}
        />
        <InputLabel
          holder={"URL"}
          name={"Background image URL"}
          isRequired={false}
          state={bgState}
          setState={setBgState}
        />
        <InputLabel
          name={"Number of episodes"}
          holder={"72"}
          isNumber={true}
          isRequired={false}
          state={episodeState}
          setState={setEpisodeState}
        />
        <InputLabel
          name={"Average rating out of 10"}
          holder={"6.5"}
          isNumber={true}
          isRequired={false}
          state={ratingState}
          setState={setRatingState}
        />
        <div className="space-x-4 text-xl">
          <label>
            Description *
            <textarea
              value={descriptionState}
              onChange={(e) => {
                setDescriptionState(e.target.value);
              }}
              placeholder="..."
              className="bg-blue-50 block w-full border border-blue-300 p-2 rounded mt-1"
            />
          </label>
        </div>
        {errorState && (
          <p className="text-red-500 bg-red-100 p-2 text-lg">{errorState}</p>
        )}
        <input
          type="submit"
          value="Submit"
          className="py-2 px-4 text-xl bg-blue-500 text-white rounded-lg float-right cursor-pointer"
        />
      </form>
    </Layout>
  );
};

export default CreatePage;
