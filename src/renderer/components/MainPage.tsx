import React, { Component } from 'react';
import Button from './base/Button';
import Input from './base/Input';
import Line from './base/Line';
import { Modal, ModalContent, ModalFoot, ModalHeader } from './base/Modal';
import Sidebar, { SidebarItem } from './base/Sidebar';
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
                        animation={{
                            base: {backgroundColor: 'rgb(51, 59, 111)'},
                            focus: {backgroundColor: 'rgb(62, 71, 128)'},
                            hover: {backgroundColor: 'rgb(62, 71, 128)'}}}/>
                </Line>
            </ModalContent>
            <ModalFoot>
                <Line align='right'>
                    <Button fixSize={false} style={{width: '10%'}}
                        animation={{
                            base: {backgroundColor: 'rgb(39, 47, 97)'},
                            active: {backgroundColor: 'rgb(84, 95, 171)'},
                            hover: {backgroundColor: 'rgb(62, 71, 128)'}}}
                        onClick={() => ''}>Create</Button>
                    <Button fixSize={false} style={{width: '10%'}}
                        animation={{
                            base: {backgroundColor: 'rgb(97, 39, 58)'},
                            active: {backgroundColor: 'rgb(189, 66, 105)'},
                            hover: {backgroundColor: 'rgb(150, 54, 85)'}}}
                        onClick={() => ''}>Cancel</Button>
                </Line>
            </ModalFoot>
        </Modal>
        )
    }
}