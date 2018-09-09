import LoginComponent from './loginComponent'
import * as loginActions from './loginActions'
import {connect} from 'react-redux'
import {getNav, getLogin} from '../../reducers'

const mapStateToProps = (state, props)=> {
  return {
    // ...getNav(state),
    ...getLogin(state),
  }
}

const mapDispatchToProps = {
  ...loginActions
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
