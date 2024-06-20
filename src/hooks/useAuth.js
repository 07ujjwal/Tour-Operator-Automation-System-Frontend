import { useMutation } from "react-query";
import useAuthStore from "../store/authStore";
import { login, signUp } from "../services/api";

const useAuth = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const loginMutation = useMutation((credentials) => login(credentials), {
    onSuccess: (data) => {
      setUser(data.user);
    },
  });

  const signUpMutation = useMutation((credentials) => signUp(credentials), {
    onSuccess: (data) => {
      setUser(data.user);
    },
  });

  return { loginMutation, signUpMutation };
};

export default useAuth;
