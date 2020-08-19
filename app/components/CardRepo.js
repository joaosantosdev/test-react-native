import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

const style = {
    borderRadius: 10, padding: 10,
    width: '100%',
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    marginBottom:10,
    backgroundColor: '#fff',

};
const styleText ={fontSize:15,color:'#8e44ad',fontWeight:'bold'};
export class CardRepo extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return <View style={style}>
                <Text style={styleText}>{this.props.repo.name}</Text>
            <Text style={styleText}>{this.props.repo.language}</Text>
        </View>;

    }
}
