const UploadedPDFs = require('../../models/uploadedPDFs');





module.exports = {
  newPDFModelItem,
  deleteItem,
  allPDFs,
}

async function allPDFs(req, res) {
  try {
    console.log("hit controllerallpdfs")
    const allPDFsList = await UploadedPDFs.find();
    
    res.json(allPDFsList);
  } catch (err) {
    res.status(400).json(err);
  }
}


  
async function newPDFModelItem(req, res) {
    
    try {
      console.log("req.body", req.body.blobURL)
      const uploadedPDFSRes = await UploadedPDFs.create(req.body);
      
      res.json(uploadedPDFSRes);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  

  async function deleteItem(req, res) {
    
    try {
      
      const uploadedPDFSRes = await UploadedPDFs.deleteOne({ _id: "6287e9c85e58e2c15630541f" });
      
      res.json(uploadedPDFSRes);
    } catch (err) {
      res.status(400).json(err);
    }
  }




/*-- Helper Functions --*/






