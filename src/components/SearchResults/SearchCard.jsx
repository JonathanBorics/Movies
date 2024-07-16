/* eslint-disable react/prop-types */
import { Image } from '@chakra-ui/react';
import {
  CardBoxx,
  CardDate,
  CardDescription,
  CardTitle,
  TextBox,
} from '../../styles/SearchResults/Search.styled';
import { useMemo } from 'react';
import { getKnownFor } from '../../utils/functions';
import { useNavigate } from 'react-router';
import defaultImage from '../../assets/img/person.png';

const SearchCard = ({ result }) => {
  //Memo
  const { description, subtitle, image } = useMemo(() => {
    let description = result.overview ?? '';
    description =
      description.length > 100
        ? `${description.slice(0, 210)}...`
        : description;

    const subtitle =
      result?.release_date || result?.first_air_date
        ? new Date(
            result?.release_date ?? result?.first_air_date
          ).toLocaleString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
          })
        : `Known for: ${getKnownFor(result.known_for)}`;

    const image =
      result?.poster_path || result?.profile_path
        ? `${import.meta.env.VITE_APP_BASE_IMG_URL}/w500/${
            result.poster_path ?? result.profile_path
          }`
        : defaultImage;

    return { description, subtitle, image };
  }, [result]);

  //Hooks
  const navigate = useNavigate();

  //Functions
  const clickHandler = () => {
    const type = result.media_type;

    const typeMap = {
      movie: `/movies/${result.id}`,
      tv: `/tvshows/${result.id}`,
      default: `/people/${result.id}`,
    };

    const route = typeMap[type] || typeMap.default;

    navigate(route);
  };

  return (
    <CardBoxx>
      <Image
        objectFit="cover"
        objectPosition={{ base: '50% 20%', sm: 'center' }}
        w={{ base: '100%', sm: '120px' }}
        src={image}
        alt={result.name}
        maxH={{ base: '300px', sm: '180px' }}
        h={'100%'}
      />
      <TextBox>
        <CardTitle onClick={clickHandler}>
          {result.name ?? result.title}
        </CardTitle>
        <CardDate>{subtitle}</CardDate>
        <CardDescription>{description}</CardDescription>
      </TextBox>
    </CardBoxx>
  );
};

export default SearchCard;
