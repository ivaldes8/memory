import React from 'react'
import { useAppDispatch } from '../storage/hooks';
import {
  toggleAlert,
  toggleSuccessAlert,
  toggleLoading
} from '../storage/features/settingSlice';


const Notes = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
       <button   onClick={() => dispatch(toggleAlert('LOL'))}>Allert!</button>
       <button   onClick={() => dispatch(toggleSuccessAlert('LOL'))}>AllertSuccess!</button>
       <button   onClick={() => dispatch(toggleLoading())}>ToggleLoading!</button>
    </div>
  )
}

export default Notes