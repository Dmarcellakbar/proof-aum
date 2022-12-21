import { FiServer } from 'react-icons/fi';
import React from 'react'
import { IconType } from 'react-icons';

interface LinkItemProps {
    title: string;
    stat: string;
    icon: IconType;
    asset: string;
    token: string;
    link: string;
  }
  
const DataAccount: Array<LinkItemProps> = [
    { title: 'Account 1', stat: 'Binance', icon: FiServer, asset: '$1.000.000', token: '5', link: '#'},
    { title: 'Account 2', stat: 'Binance', icon: FiServer, asset: '$1.000.000', token: '5', link: '#'},
    { title: 'Account 3', stat: 'Binance', icon: FiServer, asset: '$1.000.000', token: '5', link: '#'},
    { title: 'Account 4', stat: 'Binance', icon: FiServer, asset: '$1.000.000', token: '5', link: '#'},
    { title: 'Account 5', stat: 'Binance', icon: FiServer, asset: '$1.000.000', token: '5', link: '#'},
    { title: 'Account 6', stat: 'Binance', icon: FiServer, asset: '$1.000.000', token: '5', link: '#'},
];

export default DataAccount