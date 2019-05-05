import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

//屏幕信息
var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image style={styles.circleImage} source={require('./logo.png')}/>
                {/*账户*/}
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入用户名'}
                    //输入框下划线
                    underlineColorAndroid={'transparent'}/>
                {/*密码*/}
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入密码'}
                    secureTextEntry={true}
                    underlineColorAndroid={'transparent'}/>
                {/*无法登录  新用户*/}
                {/*登录*/}
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableOpacity>
                {/*无法登录  新用户*/}
                <View style={styles.canNot}>
                    <Text style={{color: '#4398ff'}}>无法登录</Text>
                    <Text style={{color: '#4398ff'}}>新用户</Text>
                </View>
                {/*其它登录方式*/}
                <View style={styles.loginTheWay}>
                    <Text>其它登录方式：</Text>
                    <Image style={styles.image} source={require('./alipay.png')}/>
                    <Image style={styles.image} source={require('./wechat.png')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#dddddd',
        //设置次轴的对齐方式
        alignItems: 'center',
    },
    circleImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 100,
        marginBottom: 25,
    },
    textInput: {
        height: 40,
        width: width,
        marginBottom: 5,
        backgroundColor: 'white',
        textAlign: 'left',
    },
    canNot: {
        width: width - 32,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        //设置主轴为两端对齐
        justifyContent: 'space-between',
    },
    loginTheWay: {
        flexDirection: 'row',
        //设置次轴的对齐方式
        alignItems: 'center',
        justifyContent: 'flex-start',
        //绝对定位
        position: 'absolute',
        // //距离底部还有30 距离左边还有10 这样的一个位置
        bottom: 30,
        left: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginLeft: 5,
        borderRadius: 25,
    },
    btnStyle: {
        height: 40,
        width: width - 32,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#4398ff',
        justifyContent: 'center',
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        textAlignVertical: 'center',
    }

});