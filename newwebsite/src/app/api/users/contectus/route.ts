import { connect } from "@/dbConfig/dbConfig";
import contect from "@/models/contectModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, title, country, companysize, privcay_polocy } =
      reqBody;

    console.log("Received request body:", reqBody);

    const contectusinfo = new contect({
      name,
      email,
      title,
      country,
      companysize,
      privcay_polocy,
    });

    const contectinfo = await contectusinfo.save();
    console.log("contectinfo saved successfully:", contectinfo);

    return NextResponse.json({
      message: " got data successfully",
      success: true,
      contectinfo,
    });
  } catch (error: any) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
