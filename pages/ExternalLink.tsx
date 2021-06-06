import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import ShowCode from '../src/components/reusable/ThirdPartyComponents/ShowCode';
import TitleAndDescriptionSEO from '../src/components/reusable/SEO/TitleAndDescriptionSEO';
import ExternalLink from '../src/components/reusable/MaterialUI/ExternalLink';

const ExternalLinkText = `
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';

const ExternalLink = ({ href, text, tooltip }) => {
  return (
    <Tooltip title={tooltip}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </Link>
    </Tooltip>
  );
};

export default ExternalLink;
`;

const example = `
<ExternalLink
  href="https://www.pedroprogrammer.com/"
  text="visit my website"
  tooltip="Pedro Programmer Official Website"
/>
`;

const ExternalLinkPage = () => {
  return (
    <>
      <TitleAndDescriptionSEO
        title="ExternalLink"
        description="How to use ExternalLink component"
      />
      <Typography variant="h1" align="center">
        ExternalLink
      </Typography>
      <Typography variant="h2">Usage</Typography>
      <ShowCode code={example} language="jsx" />
      <Typography variant="h2">Result</Typography>
      <ExternalLink
        href="https://www.pedroprogrammer.com/"
        text="visit my website"
        tooltip="Pedro Programmer Official Website"
      />
      <Typography variant="h2">Component</Typography>
      <ShowCode code={ExternalLinkText} language="jsx" />
      <Typography variant="h2">Dependencies</Typography>
      <Chip label="Material UI" />
    </>
  );
};

export default ExternalLinkPage;
