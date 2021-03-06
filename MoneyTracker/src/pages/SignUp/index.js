import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import {Button, Gap, Header, TextInput} from '../../component';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from "react-native-flash-message";
import firebase from '../../config/Firebase';

const SignUp = ({navigation}) => {
    const [photo, setPhoto] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photoBase64, setPhotoBase64] = useState('');

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getImage = () => {
        launchImageLibrary(
            {maxHeight: 200, maxWidth: 200, includeBase64: true}, res => {
            if (res.didCancel){
                setHasPhoto(false);
                showMessage({
                    message: 'Upload foto dibatalkan',
                    type: 'default',
                    backgroundColor: '#D9435E', // background color
                    color: 'white', // text color
                  });
            }else{
                setPhoto(res.uri);
                setPhotoBase64(res.base64);
                setHasPhoto(true);
            }

        });
    };

    const onSubmit = () => {
        if (fullName === '' || email === '' || password === '') {
            showMessage({
              message: 'Please complete the form',
              type: 'default',
              backgroundColor: '#D9435E', // background color
              color: 'white', // text color
            });
          } else {
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                const uid = res.user.uid;
                const data = {
                    fullName: fullName,
                    email: email,
                    photo: photoBase64,
                };
                firebase.database().ref(`users/${uid}`).set(data);
                setFullName('');
                setEmail('');
                setPassword('');
                navigation.navigate('SignIn');
            })
            .catch(error => {
              showMessage({
                message: error.message,
                type: 'default',
                backgroundColor: '#D9435E', // background color
                color: 'white', // text color
                });
            });
          }
    };

    return (
        <View style={styles.page}>
            <Header title="Sign Up" onBack={() => navigation.goBack()}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentWrapper}>
                    <View style={styles.photo}>
                        <View style={styles.border}>
                            <TouchableOpacity onPress={getImage} activeOpacity={0.7}>
                                {hasPhoto &&
                                    <Image source={{uri: photo}} style={styles.pict}/>
                                }
                                {!hasPhoto && (
                                    <View style={styles.addPhoto}>
                                    <Text style={styles.addText}>Add Photo</Text>
                                    </View>
                                )}                        
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Gap height={16} />
                    <TextInput title="Full Name" 
                    placeholder="Type your full name"
                    value={fullName}
                    onChangeText={value => setFullName(value)}/>
                    <Gap height={16}/>
                    <TextInput title="Email Address" 
                    placeholder="Type your email address"
                    value={email}
                    onChangeText={value => setEmail(value)}/>
                    <Gap height={16}/>
                    <TextInput title="Password" 
                    placeholder="Type your password"
                    value={password}
                    onChangeText={value => setPassword(value)}
                    secureTextEntry/>
                    <Gap height={24}/>
                    <Button title="Continue"
                    onPress={onSubmit}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 26,
        paddingHorizontal: 24,
    },
    addPhoto: {
        height: 90,
        width: 90,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
    },
    addText: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        maxWidth: 40,
        textAlign: 'center',
    },
    pict: {
        height: 90,
        width: 90,
        borderRadius: 90,
    },
    border: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
    },
    photo: {
     alignItems: 'center',
     marginTop: 26,
     marginBottom: 26,   
    },
})

