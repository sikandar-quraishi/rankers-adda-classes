import React, { Component } from 'react';
// import Draggable from 'react-draggable';
import * as packageApi from '../../api/packageApi';
import * as PopActions from '../../store/actions/uploaderActions';
import CardReader from '../../components/CardReader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import FetchId from '../../components/FetchId';
import Admin from '../../components/admin';
import swal from 'sweetalert';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '50%',
        align: 'center',
        transform: 'translate(-50%, -50%)'
    }
};

let subtitle = '';


class Package extends Component {


    constructor(props) {
        super(props);
        this.initialState = {
            modalIsOpen: false,
            selectedId: 'choose course',
            PackageName: '',
            PackageDesc: '',
            PackagePrice: '',
        }

        this.state = {
            courseList: [],
            subjects: [],
            topics: [],
            chapters: [],
            courses: [],
            allSubjects: [],
            allTopics: [],
            allChapters: [],
            excelFile: null,
            selectedCourse: "",
            selectedSubject: "",
            selectedTopic: "",
            selectedChapter: "",
            courseVideos: [],
            subjectVideos: [],
            topicVideos: [],
            chapterVideos: [],
            modalIsOpen: false,
            selectedId: 'choose course',
            PackageName: '',
            PackageDesc: '',
            PackagePrice: '',
        }
    }

    componentDidMount() {
        this.getList();
    }


    getList = () => {
        let temp = [];
        this.props.popActions.getCourses().then((resp) => {
            let rows = resp.rows ? resp.rows : [];
            rows.map((res) => {
                temp.push(res.courseName);
                console.log("array:", temp);
            })
            this.setState({
                courseList: temp,
                courses: resp.rows
            })
            console.log("Final Array:", temp);
        })
    }

    getSubjects = (name, i) => {
        let courseId = this.state.courses.filter((x) => x.courseName === name).map((x) => x.courseId);
        // this.getCourseDetails(courseId[0], 'course');
        let temp = [];
        this.props.popActions.getCourseSubjects(courseId[0]).then((resp) => {
            resp.map((res) => {
                temp.push(res.subjectName);
            })
            this.setState({
                subjects: temp,
                allSubjects: resp,
                selectedCourse: courseId[0],
                topics: [],
                chapters: [],
                selectedSubject: '',
                selectedTopic: '',
                selectedChapter: ''
            })
        })

    }

    getTopics = (name) => {
        let subjectId = this.state.allSubjects.filter((x) => x.subjectName === name).map((x) => x.Id);
        // this.getCourseDetails(subjectId[0], 'subject');
        let temp = [];
        this.props.popActions.getSubjectTopics(subjectId[0]).then((resp) => {
            resp.map((res) => {
                console.log("Map resp:", res.topicName);
                temp.push(res.topicName);
                console.log("array:", temp);
            })
            this.setState({
                topics: temp,
                allTopics: resp,
                selectedSubject: subjectId[0],
                selectedTopic: '',
                selectedChapter: '',
                chapters: []
            })
            console.log("Final Array:", temp);
        })
    }

    getChapters = (name) => {
        let topicId = this.state.allTopics.filter((x) => x.topicName === name).map((x) => x.Id);
        // this.getCourseDetails(topicId[0], 'topic');
        let temp = [];
        this.props.popActions.getTopicChapters(topicId[0]).then((resp) => {
            resp.map((res) => {
                console.log("Map resp:", res.chapterName);
                temp.push(res.chapterName);
                console.log("array:", temp);
            })
            this.setState({
                allChapters: resp,
                chapters: temp,
                selectedTopic: topicId[0]
            })
            console.log("Final Array:", temp);
        })
    }

    listChapters = (name) => {
        let chapterId = this.state.allChapters.filter((x) => x.chapterName === name).map((x) => x.chapterId);
        console.log(chapterId);
        // this.getCourseDetails(chapterId[0], 'chapter');
    }

    // getCourseDetails = (name, level) => {
    //     console.log('inside course details');
    //     switch (level) {
    //         case 'course':
    //             create.courseTestList(name).then(resp => {
    //                 console.log(resp.count);
    //                 this.setState({ courseVideos: resp });
    //             }).catch(err => {
    //                 console.log('error inside');
    //             })
    //             break;
    //         case 'subject':
    //             create.subjectTestList(name).then(resp => {
    //                 console.log(resp.count);
    //                 this.setState({ subjectVideos: resp });
    //             }).catch(err => {
    //                 console.log('error inside');
    //             })
    //             break;
    //         case 'topic':
    //             create.topicTestList(name).then(resp => {
    //                 console.log(resp.count);
    //                 this.setState({ topicVideos: resp });
    //             }).catch(err => {
    //                 console.log('error inside');
    //             })
    //             break;
    //         case 'chapter':
    //             create.chapterTestList(name).then(resp => {
    //                 console.log(resp.count);
    //                 this.setState({ chapterVideos: resp });
    //             }).catch(err => {
    //                 console.log('error inside');
    //             })
    //             break;
    //         default:
    //             console.log("No Case Match Found!");
    //     }
    // }

    setInput = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    modalIsOpen = () => {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal = () => {
        subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    submit = (value) => {
        // debugger;
        // console.log("stack",stack);
        // let control = [this.props]
        let selectedId = '';
        let control = this.props.control;
        switch (control) {
            case 'Course':
                console.log(control, "Case executed!");
                selectedId = FetchId(this.state.courses, this.props.selected, control);
                if (value === 'save') {
                    this.onSubmit('courseId', selectedId);
                }
                break;
            case 'Subject':
                console.log(control, "Case executed!");
                selectedId = FetchId(this.state.allSubjects, this.props.selected, control);
                if (value === 'save') {
                    this.onSubmit('subjectId', selectedId);
                }
                break;
            case 'Topic':
                console.log(control, "Case executed!");
                selectedId = FetchId(this.state.allTopics, this.props.selected, control);
                if (value === 'save') {
                    this.onSubmit('topicId', selectedId);
                }
                break;
            case 'Chapter':
                console.log(control, "Case executed!");
                selectedId = FetchId(this.state.allChapters, this.props.selected, control);
                if (value === 'save') {
                    this.onSubmit('chapterId', selectedId);
                }
                break;
            // case 'save':
            //     console.log(control, "Case executed!");
            //     this.closeModal();
            //     break;
            default:
                console.log("No selection case executed in Package submit()");
                break;
        }

        // selectedId = FetchId(this.state.courses, this.props.selected)
        console.log("selectedId:", selectedId)
        this.setState({ selectedId });
        this.closeModal();
    }

    onSubmit = (type, Id) => {
        let data = {}
        data.PackageName = this.state.PackageName;
        data.PackageDesc = this.state.PackageDesc;
        data.PackagePrice = this.state.PackagePrice;
        data[type] = Id;
        packageApi.coursePackageUpload(data).then((resp) => {
            console.log(resp);
            swal({
                title: 'Success',
                text: 'Package Added',
                icon: 'success',
                timer: 900
            })
        })
        const initial = this.initialState;
        this.setState({
            ...initial,
        });

    }



    render() {
        return (
            // <div className="row">
            //     <div className="col-lg-12">
            //         <div className="card">
            //             <div className="card-body">
            //                 <div className="row">
            //                     <Draggable>
            //                         {/* <div>I can now be moved around!</div> */}
            //                         <ol>
            //                             {this.state.courseList.map((item, index) => (
            //                                 <li key={index}>
            //                                     {/* {index} */}
            //                                     <a href="#">{item}</a>
            //                                 </li>
            //                             ))}
            //                         </ol>
            //                     </Draggable>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div className="page-wrapper">
                <div className="container">
                    <Admin uploader="" creator="" package="active" />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">


                                        {/* <form> */}

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label-package">Package Name</label>
                                                <input type="text" id="PackageName" className="form-control" onChange={(e) => this.setInput(e)} value={this.state.PackageName} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label-package">Package Price</label>
                                                <input type="text" id="PackagePrice" className="form-control" onChange={(e) => this.setInput(e)} value={this.state.PackagePrice} />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="label-package">Package Description</label>
                                                <input type="text" id="PackageDesc" className="form-control" onChange={(e) => this.setInput(e)} value={this.state.PackageDesc} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="label-package">Choose Offering</label>
                                                <input type="text" id="Body" className="form-control" value={this.state.selectedId} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="clearfix">&nbsp;</div>
                                                <button className="open btn btn-blue" onClick={this.modalIsOpen}> open course tree </button>
                                            </div>
                                        </div>
                                        {/* </form> */}






                                        <Modal
                                            isOpen={this.state.modalIsOpen}
                                            onAfterOpen={this.afterOpenModal}
                                            onRequestClose={this.closeModal}
                                            style={customStyles}
                                            contentLabel="Example Modal"
                                        >
                                            <h2 ref={_subtitle => (subtitle = _subtitle)}>Choose Course</h2>
                                            {/* <div>I am a modal</div> */}
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <CardReader
                                                                    package={true}
                                                                    cardList={this.state.courseList}
                                                                    cardHeading='Course'
                                                                    fetchNextLevelDetails={(name) => { this.getSubjects(name) }}
                                                                    videoList={this.state.courseVideos}
                                                                />
                                                                {this.state.selectedCourse && <CardReader
                                                                    package={true}
                                                                    cardList={this.state.subjects}
                                                                    cardHeading='Subject'
                                                                    fetchNextLevelDetails={(name) => { this.getTopics(name) }}
                                                                    videoList={this.state.subjectVideos}
                                                                />}
                                                                {this.state.selectedSubject && <CardReader
                                                                    package={true}
                                                                    cardList={this.state.topics}
                                                                    cardHeading='Topic'
                                                                    fetchNextLevelDetails={(name) => { this.getChapters(name) }}
                                                                    videoList={this.state.topicVideos}
                                                                />}
                                                                {this.state.selectedTopic && <CardReader
                                                                    package={true}
                                                                    cardList={this.state.chapters}
                                                                    cardHeading='Chapter'
                                                                    fetchNextLevelDetails={(name) => { this.listChapters(name) }}
                                                                    videoList={this.state.chapterVideos}
                                                                />}
                                                            </div>
                                                            <div>&nbsp;</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-red mr-5" onClick={this.closeModal}>close</button>
                                            <button className="btn btn-blue" onClick={() => this.submit()}>submit</button>
                                        </Modal>

                                        <button className="btn btn-blue" onClick={(value) => this.submit('save')}>submit</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {

    let isLoggedIn = state.authReducer.loggedIn;
    let selected = state.selectedLevel.currentLevel;
    let control = state.selectedLevel.currentLevelChild;
    // console.log("selected", selected);

    return {
        isLoggedIn,
        selected,
        control
    }
};

const mapDispatchToProps = dispatch => {
    return {
        popActions: bindActionCreators(PopActions, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Package);