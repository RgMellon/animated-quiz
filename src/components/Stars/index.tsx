import { View } from "react-native";
import { styles } from "./styles";
import TrophySvg from "../../assets/trophy.svg";
import {
  Canvas,
  Easing,
  LinearGradient,
  Path,
  useLoop,
} from "@shopify/react-native-skia";
import { THEME } from "../../styles/theme";
import Animated, { BounceIn } from "react-native-reanimated";

export function Stars() {
  const backStarBlinkAnimated = useLoop({
    duration: 2000,
    easing: Easing.ease,
  });

  const frontStarBlinkAnimated = useLoop({
    duration: 3000,
    easing: Easing.bounce,
  });

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path
          opacity={frontStarBlinkAnimated}
          path="M232.405 231.922C232.005 231.922 231.648 231.666 231.52 231.287C229.729 225.979 228.387 224.638 223.079 222.846C222.7 222.718 222.444 222.362 222.444 221.961C222.444 221.561 222.7 221.204 223.079 221.076C228.388 219.285 229.729 217.943 231.52 212.635C231.648 212.255 232.004 212 232.405 212C232.806 212 233.162 212.255 233.29 212.635C235.082 217.943 236.423 219.284 241.731 221.076C242.11 221.204 242.366 221.561 242.366 221.961C242.366 222.362 242.11 222.718 241.731 222.846C236.423 224.638 235.082 225.979 233.29 231.287C233.162 231.666 232.806 231.922 232.405 231.922Z"
        >
          <LinearGradient
            start={{ x: 222, y: 212 }}
            end={{ x: 238, y: 222 }}
            colors={[THEME.COLORS.STAR_BLUE, THEME.COLORS.BRAND_LIGHT]}
          />
        </Path>
        <Path
          opacity={backStarBlinkAnimated}
          path="M240 81.8889C239.719 81.8889 239.468 81.7094 239.378 81.4428C238.119 77.7122 237.176 76.7699 233.446 75.511C233.18 75.4206 233 75.1706 233 74.8889C233 74.6075 233.18 74.3572 233.446 74.2671C237.177 73.0082 238.119 72.0656 239.378 68.3353C239.468 68.0684 239.718 67.8889 240 67.8889C240.282 67.8889 240.531 68.0684 240.622 68.3353C241.881 72.0656 242.824 73.008 246.554 74.2671C246.82 74.3572 247 74.6075 247 74.8889C247 75.1706 246.82 75.4206 246.554 75.511C242.823 76.7701 241.881 77.7122 240.622 81.4428C240.531 81.7094 240.281 81.8889 240 81.8889Z"
        >
          <LinearGradient
            start={{ x: 233, y: 67 }}
            end={{ x: 244, y: 75 }}
            colors={[THEME.COLORS.STAR_BLUE, THEME.COLORS.BRAND_LIGHT]}
          />
        </Path>
        <Path
          opacity={backStarBlinkAnimated}
          path="M90.4443 21C90.163 21 89.9123 20.8205 89.8223 20.5539C88.5634 16.8233 87.6207 15.8809 83.8904 14.622C83.6241 14.5317 83.4443 14.2816 83.4443 14C83.4443 13.7186 83.6241 13.4683 83.8904 13.3782C87.621 12.1193 88.5634 11.1767 89.8223 7.44635C89.9123 7.17953 90.1627 7 90.4443 7C90.726 7 90.9758 7.17953 91.0664 7.44635C92.3253 11.1767 93.2679 12.1191 96.9982 13.3782C97.2645 13.4683 97.4443 13.7186 97.4443 14C97.4443 14.2816 97.2645 14.5317 96.9982 14.622C93.2677 15.8812 92.3253 16.8233 91.0664 20.5539C90.9758 20.8205 90.7257 21 90.4443 21Z"
        >
          <LinearGradient
            start={{ x: 83, y: 7 }}
            end={{ x: 94, y: 14 }}
            colors={[THEME.COLORS.STAR_BLUE, THEME.COLORS.BRAND_LIGHT]}
          />
        </Path>
        <Path
          opacity={backStarBlinkAnimated}
          path="M250 190.889C249.719 190.889 249.468 190.709 249.378 190.443C248.119 186.712 247.176 185.77 243.446 184.511C243.18 184.421 243 184.171 243 183.889C243 183.608 243.18 183.357 243.446 183.267C247.177 182.008 248.119 181.066 249.378 177.335C249.468 177.068 249.718 176.889 250 176.889C250.282 176.889 250.531 177.068 250.622 177.335C251.881 181.066 252.824 182.008 256.554 183.267C256.82 183.357 257 183.608 257 183.889C257 184.171 256.82 184.421 256.554 184.511C252.823 185.77 251.881 186.712 250.622 190.443C250.531 190.709 250.281 190.889 250 190.889Z"
        >
          <LinearGradient
            start={{ x: 243, y: 177 }}
            end={{ x: 254, y: 184 }}
            colors={[THEME.COLORS.STAR_BLUE, THEME.COLORS.BRAND_LIGHT]}
          />
        </Path>
        <Path
          opacity={frontStarBlinkAnimated}
          path="M212.961 47.8108C212.561 47.8108 212.204 47.5553 212.076 47.176C210.284 41.8674 208.943 40.5264 203.635 38.735C203.256 38.6065 203 38.2506 203 37.8499C203 37.4495 203.256 37.0932 203.635 36.9651C208.943 35.1737 210.284 33.8323 212.076 28.5241C212.204 28.1444 212.56 27.8889 212.961 27.8889C213.362 27.8889 213.717 28.1444 213.846 28.5241C215.637 33.8323 216.979 35.1733 222.287 36.9651C222.666 37.0932 222.922 37.4495 222.922 37.8499C222.922 38.2506 222.666 38.6065 222.287 38.735C216.979 40.5268 215.637 41.8674 213.846 47.176C213.717 47.5553 213.361 47.8108 212.961 47.8108Z"
        >
          <LinearGradient
            start={{ x: 203, y: 27 }}
            end={{ x: 219, y: 38 }}
            colors={[THEME.COLORS.STAR_BLUE, THEME.COLORS.BRAND_LIGHT]}
          />
        </Path>
        <Path
          opacity={frontStarBlinkAnimated}
          path="M36.4053 19.9219C36.0049 19.9219 35.6482 19.6664 35.5201 19.2871C33.7287 13.9785 32.3873 12.6375 27.0791 10.8461C26.7002 10.7176 26.4443 10.3617 26.4443 9.96095C26.4443 9.56056 26.7002 9.2043 27.0791 9.07618C32.3877 7.28477 33.7287 5.94337 35.5201 0.63516C35.6482 0.255472 36.0045 0 36.4053 0C36.8061 0 37.1615 0.255472 37.2904 0.63516C39.0818 5.94337 40.4232 7.28438 45.7314 9.07618C46.1104 9.2043 46.3662 9.56056 46.3662 9.96095C46.3662 10.3617 46.1104 10.7176 45.7314 10.8461C40.4229 12.6379 39.0818 13.9785 37.2904 19.2871C37.1615 19.6664 36.8057 19.9219 36.4053 19.9219Z"
        >
          <LinearGradient
            start={{ x: 26, y: 0 }}
            end={{ x: 42, y: 10 }}
            colors={[THEME.COLORS.STAR_BLUE, THEME.COLORS.BRAND_LIGHT]}
          />
        </Path>
        <Path
          opacity={backStarBlinkAnimated}
          path="M19 88.8889C18.7186 88.8889 18.468 88.7094 18.378 88.4428C17.1191 84.7122 16.1764 83.7699 12.4461 82.511C12.1798 82.4206 12 82.1706 12 81.8889C12 81.6075 12.1798 81.3572 12.4461 81.2671C16.1767 80.0082 17.1191 79.0656 18.378 75.3353C18.468 75.0684 18.7183 74.8889 19 74.8889C19.2816 74.8889 19.5314 75.0684 19.622 75.3353C20.8809 79.0656 21.8236 80.008 25.5539 81.2671C25.8202 81.3572 26 81.6075 26 81.8889C26 82.1706 25.8202 82.4206 25.5539 82.511C21.8233 83.7701 20.8809 84.7122 19.622 88.4428C19.5314 88.7094 19.2814 88.8889 19 88.8889Z"
        >
          <LinearGradient
            start={{ x: 12, y: 74 }}
            end={{ x: 23, y: 82 }}
            colors={[THEME.COLORS.STAR_BLUE, THEME.COLORS.BRAND_LIGHT]}
          />
        </Path>
        <Path
          opacity={frontStarBlinkAnimated}
          path="M9.96094 201.811C9.56055 201.811 9.20391 201.555 9.07578 201.176C7.28438 195.867 5.94297 194.526 0.634766 192.735C0.255859 192.607 0 192.251 0 191.85C0 191.449 0.255859 191.093 0.634766 190.965C5.94336 189.174 7.28438 187.832 9.07578 182.524C9.20391 182.144 9.56016 181.889 9.96094 181.889C10.3617 181.889 10.7172 182.144 10.8461 182.524C12.6375 187.832 13.9789 189.173 19.2871 190.965C19.666 191.093 19.9219 191.449 19.9219 191.85C19.9219 192.251 19.666 192.607 19.2871 192.735C13.9785 194.527 12.6375 195.867 10.8461 201.176C10.7172 201.555 10.3613 201.811 9.96094 201.811Z"
        >
          <LinearGradient
            start={{ x: 0, y: 182 }}
            end={{ x: 16, y: 192 }}
            colors={[THEME.COLORS.STAR_BLUE, THEME.COLORS.BRAND_LIGHT]}
          />
        </Path>
        <Path
          opacity={backStarBlinkAnimated}
          path="M28 238.889C27.7186 238.889 27.468 238.709 27.378 238.443C26.1191 234.712 25.1764 233.77 21.4461 232.511C21.1798 232.421 21 232.171 21 231.889C21 231.608 21.1798 231.357 21.4461 231.267C25.1767 230.008 26.1191 229.066 27.378 225.335C27.468 225.068 27.7183 224.889 28 224.889C28.2816 224.889 28.5314 225.068 28.622 225.335C29.8809 229.066 30.8236 230.008 34.5539 231.267C34.8202 231.357 35 231.608 35 231.889C35 232.171 34.8202 232.421 34.5539 232.511C30.8233 233.77 29.8809 234.712 28.622 238.443C28.5314 238.709 28.2814 238.889 28 238.889Z"
        >
          <LinearGradient
            start={{ x: 21, y: 225 }}
            end={{ x: 32, y: 232 }}
            colors={[THEME.COLORS.STAR_BLUE, THEME.COLORS.BRAND_LIGHT]}
          />
        </Path>
        <Path
          opacity={frontStarBlinkAnimated}
          color={THEME.COLORS.STAR_GRAY}
          path="M77.0537 179.408C76.551 179.408 76.1041 179.087 75.9436 178.611C73.6951 171.949 72.0123 170.267 65.351 168.019C64.8744 167.858 64.5537 167.411 64.5537 166.908C64.5537 166.405 64.8744 165.958 65.3506 165.798C72.0119 163.55 73.6947 161.867 75.9432 155.205C76.1041 154.729 76.5506 154.408 77.0533 154.408C77.5561 154.408 78.0029 154.729 78.1635 155.205C80.4119 161.867 82.0947 163.55 88.7561 165.798C89.2322 165.959 89.5533 166.405 89.5533 166.908C89.5533 167.411 89.2326 167.858 88.7561 168.019C82.0947 170.267 80.4119 171.949 78.1635 178.611C78.0033 179.087 77.5564 179.408 77.0537 179.408Z"
        />
        <Path
          opacity={frontStarBlinkAnimated}
          color={THEME.COLORS.STAR_GRAY}
          path="M182.961 167.811C182.56 167.811 182.204 167.555 182.076 167.176C180.284 161.867 178.943 160.526 173.635 158.735C173.256 158.607 173 158.251 173 157.85C173 157.449 173.256 157.093 173.635 156.965C178.943 155.174 180.284 153.832 182.076 148.524C182.204 148.144 182.56 147.889 182.961 147.889C183.362 147.889 183.717 148.144 183.846 148.524C185.637 153.832 186.979 155.173 192.287 156.965C192.666 157.093 192.922 157.449 192.922 157.85C192.922 158.251 192.666 158.607 192.287 158.735C186.978 160.527 185.637 161.867 183.846 167.176C183.717 167.555 183.361 167.811 182.961 167.811Z"
        />
        <Path
          opacity={frontStarBlinkAnimated}
          color={THEME.COLORS.WHITE}
          path="M103.616 80.25C103.239 80.25 102.904 80.0094 102.783 79.6523C101.097 74.6563 99.835 73.3941 94.8389 71.7078C94.4818 71.5871 94.2412 71.252 94.2412 70.875C94.2412 70.498 94.4818 70.1629 94.8389 70.0422C99.835 68.3563 101.097 67.0937 102.783 62.0977C102.904 61.7406 103.239 61.5 103.616 61.5C103.993 61.5 104.328 61.7406 104.449 62.0977C106.135 67.0937 107.397 68.3559 112.394 70.0422C112.751 70.1629 112.991 70.498 112.991 70.875C112.991 71.252 112.751 71.5871 112.394 71.7078C107.397 73.3941 106.135 74.6563 104.449 79.6523C104.328 80.0094 103.993 80.25 103.616 80.25Z"
        />
      </Canvas>

      <Animated.View entering={BounceIn}>
        <TrophySvg />
      </Animated.View>
    </View>
  );
}
