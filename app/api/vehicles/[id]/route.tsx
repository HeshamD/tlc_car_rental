import { NextRequest, NextResponse } from "next/server";
import vehicleSchema from "../schema";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  // const validation = vehicleSchema.safeParse(body);
  // if (!validation.success)
  //   return NextResponse.json(validation.error.errors, { status: 404 });
  if (params.id > 10) return NextResponse.json("id above 10");
  return NextResponse.json(body);
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {}
