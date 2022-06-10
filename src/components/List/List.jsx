import { useEffect, useState } from "react";
// import "./Table2.css"
import allPDFsList from "../Table/Table"
import { allPDFs } from "../../utilities/azure-api"


export default function Table2() {
    // const [invoiceTableInfo, setInvoiceTableInfo] = useState({});
    // const [invoiceData, setInvoiceData] = useState()
    // const [sizesState, setSizesState] = useState()
    
    // useEffect(() => {
    //     collectTableData()
    // }, [])

    // useEffect(() => {
    //     listDataSet()
    // }, [invoiceTableInfo])


    // const numbers = ['one', 'two', 'three'] 

    
    // const collectTableData = async (event) => {
        
        
    //     const allPDFshere = await allPDFs()
    //     setInvoiceTableInfo(allPDFshere)
        
    //     // console.log(invoiceTableInfo[1].blobURL)

    //     return "dog";
    //     };
 

    // const listDataSet = async (event) => {
          
    //         let sizes = invoiceTableInfo.map(car => {
    //             setSizesState(sizesState)
                
    //             return <li> <a href={car.blobURL}> {car.blobURL} </a> </li>
    //           });
    //           console.log("sizes",sizes);
    //           setSizesState(sizes)
    //         }









    
    // allPDFsHereoutside = await allPDFs()
    // console.log("allPDFshereoutside",allPDFsHereoutside)

    return (
        <div className="app-container">
            {/* <button onClick={collectTableData} >collectTableData</button>
            <button onClick={listDataSet} >listDataSet</button>
            <button onClick={console.log(invoiceTableInfo)} >seeinvoicedata</button>
             */}
            <ol>
                {/* {sizesState} */}
                {/* {numbers.map((value, index) => {
                    return <li key={index}>{value}</li>
                })} */}
            </ol>
        </div>
    )
}