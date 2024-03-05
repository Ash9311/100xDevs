import { NextRequest } from "@/node_modules/next/server";
import { PrismaClient } from '@prisma/client'
const client = new PrismaClient();
export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });
    return Response.json({
        message: "Your are logged in"
    })

}   