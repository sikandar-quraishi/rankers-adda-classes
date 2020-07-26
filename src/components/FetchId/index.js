export default function FetchId(Slack, name, value) {
    console.log("Fetching Array Slack:", Slack);
    console.log("selection:", name);
    switch (value) {
        case 'Course':
            var courseId = name ? Slack.filter((x) => x.courseName === name).map((x) => x.courseId) : '';
            var Id = courseId[0];
            console.log("courseId:", Id);
            break;
        case 'Subject':
            courseId = name ? Slack.filter((x) => x.subjectName === name).map((x) => x.Id) : '';
            Id = courseId[0];
            console.log("SubjectId:", Id);
            break;
        case 'Topic':
            courseId = name ? Slack.filter((x) => x.topicName === name).map((x) => x.Id) : '';
            Id = courseId[0];
            console.log("TopicId:", Id);
            break;
        case 'Chapter':
            courseId = name ? Slack.filter((x) => x.chapterName === name).map((x) => x.chapterId) : '';
            Id = courseId[0];
            console.log("chapter:", Id);
            break;
        default:
            break;
    }
    return Id;
}
