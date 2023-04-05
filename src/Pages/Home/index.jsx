import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './styles.css';
import { createTraveller } from '../../API/index';
import { useState } from 'react';
const userSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  numberOfTravellers: Yup.number().required(
    'Please eneter number of travellor.'
  ),

  email: Yup.string()
    .email('Invalid email. Please try again')
    .required('Please enter the email '),
});
const Home = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const onSubmit = (data) => {
    createTraveller(data);
    reset();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 1000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex-container'>
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
          <select
            className=' selectField'
            placeholder='Where to ?'
            {...register('destination')}
          >
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
            {...register('numberOfTravellers')}
            placeholder='Travellers'
          />
        </div>
        {errors.numberOfTravellers && (
          <span className='errorMsg'>{errors.numberOfTravellers?.message}</span>
        )}
        <button className='submit-btn'>Submit</button>
        {showSuccess && <SuccessCard />}
      </div>
    </form>
  );
};

export default Home;

const SuccessCard = () => {
  return (
    <div className='SuccessDiv'>
      <span>Success</span>
    </div>
  );
};
