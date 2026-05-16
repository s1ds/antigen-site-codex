const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "replace-me";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const config = {
  api: { projectId, dataset },
};

export default config;
