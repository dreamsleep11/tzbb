/**
 *   Copyright 2007-2017 by DHC Software co.
 *   创建人：dreamsleep
 *   联系方式：
 *   创建时间：2017-08-08 14:48
 *   简介：
 *   路由：
 *   更改历史：
 *   更改人|更改时间|更改内容|代码位置编号|
 */
'use strict';
import FontIcon from "../../cores/FontIcon"

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text, TouchableOpacity
} from 'react-native';
// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Generate required css
// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
/**
 * @mark 文件内变量
 */

//文件内变量结束

export default class Login extends React.Component {

    /***
     * default props value
     * @mark propTypes 默认属性值
     */
    static defaultProps = {}

    /***
     * props types for helper text
     * @mark propTypes 属性类型
     */
    static propTypes = {}

    /**
     * @mark state
     */
    state = {}

    /**
     * @mark constructor
     */
    constructor(props) {
        super(props);
    }

    /**
     * @mark 组件声明周期区域
     */

    /**
     * @mark 第一次加载 只运行一次
     */
    componentDidMount() {

    }

    //声明周期代码结束

    /**
     * @mark 自定义代码区
     */


    //自定义代码区结束

    /**
     * @mark render
     */
    render() {
        return <View  style={styles.Login}><Text>登sss录</Text>
            <TouchableOpacity onPress={() => {
                Actions.home1();
            }}>
                <FontIcon size={22} icon="dianyuanxinxi"
                          style={[{color: 'blue', paddingRight: 20}]}/>
            </TouchableOpacity>
        </View>
    }
}

//@mark style
const styles = StyleSheet.create({
    Login: {
    }
});
