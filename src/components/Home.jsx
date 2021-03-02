import React, { Fragment , useState} from 'react';
import NodeRequest from './NodeRequest.jsx'



const Home = () => {

    const [name, setName] = useState('')
    const [provider, setProvider] = useState('')

    const [server_list, setServer] = useState([
        {
            type:'fixed',
            server_name:'AMAZON',
            server_provider:'iota.bft.digital',
            address:"HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D",
            seed:"PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX"
        },
        {
            type:'fixed',
            server_name:'VULTR',
            server_provider:'96.30.197.39',
            address:"HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D",
            seed:"PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX"
        },
        {
            type:'fixed',
            server_name:'DIGITAL OCEAN',
            server_provider:'143.198.56.184',
            address:"HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D",
            seed:"PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX"
        }
    ])

    const handleSubmit = e =>{
        e.preventDefault();
        setServer([
            ...server_list,
            {
                type:'temp',
                server_name:name,
                server_provider:provider,
                address:'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D',
                seed:'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'
            }
          ]);
          setName('');
          setProvider('');
    }
    return ( 
        <Fragment>
            <center>
                <h1 className="title">BFT</h1>
            </center>
            
            

            <form
                    className="node__form"
                    onSubmit={handleSubmit}
                >
                    <input 
                        className="node__form-input"
                        type="text"
                        placeholder="Name"
                        required={true}
                        name="name"
                        value={name}
                        onChange={e=> setName(e.target.value)}
                    />

                    <input 
                        className="node__form-input"
                        type="text"
                        placeholder="Provider"
                        name="provider"
                        required={true}
                        value={provider}
                        onChange={e => setProvider(e.target.value)}
                    />

                    <input 
                        className="node__form-submit"
                        type="submit"
                        value="Add server"
                    />
            </form>

            {
                server_list.map(server => {
                    return(
                        <NodeRequest
                            type={server.type}
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
