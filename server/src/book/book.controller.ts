import {Controller, Get, Put, Param, Body} from '@nestjs/common'
import {BookService} from "./book.service";

@Controller('book')

export class BookController{
    constructor(private readonly bookService: BookService) {}

    @Get()
    async getBooks(){
        return this.bookService.getBooks()
    }

    @Get("/:bookId")
    async getBookById(
        @Param('bookId') bookId
    ){
        return this.bookService.getBookById(bookId)
    }

    @Put("/:bookId")
    async updateBook(
        @Param('bookId') bookId,
        @Body() body
    ){
        return this.bookService.updateBook(bookId, body)
    }

}
