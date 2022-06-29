import React, { Component } from 'react';
import Button from './base/Button';
import Img from './base/Img';
import Input from './base/Input';
import Label from './base/Label';
import Line from './base/Line';
import { List, ListItem } from './base/List';
import { Modal, ModalContent, ModalFoot, ModalHeader } from './base/Modal';
import Sidebar, { SidebarItem } from './base/Sidebar';
import { Tab, TabItem } from './base/Tab';
import './MainPage.scss';

interface GameInfoPageState {
    showModal: boolean
}

export default class GameInfoPage extends Component<any, GameInfoPageState> {

    constructor(props: any) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    render() {
        const { showModal } = this.props

        return (
            <div className='main-page'>
                <Sidebar>
                    <SidebarItem iconName='iconProject' />
                    <div style={{marginTop: "auto"}}>
                        <SidebarItem iconName='iconUser' />
                        <SidebarItem iconName='iconConfig' />
                    </div>
                </Sidebar>
                <div className='game-content-list'>
                    <List backgroundColor='inherit'>
                        <ListItem padding='5px' cursor='pointer' backgroundColor='inherit' hoverAnimation activeAnimation>
                            <div>
                                <span className='game-content-name'>Test</span>
                                <span className='game-content-creator'>Luncert</span>
                            </div>
                            <div>
                                <Label shadow>v1.023</Label>
                                <Label shadow>Blocks and Parts</Label>
                            </div>
                            <Img src='https://i.ytimg.com/vi/XcNVBaniJkc/maxresdefault.jpg' borderRadius={5} shadow marginTop={5} />
                        </ListItem>
                    </List>
                </div>
                <div className='selected-game-content'>
                    <div className='content-tabs'>
                        <Tab onSelect={tabName => console.log(tabName)}>
                            <TabItem name='tools' hoverAnimation activeAnimation>
                                Tools
                            </TabItem>
                            <TabItem name='blocks' hoverAnimation activeAnimation>
                                Blocks
                            </TabItem>
                            <TabItem name='interactive' hoverAnimation activeAnimation>
                                Interactive
                            </TabItem>
                            <TabItem name='parts' hoverAnimation activeAnimation>
                                Parts
                            </TabItem>
                        </Tab>
                    </div>
                    <div className='content-viewer'>

                    </div>
                </div>
                <div className='profile-content'>

                </div>
                {
                    showModal &&
                    <CreateProfileModal />
                }
            </div>
        )
    }
}

class CreateProfileModal extends Component {

    render() {
        return (
            <Modal>
            <ModalHeader>Create game profile</ModalHeader>
            <ModalContent>
                <Line>
                    <div>Profile Name: </div>
                    <Input placeholder='Game Path' style={{width: '80%'}} centered
                        value={'asd'}
                        animationBase={{backgroundColor: 'rgb(51, 59, 111)'}}
                        focusAnimation={{backgroundColor: 'rgb(62, 71, 128)'}}
                        hoverAnimation={{backgroundColor: 'rgb(62, 71, 128)'}} />
                </Line>
            </ModalContent>
            <ModalFoot>
                <Line align='right'>
                    <Button fixSize={false} style={{width: '10%'}}
                        animationBase={{backgroundColor: 'rgb(39, 47, 97)'}}
                        focusAnimation={{backgroundColor: 'rgb(84, 95, 171)'}}
                        hoverAnimation={{backgroundColor: 'rgb(62, 71, 128)'}}
                        onClick={() => ''}>Create</Button>
                    <Button fixSize={false} style={{width: '10%'}}
                        animationBase={{backgroundColor: 'rgb(97, 39, 58)'}}
                        focusAnimation={{backgroundColor: 'rgb(189, 66, 105)'}}
                        hoverAnimation={{backgroundColor: 'rgb(150, 54, 85)'}}
                        onClick={() => ''}>Cancel</Button>
                </Line>
            </ModalFoot>
        </Modal>
        )
    }
}