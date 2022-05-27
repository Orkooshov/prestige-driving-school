import React, { useState } from 'react';
import { Icon } from "react-native-elements/dist/icons/Icon";

import colors from '../config/colors';

export const randColor = () =>
{
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

export default function Logo({size, iconSize}) {
  const logoOnPress = () => {
    const color = randColor();
    setLogoColor(color);
  };
  const logoOnLongPress = () => {
    alert("ты чиво творишь?!");
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
      raised
      color={logoColor}
      size={size}
      iconStyle={{ fontSize: iconSize }}
      onPress={logoOnPress}
      onLongPress={logoOnLongPress}
    />
  );
}
