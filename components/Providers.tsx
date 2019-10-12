import React from 'react'

import SignupContainer from '../stores/signup'
import AuthContainer from '../stores/auth'
import LoginContainer from '../stores/login'

interface Props {
  children: React.ReactNode
}

const Providers: React.FC<Props> = (props) => {
  return (
    <AuthContainer.Provider>
      <SignupContainer.Provider>
        <LoginContainer.Provider>
          {props.children}
        </LoginContainer.Provider>
      </SignupContainer.Provider>
    </AuthContainer.Provider>
  )
}

export default Providers