import React from 'react';
import {Card, CardTitle} from 'react-materialize';

const Image = ()=> {
    return(
        <div>
            <Card className='small' header={<CardTitle image='img/sample-1.jpg'>UserrName</CardTitle>}>
            </Card>
        </div>
        )
    };


export default Image;