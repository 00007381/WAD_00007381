import { useRouter } from "next/router";
import { createRef, useRef, useState } from "react";
import axios from "axios";
import { mutate } from "swr";
import Layout from "../../../../src/Layout";
import InputLabel from "../../../../src/components/InputLabel";

const CharacterCreate = () => {
  return (
    <Layout>
      <h1 ref={scrollRef} className="text-3xl mt-6 font-semibold text-gray-700">
        Form for adding a new Show
      </h1>
    </Layout>
  );
};

export default CharacterCreate;
