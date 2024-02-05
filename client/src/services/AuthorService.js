import { BaseService } from "./BaseService";

export class AuthorService extends BaseService {
  constructor() {
    super();
    this.item = "author";
  }

  async getAuthorById(authorId) {
    return await super.getItemById(this.item, authorId);
  }

  async updateAuthor(authorId, data) {
    return await super.updateItem(this.item, authorId, data);
  }
}
