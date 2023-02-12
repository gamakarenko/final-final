import PageParagraph from '../../../components/ui/PageParagraph/PageParagraph';
import { useAppSelector } from '../../../store/store';
import { StyledSummaryStep } from './SummaryStep.styled';

const SummaryStep = () => {
  const { order } = useAppSelector(({ order }) => order);
  

  return (
    <StyledSummaryStep>
      <PageParagraph underlined>
        Подтверждение введённой информации
      </PageParagraph>
    </StyledSummaryStep>
  );
};

export default SummaryStep;
