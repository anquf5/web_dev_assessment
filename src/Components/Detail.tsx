import React from 'react';
import { UserObj } from '../User/UserController';

interface DetailProps {
    user: UserObj
}
 
class Detail extends React.Component<DetailProps> {
    render() { 
        const props = this.props
        const img = `${props.user.photo_l}`
        return ( 
            <div className='container text-center'>
            <div className="row align-items-center">
                <h1>{props.user.name}</h1>
            </div>
            <div>
                <img src={img} />
            </div>
            <div className="row align-items-center">
                <p><strong>Joined: </strong>{props.user.reg.substring(0,10)} ({props.user.age} Years Ago)</p>
            </div>
            </div>
        );
    }
}
 
export default Detail;