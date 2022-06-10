import { useState } from "react";
import "./Table2.css"
import data from "./Mock-Data"
import allPDFsList from "./Table"
import { allPDFs } from "../../utilities/azure-api"


export default function Table2() {
    const [invoiceTableInfo, setInvoiceTableInfo] = useState({});
    const [invoiceData, setInvoiceData] = useState()

    
    // const handleDeleteClick = (contactsId) => {
    //     const newContacts = [...contacts];

    //     const index = contacts.findIndex((contact) => contact.id === contactsId)

    //     newContacts.splice(index, 1)
    //     setContacts(newContacts)
    // }

    const handleDeleteClick = async (event) => {
        
        console.log("handledeleteclick")
        return("cat")
    }   

    const collectTableData = async (event) => {
        
        
        const allPDFshere = await allPDFs()
        setInvoiceTableInfo(allPDFshere)
        console.log(typeof(invoiceTableInfo))
        // console.log("allPDFshere",allPDFshere)
        return(allPDFshere)
    }
    
    // allPDFsHereoutside = await allPDFs()
    // console.log("allPDFshereoutside",allPDFsHereoutside)

    return (
        <div className="app-container">
            <button onClick={collectTableData} >collectTableData</button>
            <button onClick={console.log(invoiceTableInfo)} >seeinvoicedata</button>
            {collectTableData}
            <table >
                <thead>
                    <tr>
                        <th>name</th>
                        <th>url</th>
                        <th>date</th>
                        <th>delete</th>
                    </tr>        
                </thead>
                <tbody>
                    {/* cat
                    {invoiceTableInfo} */}
 

                    {/* {invoiceTableInfo.map(person => 
                        <tr>
                            <td>
                                "cat"
                            </td>
                        </tr>
                        
                    )} */}
                    

                     
                </tbody>
            </table>
        </div>
    )
}