import { PrismaClient } from '@prisma/client';
import { books } from "../books";
import {v4 as uuid} from 'uuid'

const prisma = new PrismaClient();

async function main(){
    const records = await prisma.author.findMany();
    if (records.length > 0) {
        return;
    }
    for (let i = 0; i < books.length; i++){
        const authorId = uuid()
        await prisma.author.create({ data: {...books[i].author, id: authorId} })
        await prisma.book.create({data: {...books[i].book, authorId, id: uuid()}})
    }
}
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
