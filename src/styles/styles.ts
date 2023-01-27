import { SxProps } from '@mui/material';

export const backButton: SxProps = {
  width: '343px',
  height: '40px',
  background: '#F2F2F2',
  border: '1px solid #007AFF',
  borderRadius: '8px',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '18px',
  textTransform: 'none',
};

export const buttonBack2: SxProps = {
  width: '343px',
  height: '40px',
  background: '#F2F2F2',
  border: '1px solid #007AFF',
  borderRadius: '8px',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '18px',
  textTransform: 'none',
  marginBottom: '20px',
};

export const defaultButton: SxProps = {
  width: '343px',
  height: '40px',
  background: '#007AFF',
  borderRadius: '8px',
  color: 'white',
  fontSize: '15px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#007AFF',
  },
  '&:disabled': {
    backgroundColor: '#AFAFAF',
  },
};

export const button: SxProps = {
  width: '143px',
  height: '30px',
  border: '1px solid #007AFF',
  borderRadius: '5px',
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '12px',
};

export const input: SxProps = {
  width: '100%',
  minHeight: '45px',
  background: '#E9E9E9',
  border: '1px solid #ADADAD',
  borderRadius: '5px',
  outline: 'none',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  '&:before': {
    borderBottom: 'none',
  },
};

export const ButtonStyle: SxProps = {
  width: '343px',
  height: '47px',
  background: '#007AFF',
  borderRadius: '10px',
  fontStyle: 'normal',
  fontWeight: '510',
  fontSize: '14px',
  lineHeight: '17px',
  color: 'white',
  textTransform: 'none',
  textAlign: 'start',
  display: 'block',
  padding: '15px',
  marginBottom: '15px',
  '&:hover': {
    backgroundColor: '#007AFF',
  },
  '&:disabled': {
    backgroundColor: '#AFAFAF',
  },
};