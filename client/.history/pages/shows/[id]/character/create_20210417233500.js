import { useRouter } from "next/router";
import { createRef, useRef, useState } from "react";
import axios from "axios";
import { mutate } from "swr";
import Layout from "../../../../src/Layout";
import InputLabel from "../../../../src/components/InputLabel";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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
          catchphrase: "",
          age: 0,
        }}
        validationSchema={Yup.object({
          nickname: Yup.string().required("Nickname is required"),
          bio: Yup.string().required("Bio is Required"),
          appearance: Yup.string().required("Appearance is Required"),
          photoURL: Yup.string().required("PhotoURL is Required"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="space-y-6 my-8">
          <div>
            <label htmlFor="nickname" className="text-xl">
              Nickname
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="nickname"
              type="text"
            />
            <span className="text-red-500">
              <ErrorMessage name="nickname" />
            </span>
          </div>
          <div>
            <label className="text-xl" htmlFor="bio">
              Short Bio
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="bio"
              type="text"
            />
            <span className="text-red-500">
              <ErrorMessage className="text-red-500" name="bio" />
            </span>
          </div>
          <div>
            <label className="text-xl" htmlFor="appearance">
              Appearance
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="appearance"
              type="email"
            />
            <ErrorMessage className="text-red-500" name="appearance" />
          </div>
          <div>
            <label className="text-xl" htmlFor="photoURL">
              PhotoURL
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="photoURL"
              type="email"
            />
            <ErrorMessage name="photoURL" className="text-red-500 bg-red-500" />
          </div>
          <div>
            <label className="text-xl" htmlFor="catchphrase">
              Catchphrase
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="catchphrase"
              type="email"
            />
            <ErrorMessage className="text-red-500" name="catchphrase" />
          </div>
          <div>
            <label className="text-xl" htmlFor="age">
              Age
            </label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="age"
              type="number"
            />
            <ErrorMessage className="text-red-500" name="age" />
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
