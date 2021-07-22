import Prismic from "@prismicio/client";

export function getPrismicClient(request?: unknown) {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_KEY,
    req: request,
  });

  return prismic;
}