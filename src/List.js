import React from 'react';
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from './Loader';
import appConfig from './config.json';

const List = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const { getAccessTokenSilently } = useAuth0();

    const fetchData = async() => {
        const token = await getAccessTokenSilently({
            audience: appConfig.apiUrl,
            scope: 'read:items'
        });

        await fetch(`${appConfig.apiUrl}/items`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => response.json())
            .then(
                (items) => {
                    setData(items)
                    setIsLoaded(true)
                }
            )
    }

    useEffect(
        () => {
            fetchData();
        },[]
    );

    if (isLoaded) {
        return (
            <React.Fragment>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        )
    } else {
        return (
            <Loader loadingText="Loading Data" />
        )
    }
}

export default List;