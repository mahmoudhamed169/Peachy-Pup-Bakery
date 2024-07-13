import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://upskilling-egypt.com:3001/contact",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-100 p-4">
      <form className="w-75 m-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-5"
            placeholder="Full Name"
            {...register("name", {
              required: "Name is required",
            })}
          />
        </div>
        {errors.name && (
          <span className="text-danger">{errors?.name.message}</span>
        )}

        <div className="mb-3">
          <input
            type="email"
            className="form-control rounded-5"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email is not valid",
              },
            })}
          />
        </div>
        {errors.email && (
          <span className="text-danger">{errors?.email.message}</span>
        )}

        <div className="mb-3">
          <input
            type="tel"
            className="form-control rounded-5"
            placeholder="Phone Number"
            {...register("phone", {
              required: "Phone number is required",
            })}
          />
        </div>
        {errors.phone && (
          <span className="text-danger">{errors?.phone.message}</span>
        )}

        <div className="text-center">
          <button
            type="submit"
            className="text-black fw-bold px-5 py-2 formButtun rounded-5"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
