import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {id} = await params;
    return NextResponse.json("Obteniendo tareas " +  id)
}

export async function PUT(request,{params}){
    const {id} = await params;
    return NextResponse.json("Actualiznado  tareas " + id)
}

export async function DELETE(request,{params}){
    const {id} = await params;
    return NextResponse.json("Elimiando tareas " + id)
}

