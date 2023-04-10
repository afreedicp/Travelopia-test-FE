import { useState, useEffect } from 'react';
import { travellersList } from '../../API/index';
import './styles.css';
const View = () => {
  const [travellers, setTravellers] = useState();
  useEffect(() => {
    travellersList((data) => {
      setTravellers(data);
    });
  }, []);

  console.log(travellers);
  return (
    <div className='viewContainer'>
      {travellers &&
        travellers.map((item, key) => <DetailCard item={item} key={key} />)}
    </div>
  );
};

export default View;

const DetailCard = ({ item }) => {
  return (
    <div className='cardDiv'>
      <div className='detailsDiv'>
        <span>Name</span>
        <span>{item.name}</span>
      </div>
      <div className='detailsDiv'>
        <span>Email</span>
        <span>{item.email}</span>
      </div>
      <div className='detailsDiv'>
        <span>Destination</span>
        <span>{item.destination}</span>
      </div>
      <div className='detailsDiv'>
        <span>Number of Travellers</span>
        <span>{item.numberOfTravellers}</span>
      </div>
      <div className='detailsDiv'>
        <span>Budget/Person</span>
        <span>{item.budgetPerPerson}</span>
      </div>
    </div>
  );
};
