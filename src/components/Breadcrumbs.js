import React, { Component } from "react";
import PropTypes from "prop-types";

import { withTheme } from "styled-components";

import BreadcrumbsWrap from "../styled/BreadcrumbsWrap";
import BreadcrumbLink from "../styled/BreadcrumbLink";
import LastBreadcrumb from "../styled/LastBreadcrumb";
import BreadcrumbDivider from "../styled/BreadcrumbDivider";

import { BreadcrumbRightArrow } from "../svg";
import defaultTheme from '../theme/defaultTheme';

class Breadcrumbs extends Component {

  constructor(props) {
    super(props);

    this.displayName = "Breadcrumbs";
    this.container = React.createRef();

    this.state = {
      widthOfLast: null
    };

    this.renderBreadcrumb = this.renderBreadcrumb.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount', this.container);
    try {

      const c = this.container.current;
      const total = c.clientWidth;
      const childs = c.childNodes;
      const withoutLast = [].map.call(childs, c => c).slice(0, -1);
      const widthOfLast = total - withoutLast.reduce((width, el) => {
        const style = window.getComputedStyle(el);
        const marginLeft = parseInt(style.marginLeft, 10);
        const marginRight = parseInt(style.marginRight, 10);
        return width + el.clientWidth + marginLeft + marginRight;
      }, 0);
      this.setState({widthOfLast});
    }

    catch(e) { console.warn('cannot calculate width of breadcrumbs:', e) }
  }

  onClick(e, bc) {
    if (this.props.onClick) this.props.onClick(bc);
    if (this.props.withCustomLinks) e.preventDefault();
  }

  renderBreadcrumb(breadcrumb, i, bcs) {
    const last = i === bcs.length - 1;

    const href =
      this.props.breadcrumbs
        .slice(0, this.props.breadcrumbs.indexOf(breadcrumb))
        .map(b => b.href)
        .join("/") +
      "/" +
      breadcrumb.href;

    return breadcrumb.isDivider ? (
      <BreadcrumbDivider key={i}>
        <BreadcrumbRightArrow />
      </BreadcrumbDivider>
    ) : last ? (
      <LastBreadcrumb theme={this.props.theme} key={i} width={this.state.widthOfLast} wrap={this.props.wrap}>
        {breadcrumb.title}
      </LastBreadcrumb>
    ) : (
      <BreadcrumbLink
        theme={this.props.theme}
        key={i}
        href={href}
        onClick={e => this.onClick(e, breadcrumb)}
      >
        {breadcrumb.title}
      </BreadcrumbLink>
    );
  }

  getFilledWithDividers(bcs) {
    const _tmp = [];
    bcs.forEach((bc, i) => {
      _tmp.push(bc);
      if (i !== bcs.length - 1) _tmp.push({ isDivider: true });
    });
    return _tmp;
  }

  render() {
    const { onClick, ...otherProps } = this.props;

    const filled = this.getFilledWithDividers(this.props.breadcrumbs);

    return (
      <BreadcrumbsWrap {...otherProps} innerRef={this.container}>
        {filled.map(this.renderBreadcrumb)}
      </BreadcrumbsWrap>
    );
  }
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.object),
  withCustomLinks: PropTypes.bool,
  theme: PropTypes.object,
  wrap: PropTypes.bool,
};

Breadcrumbs.defaultProps = {
  breadcrumbs: [],
  withCustomLinks: true,
  theme: defaultTheme
};

export default withTheme(Breadcrumbs);
