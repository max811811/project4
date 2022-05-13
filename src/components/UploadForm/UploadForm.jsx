import { useState } from 'react';
// import Path from 'path';
import uploadFileToBlob, { isStorageConfigured } from '../AzureStorageBlob/AzureStorageBlob';

const storageConfigured = isStorageConfigured();

export default function UploadForm() {

    const [uploading, setUploading] = useState(false);
    const [inputKey, setInputKey] = useState(Math.random().toString(36));
    const [fileSelected, setFileSelected] = useState(null)
    const [blobList, setBlobList] = useState()

    const DisplayForm = () => (
        <div>
            <input type="file" onChange={onFileChange} key={inputKey || ''} />
            <button type="submit" onClick={onFileUpload}>
                Upload!
            </button>
        </div>
    )

    const onFileChange = (event) => {
        setFileSelected(event.target.files[0])
    }


    // const DisplayImagesFromContainer = () => (
    //     <div>
    //       <h2>Container items</h2>
    //       <ul>
    //         {blobList.map((item) => {
    //           return (
    //             <li key={item}>
    //               <div>
    //                 {Path.basename(item)}
    //                 <br />
    //                 <img src={item} alt={item} height="200" />
    //               </div>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   );

    const onFileUpload = async () => {
        setUploading(true);
        const blobsInContainer = await uploadFileToBlob(fileSelected);
        console.log(blobList)
        setBlobList(blobsInContainer);
        console.log(blobList)
        setFileSelected(null);
        setUploading(false);
        setInputKey(Math.random().toString(36));

    };

    return (
        <>
        <div>
        <h1>Upload file to Azure Blob Storage</h1>
        {storageConfigured && !uploading && DisplayForm()}
        {storageConfigured && uploading && <div>Uploading</div>}
        <hr />
        {/* <img src={blobList[4]} ></img> */}
        {/* {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()} */}
        {!storageConfigured && <div>Storage is not configured.</div>}
      </div>
      </>
    );
  };
       