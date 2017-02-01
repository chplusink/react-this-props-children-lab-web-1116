const React = require('react')
const ReactDOM = require('react-dom')

class Invitation extends React.Component {

  render() {
    const children = React.Children.map( this.props.children, (child)=> {
      return child
    })
    return(
      <div>
        <h1>You've been invited!</h1>
        {children}
      </div>
    )
  }
}

module.exports = Invitation
