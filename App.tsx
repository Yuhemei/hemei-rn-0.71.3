/*
 * @Author: hemei yuhemei8088@163.com
 * @Date: 2023-03-07 21:18:09
 * @LastEditors: hemei yuhemei8088@163.com
 * @LastEditTime: 2023-03-20 09:40:15
 * @FilePath: /rnHemei/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    Header
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screen/Home';

type SectionProps = PropsWithChildren<{
    title: string;
}>;


function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Home></Home>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default App;
