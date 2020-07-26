import * as upload from '../../api/uploaderApi';
import * as create from '../../api/creatorApi';
import S3FileUpload from 'react-s3';
import config from '../../config';
import swal from 'sweetalert';


const excelConfig = config.excelConfig;
const videoConfig = config.videoConfig;



const UploadtoS3 = async (type, typeId, name, mediaType, file) => {
    // type: type of level(e.g. course), 
    // name: name of the course(level)
    // mediaType: type of media
    //event obj
    // event.preventDefault();
    type = type.trim().toLowerCase();
    console.log("From uploader type, name, mediaType, File: ", type, name, mediaType, file);
    switch (mediaType) {
        case 'video':
            // code block
            console.log("File:", file);
            // let { File } = this.state;
            if (file) {
                await S3FileUpload.uploadFile(file, videoConfig)
                    .then(data => {
                        console.log("type:", type);
                        switch (type) {
                            case 'course':
                                // code block
                                console.log("true for course");
                                let payload = {}
                                payload.courseId = typeId;
                                payload.videoPath = data.location;
                                // payload.url = data.location;
                                upload.courseVideoUpload(payload).then(response => {
                                    console.log(response);
                                    swal({
                                        title: 'Success',
                                        text: 'File Created Successfully!',
                                        icon: 'success',
                                        timer: 900
                                    })
                                }).catch(error => {
                                    console.log(error);
                                });
                                break;
                            case 'subject':
                                // code block 
                                let payload2 = {}
                                payload2.subjectId = typeId;
                                payload2.videoPath = data.location;
                                // payload.url = data.location;
                                upload.courseSubjectUpload(payload2).then(response => {
                                    console.log(response);
                                    alert("File successfully uploaded")
                                    this.setState({ File: null })
                                }).catch(error => {
                                    console.log(error);
                                });
                                break;
                            case 'topic':
                                // code block
                                let payload3 = {}
                                payload3.topicId = typeId;
                                payload3.videoPath = data.location;
                                // payload.url = data.location;
                                upload.courseTopicUpload(payload3).then(response => {
                                    console.log(response);
                                    alert("File successfully uploaded")
                                    this.setState({ File: null })
                                }).catch(error => {
                                    console.log(error);
                                });
                                break;
                            case 'chapter':
                                // code block 
                                let payload4 = {}
                                payload4.chapterId = typeId;
                                payload4.videoPath = data.location;
                                // payload.url = data.location;
                                upload.courseChapterUpload(payload4).then(response => {
                                    console.log(response);
                                    alert("File successfully uploaded")
                                    this.setState({ File: null, courseModalOpen: false })
                                }).catch(error => {
                                    console.log(error);
                                });
                                break;
                            default:
                                console.log(" this is the Default!")
                            // code block
                        }
                    })
                    .catch(err => {
                        alert("Error : ", err)
                    })
            } else {
                alert("Please select a file")
            }
            break;
        case 'question':
            // code block
            if (file) {
                S3FileUpload.uploadFile(file, excelConfig)
                    .then(data => {
                        console.log(data);
                        let payload = {}
                        payload.chapterName = name;
                        payload.questionDesc = data.location;
                        // payload.url = data.location;
                        switch (type) {
                            case 'chapter':
                                // code block
                                upload.courseQuestionUpload(payload).then(response => {
                                    console.log(response);
                                    alert("File successfully uploaded")
                                    this.setState({ File: null })
                                }).catch(error => {
                                    console.log(error);
                                });
                                break;
                            case 'y':
                                // code block
                                break;
                            default:
                            // code block
                        }
                    })
                    .catch(err => {
                        alert("Error : ", err)
                    })
            } else {
                alert("Please select a file")
            }
            break;
        case 'test':
            if (file) {
                S3FileUpload.uploadFile(file, excelConfig)
                    .then(data => {
                        console.log("type:", type);
                        switch (type) {
                            case 'course':
                                // code block
                                console.log("true for course");
                                let payload = {}
                                payload.courseId = typeId;
                                payload.courseName = name;
                                payload.url = data.location;
                                // payload.url = data.location;
                                create.courseTestUpload(payload).then(response => {
                                    console.log(response);
                                    alert("File successfully created")
                                    this.setState({ File: null })
                                }).catch(error => {
                                    console.log(error);
                                });
                                break;
                            case 'subject':
                                // code block 
                                console.log("true for subject test!");
                                let payload2 = {}
                                payload2.subjectId = typeId;
                                payload.subjectName = name;
                                payload2.url = data.location;
                                // payload.url = data.location;
                                create.subjectTestUpload(payload2).then(response => {
                                    console.log(response);
                                    alert("File successfully uploaded")
                                    this.setState({ File: null })
                                }).catch(error => {
                                    console.log(error);
                                });
                                return true; 
                            case 'topic':
                                // code block
                                let payload3 = {}
                                payload3.topicId = typeId;
                                payload.topicName = name;
                                payload3.url = data.location;
                                // payload.url = data.location;
                                create.topicTestUpload(payload3).then(response => {
                                    console.log(response);
                                    alert("File successfully uploaded")
                                    this.setState({ File: null })
                                }).catch(error => {
                                    console.log(error);
                                });
                                break;
                            case 'chapter':
                                // code block 
                                let payload4 = {}
                                payload4.chapterId = typeId;
                                payload.chapterName = name;
                                payload4.url = data.location;
                                // payload.url = data.location;
                                create.chapterTestUpload(payload4).then(response => {
                                    console.log(response);
                                    alert("File successfully uploaded")
                                    this.setState({ File: null, courseModalOpen: false })
                                }).catch(error => {
                                    console.log(error);
                                });
                                break;
                            default:
                                console.log(" this is the Default!");
                                break;
                            // code block
                        }

                    })
                    .catch(err => {
                        alert("Error : ", err)
                    })

            } else {
                alert("Please select a file")
            }
            break;
        default:
        // code block
    }
}


export default UploadtoS3;