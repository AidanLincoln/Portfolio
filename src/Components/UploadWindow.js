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
                <label class="fileBtn">
                    <label class="fileBtnText">
                        <input class="fileInput" type="file" onChange={this.onFileChange} />
                        Choose File
                    </label>
                </label>
                
                <button class="uploadBtn" onClick={this.onFileUpload}><div class="uploadBtnText">Upload</div></button>
            </div>
        );
    } 
}