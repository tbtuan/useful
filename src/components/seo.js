import Helmet from "react-helmet";

const Seo = ({ metaTitle, metaDescription }) => (
  <Helmet defer={false} title={metaTitle}>
    {metaTitle ? <title>{metaTitle}</title> : null}
    {metaTitle ? <meta name="title" content={metaTitle} /> : null}
    {metaDescription ? (
      <meta name="description" content={metaDescription} />
    ) : null}
    {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
    {metaDescription ? (
      <meta property="og:description" content={metaDescription} />
    ) : null}
  </Helmet>
);

export default Seo;
