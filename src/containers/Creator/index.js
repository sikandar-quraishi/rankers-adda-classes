import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as upload from '../../api/uploaderApi';
import * as create from '../../api/creatorApi';
import * as PopActions from '../../store/actions/uploaderActions';
import CardReader from '../../components/CardReader';
import Admin from '../../components/admin';


class Creator extends Component {

    constructor(props) {
        super(props);
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
            chapterVideos: []
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
        this.getCourseDetails(courseId[0], 'course');
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
        this.getCourseDetails(subjectId[0], 'subject');
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
        this.getCourseDetails(topicId[0], 'topic');
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
        this.getCourseDetails(chapterId[0], 'chapter');
    }

    getCourseDetails = (name, level) => {
        console.log('inside course details');
        switch (level) {
            case 'course':
                create.courseTestList(name).then(resp => {
                    console.log(resp.count);
                    this.setState({ courseVideos: resp });
                }).catch(err => {
                    console.log('error inside');
                })
                break;
            case 'subject':
                create.subjectTestList(name).then(resp => {
                    console.log(resp.count);
                    this.setState({ subjectVideos: resp });
                }).catch(err => {
                    console.log('error inside');
                })
                break;
            case 'topic':
                create.topicTestList(name).then(resp => {
                    console.log(resp.count);
                    this.setState({ topicVideos: resp });
                }).catch(err => {
                    console.log('error inside');
                })
                break;
            case 'chapter':
                create.chapterTestList(name).then(resp => {
                    console.log(resp.count);
                    this.setState({ chapterVideos: resp });
                }).catch(err => {
                    console.log('error inside');
                })
                break;
            default:
                console.log("No Case Match Found!");
        }
    }


    render() {
        return (
            <div className="page-wrapper">
                <div className="container">
                    {/* <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3 className="text-themecolor">Creator Dashboard</h3>
                        </div>
                        <div className="col-md-7 align-self-center text-right">
                            <div className="d-flex justify-content-end align-items-center">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href={null}>Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div> */}
                    <Admin uploader="" creator="active" package="" />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <CardReader
                                            package={false}
                                            creator={true}
                                            cardList={this.state.courseList}
                                            cardHeading='Course'
                                            fetchNextLevelDetails={(name) => { this.getSubjects(name) }}
                                            videoList={this.state.courseVideos}
                                        />
                                        {this.state.selectedCourse && <CardReader
                                            creator={true}
                                            cardList={this.state.subjects}
                                            cardHeading='Subject'
                                            fetchNextLevelDetails={(name) => { this.getTopics(name) }}
                                            videoList={this.state.subjectVideos}
                                        />}
                                        {this.state.selectedSubject && <CardReader
                                            creator={true}
                                            cardList={this.state.topics}
                                            cardHeading='Topic'
                                            fetchNextLevelDetails={(name) => { this.getChapters(name) }}
                                            videoList={this.state.topicVideos}
                                        />}
                                        {this.state.selectedTopic && <CardReader
                                            creator={true}
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
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
        popActions: bindActionCreators(PopActions, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Creator);
