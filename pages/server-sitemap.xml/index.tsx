import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { documents } from '../../constants/documents';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields: ISitemapField[] = documents.map((d) => {
    const countryName = d.country.toLowerCase().replace(/\s/g, '-');
    const documentType = d.type
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s/g, '-');
    return {
      loc: `https://passportphotos.com/${countryName}/${documentType}/`,
      lastmod: new Date().toISOString()
    };
  });
  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
