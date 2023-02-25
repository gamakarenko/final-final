import { FC, PropsWithChildren } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PageHeading from 'components/ui/PageHeading/PageHeading';
import AppIconBtn from 'components/ui/AppIconBtn/AppIconBtn';

import { INavigationState } from 'types/navigation';

import { StyledPageWrapperWithHeading } from './PageWrapperWithHeading.styled';

interface PageWrapperWithHeadingProps extends PropsWithChildren {
  heading: string;
  backTo: string;
}

const PageWrapperWithHeading: FC<PageWrapperWithHeadingProps> = ({
  heading,
  children,
  backTo,
}) => {
  const navigate = useNavigate();
  const { state }: { state?: INavigationState } = useLocation();

  const goBack = () => {
    if (state && state.stayInSectionWhenClickBack) {
      navigate(-1);
      return;
    }

    navigate(backTo, { replace: true });
  };

  return (
    <StyledPageWrapperWithHeading className="page-wrapper-with-heading">
      {/* <button
        className="page-wrapper-with-heading__btn-back"
        onClick={() => goBack()}
        aria-label="Кнопка назад"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 96 960 960"
          width="24"
        >
          <path
            className="page-wrapper-with-heading__arrow"
            d="M480 896 160 576l320-320 57 56-224 224h487v80H313l224 224-57 56Z"
          />
        </svg>
      </button> */}
      <AppIconBtn
        withSeparator="right-lined"
        icon="arrow-left"
        size={24}
        className="page-wrapper-with-heading__btn-back"
        onClick={() => goBack()}
        aria-label="Кнопка назад"
      />
      <PageHeading className="page-wrapper-with-heading__heading">
        {heading}
      </PageHeading>
      <div className="page-wrapper-with-heading__content-box">{children}</div>
    </StyledPageWrapperWithHeading>
  );
};

export default PageWrapperWithHeading;
