/**
 *   Copyright 2007-2017 by DHC Software co.
 *   创建人：dreamsleep
 *   联系方式：
 *   创建时间：2017-08-10 14:21
 *   简介：
 *   路由：
 *   更改历史：
 *   更改人|更改时间|更改内容|代码位置编号|
 */
'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import FontIcon from "../cores/FontIcon"

const tabItems = {
    index: {
        title: "首页",
        icon: "shoukuan_off",
        selectedIcon: "shoukuan_on",
    },
    analyse: {
        title: "分析",
        icon: "fenxi",
        selectedIcon: "fenxion",
    }, message: {
        title: "消息",
        icon: "shezhi-xiaoxitongzhi",
        selectedIcon: "shezhi-xiaoxitongzhi",
    }
};
/**
 * @mark 文件内变量
 */

//文件内变量结束

export default class Tabbar extends Component {


    /**
     * @mark constructor
     */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * @mark render
     */
    render() {
        let param = tabItems[this.props.navigation.state.routeName.substring(1)];
        let activeStyle = this.props.focused ? {color: Theme.color.tabBarItemSelect} : {color: Theme.color.tabBarItemUnSelect};
        return (
            <View style={styles.Tabbar}>
                <FontIcon color={Theme.color.vision_main} size={22}
                          icon={this.props.focused ? (this.props.selectedIcon || param.selectedIcon) : (this.props.unSelectIcon || param.icon)}
                          style={[activeStyle, {textAlign: "center", marginBottom: 1}]}/>
                <Text style={[activeStyle, styles.tabbarItem]}>{this.props.title || param.title}</Text>
            </View>
        );
    }
}

//@mark style
const styles = StyleSheet.create({
    Tabbar: {
        flex:1,
    },
    tabbarItem: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: Theme.fontSize.min,
    }
});
