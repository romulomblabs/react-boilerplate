import { useForm } from "react-hook-form";

import { auth } from "../../features/auth/authActions";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";

function Login() {
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector(state => state.auth);

  interface LoginData {
    primaryDocument: string;
    password: string;
    recaptchaToken: string;
  }

  const submitForm = (data: LoginData | any) => {
    data.recaptchaToken =
      "03AFY_a8WdK5Bc241DUULDTAdtw-dOkY8tr6-Kcnxj-IKjDd9UxrOHYVU9gP_XjRFaFR6F1AVVbB2_UEmOIhOwiTxoMO6B2YCBpH56fOcHythQyR0I1cyzgv5QIO3A33QBh4NTES89Bl3LUmxcfDNN5-cgaGbw2vtiwNtBA7OLDDHUDsj0WEceNom-0dMCoREU8GRrqDS67IP0cQMbLGWsa5cnpggyoY2O2R5BTtK_4Mn5arEl75K37gdwUQPnGGL5-PvhvzSp-HKMK99gSlULBWWcxYTU4IsBa6zvzxc4O41aM3GnnWnYF1mgFFQ43sydsg7U1jKpQQUL3N-rvDLXtwfo8Mko2lySbWlseKKb1Dsvj7q-O-fBkGwuyevMZyYLv6xOvEf_mb4gbyqdzmgKy393LpgO03APkFDv-4svUuj4c3YEN-x4TAN0vFr_BXz7H8YXu3CLR3CGgClw4ElyaKrJ6k_UqQoAl_UBcJviXIXT1fPrg8egy_hO2ITVKoyWRVyGqJXbRi_j8JjUqzbcMMl5UlyStqUq7CWxmfS-6LkTtA54ErEfzp7brgSFPQYvA_52lXMVmkyP0VLYbb7K9FVHzvS5LHjoIg";
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
