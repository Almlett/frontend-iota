import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const MesageList = ({messages}) => {
    if (messages.length === 0 ) return null;

    return ( 
        <div className="node__form-table">
            <table className="node__form-hash-list">
                <thead>
                    <tr>
                        <th>Message</th>
                        <th>Hash</th>
                        <th>IOTA</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                    
                        messages.map(item =>{
                            return (
                                <tr key={item.hash}>
                                    <td>{item.message}</td>
                                    <td><b>{item.hash}</b></td>
                                    <td>
                                        <a
                                            href={`https://explorer.iota.org/mainnet/transaction/${item.hash}`}
                                            target = "_blank"
                                        >
                                            <OpenInNewIcon />
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default MesageList;