import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookService } from "../services/BookService";
import { Row, Col, Typography, Form, Button, Input, DatePicker } from "antd";
import moment from "moment";

const { Title } = Typography;

const bookService = new BookService();

export const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    const getBookDetails = async () => {
      const result = await bookService.getBookById(bookId);
      if (result) {
        form.setFieldValue("title", result.title);
        form.setFieldValue("publishedOn", moment(result.publishedOn));
      }
    };
    getBookDetails();
  }, [bookId, form]);
  const onFinish = async (values) => {
    await bookService.updateBook(bookId, values);
    navigate("/");
  };
  return (
    <Row>
      <Col span={8} offset={5}>
        <Title type="secondary" style={{ textAlign: "center" }}>
          Book Details Page
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
            label="Book Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input book title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Published On"
            name="publishedOn"
            rules={[
              {
                required: true,
                message: "Please input date!",
              },
            ]}
          >
            <DatePicker />
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
