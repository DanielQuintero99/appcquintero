import { GiShoppingCart } from 'react-icons/gi';

export default function CartWidget({ cant }) {

  return (
    <>
      <div className='d-flex '>
        <GiShoppingCart size="40px" color="white" /> <span className='CartWidgetCounter'><h4>{cant}</h4></span>
      </div>
    </>
  );
}
