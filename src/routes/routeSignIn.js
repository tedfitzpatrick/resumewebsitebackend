import jwt from 'jsonwebtoken';
import { getDBconnection } from './../db';

const routeSignIn = {
    path: '/signin',
    method: 'post',
    handler: async (request, response) => {
    
        // console.log(request.body)

        const { signInName, signInPassword } = request.body;

        const db = getDBconnection('resumewebsitedb');
    
        const user = await db.collection('user').findOne({ name: signInName });

        if (!user) {
            response.sendStatus(401);
            return;
        }

        const { password } = user;

        if (password === signInPassword) {

            const token = jwt.sign({ name: signInName }, process.env.JWT_SECRET, { expiresIn: '1h' }, (error, token) => {
                if (error) {
                    response.status(500).json(error);
                }
                response.status(200).json({ token });
            });

            // response.setHeader('Authorization', `Bearer ${token}`);
            // response.sendStatus(200);

        } else {

            response.sendStatus(401);
            return;
        
        }

        // response.sendStatus(401);
    },
}

export default routeSignIn;