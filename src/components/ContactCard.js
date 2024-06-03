import React from 'react'

function ContactCard(props) {
    const {id,name,email ,imageUrl } = props.contacts
  return (
    <div className='item'>
        <img className='ui avatar image' src={imageUrl} />
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon"
                    style={{ color: "red", marginTop: "7px" }}
                ></i>

            </div>
  )
}

export default ContactCard