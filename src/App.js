import React from 'react';  
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import Checkout from './pages/checkout/checkout.component'
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'
import {auth, createUserProfileDocument} from '../src/firebase/firebase.utils'
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }

  }
  unsubscribeFromAuth = null;

  // componentDidMount(){
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if(userAuth) {
  //       const userRef = createUserProfileDocument(userAuth);
  //       userRef.onSnapshot(snapShot => {
  //         this.setState({
  //           currentUser: {
  //             id: snapShot.id,
  //             ...snapShot.data()
  //           }
  //         });
  //       });
  //     }
  //       this.setState({currentUser: userAuth});
  //     });
       
  // }
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div >
    <Header />
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path='/shop' component={ShopPage}/>
    <Route path='/checkout' component={Checkout}/>
    <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignOutPage/>)}/>
    </Switch>
    </div>
  )}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);