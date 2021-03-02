import React, { Fragment } from 'react';
import NodeRequest from './NodeRequest.jsx'

const Home = () => {
    return ( 
        <Fragment>
            <h1 className="title">BFT</h1>
            <NodeRequest
                server_name='AMAZON'
                server_provider='iota.bft.digital'
                address="HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D"
                seed="PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX"
            />
            <NodeRequest
                server_name='VULTR'
                server_provider='96.30.197.39'
                address="HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D"
                seed="PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX"
            />
            <NodeRequest
                server_name='DIGITAL OCEAN'
                server_provider='143.198.56.184'
                address="HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D"
                seed="PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX"
            />
        </Fragment>
     );
}
 
export default Home;
