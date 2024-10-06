import dotenv from "dotenv";
dotenv.config();

const {
    PORT,
    NODE_ENV,
    CLIENT_URL,
    AWS_REGION,
    MONGODB_URL,
    SENDER_EMAIL,
    S3_BUCKET_NAME,
    OPEN_AI_API_KEY,
    STRIPE_SECRET_KEY,
    AWS_ACCESS_KEY_ID,
    OPEN_AI_PROJECT_ID,
    NODEMAILER_PASSKEY,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    STRIPE_WEBHOOK_SECRET,
    AWS_SECRET_ACCESS_KEY,
    STRIPE_PUBLISHABLE_KEY,
    OPEN_AI_ORGANIZATION_ID,
} = process.env;

export {
    PORT,
    NODE_ENV,
    CLIENT_URL,
    AWS_REGION,
    MONGODB_URL,
    SENDER_EMAIL,
    S3_BUCKET_NAME,
    OPEN_AI_API_KEY,
    STRIPE_SECRET_KEY,
    AWS_ACCESS_KEY_ID,
    OPEN_AI_PROJECT_ID,
    NODEMAILER_PASSKEY,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    STRIPE_WEBHOOK_SECRET,
    AWS_SECRET_ACCESS_KEY,
    STRIPE_PUBLISHABLE_KEY,
    OPEN_AI_ORGANIZATION_ID, 
};