import React from 'react'

class InstallerPrompt extends React.Component {

    state = { showPrompt: false }
    componentDidMount() {
        window.addEventListener('beforeinstallprompt', (event) => {
            this.deferredPrompt = event;
            console.log('Before Install event happened')
            this.setState({showPrompt : false});
        });
    }

    handleClick = (event) => {
        this.deferredPrompt.prompt();
        console.log('deferredPrompt invoked --> ' + event)
    }


    render() {
        const { showPrompt } = this.state;
        return (
            <>
                {showPrompt && <div id="installer prompt">
                    <p>Wanna see us at Home page</p>
                    <button onClick={this.handleClick}>Yes</button>
                    <button onClick={this.handleClick}>No</button>
                </div>}
            </>
        )
    }
}

export default InstallerPrompt
