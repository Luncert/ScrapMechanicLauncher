import React, { Component } from 'react';
import logo from '@assets/images/logo-character.png';
import './MainPage.scss';
import Button from './base/Button';
import Api from '@misc/window/Api';
import Input from './base/Input';

interface MainPageState {
    gamePath: string
}

export default class MainPage extends Component<any, MainPageState> {

    constructor(props: any) {
        super(props)
        this.state = {
            gamePath: ''
        }
    }

    getGamePath() {
        let gamePath = Api.getGamePath()
        this.setState({gamePath: gamePath})
    }

    loadGame() {
        console.log(this.state.gamePath)
    }

    render() {
        const { gamePath } = this.state
        return (
            <div className='main-page'>
                <img src={logo} title='Codesbiome' />
                <h1 className='themed'>Scrap Mechanic Launcher</h1>
                <div className='game-path'>
                    <Input placeholder='Game Path' style={{width: '100%'}} centered
                        value={gamePath}
                        animation={{
                            base: {backgroundColor: 'rgb(51, 59, 111)'},
                            focus: {backgroundColor: 'rgb(62, 71, 128)'},
                            hover: {backgroundColor: 'rgb(62, 71, 128)'}}}/>
                    <Button fixSize={false} style={{width: '20%'}}
                        animation={{
                            base: {backgroundColor: 'rgb(39, 47, 97)'},
                            active: {backgroundColor: 'rgb(84, 95, 171)'},
                            hover: {backgroundColor: 'rgb(62, 71, 128)'}}}
                        onClick={() => this.getGamePath()}>OPEN</Button>
                    <Button fixSize={false} style={{width: '20%'}}
                        animation={{
                            base: {backgroundColor: 'rgb(39, 47, 97)'},
                            active: {backgroundColor: 'rgb(84, 95, 171)'},
                            hover: {backgroundColor: 'rgb(62, 71, 128)'}}}
                        onClick={() => this.loadGame()}>GO</Button>
                </div>
            </div>
        )
    }
}