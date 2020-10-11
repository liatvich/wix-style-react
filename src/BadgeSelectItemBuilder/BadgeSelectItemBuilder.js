import React from 'react';
import { st, classes } from './BadgeSelectItem.st.css';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import Box from '../Box/Box';

const BadgeOption = props => {
  const { skin, text, subtitle, selected } = props;
  return (
    <div
      className={st(classes.root, {
        skin,
        subtitle: !!subtitle,
        selected,
      })}
    >
      <div className={classes.marker} />
      <Box display="inline-flex" marginLeft="8px" direction="vertical">
        <Text
          size="small"
          skin="standard"
          tagName="span"
          weight="normal"
          light={selected}
        >
          {text}
        </Text>
        {subtitle && (
          <Text size="tiny" secondary={!selected} light>
            {subtitle}
          </Text>
        )}
      </Box>
    </div>
  );
};

BadgeOption.propTypes = {
  text: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  skin: PropTypes.string.isRequired,
};

export const badgeSelectItemBuilder = ({
  id,
  text,
  skin,
  subtitle,
  selected,
}) => ({
  id,
  value: (
    <BadgeOption
      skin={skin}
      text={text}
      subtitle={subtitle}
      selected={selected}
    />
  ),
});
