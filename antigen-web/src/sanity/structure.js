const singletonTypes = ["siteSettings", "homePage", "whyPage", "whatPage", "whoPage", "howPage", "contactPage"];

export const structure = (S) =>
  S.list()
    .title("ANTIGEN")
    .items([
      ...singletonTypes.map((type) =>
        S.listItem()
          .title(type.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase()))
          .id(type)
          .child(S.document().schemaType(type).documentId(type))
      ),
      S.divider(),
      S.documentTypeListItem("post").title("POV Posts"),
    ]);
