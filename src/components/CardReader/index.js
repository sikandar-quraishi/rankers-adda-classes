/* eslint-disable react/jsx-no-undef */
import React, { Component, Fragment } from 'react'
import CustomModal from '../CustomModal';
import DisplayModal from '../DisplayModal';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import swal from 'sweetalert';



class CardReader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardHeading: props.cardHeading,
            cardList: props.cardList,
            selectedCard: '',
            input: '',
            activeIndex: -1,
            modalValue: '',
            modalType: '',
            videoModal: props.videoList,
            openModal: ''
        }
    }

    setInput = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    uploadExcelToS3 = (course, type, file) => {
        console.log("from CardReader => course:", course, "type:", type, "file:", file);
        this.props.uploadExcelToS3(course, type, file);
    }

    addCard = () => {
        if (this.state.input) {
            this.props.addCard(this.state.input);
        }
        else {
            swal({
                title: 'Error',
                text: 'please type something!',
                icon: 'error',
                dangerMode: true,
                timer: 1200
            })
        }
    }

    fetchNextLevelCards = (name, i) => {
        this.setState({
            activeIndex: i,
            selectedCard: name
        }, () => { this.props.fetchNextLevelDetails(name) })
        this.props.setCurrentLevel(name);
        this.props.setCurrentLevelChild(this.state.cardHeading);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.cardList !== state.cardList) {
            return {
                cardList: props.cardList,
                input: '',
                selectedCard: '',
                activeIndex: -1

            };
        }
        return null;
    }

    openModal = (modalValue, modalType) => {
        this.setState({
            modalValue,
            modalType
        })
    }

    videoListModal = (name) => {
        // console.log("Button pressed, video list:",this.props.videoList)
        this.setState({
            openModal: name
        })
    }


    resetModal = () => {
        this.setState({
            modalValue: '',
            modalType: '',
            openModal: false
        })
    }

    componentDidMount() {
        console.log("component loaded from CardReader componentDidMount:", this.props.videoList.rows);
    }

    render() {
        return (
            <div className="col-lg-3">
                <h4>{this.state.cardHeading} {this.state.selectedCard}</h4>
                <div className="card-home shadow-lg">
                    <If condition={!(this.props.creator || this.props.package)}>
                        <div className="card-header-home">
                            <div className="row">
                                <div className="col-md-7">
                                    <input type="text" id="input" className="form-control" onChange={(e) => this.setInput(e)} value={this.state.input} />
                                </div>
                                <div className="col-md-3 nopadding" >
                                    <button className="btn btn-info"
                                        onClick={() => this.addCard()}><span className="font-14">Add</span> </button>
                                </div>
                            </div>
                        </div>
                    </If>
                    <div className="card-body-home">
                        <ul className="list-home-row">
                            {this.state.cardList.map((name, index) => {
                                return (
                                    <Fragment key={index}>
                                        <li>
                                            <span className={((index === this.state.activeIndex) ? "btn btn-info" : "btn btn-outline-secondary")} onClick={() => this.fetchNextLevelCards(name, index)}>{name}</span>
                                            {/* Setting up side Icons in here  */}
                                            <If condition={index === this.state.activeIndex}>
                                                {/* package page Icons */}
                                                <If condition={this.props.package}>
                                                    <div className="topic-icon">
                                                        {/* <span title="Expand"><i className="fa fa-expand" onClick={() => this.openModal(name, "file")} aria-hidden="true"></i></span> */}
                                                    </div>
                                                </If>
                                                {/* creator and uploader page side icons  */}
                                                <If condition={!this.props.package}>
                                                    {/* {console.log("Majour else part")} */}
                                                    <Choose>
                                                        <When condition={!this.props.creator}>
                                                            {/* uploader side icons  */}
                                                            <div className="topic-icon">
                                                                <span title="Add Video"><i className="fa fa-video-camera" onClick={() => this.openModal(name, "video")} aria-hidden="true"></i></span>
                                                                <span title="Add Image"><i className="fa fa-file-image-o" onClick={() => this.openModal(name, "image")} aria-hidden="true"></i></span>
                                                                <If condition={this.props.chapter}>
                                                                    <span title="Add Question"><i className="fa fa-question" onClick={() => this.openModal(name, "file")} aria-hidden="true"></i></span>
                                                                </If>
                                                                <CustomModal modalValue={this.state.modalValue}
                                                                    currentLevel={this.state.cardHeading}
                                                                    modalType={this.state.modalType}
                                                                    uploadExcelToS3={(a, b, c) => this.uploadExcelToS3(a, b, c)}
                                                                    resetModal={this.resetModal} />
                                                            </div>
                                                        </When>
                                                        <When condition={this.props.creator}>
                                                            {/* creator side icons  */}
                                                            <div className="topic-icon">
                                                                <span title="Add Question"><i className="fa fa-question" onClick={() => this.openModal(name, "file")} aria-hidden="true"></i></span>
                                                                <CustomModal modalValue={this.state.modalValue}
                                                                    currentLevel={this.state.cardHeading}
                                                                    modalType={this.state.modalType}
                                                                    uploadExcelToS3={(a, b, c) => this.uploadExcelToS3(a, b, c)}
                                                                    test={true}
                                                                    resetModal={this.resetModal} />
                                                            </div>
                                                        </When>
                                                    </Choose>
                                                </If>
                                                {/* <div className="topic-icon">
                                                    <span title="Add Video"><i className="fa fa-video-camera" onClick={() => this.openModal(name, "video")} aria-hidden="true"></i></span>
                                                    <span title="Add Image"><i className="fa fa-file-image-o"
                                                        onClick={() => this.openModal(name, "image")} aria-hidden="true"></i></span>
                                                    <span title="Add Question"><i className="fa fa-question" onClick={() => this.openModal(name, "file")} aria-hidden="true"></i></span>
                                                    <CustomModal modalValue={this.state.modalValue}
                                                        modalType={this.state.modalType}
                                                        uploadExcelToS3={(a, b, c) => this.uploadExcelToS3(a, b, c)}
                                                        resetModal={this.resetModal} />
                                                </div> */}
                                                {/* list Icons goes here */}
                                                <If condition={this.props.package}>
                                                    {/* <span title="Expand"><i className="fa fa-expand" onClick={() => this.openModal(name, "file")} aria-hidden="true"></i></span> */}
                                                </If>
                                                <If condition={!this.props.package}>
                                                    <Choose>
                                                        <When condition={!this.props.creator}>
                                                            <div className="topic-uploads">
                                                                <span onClick={() => this.videoListModal(name)}>
                                                                    <i className="fa fa-video-camera" aria-hidden="true"></i>
                                                                    <br />{this.props.videoList.count}
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-file-image-o" aria-hidden="true"></i>
                                                                    <br /> 0</span>
                                                                <DisplayModal activity={this.state.openModal} videoList={this.props.videoList.rows}
                                                                    resetModal={this.resetModal} />
                                                            </div>
                                                        </When>
                                                        <When condition={this.props.creator}>
                                                            <div className="topic-uploads">
                                                                <span onClick={() => this.videoListModal(name)}>
                                                                    <i className="fa fa-question" aria-hidden="true"></i>
                                                                    <br /> {this.props.videoList.count}</span>
                                                                <DisplayModal activity={this.state.openModal} testList={this.props.videoList.rows}
                                                                    resetModal={this.resetModal} />
                                                            </div>

                                                        </When>
                                                    </Choose>

                                                </If>
                                            </If>
                                        </li>
                                    </Fragment>
                                );
                            })}

                        </ul>
                    </div>

                </div>
            </div>
        )
    }

}


const mapStateToProps = state => {
    return {
        //   currentQuestion: state.questionReducer.currentQuestion
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentLevel: (payload) => dispatch({ type: actionTypes.SET_CURRENT_LEVEL, payload: payload }),
        setCurrentLevelChild: (payload) => dispatch({ type: actionTypes.SET_CURRENT_LEVEL_CHILD, payload: payload }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardReader);