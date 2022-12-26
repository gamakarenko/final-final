import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required();

interface SharePageProps {
    
}
 
const SharePage: React.FC<SharePageProps> = () => {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
      });
    
      return (
        <form onSubmit={handleSubmit((d) => console.log(d))}>
          {/* <input {...register('name')} />
          <input type="number" {...register('age')} />
          <input type="submit" /> */}
          <div>Share</div>
        </form>
      );
    
}
 
export default SharePage;
