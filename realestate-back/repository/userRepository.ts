import { prisma } from "../prisma";

class UserRepository {

    async createUserRepo(data: any) {
        const res = await prisma.user.create({
            data: data
        })
        return res
    }

    async getUserRepo(email: string) {
        const res = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        return res
    }

    async getUserData(userId: string) {

        // const res = await prisma.user.findUnique({
        //     where: {
        //         id: userId
        //     }, include: {
        //         listing: true
        //     }
        // })
        const res = await prisma.user.findMany({
            include: {
                listing: true
            }
        })
        return res
    }
}

export default new UserRepository()