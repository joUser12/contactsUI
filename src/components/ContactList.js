import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {
    debugger

    const deleteHandler = (id) => {
        debugger
        props.getContactId(id)

    }
    const renderContactList = props.contacts.map((contact) => {
        return (

            <ContactCard contacts={contact} clickHandler={deleteHandler} key={contact.id} ></ContactCard>
        )
    })

    return (
        <div className='ui celled list'>{renderContactList}</div>
    )
}

export default ContactList