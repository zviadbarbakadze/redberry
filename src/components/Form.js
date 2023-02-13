import React, { useContext, useEffect, useState } from "react";

import Experience from "./Experience";
import Knowledge from "./Knowledge";
import PersonalInfo from "./PersonalInfo";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Body, Button, Footer, Header, Myform } from "./Styles";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .matches(/^[\u10A0-\u10FF]+$/)
    .required(),
  surname: yup
    .string()
    .min(2)
    .matches(/^[\u10A0-\u10FF]+$/)
    .required(),

  about_me: yup.string().required().min(2),
  email: yup.string().email().matches("@redberry.ge").required(),
  phone_number: yup
    .string()
    .matches(
      /\+\S*9\S*9\S*5\S*5\S*[976514]\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*/
    )
    .max(13)
    .required("არასწორია"),
  position: yup.string().required().min(2),
  employer: yup.string().required().min(2),
  start_date: yup.string().min(2),
  due_date: yup.string().min(2),
  due_date1: yup.string().min(2),
  description: yup.string().min(2),
  description1: yup.string().min(2),
  institute: yup.string().required().min(2),
  degree: yup.string().min(2),
  image: yup.object().shape({
    name: yup.string().required(),
  }),
});

export default function Form() {
  const [page, setPage] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
    // axios
    //   .post("https://resume.redberryinternship.ge/api/cvs", data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo register={register} errors={errors} />;
    } else if (page === 1) {
      return <Experience register={register} errors={errors} />;
    } else {
      return <Knowledge register={register} errors={errors} />;
    }
  };

  return (
    <Myform onSubmit={handleSubmit(submitForm)}>
      <Header></Header>
      <Body>{pageDisplay()}</Body>
      <Footer>
        <Button
          hidden={page === 0}
          onClick={() => {
            setPage((curr) => curr - 1);
          }}
        >
          უკან
        </Button>
        <Button
          type="submit"
          onClick={() => {
            setPage((curr) => curr + 1);
          }}
        >
          {page > 1 ? "დასრულება" : "შემდეგი"}
        </Button>
      </Footer>
    </Myform>
  );
}
