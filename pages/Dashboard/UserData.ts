import { FiServer } from 'react-icons/fi';
import React from 'react'
import { IconType } from 'react-icons';

interface LinkItemProps {
    title: string;
    stat: string;
    icon: IconType;
  }

const UserData: Array<LinkItemProps> = [
    { title: 'Exchange Assets', stat: '$6.000.000', icon: FiServer},
    { title: 'Account Totals', stat: '6', icon: FiServer},
    { title: 'Tokens', stat: '10', icon: FiServer},
  ];

export default function Userindex() {
  return UserData
}