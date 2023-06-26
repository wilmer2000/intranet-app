import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {
    }

    async findUser(email: string): Promise<any | undefined> {
        // Need to be connected to prisma to validate with Database
        return this.prisma.user.findUnique({ where: { email } });
    }
}
