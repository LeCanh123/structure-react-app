import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import { counterAction } from '../../stores/slices/Count-slice';
import Loading from '@components/Loadings/Loading.jsx';


export default function About() {
  const dispatch=useDispatch();
  const counterStore=useSelector(store=>store.counterReducer)
  return (
    <>
    {counterStore.loading?<Loading></Loading>:<></>}
   
        <div>About</div>
        <button onClick={()=>{dispatch(counterAction.findAllUsers())

        }}>Find All Useer</button>
    <Outlet></Outlet>
    
    </>

  )
}
