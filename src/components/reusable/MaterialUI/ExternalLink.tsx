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
