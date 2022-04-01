import React from 'react';
import {
  StatusBar //para manibular o status bar
} from 'react-native';
import { Home } from './src/pages/Home';

export default function App(){
  return (
  <>
    <StatusBar barStyle='light-content' />
    <Home />
  </>
  )
}