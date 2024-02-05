import React, { useEffect, useMemo, useState } from "react";
import { BookService } from "../services/BookService";
import { Table, Row, Col, Typography } from "antd";
import { bookColumns } from "./bookColumns";
import moment from "moment";

const { Title } = Typography;
const bookService = new BookService();

export const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const result = await bookService.getBooks();
      setBooks(result);
    };
    getBooks();
  }, []);

  const dataSource = useMemo(() => {
    return (books || []).map((book, index) => ({
      key: book.id,
      book_id: book.id,
      author_id: book.author.id,
      title: book.title,
      publishedOn: moment(book.publishedOn).format("YYYY-MM-DD"),
      author: `${book.author.firstName} ${book.author.lastName}`,
      index: index + 1,
    }));
  }, [books]);
  return (
    <Row>
      <Col span={15} offset={5}>
        <Title style={{ textAlign: "center" }} type="secondary">
          Books
        </Title>
        {dataSource.length ? (
          <Table bordered dataSource={dataSource} columns={bookColumns} />
        ) : null}
      </Col>
    </Row>
  );
};
