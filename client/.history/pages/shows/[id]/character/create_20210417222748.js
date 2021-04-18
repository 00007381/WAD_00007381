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
      <Formik initialValues={{ firstName: "", lastName: "", email: "" }}>
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field
              className=" w-full bg-blue-50 border border-blue-300 p-2 rounded"
              name="firstName"
              type="text"
            />
            <ErrorMessage name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />
          </div>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Layout>
  );
};

export default CharacterCreate;
