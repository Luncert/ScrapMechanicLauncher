import React, { Component } from 'react';
import logo from '@assets/images/logo-character.png';
import './LoadingPage.scss';
import Button from './base/Button';
import Api from '@misc/window/Api';
import Input from './base/Input';
import { Navigate } from 'react-router-dom';

interface MainPageState {
    gamePath: string
    loading: boolean
    actionLog: string
    redirect: boolean
}

export default class MainPage extends Component<any, MainPageState> {

    constructor(props: any) {
        super(props)
        this.state = {
            gamePath: null,
            loading: false,
            actionLog: null,
            redirect: false
        }
    }

    getGamePath() {
        let gamePath = Api.getGamePath()
        this.setState({gamePath: gamePath})
    }

    loadGame() {
        const { gamePath } = this.state
        Api.loadGameContent(gamePath,
            log => this.setState({loading: true, actionLog: log}),
            success => {
                if (success) {
                    this.setState({loading: false, actionLog: null, redirect: true})
                } else {
                    this.setState({loading: false, actionLog: 'failed to load game'})
                }
            })
    }

    render() {
        const { gamePath, loading, actionLog, redirect } = this.state

        return (
            <div className='loading-page'>
                <img src={logo} title='Codesbiome' />
                <h1 className='themed'>Scrap Mechanic Launcher</h1>
                <div className={'game-path' + (loading ? ' disabled' : '')}>
                    <Input placeholder='Game Path' style={{width: '80%'}} centered
                        value={gamePath}
                        animationBase={{backgroundColor: 'rgb(51, 59, 111)'}}
                        focusAnimation={{backgroundColor: 'rgb(62, 71, 128)'}}
                        hoverAnimation={{backgroundColor: 'rgb(62, 71, 128)'}}/>
                    <Button fixSize={false} style={{width: '10%'}}
                        animationBase={{backgroundColor: 'rgb(39, 47, 97)'}}
                        focusAnimation={{backgroundColor: 'rgb(84, 95, 171)'}}
                        hoverAnimation={{backgroundColor: 'rgb(62, 71, 128)'}}
                        onClick={() => this.getGamePath()}>OPEN</Button>
                    <Button fixSize={false} style={{width: '10%'}}
                        animationBase={{backgroundColor: 'rgb(39, 47, 97)'}}
                        focusAnimation={{backgroundColor: 'rgb(84, 95, 171)'}}
                        hoverAnimation={{backgroundColor: 'rgb(62, 71, 128)'}}
                        onClick={() => this.loadGame()}>GO</Button>
                </div>
                {(loading || actionLog) &&
                    <div className='action-log-wrapper'>
                        <div className='action-log'>
                            {actionLog}
                        </div>
                    </div>
                }
                
                {redirect &&
                <Navigate to="/main" replace={true} />
                }
            </div>
        )
    }
}