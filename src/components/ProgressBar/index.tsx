import { styles } from "./styles";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { View } from "react-native";

interface Props {
  total: number;
  current: number;
}

export function ProgressBar({ total, current }: Props) {
  const percentage = Math.round((current / total) * 100);

  const sharedProgress = useSharedValue(percentage);

  useEffect(() => {
    sharedProgress.value = withTiming(percentage);
  }, [current]);

  const styleAnimate = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`,
    };
  });

  return (
    <View style={styles.track}>
      <Animated.View style={[styles.progress, styleAnimate]} />
    </View>
  );
}