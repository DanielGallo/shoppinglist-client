import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

const Loader = (props) => {
    const loadingText = props.loadingText ? props.loadingText : 'Loading';

    return (
        <Box display="flex" justifyContent="center" style={{ width: "100%", height: "100%", alignItems: "center"}}>
            <Box borderRadius={8} justifyContent="center" bgcolor="#0b345a" borderColor="#22c4d6" color="#ffffff" border={1}
                 style={{ padding: "30px", height: "80px", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <CircularProgress size={45} />
                <br /><br />
                {loadingText}...
            </Box>
        </Box>
    );
}

export default Loader;