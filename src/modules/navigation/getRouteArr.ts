export function getRouteArr(descriptors: any, state: any) {
  let index = 0;
  const routeArr = [];

  for (let key in descriptors) {
    routeArr.push({
      tabBarIcon: descriptors[key].options.tabBarIcon,
      routeName: state.routeNames[index++],
      isFocused: descriptors[key].navigation.isFocused
    });
  }

  return routeArr;
}