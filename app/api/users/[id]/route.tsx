import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user) return NextResponse.json({ error: "this error" }, { status: 404 });

  const updateUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(updateUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user) return NextResponse.json({ error: "this error" }, { status: 404 });

  await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({});
}
