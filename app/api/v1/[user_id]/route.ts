import { db } from '@/lib/db';
import { NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';


export async function GET(req: Request, res: NextApiResponse, { params }: { params: { user_id: string } }) {
    if (req.method === 'GET') {
        try {
            // Extract token from the request body
            const body = await req.json();
            const token = body.token;

            if (!token) {
                return res.status(401).json({ message: 'Authorization token missing' });
            }

            // Verify token
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
            if (!decoded || !decoded.userId) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            // Extract user ID from the URL parameter
            const { user_id } = params;
            if (user_id !== decoded.userId) {
                return res.status(403).json({ message: 'Forbidden' });
            }

            // Fetch user data from the database
            const user = await db.user.findUnique({
                where: { id: user_id },
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Respond with user data
            return res.status(200).json({ user });
        } catch (error) {
            console.error('❌ Error:');
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        return res.status(405).json({ message: 'Invalid request method' });
    }
}
