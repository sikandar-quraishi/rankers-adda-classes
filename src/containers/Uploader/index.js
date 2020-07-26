import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import swal from 'sweetalert';
import * as upload from '../../api/uploaderApi';
import * as PopActions from '../../store/actions/uploaderActions';
import CardReader from '../../components/CardReader';
// import FetchId from '../../components/FetchId';
import Admin from '../../components/admin';


class Uploader extends Component {

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
                //name of the courses in an array
                // console.log("array:", temp);
            })
            this.setState({
                courseList: temp,
                courses: resp.rows
            })
            // console.log("Final Array:", temp);
            // orignal course response object stored in courses 
            // final array with just the course names stored in courseList state
        })
    }

    createCourse = (input) => {
        let data = {}
        data.courseName = input;
        upload.courseupload(data).then((resp) => {
            console.log(resp);
            this.setState({
                courseList: this.state.courseList.concat(input)
            })
            swal({
                title: 'Success',
                text: 'Course Added',
                icon: 'success',
                timer: 900
            }).then(
                this.getList()
                //to refresh the course list after the newly created course
            )
        }).catch((err) => {
            console.log('error occured');
        })
        this.setState({ input: "" })
    }

    createSubjects = (input) => {
        let data = {}
        data.courseId = this.state.selectedCourse;
        data.subjectName = input;
        upload.subjectUpload(data).then((resp) => {
            console.log('this.state.selectedCourse', this.state.selectedCourse);
            this.setState({
                subjects: this.state.subjects.concat(input)
            })
            swal({
                title: 'Success',
                text: 'Subject Added',
                icon: 'success',
                timer: 900
            }).then(
                this.getSubjects(-1, resp.courseCourseId)
            )
        }).catch((err) => {
            console.log('error occured');
        })
    }

    getCourseDetails = (name, level) => {
        console.log('inside course details');
        switch (level) {
            case 'course':
                upload.getCourseVideoList(name).then(resp => {
                    console.log(resp.count);
                    this.setState({ courseVideos: resp });
                }).catch(err => {
                    console.log('error inside');
                })
                break;
            case 'subject':
                upload.getSubjectVideoList(name).then(resp => {
                    console.log(resp.count);
                    this.setState({ subjectVideos: resp });
                }).catch(err => {
                    console.log('error inside');
                })
                break;
            case 'topic':
                upload.getTopicVideoList(name).then(resp => {
                    console.log(resp.count);
                    this.setState({ topicVideos: resp });
                }).catch(err => {
                    console.log('error inside');
                })
                break;
            case 'chapter':
                upload.getChapterVideoList(name).then(resp => {
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

    getSubjects = (name, i) => {
        let courseId = name ? this.state.courses.filter((x) => x.courseName === name).map((x) => x.courseId) : i;
        let Id = i ? i : courseId[0];
        this.getCourseDetails(Id, 'course');
        let temp = [];
        this.props.popActions.getCourseSubjects(Id).then((resp) => {
            resp.map((res) => {
                temp.push(res.subjectName);
            })
            this.setState({
                subjects: temp,
                allSubjects: resp,
                selectedCourse: Id,
                topics: [],
                chapters: [],
                selectedSubject: '',
                selectedTopic: '',
                selectedChapter: ''
            })
        })

    }

    createTopic = (input) => {
        let data = {}
        data.subjectId = this.state.selectedSubject;
        data.topicName = input;
        upload.topicUpload(data).then((resp) => {
            this.setState({
                topics: this.state.topics.concat(input)
            })
            swal({
                title: 'Success',
                text: 'Topic Added',
                icon: 'success',
                timer: 900
            }).then(
                this.getTopics(-1, resp.subjectId)
            )
        })
    }

    getTopics = (name, id) => {
        let subjectId = name ? this.state.allSubjects.filter((x) => x.subjectName === name).map((x) => x.Id) : id;
        let Id = id ? id : subjectId[0];
        this.getCourseDetails(Id, 'subject');
        let temp = [];
        this.props.popActions.getSubjectTopics(Id).then((resp) => {
            resp.map((res) => {
                console.log("Map resp:", res.topicName);
                temp.push(res.topicName);
                console.log("array:", temp);
            })
            this.setState({
                topics: temp,
                allTopics: resp,
                selectedSubject: Id,
                selectedTopic: '',
                selectedChapter: '',
                chapters: []
            })
            console.log("Final Array:", temp);
        })
    }

    createChapter = (input) => {
        let data = {}
        data.topicId = this.state.selectedTopic;
        data.chapterName = input;
        upload.chapterUpload(data).then((resp) => {
            console.log(resp);
            this.setState({
                chapters: this.state.chapters.concat(input)
            })
            swal({
                title: 'Success',
                text: 'Chapter Added',
                icon: 'success',
                timer: 900
            }).then(
                this.getChapters(-1, resp.topicId)
            )
        })
    }

    getChapters = (name, id) => {
        let topicId = name ? this.state.allTopics.filter((x) => x.topicName === name).map((x) => x.Id) : id;
        let Id = id ? id : topicId[0];
        this.getCourseDetails(Id, 'topic');
        let temp = [];
        this.props.popActions.getTopicChapters(Id).then((resp) => {
            resp.map((res) => {
                console.log("Map resp:", res.chapterName);
                temp.push(res.chapterName);
                console.log("array:", temp);
            })
            this.setState({
                allChapters: resp,
                chapters: temp,
                selectedTopic: Id
            })
            console.log("Final Array:", temp);
        })
    }

    listChapters = (name) => {
        let chapterId = this.state.allChapters.filter((x) => x.chapterName === name).map((x) => x.chapterId);
        console.log(chapterId);
        this.getCourseDetails(chapterId[0], 'chapter');
    }

    handleFileChange = e => {
        e.preventDefault();
        console.log(e.target.files[0]);
        this.setState({ File: e.target.files[0] })
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="container">
                    <Admin uploader="active" creator="" package="" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <CardReader addCard={(e) => this.createCourse(e)}
                                            cardList={this.state.courseList}
                                            cardHeading='Course'
                                            fetchNextLevelDetails={(name) => { this.getSubjects(name) }}
                                            videoList={this.state.courseVideos}
                                        />
                                        {this.state.selectedCourse && <CardReader addCard={(e) => this.createSubjects(e)}
                                            cardList={this.state.subjects}
                                            cardHeading='Subject'
                                            fetchNextLevelDetails={(name) => { this.getTopics(name) }}
                                            videoList={this.state.subjectVideos}
                                        />}
                                        {this.state.selectedSubject && <CardReader addCard={(e) => this.createTopic(e)}
                                            cardList={this.state.topics}
                                            cardHeading='Topic'
                                            fetchNextLevelDetails={(name) => { this.getChapters(name) }}
                                            videoList={this.state.topicVideos}
                                        />}
                                        {this.state.selectedTopic && <CardReader addCard={(e) => this.createChapter(e)}
                                            cardList={this.state.chapters}
                                            cardHeading='Chapter'
                                            fetchNextLevelDetails={(name) => { this.listChapters(name) }}
                                            chapter={true}
                                            videoList={this.state.chapterVideos}
                                        />}
                                    </div>
                                    <div>&nbsp;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);