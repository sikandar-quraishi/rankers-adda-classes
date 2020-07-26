import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardReader from '../../components/CardReader';
import * as PopActions from '../../store/actions/uploaderActions';
import * as OrderActions from '../../store/actions/mediaActions';
import { toUpper } from 'lodash';


class orderList extends Component {

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
        this.getLevelMedia(courseId[0]);
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

    componentDidMount() {
        // if(this.state.selectedCourse){
        //     this.getLevelMedia(this.state.selectedCourse);
        // }
        this.getList();
    }

    getLevelMedia = (Id) => {
        console.log("Id", Id);
        this.props.orderAction.getMedia(Id).then((resp) => {
            console.log("getLevelMedia", resp);
        })
    }

    render() {
        return (
            <Fragment>

                <div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="label-package">{toUpper(this.props.selected) + ' ' + this.props.selectedLevel}   Media List&nbsp;</label>
                            {/* <input type="text" id="PackageName" className="form-control" /> */}
                            <button className="open btn btn-blue"> GET MEDIA </button>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="form-group">
                            <label className="label-package">Package Price</label>
                            <input type="text" id="PackagePrice" className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="label-package">Package Description</label>
                            <input type="text" id="PackageDesc" className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="label-package">Choose Offering</label>
                            <input type="text" id="Body" className="form-control" value={this.state.selectedId} />
                        </div>
                    </div> */}

                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="clearfix">&nbsp;</div>
                            <button className="open btn btn-blue" onClick={this.modalIsOpen}> SAVE </button>
                        </div>
                    </div>
                </div>
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
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    let selected = state.selectedLevel.currentLevel;
    let selectedLevel = state.selectedLevel.currentLevelChild;

    return {
        selected,
        selectedLevel
    }
};

const mapDispatchToProps = dispatch => {
    return {
        popActions: bindActionCreators(PopActions, dispatch),
        orderAction: bindActionCreators(OrderActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(orderList);
