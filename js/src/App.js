/**
 *   Copyright 2007-2017 by DHC Software co.
 *   创建人：dreamsleep
 *   联系方式：
 *   创建时间：2017-07-26 10:12
 *   简介：
 *   路由：
 *   更改历史：
 *   更改人|更改时间|更改内容|代码位置编号|
 */
'use strict';
import "./cores/global";
// require("./cores/CustomNavBar");
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
// const Index =require( "./main/Index").default;

import Index from "./main/Index"

/**
 * @mark 文件内变量
 */

//文件内变量结束

export default class App extends React.Component {

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
        return <View style={styles.App}><Index/></View>
    }
}

//@mark style
const styles = StyleSheet.create({
    App: {
        backgroundColor:"#fff",
        flex: 1, flexDirection: "column",
    }
});
