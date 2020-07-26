import React from 'react';

export default function LevelDetail (props) {

    const getCourseDetails = (name, level) => {
        console.log('inside course details');
        switch(level){
            case 'course':
                upload.getCourseVideoList(name).then(resp => {
                    console.log(resp.count);
                    this.setState({ courseVideos : resp});
                }).catch(err => {
                    console.log('error inside');
                })
                break;
            case 'subject':
                upload.getSubjectVideoList(name).then(resp => {
                    console.log(resp.count);
                    this.setState({ subjectVideos : resp});
                }).catch(err => {
                    console.log('error inside');
                })
                break;
            case 'topic':
                upload.getTopicVideoList(name).then(resp => {
                    console.log(resp.count);
                    this.setState({ topicVideos : resp});
                }).catch(err => {
                    console.log('error inside');
                })
                break;
            case 'chapter':
                upload.getChapterVideoList(name).then(resp => {
                    console.log(resp.count);
                    this.setState({ chapterVideos : resp});
                }).catch(err => {
                    console.log('error inside');
                })
                break;
            default :
                console.log("No Case Match Found!");
        }
    }

    return (
        <div>
            
        </div>
    );
};