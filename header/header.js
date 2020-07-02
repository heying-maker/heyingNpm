import React from 'react';
import PropTypes from 'prop-types';
import './header.styl';

import {withRouter} from 'react-router-dom'

@withRouter
 class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.currentRow !== prevState.lastRow) {
      return {
          isScrollingDown:
          nextProps.currentRow > prevState.lastRow,
          lastRow: nextProps.currentRow
      }
  }
  return null
  }


  componentDidMount() { }


  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  // 记忆上一次
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 如果 `props.list` 增加，将原来的 scrollHeight 存入 listRef
    if (prevProps.list.length < this.props.list.length) {
        return this.listRef.scrollHeight
    }
    return null
} 
// snapshot 快照

  componentDidUpdate(prevProps, prevState,snapshot) { }

  componentWillUnmount() { }


  render() {
    return (
      <div className="header">

      </div>
    );
  }
}

header.propTypes={

}

header.defaultProps={
  
}

export default header

