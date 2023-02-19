import PageWrapperWithHeading from 'components/PageWrapperWithHeading/PageWrapperWithHeading';
import { FAQTab } from './FAQtab/index';

import { FAQ } from './FAQPAge.constants';

const FAQPage = () => {
  return (
    <PageWrapperWithHeading heading="FAQ" backTo="/">
      <div>
        {FAQ.map((e) => (
          <FAQTab key={e.question} {...e} />
        ))}
      </div>
    </PageWrapperWithHeading>
  );
};

export default FAQPage;
