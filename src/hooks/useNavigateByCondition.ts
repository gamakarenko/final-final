import { useNavigate } from 'react-router-dom';

export default function useNavigateByCondition(
  path: string,
  funcCondition: () => boolean,
) {
  const nav = useNavigate();

  const navigate = () => {
    if (funcCondition()) {
      nav(path, {
        state: { stayInSectionWhenClickBack: true },
      });
    }
  };

  return {
    navigate,
  };
}