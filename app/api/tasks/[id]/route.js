import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  const { id } = await params;
  const tasks = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(tasks);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const { title, description } = await request.json();
  const task = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(task);
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const task = await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: "Tarea no encontrada" }, { status: 404 });
  }
  
}
