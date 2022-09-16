import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [account, setAccount] = useState(window.solana2);

    useEffect(() => {
        setAccount(window.solana2);
    }, []);

    const Connect = () => {
        return (
            <button 
                className='btn btn-primary'
                onClick={() => {
                    window.solana2.connect();
                }}>
                Connect
            </button>
        )
    }

    const ConnectedApp = () => {
        return (
            <div>
                {window.solana2.account}
            </div>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                {
                    (window.solana2 != null) ?
                    ((window.solana2.account) ?
                    <ConnectedApp /> :
                    <Connect />) :
                    <div>
                        <button 
                            className='btn btn-primary'
                            onClick={() => {
                                setAccount(window.solana2)
                            }}>
                            Refresh Window Variable
                        </button>
                    </div>
                }
            </header>
        </div>
    );
}

export default App;
