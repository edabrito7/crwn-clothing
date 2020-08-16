import { useEffect } from 'react';
import { withRouter } from 'react-router-dom'

const ScrollToTop = ({children}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })
    // componentDidUpdate(prevProps) {
    //   if (this.props.location !== prevProps.location) {
    //     window.scrollTo(0, 0)
    //   }
    // }
  
   
    return children
  
  }
  
  export default withRouter(ScrollToTop)