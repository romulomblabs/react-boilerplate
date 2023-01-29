import React from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Image, Row, Typography } from "antd";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { auth } from "src/store/slices/auth/authAsyncActions";

import styles from "./Login.module.css";
const { Title } = Typography;

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  Form.useForm();

  const { loading } = useAppSelector(state => state.auth);

  interface LoginData {
    email: string;
    password: string;
  }

  const submitForm = (data: LoginData) => {
    dispatch(auth(data));
  };

  const { register, handleSubmit } = useForm<LoginData>();

  return (
    <Row className={styles.login}>
      <Col sm={24} md={12} className={styles.contentLeft}>
        <div className="center-content">
          <Image src="path/to/logo.png" alt="Company Logo" />
          <Title level={4}>Welcome to our App</Title>
          <Title level={5}>Please log in to continue</Title>
        </div>
      </Col>
      <Col sm={24} md={12} className={styles.content}>
        <Form onFinish={handleSubmit(submitForm)}>
          <Form.Item label="Email">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              required
            />
          </Form.Item>
          <Form.Item label="Password">
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              required
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {loading ? "Loading" : "Log in"}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
