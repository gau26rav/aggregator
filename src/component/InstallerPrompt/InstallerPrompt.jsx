import React from 'react'
import './installer.css';
class InstallerPrompt extends React.Component {

    state = { showPrompt: false }
    onPWA = this.isPWA();
    
    componentDidMount() {
        console.log('Inside ');
        window.addEventListener('beforeinstallprompt', (event) => {
            event.preventDefault();
            this.deferredPrompt = event;
            console.log('Before Install event happened')
            this.setState({ showPrompt: true });
        });
    }

    isPWA = () => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            console.log("This is running as standalone.");
            return true;
        } return false;
    }

    handleClick = (event) => {
        this.deferredPrompt.prompt();
        console.log('deferredPrompt invoked --> ' + event)
    }

    handleClose = () => {
        this.setState({ showPrompt: false });
    }

    render() {
        const { showPrompt } = this.state;
        return (
            <>

                {!this.onPWA && showPrompt && <div id="myModal" >
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
