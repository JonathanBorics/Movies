/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router';
import {
  PersonCardWrapper,
  PersonImage,
  PersonKnownFor,
  PersonName,
} from '../../styles/People/PersonCard.styled';
import { getKnownFor } from '../../utils/functions';

const PersonCard = ({ person }) => {
  //State
  const image = `${import.meta.env.VITE_APP_BASE_IMG_URL}/original/${
    person.profile_path
  }`;
  const knownFor = getKnownFor(person.known_for);

  //Hooks
  const navigate = useNavigate();

  //Functions
  const goToPersonHandler = () => {
    navigate(`/people/${person.id}`);
  };

  return (
    <PersonCardWrapper
      flexBasis={{ base: '100%', md: '49%', lg: '24%' }}
      width="100%"
      padding={0}
      onClick={goToPersonHandler}
    >
      {/* IMAGE */}
      <PersonImage src={image} />

      {/* NAME */}
      <PersonName>{person?.name}</PersonName>

      {/* KNOWN FOR */}
      <PersonKnownFor>{knownFor}</PersonKnownFor>
    </PersonCardWrapper>
  );
};

export default PersonCard;
