import React from 'react';

const MesageList = ({messages}) => {
    if (messages.length === 0 ) return null;

    console.log(messages)
    return ( 
        <div className="node__form-table">
            <table className="node__form-hash-list">
                <tr>
                    <th>Message</th>
                    <th>Hash</th>
                </tr>
            { 
            
                messages.map(item =>{
                    return (
                        <tr>
                            <td>{item.message}</td>
                            <td>{item.hash}</td>
                        </tr>
                    )
                })
            }
            </table>
        </div>
     );
}
 
export default MesageList;