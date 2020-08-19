import React from "react";
import {Text, View,Image} from "react-native";

const style = {height:60,width:'100%',backgroundColor:'#8e44ad',

    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flexDirection:'row'
};
const styleText ={color:'#fff',fontSize:18,fontWeight:'bold',marginLeft:5,marginTop:5};
export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return   <View style={style}>
            <Text onPress={e=>this.props.navigation.goBack()} style={{marginTop:-5}}>
                <Image  source={require('./../assets/seta.png')} style={{width:40,height:40,marginLeft:5}}/>
                <Text style={styleText}>{this.props.title}</Text>
            </Text>
        </View>;

    }
}
