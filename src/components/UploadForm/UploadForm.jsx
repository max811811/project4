import { useState } from 'react';
import { post1PDF} from '../../utilities/azure-api'
import { deleteItem } from '../../utilities/azure-api'
import Table from '../Table/Table'
import Table2 from '../Table/Table2'
import List from '../List/List'
import collectTableData from '../List/List'
import { useEffect } from "react";
import { allPDFs } from "../../utilities/azure-api"


// import Path from 'path';
import uploadFileToBlob, { isStorageConfigured } from '../AzureStorageBlob/AzureStorageBlob';

const storageConfigured = isStorageConfigured();


export default function UploadForm() {

    const [uploading, setUploading] = useState(false);
    const [inputKey, setInputKey] = useState(Math.random().toString(36));
    const [fileSelected, setFileSelected] = useState(null)
    const [blobList, setBlobList] = useState(1)
    
    

    useEffect(() => {
      const collectTableData2 = async (event) => {
        
        
        const allPDFshere = await allPDFs()
        setInvoiceTableInfo(allPDFshere)
        
        // console.log(invoiceTableInfo[1].blobURL)

        return "dog";
        };
      collectTableData2()
      }, [blobList])
    
    const [invoiceTableInfo, setInvoiceTableInfo] = useState({});
    const [invoiceData, setInvoiceData] = useState()
    const [sizesState, setSizesState] = useState()
    
    useEffect(() => {
        collectTableData()
    }, [])

    useEffect(() => {
        listDataSet()
    }, [invoiceTableInfo])


    
    const collectTableData = async (event) => {
        
        
        const allPDFshere = await allPDFs()
        setInvoiceTableInfo(allPDFshere)
        
        // console.log(invoiceTableInfo[1].blobURL)

        return "dog";
        };
   
  
      const listDataSet = async (event) => {
            
              let sizes = invoiceTableInfo.map(car => {
                  setSizesState(sizesState)
                  
                  return <li> <a href={car.blobURL}> {car.blobURL} </a> </li>
                });
                console.log("sizes",sizes);
                setSizesState(sizes)
              }


    
    
//------------------- list above
    
    
    
      const DisplayForm = () => (
        
        <div>
            <input type="file" onChange={onFileChange} key={inputKey || ''} />
            <button type="submit" onClick={onFileUpload}>
                Upload!2
            </button>
        </div>
    )

    const onFileChange = (event) => {
        
        setFileSelected(event.target.files[0])
    }

    const deletePDF = async (event) => {
      const deletedItem1 = "https://fileuploaddemo119.blob.core.windows.net/tutorial-container5/Form__ADDENDUM_REGARDING_MARIJUANA_USE_AND_LANDLORD'S_COMMITMENT_TO_ENFORCEMENT_OF_CRIME_DRUG_FREE_A.pdf"
      const newPdfModelItemObject = {blobURL: deletedItem1}
      const returnedFromDelete = await deleteItem(newPdfModelItemObject)
    }


    const onFileUpload = async (event) => {
       
      setUploading(true);
        const blobsInContainer = await uploadFileToBlob(fileSelected);
        setBlobList(blobsInContainer);
        console.log("blobsincontainer2", blobsInContainer.slice(-1)[0] )
        

        const newPdfModelItem = blobsInContainer.slice(-1)[0]
        const newPdfModelItemObject = {blobURL: newPdfModelItem}

        console.log("newPdfModelItemObject", newPdfModelItemObject)
        // console.log("newPDFModelItem", newPdfModelItem)
        
        setFileSelected(null);
        setUploading(false);
        setInputKey(Math.random().toString(36));
        const returnedFromPDFModel = await post1PDF(newPdfModelItemObject)
        console.log("returnedfrompdfmodel", returnedFromPDFModel)

        deletePDF()

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
                    <button onClick={deleteItem} > Delete Item </button>
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
      
            <ol>
                {sizesState}

            </ol>
      {/* <List /> */}
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