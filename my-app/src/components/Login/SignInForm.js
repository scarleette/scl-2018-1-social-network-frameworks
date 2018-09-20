import React from 'react';
import {Row, Input, Button, Icon} from 'react-materialize';

const SignInForm =()=>{
        return(
                <Row>
                    <Input type="email" label="Email" s={12} />
                    <Input type="password" label="password" s={12} />
                    <Button waves='light'>button<Icon left>send</Icon></Button>
                    <Button waves='light'>button<Icon right>send</Icon></Button>
                </Row>
        )
}



export default SignInForm