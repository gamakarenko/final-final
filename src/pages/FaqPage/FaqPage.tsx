import PageWrapperWithHeading from 'components/PageWrapperWithHeading/PageWrapperWithHeading';
import FaqTab from './FaqTab/FaqTab';

import { FAQ } from './FaqPage.constants';

import { StyledFaqPage } from './FaqPage.styles';

const FaqPage = () => {
  return (
    <PageWrapperWithHeading heading="FAQ" backTo="/">
      <StyledFaqPage>
        {FAQ.map((faqEl) => (
          <li key={faqEl.question}>
            <FaqTab {...faqEl} />
          </li>
        ))}
      </StyledFaqPage>
    </PageWrapperWithHeading>
  );
};

export default FaqPage;
