import React, { Component } from "react";
import PropTypes from "prop-types";

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

    this.renderBreadcrumb = this.renderBreadcrumb.bind(this);
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
      <LastBreadcrumb theme={this.props.theme} key={i}>
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
      <BreadcrumbsWrap {...otherProps}>
        {filled.map(this.renderBreadcrumb)}
      </BreadcrumbsWrap>
    );
  }
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.object),
  withCustomLinks: PropTypes.bool,
  theme: PropTypes.object,
};

Breadcrumbs.defaultProps = {
  breadcrumbs: [],
  withCustomLinks: true,
  theme: defaultTheme
};

export default Breadcrumbs;
