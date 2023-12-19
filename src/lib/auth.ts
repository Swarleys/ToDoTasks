import { jwtVerify } from "jose";

interface UserJwtPayload {
    jti: string;
    iat: number;
}

export const getJwtSecretKey = () => {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET;
    if (!secret || secret === "") {
        throw new Error("JWT_SECRET not set");
    }

    return secret;
}

export const verifyAuth = async (token: string) => {
    try {
        const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
        return verified.payload as UserJwtPayload;
    } catch (error) {
        throw new Error("Your token has expired, please login again");
    }
}