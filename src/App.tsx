import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, DatePicker, Space, version } from "antd";

// import { login } from "./store/actions/auth";
import { useAppDispatch, useAppSelector } from "./store/hooks";

import "antd/dist/reset.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function useGetData() {
      // useAppDispatch(login({"teste@email.com", "senha123"}));
      useAppDispatch();
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGetData();
  }, [dispatch]);

  const state = useAppSelector(state => state);
  console.log("state: ", state);
  return (
    <div>
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
    </div>
  );
}

export default App;
