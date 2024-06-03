import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {
    console.log(props)

    const renderContactList = props.contacts.map((contact) => {
        return (
         
            <ContactCard contacts={contact}></ContactCard>
        )
    })

    return (
        <div className='ui celled list'>{renderContactList}</div>
    )
}

export default ContactList