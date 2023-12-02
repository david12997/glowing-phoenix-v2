import { NextResponse } from "next/server"
import { database } from "@/db/config"
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export async function GET(req: Request, res: Response) {
    try
    {
        const page = new URL(req.url).searchParams.get('page');      
        if(page === null || page === undefined) return NextResponse.json({status:400,message:'page not found'});
        if(isNaN(Number(page))) return NextResponse.json({status:400,message:'page not found'});

        const [rows,fields] = await database.query("SELECT c.nombre, c.data from components c, pages p, components_pages x where c.id = x.components_id and x.pages_id = ?",[page]);

        return NextResponse.json ( {
            status:200,
            message:'success',
            data: rows
        } )

    }
    catch(exception)
    {
        return NextResponse.json( { error: "error", status: 500, message: exception} )
    }
}