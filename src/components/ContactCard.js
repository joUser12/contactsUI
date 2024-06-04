import React from 'react'

// function ContactCard(props) {
//     const {id,name,email ,imageUrl } = props.contacts
//   return (
//     <div className='item'>
//         <img className='ui avatar image' src={imageUrl} />
//                 <div className='content'>
//                     <div className='header'>{name}</div>
//                     <div>{email}</div>
//                 </div>
//                 <i className="trash alternate outline icon"
//                     style={{ color: "red", marginTop: "7px" }}
//                 ></i>

//             </div>
//   )
// }
function ContactCard(props) {
    const {  name, email, imageUrl } = props.contacts;

    return (
        <div className='item' style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img className='ui avatar image' src={imageUrl} style={{ marginRight: '10px' }} />
            <div className='content' style={{ flexGrow: 1 }}>
                <div className='header'>{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon"
                style={{ color: "red", marginLeft: 'auto', cursor: 'pointer' }}
            ></i>
        </div>
    );
}


export default ContactCard