import { useMutation } from "react-query";
import useAuthStore from "../store/authStore";
import { login, signUp } from "../services/api";

const useAuth = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  const loginMutation = useMutation((credentials) => login(credentials), {
    onSuccess: (data) => {
      setAuth(data);
    },
  });

  const signUpMutation = useMutation((credentials) => signUp(credentials), {
    onSuccess: (data) => {
      setAuth(data);
    },
  });

  return { loginMutation, signUpMutation };
};

export default useAuth;
