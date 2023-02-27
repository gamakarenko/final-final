import { FC, useState } from 'react';

import { StyledFaqTab } from './FaqTab.styles';

interface FaqTabProps {
  question: string;
  answer: string;
}

const FaqTab: FC<FaqTabProps> = ({ question, answer }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <StyledFaqTab
      className="faq-tab"
      onClick={() => setIsOpened((prev) => !prev)}
      isOpened={isOpened}
    >
      <p className="faq-tab__question">{question}</p>

      {isOpened && <p className="faq-tab__answer">{answer}</p>}
    </StyledFaqTab>
  );
};

export default FaqTab;
