import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './responsive-tester.css';

export class ResponsiveTester extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    minWidth: PropTypes.number
  }

  static defaultProps = {
    minWidth: 100
  }

  constructor(props){
    super(props);

    this.body = document.getElementsByTagName('body');
    this.fetched = false;
    this.origin = 0;
    this.diff = 0;
    this.rect = null;
    this.handleWidth = 0;

    this.handleMousedown = this.handleMousedown.bind(this);
    this.handleMouseup = this.handleMouseup.bind(this);
    this.handleMousemove = this.handleMousemove.bind(this);
  }

  handleMousedown(event) {
    if (event.offsetX >= this.rc.clientWidth) {
      this.origin = this.rect.left + this.rc.clientWidth + this.handleWidth / 2.0;
      this.fetched = true;
    }
  }

  handleMouseup() {
    this.body[0].style.cursor = 'auto';
    this.fetched = false;
  }

  handleMousemove(event) {
    if (this.fetched) {
      this.body[0].style.cursor = 'col-resize';
    } else {
      if (event.offsetX >= this.rc.clientWidth) {
        this.rc.style.cursor = 'col-resize';
      } else {
        this.rc.style.cursor = 'auto';
      }
    }
    if (this.fetched) {
      if (event.offsetX >= this.props.minWidth - this.handleWidth / 2.0) {
        this.diff = event.clientX - this.origin;
        this.origin = event.screenX;
        this.rc.style.width = `${Math.max(this.props.minWidth, this.rc.offsetWidth + this.diff)}px`;
      } else {
        this.rc.style.width = `${this.props.minWidth}px`;
        this.origin = this.rect.left + this.props.minWidth - this.handleWidth / 2.0;
      }
    }
  }

  componentDidMount() {
    this.rect = this.rc.getBoundingClientRect();
    this.handleWidth = Number(
      getComputedStyle(this.rc, null)
        .getPropertyValue('border-right-width')
        .replace('px', '')
    );

    this.rc.addEventListener('mousedown', this.handleMousedown);
    document.addEventListener('mouseup', this.handleMouseup);
    document.addEventListener('mousemove', this.handleMousemove);
  }

  componentWillUnmount() {
    this.rc.removeEventListener('mousedown', this.handleMousedown);
    document.removeEventListener('mouseup', this.handleMouseup);
    document.removeEventListener('mousemove', this.handleMousemove);
  }

  render() {
    return(
      <div ref={ c => this.rc = c } className="resizable-container">
        <div className="arrow">║</div>
        {
          this.props.children
        }
      </div>
    );
  }
}
