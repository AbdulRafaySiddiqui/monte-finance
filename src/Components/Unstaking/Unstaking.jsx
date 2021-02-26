import React from 'react'
import { TextField } from '@material-ui/core';
import styled from 'styled-components'

const StyledTextField = styled(TextField)`
    & .MuiInput-underline:after {
        border-bottom: 2px solid #E1B788;
    }

`;
const Unstaking = () => {
    return (
        <div className="col w-col w-col-4 visible-card">
            <div className="card text-center">
                {/* <div className="column-3 w-col w-col-4">
                            <a href="#" className="button-3 w-button">Unstake</a>
                        </div>  */}
                <p style={{ fontSize: 'large' }}>UNSTAKE MNT</p>
                <StyledTextField className="amount-input" placeholder="Enter amount"></StyledTextField>
                <div className="toggle-stake stake">UNSTAKE</div>
                <div className="toggle-stake unstake">MAX</div>
            </div>
        </div>
    )
}

export default Unstaking
