import {SignJWT} from 'jose';
import dotenv from 'dotenv';

dotenv.config();

const generarTokenData = async(req, res, next) => {

    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT(req.body); 
    const jwt = await jwtconstructor
    .setProtectedHeader({alg: "HS256", typ: "JWT"})
    .setIssuedAt()
    .setExpirationTime("10h")
    .sign(encoder.encode(process.env.MY_JWT));

    req.body = jwt;
    next();
}

export default generarTokenData;