import React from 'react';
import {Row, Input, Button} from 'react-materialize';

const SignInForm =()=>{
        return(
                <Row>
                    <Input type="email" label="Email" s={12} />
                    <Input type="password" label="password" s={12} />
                    <Button waves='light'>button<Icon left>cloud</Icon></Button>
                    <Button waves='light'>button<Icon right>cloud</Icon></Button>
                </Row>
        )
}



export default SignInForm