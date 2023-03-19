import {Link} from 'react-router-dom'

import {NavBgContainer, WebsiteLogo} from './styledComponents'

const Header = () => (
  <NavBgContainer>
    <Link to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavBgContainer>
)

export default Header
