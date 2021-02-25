import React from 'react'
import Input from '@material-ui/core/Input';


const Unstaking = () => {
    return (
            <div className="col w-col w-col-4 visible-card">
                    <div className="card text-center">
                        {/* <div className="column-3 w-col w-col-4">
                            <a href="#" className="button-3 w-button">Unstake</a>
                        </div>  */}
                        {/* <h1>STAKE PNL</h1> */}
                        <p>UNSTAKE PNL</p>
                        {/* <h5>STAKE PNL</h5>
                         */}
                        <Input className="amount-input" placeholder="Enter amount"></Input>
                        <div className="toggle-stake stake">UNSTAKE</div>
                        <div className="toggle-stake unstake">MAX</div>
                    </div>
                  </div>
    )
}

export default Unstaking
