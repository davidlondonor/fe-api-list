import React from "react";
import { Formik, Field, Form } from "formik";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CheckBoxText = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={{
          toggle: false,
          checked: [],
        }}
        onSubmit={async (values) => {
          await sleep(500);
          console.log(values);
        }}
      >
        {({ values }) => {
          return (
            <Form>
              {" "}
              <Field type="checkbox" name="toggle" />
              {`${values.toggle}`}
              <Field type="checkbox" value="1" name="checked" />
              <Field type="checkbox" value="2" name="checked" />
              <Field type="checkbox" value="3" name="checked" />
              <Field type="checkbox" value="4" name="checked" />
              <Field type="checkbox" value="5" name="checked" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default CheckBoxText;
