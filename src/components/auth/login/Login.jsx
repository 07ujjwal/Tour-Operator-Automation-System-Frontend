import { useForm } from "react-hook-form";
import "./Login.css";
import useAuth from "../../../hooks/useAuth";
import useAuthStore from "../../../store/authStore";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginMutation, isLoading, isError, error } = useAuth();

  const { user } = useAuthStore.getState();
  console.log(user);

  const onSubmit = async (data) => {
    try {
      const result = await loginMutation.mutateAsync(data);
      console.log("Login successful:", result);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="form-error">{errors.password.message}</p>
        )}
      </div>
      <button type="submit" className="form-button" disabled={isLoading}>
        Login
      </button>
      {isError && <p className="error-message">{error.message}</p>}
    </form>
  );
}

export default Login;
