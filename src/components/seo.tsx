import Helmet from "react-helmet";

const Seo = ({
  metaTitle,
  metaDescription,
}: {
  metaTitle: string;
  metaDescription: string;
}) => (
  <Helmet defer={false} title={metaTitle}>
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1, user-scalable=0"
    />
    {metaTitle ? <title>{metaTitle}</title> : null}
    {metaTitle ? <meta name="title" content={metaTitle} /> : null}
    {metaDescription ? (
      <meta name="description" content={metaDescription} />
    ) : null}
    {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
    {metaDescription ? (
      <meta property="og:description" content={metaDescription} />
    ) : null}
    <html lang="en" />
  </Helmet>
);

export default Seo;
