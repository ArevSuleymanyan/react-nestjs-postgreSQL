import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthorService } from "../services/AuthorService";
import { Row, Col, Typography, Form, Button, Input } from "antd";

const { Title } = Typography;

const authorService = new AuthorService();

export const AuthorDetails = () => {
  const { authorId } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    const getAuthorDetails = async () => {
      const result = await authorService.getAuthorById(authorId);
      if (result) {
        form.setFieldValue("firstName", result.firstName);
        form.setFieldValue("lastName", result.lastName);
      }
    };
    getAuthorDetails();
  }, [authorId, form]);
  const onFinish = async (values) => {
    await authorService.updateAuthor(authorId, values);
    navigate("/");
  };

  return (
    <Row>
      <Col span={8} offset={5}>
        <Title type="secondary" style={{ textAlign: "center" }}>
          Author Details Page
        </Title>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input first name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input last name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 13,
              span: 16,
            }}
          >
            <Button type="default" onClick={() => navigate("/")}>
              {"<<"}
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
