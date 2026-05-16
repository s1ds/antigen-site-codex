import { defineField, defineType } from "sanity";

const blockField = defineField({
  name: "blocks",
  title: "Content blocks",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "body", type: "array", of: [{ type: "text" }] }),
      ],
    },
  ],
});

function pageType(name, title) {
  return defineType({
    name,
    title,
    type: "document",
    fields: [
      defineField({ name: "eyebrow", type: "string" }),
      defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
      defineField({ name: "body", type: "text" }),
      blockField,
    ],
  });
}

export const homePage = pageType("homePage", "Home Page");
export const whyPage = pageType("whyPage", "Why Page");
export const whatPage = pageType("whatPage", "What Page");
export const whoPage = pageType("whoPage", "Who Page");
export const howPage = pageType("howPage", "How Page");

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", type: "string" }),
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "body", type: "text" }),
    defineField({ name: "emails", type: "array", of: [{ type: "string" }] }),
  ],
});
