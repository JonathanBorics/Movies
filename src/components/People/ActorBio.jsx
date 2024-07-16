import { useMemo, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import {
  ActorDetailsBio,
  ReadMoreBtn,
} from "../../styles/People/ActorBio.styled";

//Defaults
const ButtonReadMore = (
  <>
    Read More <FaGreaterThan />
  </>
);

const ButtonReadLess = (
  <>
    <FaLessThan />
    ReadLess
  </>
);

/* eslint-disable react/prop-types */
const ActorBio = ({ bio }) => {
  //State
  const [isExpanded, setIsExpanded] = useState(false);

  //Memo
  const slicedBio = useMemo(() => {
    return bio?.length > 1000 && !isExpanded ? `${bio.slice(0, 1000)}...` : bio;
  }, [bio, isExpanded]);

  //Functions
  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <ActorDetailsBio>
      {slicedBio}
      {bio && bio?.length > 1000 && (
        <ReadMoreBtn type="button" onClick={toggleExpanded}>
          {isExpanded ? ButtonReadLess : ButtonReadMore}
        </ReadMoreBtn>
      )}
    </ActorDetailsBio>
  );
};

export default ActorBio;
