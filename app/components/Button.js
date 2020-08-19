import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

const style = {
    borderRadius: 20, padding: 10,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0, backgroundColor: '#8e44ad',


    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

};
const styleText ={fontSize:15,color:'#fff'};
export class Button extends React.PureComponent {
    render() {
        return <TouchableOpacity disabled={this.props.disabled} onPress={this.props.onPress}>
            <View style={style}>
                <Text style={styleText}>{this.props.title}</Text>
            </View>

        </TouchableOpacity>

    }
}
