import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './styles.css';
const userSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  numberOfTravelers: Yup.string().required(
    'Please eneter number of travellor.'
  ),

  email: Yup.string()
    .email('Invalid email. Please try again')
    .required('Please enter the email '),
});
const Home = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const onSubmit = (value) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex-container'>
        {' '}
        <div className='field-container'>
          <label>Name</label>
          <input
            className='inputField'
            type='text'
            {...register('name')}
            placeholder='Name'
          />
        </div>
        {errors.name && (
          <span className='errorMsg'>{errors.name?.message}</span>
        )}
        <div className='field-container'>
          <label>Email</label>
          <input
            className='inputField'
            type='email'
            {...register('email')}
            placeholder='Email'
          />
        </div>
        {errors.email && (
          <span className='errorMsg'>{errors.email?.message}</span>
        )}
        <div className='field-container'>
          <label>Destination</label>
          <select className='inputField' placeholder='Where to ?'>
            <option>India</option>
            <option>Africa</option>
            <option>Europe</option>
          </select>
        </div>
        <div className='field-container'>
          <label>No. of traveller</label>
          <input
            className='inputField'
            type='number'
            {...register('numberOfTravelers')}
            placeholder='Travellers'
          />
        </div>
        {errors.numberOfTravelers && (
          <span className='errorMsg'>{errors.numberOfTravelers?.message}</span>
        )}
        <button className='submit-btn'>Submit</button>
      </div>
    </form>
  );
};

export default Home;
