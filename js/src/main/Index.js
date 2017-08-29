/**
 *   Copyright 2007-2017 by DHC Software co.
 *   创建人：dreamsleep
 *   联系方式：
 *   创建时间：2017-08-08 14:51
 *   简介：
 *   路由：
 *   更改历史：
 *   更改人|更改时间|更改内容|代码位置编号|
 */
'use strict';
// import CustomNavBar from "../cores/CustomNavBar"
import React, {Component} from 'react';
import {Navigation, Router, Scene} from "react-native-router-flux";
import {
    StyleSheet,
    View,
    Platform
} from 'react-native';
import Login from "../pages/login/Login"
import Tabbar from "./Tabbar"
import Routes from "../../routes"
import Home from "../pages/home/Home"
import Home1 from "../pages/home/Home1"

/**
 * @mark 文件内变量
 */

//文件内变量结束

export default class Index extends React.Component {

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
    state = {
        sceneItems: Routes
    }

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

    componentWillMount() {

    }

    //声明周期代码结束

    /**
     * @mark 自定义代码区
     */


    /**
     * @mark 构建基础路由
     */
    makeRouter() {
        return (
            <Router
                tabBarPosition={'bottom'}
                swipeEnabled={false}
                animationEnabled={false}
                showIcon={true}
                showLabel={true}
                labelStyle={{display: "none"}}
                indicatorStyle={{height: 0}}
                tabBarStyle={styles.tabBar}
                iconStyle={{
                    height: Theme.tabBarHeight,
                    width: "100%",
                    marginTop: 0
                }}
                headerTitleStyle={{
                    fontSize: Theme.fontSize.h1,
                    alignSelf: 'center'
                }}
                headerStyle={
                    {
                        paddingTop: Theme.startBarHeight,
                        height: Theme.navigationBarHeight,
                    }
                }>
                {/*@mark 黑科技构建路由*/}
                {React.createElement(Scene, {key: "root", unmountScenes: true, selector: "tabBar"}, [
                    <Scene
                    tabs={true}
                    key="tabBar"
                    hideNavBar={true}
                    type="reset"
                    name="tabbar">
                        <Scene key="index" component={Home} title="首页" hideNavBar={true} icon={Tabbar}
                    />
                    <Scene key="analyse" component={Login} title="营销分析" hideNavBar={false} icon={Tabbar}
                    />
                    <Scene key="message" component={Home1} title="消息中心"
                    hideNavBar={false} icon={Tabbar}
                    />
                    </Scene>
                ].concat(
                    this.state.sceneItems.map((v, index) => {
                        return <Scene {...v}/>;
                    })
                ))}
            </Router>
        );
    }

    //自定义代码区结束
    /**
     * @mark render
     */
    render() {
        return this.makeRouter()
    }
}
//@mark style
const styles = StyleSheet.create({
        tabBar: {
            height: Theme.tabBarHeight,
            backgroundColor: Theme.color.tabBarBackGround,
            borderTopColor: Theme.color.tabBarBorderColor,
            borderBottomColor: Theme.color.tabBarBorderColor,
            borderTopWidth: Theme.pixel,
            paddingBottom: Theme.tabBarPaddingBottom,
            paddingTop: Theme.tabBarPaddingTop
        }
    }
);
