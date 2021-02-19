export function getRouteArr(descriptors: any, state: any) {
  let index = 0;
  const routeArr = [];

  for (let key in descriptors) {
    routeArr.push({
      ...descriptors[key].options,
      routeName: state.routeNames[index++],
      isFocused: descriptors[key].navigation.isFocused
    });
  }

  return routeArr;
}