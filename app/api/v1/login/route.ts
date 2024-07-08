import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { email, password } = await req.json();

      // Validate input
      if (!email || !password) {
        return NextResponse.json(
          { message: "Missing email or password" },
          { status: 400 }
        );
      }

      // Check if user exists
      const user = await prisma.user.findUnique({
        where: { email },
      });
      if (!user) {
        return NextResponse.json(
          { message: "Invalid email " },
          { status: 400 }
        );
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return NextResponse.json(
          { message: "Incorrect password " },
          { status: 400 }
        );
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
      );
      return NextResponse.json(
        { message: "Login successful", token },
        { status: 400 }
      );
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
