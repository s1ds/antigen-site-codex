import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./client";

const builder = imageUrlBuilder({ projectId, dataset });

export function urlFor(source) {
  return source ? builder.image(source) : null;
}
