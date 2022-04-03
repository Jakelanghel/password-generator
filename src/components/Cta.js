import React from "react";
import { StyledCta } from "./styled/Styled.Cta";

const Cta = (props) => {
    return (
        <StyledCta>
            <div>
                <h1>
                    Generate a <span>random password</span>
                </h1>

                <p>Never use an insecure password again.</p>
            </div>

            <div className='container-input'>
                <label htmlFor='pwLen'>Password length</label>
                <input
                    type='number'
                    id='pwLen'
                    name='usrInput'
                    value={props.usrInput}
                    onChange={props.getInput}
                />

                <button onClick={props.handleClick}>
                    <img src='./images/bolt-solid.svg' alt='bolt icon' />
                    Generate passwords
                </button>
            </div>
        </StyledCta>
    );
};

export default Cta;
