import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, message } = await req.json();

  // Send email here

  return NextResponse.redirect("/contact");
};
