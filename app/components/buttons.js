import React, { useState } from "react";
import { Button } from "react-native-elements";

import colors from "../config/colors";

export const PrimaryButton = ({ title, wide, buttonStyle, ...props }) => {
  return (
    <Button
      title={title}
      titleStyle={[{ color: colors.light }]}
      containerStyle={[
        wide ? { alignSelf: "stretch" } : null,
        {margin: 2}
      ]}
      buttonStyle={[
        {
          backgroundColor: colors.primary,
          color: colors.primaryText,
          borderRadius: 22,
        },
        { ...buttonStyle },
      ]}
      {...props}
    />
  );
};

export const SecondaryButton = ({ title, wide, ...props }) => {
  return (
    <Button
      title={title}
      titleStyle={{ color: colors.primary }}
      containerStyle={[
        wide ? { alignSelf: "stretch" } : null,
        {margin: 2}
      ]}
      buttonStyle={[
        {
          backgroundColor: colors.light,
          borderRadius: 22,
          borderColor: colors.dark,
          borderWidth: 1,
        },
      ]}
      {...props}
    />
  );
};

export const LinkButton = ({ title, ...props }) => {
  return (
    <Button
      title={title}
      titleStyle={{ color: colors.primary }}
      type="clear"
      {...props}
    />
  );
};

export default PrimaryButton;
