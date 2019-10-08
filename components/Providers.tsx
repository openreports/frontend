import React from 'react'

import SignupContainer from '../stores/signup'
import AuthContainer from '../stores/auth'

interface Props {
  children: React.ReactNode
}

const Providers: React.FC<Props> = (props) => {
  return (
    <AuthContainer.Provider>
      <SignupContainer.Provider>
        {props.children}
      </SignupContainer.Provider>
    </AuthContainer.Provider>
  )
}

export default Providers