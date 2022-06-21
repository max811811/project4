import { useState } from 'react';
import { post1PDF} from '../../utilities/azure-api'
import { deleteItem } from '../../utilities/azure-api'
import { useEffect } from "react";
import { Typography, Button, TextField, Box } from '@mui/material'
import { getBlobsInContainer } from "../AzureStorageBlob/AzureStorageBlob"
import uploadFileToBlob, { isStorageConfigured } from '../AzureStorageBlob/AzureStorageBlob';

const storageConfigured = isStorageConfigured();


export default function UploadForm() {

    const [uploading, setUploading] = useState(false);
    const [inputKey, setInputKey] = useState(Math.random().toString(36));
    const [fileSelected, setFileSelected] = useState(null)
    const [invoiceTableInfo2, setInvoiceTableInfo2] = useState({});
    const [values2, setValues2] = useState([1])
    const [blobsInContainer, setBlobsInContainer] = useState()
  
    
    
    useEffect(() => {
      const blobsInContainer4 = async (event) => {
        let blobsInContainer4 = await getBlobsInContainer()
        setInvoiceTableInfo2(blobsInContainer4) 
        }
      blobsInContainer4()
      }, [,blobsInContainer])



    

    useEffect(() => {
      const values = Object.values(invoiceTableInfo2)
      setValues2(values)
      console.log('values',values2)
    }, [invoiceTableInfo2])


//------------------- list above
    
      const DisplayForm = () => (
        <div>
            <Box
              component="span"
              m={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={'center'}
            >
              <TextField type="file" sx={{ height: 40 }} size='small' onChange={onFileChange} key={inputKey || ''} />
              
              <Button  variant='outlined' sx={{ height: 40 }}  onClick={onFileUpload}>
                  Upload!
              </Button>
            </ Box>
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
        setBlobsInContainer(blobsInContainer)
        setFileSelected(null);
        setUploading(false);
        setInputKey(Math.random().toString(36));
        deletePDF()
    };

    return (
        <>
        <div>
        <Typography variant='h4' padding='40px' color='primary'>Upload File To Azure Blob Storage</Typography>
        {storageConfigured && !uploading && DisplayForm()}
        {storageConfigured && uploading && <div>Uploading</div>}
        <hr />
        <div>
        <Typography variant='h4' padding='20px' color='primary'>Items In Storage</Typography>
        </div>
        {/* {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()} */}
        {!storageConfigured && <div>Storage is not configured.</div>}
      </div>
            <ol>
                {values2.map(user => 
                  <li key={user.name} >
                    <hr />
                    <a href={user.url}>{user.name}</a>
                  </li>)}
            </ol>
      </>
    );
  };
       