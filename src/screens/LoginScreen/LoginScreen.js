import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

/* Login Screen */

export default function LoginScreen({navigation}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onLoginPress = () => {

    }

        return (
            <View style={styles.container}>
            <KeyboardAwareScrollView style={{ flex: 1, width: '100%'}} keyboardShouldPersistTaps='always' >
                <Image style={styles.logo} />
                <TextInput
                    style={styles.input}
                    placeholder = 'E-mail'
                    placeholderTextColor = '#aaaaaa'
                    onChangeText={(text) => setEmail(text)}
                    value = {email}
                    underlineColorAndroid = "transparent"
                    autoCapitalize = 'none'
                    />
            </KeyboardAwareScrollView>
            <Text>Login Screen test21</Text>
          </View>
        );





}