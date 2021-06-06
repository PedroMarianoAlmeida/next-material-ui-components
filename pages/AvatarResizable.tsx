import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import ShowCode from '../src/components/reusable/ThirdPartyComponents/ShowCode';
import TitleAndDescriptionSEO from '../src/components/reusable/SEO/TitleAndDescriptionSEO';

import AvatarResizable from '../src/components/reusable/MaterialUI/AvatarResizable';

const AvatarResizableText = `
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const AvatarResizable = ({ alt, src, spacing }) => {
  const useStyles = makeStyles((theme) => ({
    size: {
      width: theme.spacing(spacing),
      height: theme.spacing(spacing),
    },
  }))

  const classes = useStyles()

  return <Avatar alt={alt} src={src} className={classes.size} />
}

export default AvatarResizable
`;

const example = `
<AvatarResizable
  alt="Pedro Almeida Picture"
  src="/images/examples/profile.jpeg"
  spacing={20}
/>
`;

const AvatarResizablePage = () => {
  return (
    <>
      <TitleAndDescriptionSEO
        title="AvatarResizable"
        description="How to use AvatarResizable component"
      />
      <Typography variant="h1" align="center">
        AvatarResizable
      </Typography>
      <Typography variant="h2">Usage</Typography>
      <ShowCode code={example} language="jsx" />
      <Typography paragraph>
        Note: The path to the image should start in public folder of your
        project (default in Next.js projects)
      </Typography>
      <Typography variant="h2">Result</Typography>
      <AvatarResizable
        alt="Pedro Almeida Picture"
        src="/images/examples/profile.jpeg"
        spacing={20}
      />
      <Typography variant="h2">Component</Typography>
      <ShowCode code={AvatarResizableText} language="jsx" />
      <Typography variant="h2">Dependencies</Typography>
      <Chip label="Material UI" />
    </>
  );
};

export default AvatarResizablePage;
