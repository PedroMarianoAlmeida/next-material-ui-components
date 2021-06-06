import NextLink from 'next/link';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import MaterialLink from '@material-ui/core/Link';

const ComponentItem = ({ title, components }) => {
  return (
    <Accordion>
      <AccordionSummary>{title}</AccordionSummary>
      {components.map((component) => (
        <AccordionDetails key={component}>
          <NextLink href={component}>
            <MaterialLink>{component}</MaterialLink>
          </NextLink>
        </AccordionDetails>
      ))}
    </Accordion>
  );
};

export default ComponentItem;
