import React from 'react'
import './installer.css';
class InstallerPrompt extends React.Component {

    state = { showPrompt: false }
    componentDidMount() {
        console.log('Inside ')
        window.addEventListener('beforeinstallprompt', (event) => {
            this.deferredPrompt = event;
            console.log('Before Install event happened')
            this.setState({ showPrompt: true });
        });
    }

    handleClick = (event) => {
        this.deferredPrompt.prompt();
        console.log('deferredPrompt invoked --> ' + event)
        alert(event);
    }

    handleClose = () => {
        this.setState({ showPrompt: false });
    }

    render() {
        const { showPrompt } = this.state;
        return (
            <>

                {showPrompt && <div id="myModal" >
                    <div>
                        <span class="close" onClick={this.handleClose}>&times;</span>
                        <p> <h2>Wanna see us at Home page?</h2>
                            <button onClick={this.handleClick}>Yes</button>
                            <button onClick={this.handleClick}>No</button></p>
                    </div>
                </div>}

            </>
        )
    }
}

export default InstallerPrompt
