import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import ShowCode from '../src/components/reusable/ThirdPartyComponents/ShowCode';
import TitleAndDescriptionSEO from '../src/components/reusable/SEO/TitleAndDescriptionSEO';

const ShowCodeText = `
import Highlight, { defaultProps } from 'prism-react-renderer';

const ShowCode = ({ code, language }) => {
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default ShowCode;
`;

const example = `
<ShowCode code="console.log('Hello World')" language="js" />
`;

const ShowCodePage = () => {
  return (
    <>
      <TitleAndDescriptionSEO
        title="ShowCode"
        description="How to use ShowCode component"
      />
      <Typography variant="h1" align="center">
        ShowCode
      </Typography>
      <Typography variant="h2">Usage</Typography>
      <ShowCode code={example} language="jsx" />
      <Typography variant="h2">Result</Typography>
      <ShowCode code="console.log('Hello World')" language="js" />
      <Typography variant="h2">Component</Typography>
      <ShowCode code={ShowCodeText} language="jsx" />
      <Typography variant="h2">Dependencies</Typography>
      <Chip label="React" /> <Chip label="npm prism-react-renderer" />
    </>
  );
};

export default ShowCodePage;
