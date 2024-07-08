import { PrismaClient } from '@prisma/client';
import { NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(req: Request, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { email, password } = await req.json();
            
            // Validate input
            if (!email || !password) {
                return res.status(400).json({ message: 'Missing email or password' });
            }

            // Check if user exists
            const user = await prisma.user.findUnique({
                where: { email },
            });
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Compare passwords
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Generate JWT token
            const token = jwt.sign(
                { userId: user.id, email: user.email },
                process.env.JWT_SECRET!,
                { expiresIn: '1h' }
            );

            return res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            console.error('❌ Error:');
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        return res.status(405).json({ message: 'Invalid request method' });
    }
}
