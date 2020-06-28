import React from 'react';

interface AppProps {
    name: string;
}

interface AppState {
    name: string;
}

class App  extends React.Component<AppProps, AppState> {

    public render() {
        return (
            <div>
                Hello World React
            </div>
        )
    }
};

export default App;
