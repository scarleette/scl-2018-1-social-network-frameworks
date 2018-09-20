import React from 'react';
import {Card, CardTitle} from 'react-materialize';

const Image = ()=> {
    return(
        <div>
<<<<<<< HEAD
            <Card className='small' header={<CardTitle image='img/sample-1.jpg'>UserrName</CardTitle>}>
=======
            <Card className='small'
                header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
                actions={[<a href='#'>This is a Link</a>]}>
                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
>>>>>>> 6f30397c5fed3a4fbd403635191acaaf83fe9895
            </Card>
        </div>
        )
    };


export default Image;