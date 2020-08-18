import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

const style = {
    borderRadius: 10, padding: 10,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0, backgroundColor: '#8e44ad',

};
const styleText ={fontSize:15,color:'#fff'};
export class Button extends React.PureComponent {
    render() {
        return <TouchableOpacity onPress={this.props.onPress}>
            <View style={style}>
                <Text style={styleText}>Pesquisar</Text>
            </View>

        </TouchableOpacity>

    }
}