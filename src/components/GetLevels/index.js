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