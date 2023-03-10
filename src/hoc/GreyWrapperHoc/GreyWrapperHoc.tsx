import './style.css';

type GreyWrapperHocProps = {
  children: React.ReactNode;
};

export default function GreyWrapperHoc({ children }: GreyWrapperHocProps) {
  return <div className="grey-wrapper">{children}</div>;
}
