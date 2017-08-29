// obtained from react native tutorials
import React from "react";
import {PixelRatio} from "react-native";
import Dimensions from "Dimensions";
import Platform from "Platform";

var navigationBarHeight;
var tabBarHeight;
var startBarHeight;
var tabBarPaddingTop;
var tabBarPaddingBottom;
if (Platform.OS === 'android') {
    navigationBarHeight = 40;
    tabBarHeight = 50;
    startBarHeight = 0;
    tabBarPaddingTop=0;
    tabBarPaddingBottom=0;
} else {
    navigationBarHeight = 60;
    tabBarHeight = 50;
    startBarHeight = 20
    tabBarPaddingTop=6;
    tabBarPaddingBottom=4;
}

const Theme = {
    ratio: PixelRatio.get(),
    pixel: 1 / PixelRatio.get(),
    radius: 4,
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    navigationBarHeight: navigationBarHeight,
    tabBarHeight: tabBarHeight,
    startBarHeight: startBarHeight,
    tabBarPaddingTop: tabBarPaddingTop,
    tabBarPaddingBottom: tabBarPaddingBottom,
    color: {
        tabBarItemUnSelect: "#4F5951",
        tabBarItemSelect: "#0099cc",
        tabBarBorderColor: "#eeeeee",
        tabBarBackGround: "#f0f0f0",
        tabBarBorder: "#eeeeee"
    },
    fontSize: {
        h1:14,
        min: 10
    }
};
//noinspection JSAnnotator
export default Theme;