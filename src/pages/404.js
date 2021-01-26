import Layout from "templates/layout";

export default function NotFound() {
  if (typeof window === "undefined") return null;
  return (
    <Layout>
      <h1>Page Not Found</h1>
    </Layout>
  );
}
