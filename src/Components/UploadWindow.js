import React from 'react';
// import axios, { post } from 'axios';

export default class UploadWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            uploadedFile: null
        }
    }
    onFileChange = (event) => {
        this.setState({ uploadedFile: event.target.files[0] });
    };

    onFileUpload = () => {
        const formData = new FormData();
    
        formData.append(
          "myFile",
          this.state.uploadedFile,
          this.state.uploadedFile.name
        );
      
        console.log(this.state.uploadedFile);
      
        //post formdata to backend
        // axios.post("api/uploadfile", formData);
    };

    render() {
        return (
            <div class="upload">
                <label class="btn">
                    <input class="fileInput" type="file" onChange={this.onFileChange} />
                    Choose File
                </label>
                
                <button class="btn" onClick={this.onFileUpload}>Upload</button>
            </div>
        );
    } 
}