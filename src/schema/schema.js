import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullname: Yup.string().min(3).max(25).required("please Enter your full name"),
  email: Yup.string().email().required("please Enter your email"),
  password: Yup.string().min(6).max(11).required("please Enter your password"),
  number: Yup.string()
    .min(10)
    .max(10)
    .required("please Enter your mobile number"),
  role: Yup.string().required("please seleact your gender "),
  birthdate: Yup.string().required("please Enter your data of birth"),
  admissionNo: Yup.string().required("please Enter your roll number"),
  class: Yup.string().required("please Enter your class"),
  conditions: Yup.boolean()
    .oneOf([true], "The isActive field must be true.")
    .required("please check condition"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("please Enter your email"),
  password: Yup.string().min(6).max(11).required("please Enter your password"),
});