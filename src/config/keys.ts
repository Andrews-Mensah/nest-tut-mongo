require("dotenv").config()
export default {
    dbUri: process.env.DB_URI,
    // saltWorkFactor: 10,
    // accessTokenTtl:'15m',
    // refreshTokenTtl: '1y',
    // publicKey: process.env.PUBLIC_KEY,
    // privateKey: process.env.PRIVATE_KEY
}