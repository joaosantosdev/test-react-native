import React from 'react'
import {Image, Text, View,FlatList,ScrollView} from 'react-native';
import {CardRepo} from './components/CardRepo';
import Header from './components/Header';
export default class UserInfor extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {...props.route.params}
    }

    render() {
        return <ScrollView styleContent={{flex:1}}>
            <View>
                <Header title='Detalhe' navigation={this.props.navigation}/>
                <View style={{alignItems: 'center', marginTop: 10,padding:10}}>

                    <Image style={{width: 150, height: 150,borderRadius:150,borderWidth:1}}
                           source={{uri: this.state.user.avatar_url}}/>
                    <Text style={{fontSize: 20}}>{this.state.user.name}</Text>
                    <Text style={{textAlign: 'center'}}>{this.state.user.bio}</Text>
                    <Text>{this.state.user.location}</Text>
                    <FlatList
                        style={{width:'100%',marginTop:20}}
                        keyExtractor={(item) => item.id.toString()}
                        data={this.state.repos}
                        renderItem={({item})=>{return <CardRepo repo={item} />}}
                    />
                </View>
            </View>
        </ScrollView>
    }
}
