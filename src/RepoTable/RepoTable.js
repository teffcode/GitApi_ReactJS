import React from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import '../../node_modules/grommet-css';

const RepoTable = ({lenguage, branch, git_url, name, description}) => (

    <Table>
        <thead>
            <tr>
                <th> Lenguage </th>
                <th> Branch </th>
                <th> Git Url </th>
                <th> Name </th>
                <th> Description </th>
            </tr>
        </thead>
        <tbody>
               <td>{lenguage}</td>
               <td>{branch}</td>
               <td>{git_url}</td>
               <td>{name}</td>
               <td>{description}</td>
        </tbody>
    </Table>
);

export default RepoTable;