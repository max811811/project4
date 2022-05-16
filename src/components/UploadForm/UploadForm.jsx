import { useState } from 'react';
import { post1PDF} from '../../utilities/azure-api'
// import Path from 'path';
import uploadFileToBlob, { isStorageConfigured } from '../AzureStorageBlob/AzureStorageBlob';

const storageConfigured = isStorageConfigured();

export default function UploadForm() {

    const [uploading, setUploading] = useState(false);
    const [inputKey, setInputKey] = useState(Math.random().toString(36));
    const [fileSelected, setFileSelected] = useState(null)
    const [blobList, setBlobList] = useState(1)

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




    const onFileUpload = async (event) => {
       
      setUploading(true);
        const blobsInContainer = await uploadFileToBlob(fileSelected);
        setBlobList(blobsInContainer);
        console.log("blobsincontainer2", blobsInContainer.slice(-1)[0] )
        

        const newPdfModelItem = blobsInContainer.slice(-1)[0]
        const newPdfModelItemObject = {URL: newPdfModelItem}

        console.log("newPdfModelItemObject", newPdfModelItemObject)
        // console.log("newPDFModelItem", newPdfModelItem)
        
        setFileSelected(null);
        setUploading(false);
        setInputKey(Math.random().toString(36));
        const returnedFromPDFModel = await post1PDF(newPdfModelItemObject)

    };

    return (
        <>
        <div>
        <h1>Upload file to Azure Blob Storage</h1>
        {storageConfigured && !uploading && DisplayForm()}
        {storageConfigured && uploading && <div>Uploading</div>}
        <hr />
        <div>
          <h2>Container items</h2>
          <ul>
                <li>
                  <div>
                    <br />
                    <h4> {blobList[1]} </h4> 
                  </div>
                </li>
                <li>
                  <div>
                    <br />
                    <img src={blobList[2]} ></img>
                  </div>
                </li>
          </ul>
        </div>
        {/* {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()} */}
        {!storageConfigured && <div>Storage is not configured.</div>}
      </div>
      </>
    );
  };
       




      // const DisplayImagesFromContainer = () => (
    //     <div>
    //       <h2>Container items</h2>
    //       <ul>
    //         {blobList.map((item) => {
    //           return (
    //             <li key={item}>
    //               <div>
    //                 {item}
    //                 <br />
    //                 <img src={item} alt={item} height="200" />
    //               </div>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   );