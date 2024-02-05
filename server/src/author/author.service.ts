import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";


@Injectable()
export class AuthorService{
    constructor(private prisma: PrismaService) {}

    async getAuthorById(authorId){
        return this.prisma.author.findUnique({
            where: { id: authorId}
        })
    }

    async updateAuthor(authorId, payload){
        return this.prisma.author.update({
            data: payload,
            where: {id : authorId}
        })
    }
}
