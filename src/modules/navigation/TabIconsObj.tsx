import React from 'react';
import { ProfileTabIcon } from '../../core/svgs/ProfileTabIcon';
import { StatsTabIcon } from '../../core/svgs/StatsTabIcon';
import { TrenTabIcon } from '../../core/svgs/TrenTabIcon';

interface IObj {
  [propName: string]: (props: any) => JSX.Element
}

export const tabIconsObj: IObj = {
  Tren: (props) => 
    <TrenTabIcon width='100%' height='100%' {...props} />,
  Stats: (props) => 
    <StatsTabIcon width='100%' height='100%' {...props} />,
  Converter: (props) => 
    <StatsTabIcon width='100%' height='100%' {...props} />,
  Profile: (props) => 
    <ProfileTabIcon width='100%' height='100%' {...props} />
}