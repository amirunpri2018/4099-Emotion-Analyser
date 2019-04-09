import React, { Component } from "react"

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="Upload">
        <span className="Title">Upload Files</span>
        <div className="Content">
          <div />
          <div className="Files" />
        </div>
        <div className="Actions" />
      </div>
    )
  }
}

export default Upload