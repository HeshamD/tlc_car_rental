import { NextRequest, NextResponse } from "next/server";
import vehicleSchema from "./schema";

export async function GET(request: NextRequest) {
  return NextResponse.json("all cars");
}

export function POST(request: NextRequest) {
  //validate the body
  const body = request.json();
  const validation = vehicleSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });
  //create in the db
  return NextResponse.json("created a car");
}
