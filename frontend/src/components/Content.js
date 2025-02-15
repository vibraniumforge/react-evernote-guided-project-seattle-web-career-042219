import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {
    // if (false) {
    if (this.props.editANote) {
      return (
        <NoteEditor
          chosenNote={this.props.chosenNote}
          handleEditSubmit={this.props.handleEditSubmit}
          handleEditFormChange={this.props.handleEditFormChange}
          handleViewNoteClick={this.props.handleViewNoteClick}
        />
      );
      // } else if (false) {
    } else if (this.props.viewANote) {
      return (
        <NoteViewer
          chosenNote={this.props.chosenNote}
          handleEditNoteClick={this.props.handleEditNoteClick}
          handleViewNoteClick={this.props.handleViewNoteClick}
        />
      );
    } else {
      return <Instructions />;
    }
  };

  render() {
    return (
      <div className="master-detail-element detail">{this.renderContent()}</div>
    );
  }
}

export default Content;
