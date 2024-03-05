import { appendFile } from "fs"

export function GET() {
    return Response.json({
        email: "harkirat@gmail.com",
        name: "harkirat"
    })
}

