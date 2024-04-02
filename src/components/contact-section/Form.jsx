import React from 'react'
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'

import './form.css'

const formInputs = [
  { id: 'name', 
  type: 'text', 
  label: 'Votre Nom', 
  placeholder: 'John Doe' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Numéro téléphone',
    placeholder: '77 345 67 90',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Votre message',
    placeholder: 'En quoi pouvons-nous vous aidez?',
  },
]

const Form = () => (
  <form className="form">
    <h2 className="form-h2">Envoyer nous un mail</h2>

    {formInputs.map(input => (
      <label key={input.label} id={input.id} className="form-label">
        {input.label}

        {input.type === 'textarea' ? (
          <textarea className="form-textarea" placeholder={input.placeholder} />
        ) : (
          <input
            className="form-input"
            type={input.type}
            placeholder={input.placeholder}
          />
        )}
      </label>
    ))}

    <Icon className="form-submit" icon={sendCircle} />

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
)

export default Form
