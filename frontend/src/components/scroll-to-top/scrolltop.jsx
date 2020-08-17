import { useEffect } from 'react';
import { withRouter } from 'react-router-dom'

const ScrollToTop = ({children, location}) => {

  useEffect(() => {

    window.scrollTo(0, 0)
  },[location])
    // componentDidUpdate(prevProps) {
    //   if (this.props.location !== prevProps.location) {
    //     window.scrollTo(0, 0)
    //   }
    // }
  
   
    return children
  
  }
  
  export default withRouter(ScrollToTop)