import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'

const About = () => {
  const dispatch = useDispatch();

  // const temp = useSelector(state => state.CartData)

  
  // useEffect(()=>{
  //   dispatch(increment());
  //   dispatch(increment());
  //   dispatch(increment());
  // },[])

  // console.log(temp);
  return (
    <>
    <p>About </p>
    </>
  )
}

export default About