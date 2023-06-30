import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { counterAction } from '../../stores/slices/Count-slice';

export default function Home() {
  const dispatch=useDispatch();
  const counterStore=useSelector(store=>store.counterReducer)
  console.log(counterStore);
  return (
    <div>
      <h1>{counterStore.counter}</h1>
<button onClick={()=>dispatch(counterAction.increment())}>Tăng Count</button><br></br><br></br>
<button onClick={()=>dispatch(counterAction.decrement())}>Giảm Count</button>

    </div>
  )
}
