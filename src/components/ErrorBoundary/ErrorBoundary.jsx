import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
      this.state = { hasError: false }
    }

    static getDerivedStateFromError = error => ({
      hasError: true
    })
  
    componentDidCatch(error, errorInfo) {
      this.setState({ hasError: true })
    }
  
    render() {
      const { hasError } = this.state
      if (hasError) {
        return <h1>Oops! Something went wrong.</h1>
      }
      return this.props.children
    }
  }

  export default ErrorBoundary