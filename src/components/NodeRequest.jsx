import React, { useState } from 'react';
import MesageList from './MesageList.jsx';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const NodeRequest = ({server_name, server_provider, address, seed}) => {
    const Iota = require('@iota/core');
    const Converter = require('@iota/converter');
    
    const depth = 3;
    const minimumWeightMagnitude = 14;
    
    const [message, setMessage] = useState("")
    const [error, setError] = useState(0)
    const [sending, setSending] = useState(false)
    const [sent_messages, setSentMessages] = useState([])

    const handleSubmit = e => {
        setSending(true);
        e.preventDefault();
        const iota = Iota.composeAPI({
            provider: `https://${server_provider}:443`
        });

        const tmp_message = JSON.stringify({"message": message});

        const messageInTrytes = Converter.asciiToTrytes(tmp_message);

        const transfers = [
            {
            value: 0,
            address: address,
            message: messageInTrytes
            }
        ];

        iota.prepareTransfers(seed, transfers)
        .then(trytes => {
            return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
        })
        .then(bundle => {
            setSentMessages([
                ...sent_messages,
                {
                  message,
                  hash: bundle[0].hash
                }
              ]);
              setSending(false);
        })
        .catch(err => {
            setSending(false);
            setError(error + 1)
            console.error(err)
        });
    }

    const onChangeMessage = e => {
        setMessage(e.target.value);
    };
    return ( 
        <div className="node">
            <div className="node__header">
                <h2 className="node__header-title">{server_name}
                    <b className="error">
                        {
                            error > 0 &&
                            `(${error})`
                            
                        }
                    </b>
                </h2> 
                <a 
                    className="node__header-provider"
                    href={`http://${server_provider}/`}
                    target="_blank">
                        <OpenInNewIcon />
                </a>
            </div>
            <form
                    className="node__form"
                    onSubmit={handleSubmit}
                >
                    <input 
                        className="node__form-input"
                        type="text"
                        placeholder="Message"
                        name="name"
                        value={message}
                        onChange={onChangeMessage}
                    />

                    <input 
                        className="node__form-submit"
                        type="submit"
                        disabled={sending}
                        value={sending ? "Sending...":"Send message"}
                    />
            </form>
          
            <MesageList 
                messages={sent_messages}
            />
        </div>
     );
}
 
export default NodeRequest;





