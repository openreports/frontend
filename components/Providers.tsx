import React from 'react'

import SignupContainer from '../stores/signup'
import AuthContainer from '../stores/auth'
import LoginContainer from '../stores/login'
import OnboardingContainer from '../stores/onboarding'

interface Props {
  children: React.ReactNode
}

const Providers: React.FC<Props> = (props) => {
  return (
    <AuthContainer.Provider>
      <SignupContainer.Provider>
        <LoginContainer.Provider>
          <OnboardingContainer.Provider>
            {props.children}
          </OnboardingContainer.Provider>
        </LoginContainer.Provider>
      </SignupContainer.Provider>
    </AuthContainer.Provider>
  )
}

export default Providers