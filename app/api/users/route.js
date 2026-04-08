import { NextResponse } from "next/server"

export function GET() {
    return NextResponse.json({
        message: "Obteniendo datos!"
    })
}

export async function POST(request) {
    const userData = await request.json();
    return NextResponse.json({
        message: "Insertando datos!",
        data: userData
    })
}

export function PUT() {
    return NextResponse.json({
        message: "Actualizando datos!"
    })
}


export function DELETE() {
    return NextResponse.json({
        message: "Eliminando datos!"
    })
}
