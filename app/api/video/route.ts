import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import path from "path"

export const GET = async () => {
    const filePath = path.join(process.cwd(), 'public', 'vid.webm')
    const file = await readFile(filePath)

    return new NextResponse(
        file,
        {
            headers: {
                'Content-Type': 'video/webm'
            }
        }
    )
}