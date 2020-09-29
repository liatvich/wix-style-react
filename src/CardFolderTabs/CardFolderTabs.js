import React from 'react';
import PropTypes from 'prop-types';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';

import { dataHooks } from './constants';
import Tab from './Tab';
import { st, classes } from './CardFolderTabs.st.css';
import Ellipsis from '../common/Ellipsis';
import { generateDataAttr } from '../utils/generateDataAttr';

class CardFolderTabs extends React.PureComponent {
  isActiveTab = cardFolderTab => this.props.activeId === cardFolderTab.props.id;

  handleTabChange = tabId => () => {
    this.props.onTabChange(tabId);
  };

  getTabButton = cardFolderTab => {
    const selected = this.isActiveTab(cardFolderTab);
    return (
      <Ellipsis
        ellipsis
        showTooltip
        wrapperClassName={st(classes.ellipsisWrapper, { selected })}
        render={({ ref, ellipsisClasses }) => (
          <ButtonNext
            {...generateDataAttr(this.props, ['skin', 'size', 'priority'])}
            className={st(classes.button, { selected })}
            data-hook={dataHooks.tabButton}
            contentClassName={ellipsisClasses()}
            contentRef={ref}
            onClick={this.handleTabChange(cardFolderTab.props.id)}
            disabled={cardFolderTab.props.disabled}
            style={{ maxWidth: this.props.maxTabWidth }}
            key={cardFolderTab.props.id}
          >
            <span>{cardFolderTab.props.name}</span>
          </ButtonNext>
        )}
      />
    );
  };

  render() {
    const { dataHook, className } = this.props;
    const cardFolderTabs = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];

    return (
      <div className={st(className)} data-hook={dataHook}>
        <div data-hook={dataHooks.header} className={st(classes.headerWrapper)}>
          {cardFolderTabs.map(this.getTabButton)}
        </div>
        <div
          data-hook={dataHooks.content}
          className={st(classes.tabContentWrapper)}
        >
          {cardFolderTabs.filter(this.isActiveTab)}
        </div>
      </div>
    );
  }
}

CardFolderTabs.displayName = 'CardFolderTabs';

CardFolderTabs.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Id of currently visible tab  */
  activeId: PropTypes.string.isRequired,

  /** Callback which is called on tab change. Id of newly selected tab is passed as a parameter  */
  onTabChange: PropTypes.func,

  /** Max width of tab buttons */
  maxTabWidth: PropTypes.number,
};

CardFolderTabs.defaultProps = {
  maxTabWidth: 138,
};

CardFolderTabs.Tab = Tab;

export default CardFolderTabs;
