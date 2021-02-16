import React from 'react';
import { ProfileTabIcon } from '../../core/svgs/ProfileTabIcon';
import { StatsTabIcon } from '../../core/svgs/StatsTabIcon';
import { TrenTabIcon } from '../../core/svgs/TrenTabIcon';

interface IProps {
  color: string,
  focused: boolean
}

interface IObj {
  [propName: string]: ({}: IProps) => JSX.Element
}

export const tabIconsObj: IObj = {
  Tren: ({ color, focused }: IProps) => 
    <TrenTabIcon fill={color} width={focused ? 25 : 23} height={focused ? 25 : 23} />,
  Stats: ({ color, focused }: IProps) => 
    <StatsTabIcon fill={color} width={focused ? 25 : 23} height={focused ? 25 : 23} />,
  Converter: ({ color, focused }: IProps) => 
    <StatsTabIcon fill={color} width={focused ? 25 : 23} height={focused ? 25 : 23} />,
  Profile: ({ color, focused }: IProps) => 
    <ProfileTabIcon fill={color} width={focused ? 25 : 23} height={focused ? 25 : 23} />
}