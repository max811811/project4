
import { BlobServiceClient, ContainerClient, listBlobsFlat} from '@azure/storage-blob';



export const containerName = `tutorial-container6`;
let sasToken = process.env.REACT_APP_STORAGESASTOKEN;
const storageAccountName = process.env.REACT_APP_STORAGERESOURCENAME; 
// </snippet_package>
if (sasToken[1] === '?'){
  sasToken=sasToken.substring(3)
}

// <snippet_isStorageConfigured>
// Feature flag - disable storage feature to app if not configured
export const isStorageConfigured = () => {
  return (!storageAccountName || !sasToken) ? false : true;
}
// </snippet_isStorageConfigured>

// <snippet_getBlobsInContainer>
// return list of blobs in container to display
export const getBlobsInContainer = async (containerClient, file) => {
  const returnedBlobUrls = {};
  
  const blobService2 = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );
  
  
  let containerClient2 = blobService2.getContainerClient(containerName);
  await containerClient2.createIfNotExists({
    access: 'container',
  });

  
  // get list of blobs in container
  // eslint-disable-next-line
  
  for await (const blob of containerClient2.listBlobsFlat()) {
    // if image is public, just construct URL
    

    let cat = {
      name: blob.name,
      createdDate: blob.properties.createdOn,
      url: `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    }
    


    
    returnedBlobUrls[blob.name] = cat
    
  }

  return returnedBlobUrls;
}
// </snippet_getBlobsInContainer>

// <snippet_createBlobInContainer>
const createBlobInContainer = async (containerClient, file) => {
  
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  // upload file
  await blobClient.uploadData(file, options);
}
// </snippet_createBlobInContainer>

// <snippet_uploadFileToBlob>
const uploadFileToBlob = async (file) => {
  if (!file) return [];

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );
  





  // get Container - full public read access
  const containerClient = blobService.getContainerClient(containerName);
  await containerClient.createIfNotExists({
    access: 'container',
  });

  // upload file
  await createBlobInContainer(containerClient, file);

  // get list of blobs in container
  return getBlobsInContainer(containerClient);
};
// </snippet_uploadFileToBlob>

export default uploadFileToBlob;

