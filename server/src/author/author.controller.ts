import {Controller, Get,  Put, Param, Body} from '@nestjs/common'
import {AuthorService} from "./author.service";

@Controller('author')

export class AuthorController{
    constructor(private readonly authorService: AuthorService) {}
    @Get("/:authorId")
    async getAuthorById(
        @Param('authorId') authorId
    ){
        return this.authorService.getAuthorById(authorId)
    }

    @Put("/:authorId")
    async updateAuthor(
        @Param('authorId') authorId,
        @Body() body
    ){
        return this.authorService.updateAuthor(authorId, body)
    }

}
