import { Link } from "react-router-dom";
import React from "react";
export const bookColumns = [
  {
    title: "N",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text, record) => (
      <Link to={`/book/${record.book_id}`}>{text}</Link>
    ),
  },
  {
    title: "Published On",
    dataIndex: "publishedOn",
    key: "publishedOn",
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
    render: (text, record) => (
      <Link to={`/author/${record.author_id}`}>{text}</Link>
    ),
  },
];
