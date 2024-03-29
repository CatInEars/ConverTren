import React from 'react';
import { ConverterTabIcon } from '../../core/svgs/TabBarIcons/ConverterTabIcon';
import { ProfileTabIcon } from '../../core/svgs/TabBarIcons/ProfileTabIcon';
import { StatsTabIcon } from '../../core/svgs/TabBarIcons/StatsTabIcon';
import { TrenTabIcon } from '../../core/svgs/TabBarIcons/TrenTabIcon';

interface IObj {
  [propName: string]: (props: any) => JSX.Element
}

export const tabIconsObj: IObj = {
  Tren: (props) => 
    <TrenTabIcon width='100%' height='100%' {...props} />,
  Stats: (props) => 
    <StatsTabIcon width='100%' height='100%' {...props} />,
  Converter: (props) => 
    <ConverterTabIcon width='100%' height='100%' {...props} />,
  Profile: (props) => 
    <ProfileTabIcon width='100%' height='100%' {...props} />
}