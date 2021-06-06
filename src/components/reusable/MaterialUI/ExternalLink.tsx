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
