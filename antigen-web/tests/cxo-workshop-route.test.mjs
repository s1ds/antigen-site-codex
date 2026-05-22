import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const routePath = new URL("../src/app/CXOworkshop/page.jsx", import.meta.url);
const workshopDocumentPath = new URL(
  "../public/CXOworkshop/workshop.html",
  import.meta.url,
);

test("CXO workshop route wraps the standalone workshop document", async () => {
  const routeSource = await readFile(routePath, "utf8");
  const workshopDocument = await readFile(workshopDocumentPath, "utf8");

  assert.match(routeSource, /src="\/CXOworkshop\/workshop\.html"/);
  assert.match(routeSource, /title:\s*"ANTIGEN \| CXO Workshop"/);
  assert.doesNotMatch(workshopDocument, /<header\b/i);
  assert.match(workshopDocument, /id="workshops"/);
  assert.match(workshopDocument, /id="diagnostic"/);
});
