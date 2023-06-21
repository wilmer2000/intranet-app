import { PrismaClient } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // create two dummy articles
    const userAdmin = await prisma.user.create({
        data: {
            email: "wilmer@email.com",
            firstName: "Wilmer",
            lastName: "Blanco",
            isAdmin: true
        }
    });

    console.log({ userAdmin });
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });
