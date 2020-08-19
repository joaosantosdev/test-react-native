import React from 'react';
import {View, TextInput, Image, TouchableOpacity, Text, ScrollView} from 'react-native'
import axios from 'axios'
import {Button} from "./components/Button";

const styleContent = {flex: 1, backgroundColor: '#f4f3f4', padding: 10, alignItems: 'center'};
const input = {padding: 10, backgroundColor: '#FFF', width: 300, marginTop: 10,borderRadius:10,fontSize:15}
export default class App extends React.Component {
    http

    constructor(props) {
        super(props);
        this.http = axios.create({
            baseURL: 'https://api.github.com/users'
        });
        this.state = {
            username: '',
            disabled:false
        };
    }

    pesquisar = async () => {
        if (this.state.username === '') {
            this.setState({user: null})
            alert('Informe o username')
            return;
        }
        this.setState({disabled:true},async ()=>{
            await this.http.get(`/${username}/repos`)

            let username = this.state.username.toLocaleLowerCase();
            let user = await this.http.get(`/${username}`).then(async res => res.data).catch(err => null);
            if(user){
                let repos = await this.http.get(`/${username}/repos`).then(async res => res.data).catch(err => null);
                this.props.navigation.push('UserInfo',{user,repos})
            }else{
                alert("Usuario não encontrado")
            }
            this.setState({disabled:false})
        });

    }
    changeUsername = (username) => {
        this.setState({username})
    }

    render() {
        return <ScrollView style={{backgroundColor: '#f4f3f4'}}>
            <View style={styleContent}>
                <Image source={require('./assets/logo.png')} style={{height: 200, width: 200}}/>

                <TextInput
                    onChangeText={this.changeUsername}
                    style={input}
                />
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Button
                        disabled={this.state.disabled}
                        title={this.state.disabled?'Pesquisando...':'Pesquisar'}
                        onPress={this.pesquisar}
                    />
                </View>
            </View>
        </ScrollView>
    }
}
