import { BaseService } from "./BaseService";

export class BookService extends BaseService {
  constructor() {
    super();
    this.item = "book";
  }

  async getBooks() {
    return await super.getItems(this.item);
  }

  async getBookById(bookId) {
    return await super.getItemById(this.item, bookId);
  }

  async updateBook(bookId, data) {
    return await super.updateItem(this.item, bookId, data);
  }
}
