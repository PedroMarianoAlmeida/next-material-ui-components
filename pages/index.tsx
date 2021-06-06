import Typography from '@material-ui/core/Typography';

import TitleAndDescriptionSEO from '../src/components/reusable/SEO/TitleAndDescriptionSEO';
import ExternalLink from '../src/components/reusable/MaterialUI/ExternalLink';

export default function Home() {
  return (
    <>
      <TitleAndDescriptionSEO
        title="React Components"
        description="Home Page | React Components"
      />

      <Typography variant="h1" align="center">
        Home Page
      </Typography>
      <Typography paragraph>
        Website with React components to be used in Next.js and Material UI
        projects
      </Typography>
      <Typography paragraph>
        Go to{' '}
        <ExternalLink
          href="https://github.com/PedroMarianoAlmeida/next-material-ui-template"
          tooltip="template repo"
        >
          template
        </ExternalLink>
      </Typography>
    </>
  );
}
