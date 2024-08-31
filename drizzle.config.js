/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-content-generator_owner:39IuhJyBQRPq@ep-super-sunset-a5rxb93g.us-east-2.aws.neon.tech/ai-content-generator?sslmode=require",
  },
};
