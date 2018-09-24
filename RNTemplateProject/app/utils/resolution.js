
// scale(size: number)
//      — Returns linear scaled result of the provided size,
//        based on your device's screen width.

// verticalScale(size: number)
//      — Returns linear scaled result of the provided size,
//        based on your device's screen height.

// moderateScale(size: number, factor?: number)
//      — Returns non-linear scale based on a resize factor (defaults to 0.5).
//      If normal scale will increase by +2X,
//      moderateScale will only increase it by +X.

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};
