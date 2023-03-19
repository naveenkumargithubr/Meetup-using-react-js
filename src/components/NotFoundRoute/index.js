import {
  NotFoundBgContainer,
  NotFoundMainHeading,
  NotFoundDesc,
  Img,
} from './styledComponents'

const NotFoundRoute = () => (
  <NotFoundBgContainer>
    <Img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundMainHeading>Page not Found</NotFoundMainHeading>
    <NotFoundDesc>
      We are sorry, the page you requested could not be found.
    </NotFoundDesc>
  </NotFoundBgContainer>
)

export default NotFoundRoute
