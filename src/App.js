import React from 'react'
import Sidebar from './components/sidebar/sidebar.jsx'
import Main from './pages/main/main.jsx'
import TasksTable from './pages/tasks-table/tasks-table.jsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import MobileSidebar from './components/mobile-sidebar/mobile-sidebar'
import Head from './components/head/head'
import MobileNavbar from './components/mobile-navbar/mobile-navbar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'dark'
    }

    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme() {
    if (this.state.theme === 'dark') {
      this.setState({ theme: 'light' })
      return this.state.theme
    } else {
      this.setState({ theme: 'dark' })
      return this.state.theme
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Head theme={this.state.theme} />
        <main className="row">
          <MobileNavbar changeTheme={this.changeTheme} />
          <Sidebar changeTheme={this.changeTheme} />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/task-table" component={TasksTable} />
          </Switch>
          <MobileSidebar />
        </main>
      </BrowserRouter>
    )
  }
}

export default App
