import { FC, FormEventHandler, useState } from 'react';

import AppButton from 'components/ui/AppButton/AppButton';
import AppTextArea from 'components/ui/AppTextArea/AppTextArea';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';

import { StyledAboutReview } from './AboutReview.styles';

const AboutReview: FC = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <StyledAboutReview className="about-review">
      <PageParagraph>
        #обратнаясвязь
        <br />
        👩🏻‍💻 Это Transfer.Bot версии 1.0
        <br />
        Мы&nbsp;очень старались сделать этот бот удобным и&nbsp;функциональным.
        Однако, признаём, что впереди большой путь до совершенства.
        В&nbsp;скором времени мы&nbsp;планируем расширить список подключенных
        направлений.
      </PageParagraph>

      <PageParagraph>
        🖤 Мы&nbsp;открыты к&nbsp;обратной связи и&nbsp;будем благодарны твоим
        идеям по улучшению помощника!
      </PageParagraph>

      <PageParagraph>
        Есть&nbsp;ли что-то, что можно улучшить? Какие ещё города ты&nbsp;бы
        хотел увидеть в&nbsp;боте? Место для фидбэка ⤵️
      </PageParagraph>

      <form onSubmit={handleSubmit}>
        <fieldset className="about-review__fieldset">
          <legend className="about-review__legend">Твой отзыв</legend>
          <AppTextArea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={3}
            required
          />
        </fieldset>

        <AppButton type="submit">Оставить отзыв</AppButton>
      </form>
    </StyledAboutReview>
  );
};

export default AboutReview;
