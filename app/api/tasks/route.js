import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(){
const tast = await prisma.user.findMany(); 

    return NextResponse.json(tast)
}

export function POST(){
    return NextResponse.json("Creando tareas")
}