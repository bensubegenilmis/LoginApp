import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../firebase';

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email,password).
        then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Kullanıcı ', user.email)
        })
        .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >

            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <TextInput style={styles.input}
                    placeholder='Şifre'
                    value={password}
                    onChangeText={text => setPassword(text)} //atama yapar
                    secureTextEntry  //şifreyi gizler
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp}
                style={[styles.button, styles.outlineButton]}>
                    <Text style={styles.outlineButtonText}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5,
        borderRadius: 10,
    },
    buttonContainer: {
        width: '50%',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'deepskyblue',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',

    },
    outlineButton: {
        backgroundColor: 'white',
        marginTop: 5,
    },
    outlineButtonText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'deepskyblue'
    },



});