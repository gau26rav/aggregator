import React from 'react'

class InstallerPrompt extends React.Component {

    state = { showPrompt: false }
    componentDidMount() {
        console.log('Inside ')
        window.addEventListener('beforeinstallprompt', (event) => {
            this.deferredPrompt = event;
            console.log('Before Install event happened')
            this.setState({showPrompt : true});
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
                    <h2>Wanna see us at Home page</h2>
                    <button onClick={this.handleClick}>Yes</button>
                    <button onClick={this.handleClick}>No</button>
                </div>}
            </>
        )
    }
}

export default InstallerPrompt
