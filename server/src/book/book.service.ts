import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";


@Injectable()
export class BookService{
    constructor(private prisma: PrismaService) {}

    async getBooks(){
        return this.prisma.book.findMany({
            include:{
                author :true
            }
        })
    }

    async getBookById(bookId){
        return this.prisma.book.findUnique({
                where: { id: bookId}
            })
    }

    async updateBook(bookId, payload){
        return this.prisma.book.update({
            data: payload,
            where: {id : bookId}
        })
    }
}
