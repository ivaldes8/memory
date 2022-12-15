import React, { useCallback, useEffect, useState } from 'react'
import handlePromise from "../utils/promise";
import AuthService from "../services/User";
import {
  toggleAlert,
  toggleLoading
} from '../storage/features/settingSlice';
import { useAppDispatch } from '../storage/hooks';
import { FaRocket, FaAd } from "react-icons/fa"
import Button from '../components/button/Button';

const Auth = () => {

  const dispatch = useAppDispatch();

  const getData = useCallback(
    async () => {
      dispatch(toggleLoading())
      const [error, response, data] = await handlePromise(
        AuthService.getUsers()
      );
      dispatch(toggleLoading())
      if (!response.ok) {
        dispatch(toggleAlert(error))
      }

    },[],
  )

  const handleOnClick = () => {
    console.log('Click')
  }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <div>
      <br />
      <Button onClick={handleOnClick} type='secundary' nativeType='submit'>
        <FaRocket />
      </Button>

      <Button onClick={handleOnClick} type='secundary' rounded>
        <FaRocket />
      </Button>

      <Button onClick={handleOnClick} rounded type='danger'>
        <FaAd />
      </Button>

      <Button onClick={handleOnClick} rounded type='info'>
        rounded
      </Button>

      <Button onClick={handleOnClick} rounded type='warning'>
        Rounded
      </Button>

      <Button onClick={handleOnClick} >
        asd
      </Button>
    </div>
  )
}

export default Auth