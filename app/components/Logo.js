import React, { useState } from 'react';
import { Icon } from "react-native-elements/dist/icons/Icon";

import colors from '../config/colors';

export function randColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

export const Logo = ({size, iconSize}) => {
  const logoOnPress = () => {
    const color = randColor();
    setLogoColor(color);
  };
  const logoOnLongPress = () => {
    setLogoColor('rgb(240, 10, 10)')
  };

  const [logoColor, setLogoColor] = useState(colors.primary);

  if (typeof size === "undefined"){
    var size = 64;
  }
  if (typeof iconSize === "undefined"){
    var iconSize = 72;
  }
  return (
    <Icon
      name="favorite"
      color={logoColor}
      size={size}
      iconStyle={{ fontSize: iconSize }}
      containerStyle={{borderWidth: 2, borderRadius: 100, padding: 24, borderColor: logoColor}}
      onPress={logoOnPress}
      onLongPress={logoOnLongPress}
    />
  );
}

export default Logo