import React, { Fragment , useState} from 'react';
import NodeRequest from './NodeRequest.jsx'



const Home = () => {

    const [server_list, setServer] = useState([
        {
            server_name:'AMAZON',
            server_provider:'iota.bft.digital',
            address:"HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D",
            seed:"PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX"
        },
        {
            server_name:'VULTR',
            server_provider:'96.30.197.39',
            address:"HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D",
            seed:"PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX"
        },
        {
            server_name:'DIGITAL OCEAN',
            server_provider:'143.198.56.184',
            address:"HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D",
            seed:"PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX"
        }
    ])
    return ( 
        <Fragment>
            <center>
                <h1 className="title">BFT</h1>
            </center>
            {
                server_list.map(server => {
                    return(
                        <NodeRequest
                            server_name={server.server_name}
                            server_provider={server.server_provider}
                            address={server.address}
                            seed={server.seed}
                        />
                    )
                })
            }
            
            
        </Fragment>
     );
}
 
export default Home;
