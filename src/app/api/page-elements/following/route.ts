import { NextResponse } from "next/server"
import { database } from "@/db/config"
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export async function GET(req: Request, res: Response) {
    try
    {
        const [rows,fields] = await database.query("SELECT c.data, c.media from components c WHERE c.id = 2")
        return NextResponse.json ( {rows: rows} )
    }
    catch(exception)
    {
        return NextResponse.json( { error: "error", status: 500, message: exception} )
    }
}