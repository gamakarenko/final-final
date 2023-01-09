import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FAQTab } from '../components/FAQtab';
import { cancelButton } from '../styles/styles';
import { FAQ } from '../utils/FAQ';

interface FAQPageProps {}

const FAQPage: React.FunctionComponent<FAQPageProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="transfers-page" style={{ height: '100%' }}>
      <div>
        <div className="faq-title">FAQ</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {FAQ.map((e) => (
            <FAQTab key={e.question} {...e} />
          ))}
        </div>
      </div>
      <Button sx={cancelButton} onClick={() => navigate(-1)}>
        Назад
      </Button>
    </div>
  );
};

export default FAQPage;
