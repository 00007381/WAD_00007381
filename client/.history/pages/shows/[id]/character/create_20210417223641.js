import { useRouter } from "next/router";
import { createRef, useRef, useState } from "react";
import axios from "axios";
import { mutate } from "swr";
import Layout from "../../../../src/Layout";
import InputLabel from "../../../../src/components/InputLabel";
import { Formik, Field, Form, ErrorMessage } from "formik";

const CharacterCreate = () => {
  return (
    <Layout>
      <h1 className="text-3xl mt-6 font-semibold text-gray-700">
        Form for adding a new Character
      </h1>
      <Formik
        initialValues={{
          nickname: "",
          bio: "",
          appearance: "",
          photoURL: "",
          Catchphrase: "",
        }}
      >
        <Form className="space-y-6 my-8">
          <div>
            <label htmlFor="firstName" className="text-xl">
              Nickname
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="firstName"
              type="text"
            />
            <ErrorMessage name="firstName" />
          </div>
          <div>
            <label className="text-xl" htmlFor="lastName">
              Short Bio
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="lastName"
              type="text"
            />
            <ErrorMessage name="lastName" />
          </div>
          <div>
            <label className="text-xl" htmlFor="email">
              Appearance
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="email"
              type="email"
            />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label className="text-xl" htmlFor="email">
              PhotoURL
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="email"
              type="email"
            />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label className="text-xl" htmlFor="email">
              Catchphrase
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="email"
              type="email"
            />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label className="text-xl" htmlFor="email">
              Age
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="email"
              type="number"
            />
            <ErrorMessage name="email" />
          </div>
          <button
            className="py-2 px-4 text-xl bg-blue-500 hover:bg-blue-400 text-white rounded-lg w-full  cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </Layout>
  );
};

export default CharacterCreate;
