export const metadata = {
  title: "ANTIGEN | CXO Workshop",
  description:
    "ANTIGEN India CXO Workshop Series for senior leadership cohorts.",
};

export default function CxoWorkshopPage() {
  return (
    <main className="bg-black pt-20">
      <iframe
        title="ANTIGEN CXO Workshop Series"
        src="/CXOworkshop/workshop.html"
        className="block h-[calc(100vh-5rem)] min-h-[720px] w-full border-0 bg-white"
      />
    </main>
  );
}
