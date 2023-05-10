import {
  BlurMask,
  Box,
  Canvas,
  Rect,
  rect,
  rrect,
  runSpring,
  runTiming,
  useValue,
} from "@shopify/react-native-skia";
import { useEffect, useState } from "react";
import { Button, View } from "react-native";

import walk from "../assets/Walk.png";

import { Image } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Repeat } from "phosphor-react-native";

export const Teste = () => {
  const transX = useSharedValue(0);

  const position = useValue(1);
  const height = useValue(10);

  const [show, setShow] = useState(false);
  // const [currentMino, setCurrentMino] = useState(1);

  const changePosition = () => runTiming(position, position.current + 20);

  const ImageAnimated = Animated.createAnimatedComponent(Image);

  useEffect(() => {
    setInterval(() => {
      u();
      // transX.value = transX.value + 20;
      // console.log("oi");
      changePosition();
      // console.log(position.current);
      // if (position.current >= 80) {
      //   return setShow(true);
      // }
      //   runTiming(height, 10);
    }, 150);
  }, []);

  // useEffect(() => {
  // console.log(transX.value);
  // }, [transX]);

  const u = () => {
    // console.log(transX.value);

    if (transX.value == -550) {
      transX.value = 0;
      return;
    }
    transX.value = transX.value - 50;
    // console.log(currentMino, "current");
    // if (currentMino.value > 10) {
    //   currentMino.value = 1;
    //   // return;
    // }

    // currentMino.value = currentMino.value + 1;

    // getImage(2)
    // currentMino.value = currentMino.value + 1;
    // transX.value = transX.value + 10;
    // transX2.value = transX2.value - 5;

    // if (transX.value == 31) {
    // transX.value = transX.value = -60;
    // transX2.value = transX.value = 60;
    // }
    // console.log(transX.value, "re");
    // transX.value = withRepeat(
    //   withTiming(1, undefined, (finished, currentValue) => {
    //     if (finished) {
    //       transX.value + 1;
    //       console.log("current withRepeat value is " + currentValue + 1);
    //     } else {
    //       console.log("inner animation cancelled");
    //     }
    //   }),
    //   1000,
    //   true,
    //   (finished) => {
    //     const resultStr = finished
    //       ? "All repeats are completed"
    //       : "withRepeat cancelled";
    //     console.log(resultStr);
    //   }
    // );
  };

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: transX.value,
        },
      ],
    };
  });

  // const animatedContainerStyle2 = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {
  //         translateX: transX2.value,
  //       },
  //     ],
  //   };
  // });

  return (
    <>
      <Animated.View
        style={[
          {
            width: 50,
            height: 50,
            backgroundColor: "#d6d6d6",
            position: "absolute",
            top: 135,
            overflow: "hidden",
          },
        ]}
      >
        {/* {console.log(currentMino, "12213")} */}

        <ImageAnimated
          source={require("../assets/mino/minos2.png")}
          style={[{ width: 50 }, animatedContainerStyle]}
        />
      </Animated.View>
      <Canvas style={{ flex: 1 }}>
        <Rect
          x={0}
          y={180}
          width={position}
          height={height}
          color={"red"}
        ></Rect>

        {show && (
          <Box box={rrect(rect(64, 140, 40, 40), 10, 10)} color="#add8e6"></Box>
        )}
      </Canvas>

      <Button title="Toggle" onPress={u} />
    </>
  );
};
