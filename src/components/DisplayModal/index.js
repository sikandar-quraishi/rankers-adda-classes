/* eslint-disable react/jsx-no-undef */
import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class DisplayModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            list: props.videoList,
            testList: props.testList,
            name: '',
            control: '',
            play: false
        }
    }

    afterOpenModal = () => {

    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    modalProperties = (properties) => {
        // console.log("Properties:", properties);
        console.log(properties.activity);
        let isModalOpen = properties.activity ? true : false;
        // let isModalOpen = this.props.openModal ? true : false;
        // let isModalOpen = properties.activity
        this.setState({
            isModalOpen,
            name: properties.activity
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
        this.props.resetModal();
        console.log("Cloase!")
    }

    play = (index) => {
        if (this.state.control !== '') {
            // console.log("not null case:", this.state.control)
            this.setState({ control: '', play: false })
        }
        else {
            this.setState({ control: index, play: true })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.modalProperties(nextProps);
        }
    }

    render() {
        // debugger;
        console.log("from DisplayModal videoList:", this.props.videoList);
        console.log("from DisplayModal testList:", this.props.testList);
        return (
            <Modal
                isOpen={this.state.isModalOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <If condition={this.props.videoList}>
                    <h2 className="m-b-30"> Video list for {this.state.name} </h2>
                </If>
                <If condition={this.props.testList}>
                    <h2 className="m-b-30"> Test list for {this.state.name} </h2>
                </If>

                <ul className="list-home-row">
                    {/* this is for Uploader Case */}
                    <If condition={this.props.videoList}>

                        {this.props.videoList.map((name, index) => {
                            console.log(name);
                            return (
                                <li key={index}>
                                    <div style={{ width: '100%' }}><span onClick={() => this.play(index)}><ReactPlayer url={name.videoPath} playing={this.state.control === index ? this.state.play : false} /></span></div>
                                </li>
                            );
                        })}
                    </If>
                    {/* this is for Creator Case */}
                    <If condition={this.props.testList}>
                        {this.props.testList.map((name, index) => {
                            console.log(name);
                            return (
                                <Fragment key={index}>
                                    <li>
                                        <span className="btn btn-outline-secondary" onClick={this.play}>{name.Testlink}</span>
                                    </li>
                                </Fragment>
                            );
                        })}
                    </If>
                </ul>
                <div className="m-t-20">
                    <button className="btn-dark" onClick={this.closeModal}>Close</button>
                </div>
            </Modal>
        )
    }

}

export default DisplayModal;