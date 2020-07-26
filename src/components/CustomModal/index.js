/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react'
import Modal from 'react-modal';
import uploadExcelToS3 from "../UploadtoS3";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

class CustomModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            modalValue: props.modalValue,
            modalType: props.modalType,
            currentLevel: props.currentLevel,
            acceptFileType: '',
            header: '',
            test: '',
            file: []
        }

    }

    afterOpenModal = () => {

    }

    onClickHandler = (file) => {
        console.log("From onClickHandler")
        uploadExcelToS3(this.state.currentLevel, this.props.courseId, this.state.modalValue, this.props.test ? 'test' : this.state.modalType , file);
    }

    handleFileChange = e => {
        e.preventDefault();
        let file = e.target.files[0];

        console.log("files:", e.target.files);
        this.setState({ file })
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
            modalValue: '',
            modalType: ''
        })
        this.props.resetModal();
    }

    modalProperties = (properties) => {
        let modalValue = properties.modalValue;
        let modalType = properties.modalType;
        let test = properties.test ? "Put Test file for " + modalValue : "";
        let isModalOpen = properties.modalValue ? true : false;
        let acceptFileType = "";
        let header = "";

        switch (modalType) {
            case "video":
                acceptFileType = "video/*";
                header = "Put Video file for " + modalValue;
                break;
            case "file":
                acceptFileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                header = "Put Question file for " + modalValue;
                break;
            case "image":
                acceptFileType = "image/*";
                header = "Upload image file for " + modalValue;
                break;
            default:
                acceptFileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                console.log('no case is executed!');
                break;
        }
        this.setState({
            modalValue,
            modalType,
            isModalOpen,
            acceptFileType,
            header,
            test
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.modalProperties(nextProps);
        }
    }

    render() {
        return (
            <Modal
                isOpen={this.state.isModalOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <If condition={this.props.test}>
                    <h2 className="m-b-30"> {this.state.test} </h2>
                </If>
                <If condition={!this.props.test}>
                    <h2 className="m-b-30"> {this.state.header} </h2>
                </If>

                <div>
                    <input type="file" className="form-control upload-form" accept={this.state.acceptFileType} onChange={this.handleFileChange} />

                    <div className="m-t-20">
                        <button className="btn btn-info m-r-10" onClick={(e) => this.onClickHandler(this.state.file)}>Post</button>
                        <button className="btn btn-secondary" onClick={this.closeModal}>Close</button>
                    </div>
                </div>

            </Modal>
        )
    }


}

const mapStateToProps = (state, ownProps) => {
    let name = ownProps.modalValue;
    let level = ownProps.currentLevel.toLowerCase();
    let courseId = '';
    console.log("ownProps:", ownProps);
    switch (level) {
        case 'course':
            courseId = ownProps.modalValue ? state.uploadReducer.courses.filter((x) => x.courseName === name).map((x) => x.courseId) : '';
            courseId = courseId[0];
            break;
        case 'subject':
            courseId = ownProps.modalValue ? state.uploadReducer.subjects.filter((x) => x.subjectName === name).map((x) => x.Id) : '';
            courseId = courseId[0];
            break;
        case 'topic':
            courseId = ownProps.modalValue ? state.uploadReducer.topics.filter((x) => x.topicName === name).map((x) => x.Id) : '';
            courseId = courseId[0];
            break;
        case 'chapter':
            courseId = ownProps.modalValue ? state.uploadReducer.chapters.filter((x) => x.chapterName === name).map((x) => x.chapterId) : '';
            courseId = courseId[0];
            break;
        default:
            console.log('no case is executed!');
            break;
    }
    return {
        courseId
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);