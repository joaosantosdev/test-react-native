import React from 'react';
import {View, TextInput, Image, TouchableOpacity, Text, ScrollView} from 'react-native'
import axios from 'axios'
import {Button} from "./components/Button";

const styleContent = {flex: 1, backgroundColor: '#f4f3f4', padding: 10, alignItems: 'center'};
const input = {padding: 10, backgroundColor: '#FFF', width: 300, marginTop: 10}
export default class App extends React.Component {
    http

    constructor(props) {
        super(props);
        this.http = axios.create({
            baseURL: 'https://api.github.com/users'
        });
        this.state = {
            username: '',
            user: null
        }
    }

    pesquisar = async () => {
        if (this.state.username === '') {
            this.setState({user: null})
            alert('Informe o username')
            return;
        }
        await this.http.get(`/${this.state.username.toLocaleLowerCase()}`).then(res => {
            this.setState({user: res.data})

        }).catch(err => {
            alert("Usuario não encontrado")
            this.setState({user: null})
        })
    }
    changeUsername = (username) => {
        this.setState({username})
    }
    renderInfoUsername = () => {
        if (this.state.user === null)
            return;

        return <View style={{alignItems: 'center', marginTop: 10}}>
            <Image style={{width: 150, height: 150}} source={{uri: this.state.user.avatar_url}}/>
            <Text style={{fontSize: 20}}>{this.state.user.name}</Text>
            <Text style={{textAlign: 'center'}}>{this.state.user.bio}</Text>
            <Text>{this.state.user.location}</Text>
        </View>
    }

    render() {
        return <ScrollView style={{backgroundColor: '#f4f3f4'}}>
            <View style={styleContent}>
                <Image source={require('./logo.png')} style={{height: 200, width: 200}}/>

                <TextInput
                    onChangeText={this.changeUsername}
                    style={input}
                />
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Button
                        onPress={this.pesquisar}
                    />
                </View>
                {
                    this.renderInfoUsername()
                }
            </View>
        </ScrollView>
    }
}