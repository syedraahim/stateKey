import React, { Component } from 'react';
import { Tile } from 'react-native-elements';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    Picker,
    CheckBox
} from 'react-native';

export default class DetailsDescription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            acCheck: false,
            balconyCheck: false,
            furnishedCheck: false,
            wheelChairCheck: false,
            floorCheck: false,
            garageParking: false,
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", viewId);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Details Input</Text>
                <Text style={styles.textStyle}>Rent Price</Text>

                <View style={styles.inputContainer}>
                    {/*<Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />*/}
                    <TextInput style={styles.inputs}
                        placeholder="Enter Amount"
                        keyboardType="numeric"
                        underlineColorAndroid='transparent'
                    />
                </View>
                <Text style={styles.textStyle}>Security Deposit</Text>

                <View style={styles.inputContainer}>
                    {/*<Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />*/}
                    <TextInput style={styles.inputs}
                        placeholder="Enter Amount"
                        underlineColorAndroid='transparent'
                        keyboardType="numeric"
                    />
                </View>
                <Text style={styles.coloredText}>Set to one month's rent</Text>



                <Text style={styles.textStyle}>Beds</Text>
                <View style={styles.inputContainer}>

                    <Picker
                        selectedValue=''
                        style={{ height: 50, width: 250 }}
                    >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="1" value="java" />
                        <Picker.Item label="2" value="js" />
                    </Picker>
                </View>

                <Text style={styles.textStyle}>Baths</Text>
                <View style={styles.inputContainer}>

                    <Picker
                        selectedValue=''
                        style={{ height: 50, width: 250 }}
                    >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="1" value="java" />
                        <Picker.Item label="2" value="js" />
                    </Picker>
                </View>

                <Text style={styles.textStyle}>Square Feet</Text>
                <View style={styles.inputContainer}>
                    {/*<Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />*/}
                    <TextInput style={styles.inputs}
                        placeholder="22"
                        underlineColorAndroid='transparent'
                        keyboardType="numeric"
                    />
                </View>

                <Text style={styles.textStyle}>Lease Duration</Text>
                <View style={styles.inputContainer}>
                    <Picker
                        selectedValue=''
                        style={{ height: 50, width: 250 }}
                    >
                        <Picker.Item label="3 Month" value="" />
                        <Picker.Item label="2 Month" value="" />
                        <Picker.Item label="1 Month" value="" />
                    </Picker>
                </View>

                <Text style={styles.textStyle}>Date Available</Text>
                <View style={styles.inputContainer}>
                    {/*<Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />*/}
                    <TextInput style={styles.inputs}
                        placeholder=""
                        underlineColorAndroid='transparent'
                    />
                </View>
                <Text style={styles.coloredText}>Set to available now</Text>
                {/*<Text style={styles.coloredText}>Set to available</Text>*/}



                <Text style={styles.textStyle}>Lease Term</Text>
                <View style={styles.inputContainer}>
                    {/*<Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />*/}
                    <TextInput style={styles.inputs}
                        placeholder="Example : owner pays for trash..."
                        underlineColorAndroid='transparent'
                    />
                </View>

                <Text style={styles.textStyle}>Description</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="what is awesom about your place?"
                        underlineColorAndroid='transparent'
                        keyboardType="default"
                        multiline={true}

                    />
                </View>


                <View style={styles.lineStyle} />

                <Text style={styles.heading}>Contact Information</Text>

                <Text style={styles.textStyle}>Name</Text>
                <View style={styles.inputContainer}>
                    {/*<Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />*/}
                    <TextInput style={styles.inputs}
                        placeholder="Your Name Here"
                        underlineColorAndroid='transparent'
                    />
                </View>
                <Text style={styles.textStyle}>Email</Text>
                <View style={styles.inputContainer}>
                    {/*<Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />*/}
                    <TextInput style={styles.inputs}
                        placeholder="abc@abc.com"
                        underlineColorAndroid='transparent'
                        keyboardType="email-address"
                    />
                </View>

                <Text style={styles.textStyle}>Phone</Text>
                <View style={styles.inputContainer}>
                    {/*<Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />*/}
                    <TextInput style={styles.inputs}
                        placeholder="(123) 456789"
                        underlineColorAndroid='transparent'
                        keyboardType="phone-pad"
                    />
                </View>


                <Text style={styles.textStyle}>Amenities (OPTIONAL)</Text>
                <View style={styles.lineStyle} />


                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        value={this.state.acCheck}
                        onChange={() => this.setState({ acCheck: !this.state.acCheck })}
                    />
                    <Text style={styles.checkBoxText}>A/C</Text>

                </View>

                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        value={this.state.balconyCheck}
                        onChange={() => this.setState({ balconyCheck: !this.state.balconyCheck })}
                    />
                    <Text style={styles.checkBoxText}>Balcony/Deck</Text>

                </View>

                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        value={this.state.furnishedCheck}
                        onChange={() => this.setState({ furnishedCheck: !(this.state.furnishedCheck) })}
                    />
                    <Text style={styles.checkBoxText}>Furnished</Text>

                </View>

                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        value={this.state.floorCheck}
                        onChange={() => this.setState({ floorCheck: !(this.state.floorCheck) })}
                    />
                    <Text style={styles.checkBoxText}>Hardwood Floor</Text>

                </View>

                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        value={this.state.wheelChairCheck}
                        onChange={() => this.setState({ wheelChairCheck: !(this.state.wheelChairCheck) })}
                    />
                    <Text style={styles.checkBoxText}>WheelChair Access</Text>

                </View>

                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        value={this.state.garageParking}
                        onChange={() => this.setState({ garageParking: !(this.state.garageParking) })}
                    />
                    <Text style={styles.checkBoxText}>Garage Parking</Text>

                </View>


                <Text style={styles.heading}>Photos & Media</Text>

                <Text style={styles.photoText}>Tap a photo to add a caption</Text>
                <View style={styles.cameraContainer}>
                    {/*<Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />*/}

                </View>
                <Text style={styles.photoInputText}>Tap area to add a photo</Text>




                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('Property Created')}>
                    <Text style={{ color: 'white' }}>Create Property</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainerWhite} onPress={() => this.onClickListener('Property Managed')}>
                    <Text>Manage My Property</Text>
                </TouchableHighlight>
                {/*<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>*/}

                {/*<TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        width: 250,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 50,
        borderColor: 'black',
        borderWidth: 1
    },
    checkBoxContainer: {
        backgroundColor: '#FFFFFF',
        width: 250,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 50,

    },
    cameraContainer: {
        height: 100,
        marginLeft: 50,
        marginRight: 60,
        borderWidth: 1,
        borderRadius: 1,
        borderStyle: 'dashed',

    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,

    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#DCDCDC',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 5,
        marginLeft: 50,
        backgroundColor: '#091e2e'
    },
    buttonContainerWhite: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 5,
        marginLeft: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
    },
    loginButton: {
        backgroundColor: "#ffffff",
    },
    loginText: {
        color: 'white',
    },
    heading: {

        marginLeft: 50,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10

    },
    textStyle: {
        fontSize: 20,
        marginLeft: 50,
        marginTop: 20
    },
    checkBoxText: {
        fontSize: 20,
    },
    photoText: {
        fontSize: 20,
        marginLeft: 50
    },
    photoInputText: {
        fontSize: 20,
        marginLeft: 50,
        marginBottom: 20,

    },
    coloredText: {
        fontSize: 20,
        marginLeft: 50,
        color: 'blue'
    }
});