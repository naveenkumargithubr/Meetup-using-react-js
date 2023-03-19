import {Link} from 'react-router-dom'

import Header from '../Header'
import RegisterRouteContext from '../../Context/RegisterRouteContext'

import {
  HomeBgContainer,
  HomePageHeading,
  HomeDescLine,
  RegBtn,
  MeetupImg,
  UserName,
  SelectTopic,
} from './styledComponents'

const HomePage = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterRouteContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        console.log(isRegistered)
        return (
          <div>
            <Header />

            {isRegistered === true ? (
              <HomeBgContainer>
                <UserName>Hello {name}</UserName>
                <SelectTopic>Welcome to {topic}</SelectTopic>
                <MeetupImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeBgContainer>
            ) : (
              <HomeBgContainer>
                <HomePageHeading>Welcome to Meetup</HomePageHeading>
                <HomeDescLine>Please register for the topic</HomeDescLine>
                <Link to="/register">
                  <RegBtn onClick={onRegister}>Register</RegBtn>
                </Link>

                <MeetupImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeBgContainer>
            )}
          </div>
        )
      }}
    </RegisterRouteContext.Consumer>
  )
}

export default HomePage
