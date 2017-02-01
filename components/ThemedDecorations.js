const React = require('react')
const ReactDOM = require('react-dom')

class ThemedDecoration extends React.Component {

  render() {
    const children = React.Children.map(this.props.children, (child)=>{
      return React.cloneElement(child, {className: this.props.theme})
    })
    return(
      <div>
        {children}
      </div>
    )
  }
}

module.exports = ThemedDecoration
