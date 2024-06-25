// src/components/Signup.js

import { useForm } from "react-hook-form";
import "./Signup.css";
import useAuth from "../../../hooks/useAuth";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { signUpMutation, isLoading, isError, error } = useAuth();

  const onSubmit = async (data) => {
    try {
      const result = await signUpMutation.mutateAsync(data);
      console.log("Signup successful:", result);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-input"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="form-error">{errors.name.message}</p>}
      </div>
      <div className="form-group">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-input"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}
      </div>
      <div className="form-group">
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-input"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        {errors.password && (
          <p className="form-error">{errors.password.message}</p>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Confirm Password:</label>
        <input
          type="password"
          className="form-input"
          {...register("passwordConfirm", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.passwordConfirm && (
          <p className="form-error">{errors.passwordConfirm.message}</p>
        )}
      </div>
      <button type="submit" className="form-button" disabled={isLoading}>
        Signup
      </button>
      {isError && <p className="error-message">{error.message}</p>}
    </form>
  );
}

export default Signup;
