import { PressableProps, Text, View, Pressable } from "react-native";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

import { useEffect } from "react";

const TYPE_COLORS = {
  EASY: THEME.COLORS.BRAND_LIGHT,
  HARD: THEME.COLORS.DANGER_LIGHT,
  MEDIUM: THEME.COLORS.WARNING_LIGHT,
};

type Props = PressableProps & {
  title: string;
  isChecked?: boolean;
  type?: keyof typeof TYPE_COLORS;
};

export function Level({
  title,
  type = "EASY",
  isChecked = false,
  ...rest
}: Props) {
  const COLOR = TYPE_COLORS[type];

  const scale = useSharedValue(1);
  const checked = useSharedValue(1);

  useEffect(() => {
    checked.value = withSpring(isChecked ? 1 : 0);
  }, [isChecked]);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: interpolateColor(
        checked.value,
        [0, 1],
        ["transparent", COLOR]
      ),
    };
  });

  function onPressIn() {
    scale.value = withSpring(1.1);
  }

  function onPressOut() {
    scale.value = withSpring(1);
  }

  return (
    <PressableAnimated
      {...rest}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[
        styles.container,
        animatedContainerStyle,
        {
          borderColor: COLOR,
          backgroundColor: isChecked ? COLOR : "transparent",
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: isChecked ? THEME.COLORS.GREY_100 : COLOR },
        ]}
      >
        {title}
      </Text>
    </PressableAnimated>
  );
}
