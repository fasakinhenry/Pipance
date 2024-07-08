import { db } from "@/lib/db";
import { NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  res: NextApiResponse,
  { params }: { params: { user_id: string } }
) {
  if (req.method === "GET") {
    try {
      // Extract token from the request body
      const body = await req.json();
      const token = body.token;

      if (!token) {
        return NextResponse.json(
          { message: "Authorization token missing" },
          { status: 401 }
        );
      }

      // Verify token
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      if (!decoded || !decoded.userId) {
        return NextResponse.json({ message: "Invalid token" }, { status: 401 });
      }

      // Extract user ID from the URL parameter
      const { user_id } = params;
      if (user_id !== decoded.userId) {
        return NextResponse.json({ message: "Forbidden" }, { status: 403 });
      }

      // Fetch user data from the database
      const user = await db.user.findUnique({
        where: { id: user_id },
      });

      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }

      // Respond with user data
      return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
      console.error("❌ Error:");
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Invalid request method" },
      { status: 405 }
    );
  }
}
