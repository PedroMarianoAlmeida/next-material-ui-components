import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import FacebookIcon from '@material-ui/icons/Facebook';

import ShowCode from '../src/components/reusable/ThirdPartyComponents/ShowCode';
import TitleAndDescriptionSEO from '../src/components/reusable/SEO/TitleAndDescriptionSEO';
import ExternalLink from '../src/components/reusable/MaterialUI/ExternalLink';

const ExternalLinkText = `
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';

const ExternalLink = ({ href, tooltip, children }) => {
  return (
    <Tooltip title={tooltip}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </Tooltip>
  );
};

export default ExternalLink;
`;

const example1 = `
import Typography from '@material-ui/core/Typography';

<ExternalLink
  href="https://www.pedroprogrammer.com/"
  tooltip="Pedro Programmer Official Website"
>
  <Typography display="inline">visit my website</Typography>
</ExternalLink>
`;

const example2 = `
import FacebookIcon from '@material-ui/icons/Facebook';

<ExternalLink
  href="https://www.facebook.com/"
  tooltip="Facebook"
>
  <FacebookIcon />
</ExternalLink>
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
      <Typography variant="h3">Example 1: With Text</Typography>
      <Typography variant="h4">Code</Typography>
      <ShowCode code={example1} language="jsx" />
      <Typography variant="h4">Result</Typography>
      <ExternalLink
        href="https://www.pedroprogrammer.com/"
        tooltip="Pedro Programmer Official Website"
      >
        <Typography display="inline">visit my website</Typography>
      </ExternalLink>
      <Typography variant="h3">Example 2: With Icon</Typography>
      <Typography variant="h4">Code</Typography>
      <ShowCode code={example2} language="jsx" />
      <Typography variant="h4">Result</Typography>
      <ExternalLink href="https://www.facebook.com/" tooltip="Facebook">
        <FacebookIcon />
      </ExternalLink>

      <Typography variant="h2">Component</Typography>
      <ShowCode code={ExternalLinkText} language="jsx" />
      <Typography variant="h2">Dependencies</Typography>
      <Chip label="Material UI" />
    </>
  );
};

export default ExternalLinkPage;
