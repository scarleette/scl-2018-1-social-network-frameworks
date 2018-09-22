import React from 'react';
import {MediaBox} from 'react-materialize';

const Image = ()=> {
    return(
        <div>
            <Card className='small'
                header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
                actions={[<a href='#'>This is a Link</a>]}>
                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
            </Card>


            <MediaBox src="https://lorempixel.com/350/350/nature/1" caption="A demo media box1" width="350"/>


        </div>
    )
};


export default Image;