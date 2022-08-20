import React from 'react';

const SharedScreen = ({IA,PIA}) => {
    return (
        <div class={(IA || PIA) ? "sharedScreen active" : "sharedScreen"}>
            Shared Screen
        </div>
    )
}

export default SharedScreen;