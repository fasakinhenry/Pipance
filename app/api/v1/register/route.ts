import { db } from '@/lib/db';
import { NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

export async function POST(req: Request, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { fullname, email, username, password, country, city } = await req.json();
            
            // Validate input
            if (!fullname || !email || !username || !password) {
                return res.status(400).json({ message: 'Missing required fields' });  
            }

            // Check if user already exists
            const existingUser = await db.user.findUnique({
                where: { email },
            });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const newUser = await db.user.create({
                data: {
                    fullname,
                    email,
                    username,
                    password: hashedPassword,
                    country: country || 'Nigeria', // default value if not provided
                    city: city || '',
                },
            });

            return res.status(201).json({ message: 'User created successfully', user: newUser });
        } catch (error) {
            console.error('❌ Error:');
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        return res.status(405).json({ message: 'Invalid request method' });
    }
}
