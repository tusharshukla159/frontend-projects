import { useRef, useState } from "react";

function FileUpload() {
  const [file, setFile] = useState();
  const progressReference = useRef();
  
  function handleUploadFile(e) {
    const file = e.target.files[0];
    setFile(URL.createObjectURL(file));
    let formData = new FormData();
    formData.append("image", file);
    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", handleProgress, false);
    xhr.open("POST", "https://v2.convertapi.com/upload");
    xhr.send(formData);
  }
  function handleProgress(event) {
    const percentage = (event.loaded / event.total) * 100;
    progressReference.current.value = Math.round(percentage);
  }
   return (
    <div className="file-upload-container" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1>File Upload with Progress Bar</h1>
      
      <input style={{marginBottom:'10px'}}
        onChange={handleUploadFile}
        type="file"
        name="file"
      />
      <label>
        File Progress:{" "}
        <progress ref={progressReference} value={"0"} max={"100"} />
      </label>
      
      <div>
      <img
        src={file}
        alt="File-upload"
        style={{ width: "300px", height: "300px", marginTop:'30px' }}
      />
    </div>
    </div>
  );
}
export default FileUpload;

// import React, { useState } from 'react'

// const Twelve = () => {
//     const [file,setFile]= useState(null);
//     const handleFileChange=(e)=>{
//         setFile(e.target.files[0]);
//     }
//   return (
//     <>
//       <input type='file' accept='image/*' onChange={handleFileChange}></input>
//       {file && <img src={URL.createObjectURL(file)} alt='uploaded' style={{objectFit: 'cover' , width: '200px', height: '300px'}} ></img>}
//     </>
//   )
// }

// export default Twelve