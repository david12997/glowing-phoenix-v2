import { NextResponse } from "next/server"
import { database } from "@/db/config"
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export async function GET(req: Request, res: Response) {
    try
    {
        const [rows,fields] = await database.query("SELECT * from components")
        return NextResponse.json ( {rows: rows} )
    }
    catch(exception)
    {
        return NextResponse.json( { error: "error", status: 500, message: exception} )
    }
}