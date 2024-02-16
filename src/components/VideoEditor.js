// src/components/VideoEditor.js

import { createFFmpeg } from "@ffmpeg/ffmpeg"
import { useEffect, useState } from "react"
import { Slider, Spin } from "antd"
import VideoPlayer  from "./VideoPlayer"
import { sliderValueToVideoTime } from "../utils/utils"
import { Button, Upload, message } from 'antd';
import VideoUpload from "./VideoUpload"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card } from 'antd';

const ffmpeg = createFFmpeg({ log: true })

function VideoEditor() {
	const [ffmpegLoaded, setFFmpegLoaded] = useState(false)
    const [videoFile, setVideoFile] = useState()

	useEffect(() => {
		// loading ffmpeg on startup
		ffmpeg.load().then(() => {
			setFFmpegLoaded(true)
		})
	}, [])
  
    
	

	return (
		<div className={"bg"}>
             <div className={"upload-div"}>
                    {!videoFile?<VideoUpload
                        disabled={!!videoFile}
                        onChange={(videoFile) => {
                            setVideoFile(videoFile)
                        }}
                        onRemove={() => {
                            setVideoFile(undefined)
                        }}
                    />:<>
                        <VideoPlayer videoFile={videoFile} />
                    </>}
                </div>
		</div>
	)
}

export default VideoEditor;
