import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import VeryDissatisfiedIcon from './ratingscustomicon/star1.png';
import DissatisfiedIcon from './ratingscustomicon/star2.png';
import NeutralIcon from './ratingscustomicon/star3.png';
import SatisfiedIcon from './ratingscustomicon/star4.png';
import VerySatisfiedIcon from './ratingscustomicon/star5.png';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <img src={VeryDissatisfiedIcon} alt="Very Dissatisfied" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <img src={DissatisfiedIcon} alt="Dissatisfied" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <img src={NeutralIcon} alt="Neutral" />,
    label: 'Neutral',
  },
  4: {
    icon: <img src={SatisfiedIcon} alt="Satisfied" />,
    label: 'Satisfied',
  },
  5: {
    icon: <img src={VerySatisfiedIcon} alt="Very Satisfied" />,
    label: 'Very Satisfied',
  },
};

const StyledIconContainer = styled('span')({
  margin: '0 10px',
});

function IconContainer(props) {
  const { value, ...other } = props;
  const opacity = value <= props.currentValue ? 1 : 0.4;
  return (
    <StyledIconContainer {...other} style={{ opacity }}>
      {customIcons[value].icon}
    </StyledIconContainer>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
  currentValue: PropTypes.number.isRequired,
};

export default function RadioGroupRating() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledRating
      name="highlight-selected-only"
      value={value}
      onChange={handleChange}
      IconContainerComponent={(props) => <IconContainer {...props} currentValue={value} />}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}
