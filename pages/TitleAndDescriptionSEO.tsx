import Image from 'next/image';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import ShowCode from '../src/components/reusable/ThirdPartyComponents/ShowCode';
import TitleAndDescriptionSEO from '../src/components/reusable/SEO/TitleAndDescriptionSEO';

const TitleAndDescriptionSEOText = `
import Head from 'next/head'

const TitleAndDescriptionSEO = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
    </Head>
  )
}

export default TitleAndDescriptionSEO
`;

const example = `
<TitleAndDescriptionSEO title='Pedro Programmer | Home Page' description='Pedro Programmer Official Webpage' >
`;

const SEO = () => {
  return (
    <>
      <TitleAndDescriptionSEO
        title="TitleAndDescriptionSEO"
        description="How to use TitleAndDescriptionSEO component"
      />

      <Typography variant="h1" align="center">
        TitleAndDescriptionSEO
      </Typography>

      <Typography variant="h2">Usage</Typography>
      <ShowCode code={example} language="jsx" />

      <Typography variant="h2">Result</Typography>
      <Image
        src="/images/examples/TitleAndDescriptionSEO.PNG"
        alt="Picture of the author"
        width={559}
        height={474}
      />

      <Typography variant="h2">Component</Typography>
      <ShowCode code={TitleAndDescriptionSEOText} language="jsx" />

      <Typography variant="h2">Dependencies</Typography>
      <Chip label="Next.js" />
    </>
  );
};

export default SEO;
