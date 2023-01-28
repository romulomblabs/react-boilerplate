import { useForm } from "react-hook-form";
import { auth } from "src/store/auth/authActions";
import { useAppDispatch, useAppSelector } from "src/store/hooks";

function Login() {
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector(state => state.auth);

  interface LoginData {
    primaryDocument: string;
    password: string;
    recaptchaToken: string;
  }

  const submitForm = (data: LoginData | any) => {
    data.primaryDocument = data.primaryDocument.replaceAll(".", "").replaceAll("-", "");
    dispatch(auth(data));
  };

  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-input"
            {...register("primaryDocument")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-input"
            {...register("password")}
            required
          />
        </div>
        <button type="submit" className="button" disabled={loading}>
          {loading ? "loading" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
