import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';

export default function Table() {

    const data = React.useMemo(
        () => [
        {
            col1: 'Minsk',
            col2: '27',
            col3: 'rain',
            col4: 'rain',
        },
        {
            col1: 'Vilnius',
            col2: '30',
            col3: 'rain',
            col4: 'rain',
        },
        {
            col1: 'London',
            col2: '23',
            col3: 'rain',
            col4: 'rain',
        },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
        {
            Header: 'Time & Date',
            accessor: 'col1', // accessor is the "key" in the data
        },
        {
            Header: 'Name',
            accessor: 'col2',
        },
        {
            Header: 'URL and Access',
            accessor: 'col3', // accessor is the "key" in the data
        },
        {
            Header: 'OCR Data',
            accessor: 'col4', // accessor is the "key" in the data
        },
        ],
        []
    )

    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    } = useTable({ columns, data })

        return (
            <>
            <div>
            <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
                <thead >
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps()}
                            style={{
                                borderBottom: 'solid 3px red',
                                color: 'black',
                                fontSize: '20px',
                                padding: '20px',
                            }}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                prepareRow(row)
                return (
                    
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                        return (
                            <td
                                {...cell.getCellProps()}
                                style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                }}
                            >
                                {cell.render('Cell')}
                            </td>
                        )
                        })}
                    </tr>
                )
                })}
                </tbody>
            </table>
            </div>
            </>
            );
}

