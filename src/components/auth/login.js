import React from "react";
import { useLoginStore } from "../../state/client/store/loginStore";
import { instance } from "../../state/server/Base";
import { useMutation} from 'react-query'

const Login = () => {
  const { email, password, setEmail, setPassword } = useLoginStore();

  const postLogin = async () => {
    const req = await instance.post('/api/login',{
        'email': email,
        'password': password
    })
    return req.data
  }

  const loginMutation = useMutation(postLogin)

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate();
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">로그인</button>
      </form>
      {loginMutation.isLoading && <div>Loading...</div>}
      {loginMutation.isSuccess && <div>{loginMutation.data.token}</div>}
      {loginMutation.isError && <div>{loginMutation.error.message}</div>}
    </>
  );
};

export default Login;
