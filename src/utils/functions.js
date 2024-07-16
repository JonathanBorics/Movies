export const filterVideos = (videos) => {
  if (!videos) return '';

  const trailers = videos.filter((video) => {
    if (video.type === 'Trailer') return video;
  });

  return trailers[0];
};

export const getGenresString = (genres) => {
  if (!genres || genres.length < 1) return '';

  const names = [...genres.map((genre) => genre.name)];

  const string = names.join(', ');

  return string;
};

export const getMovieDuration = (runtime) => {
  if (!runtime) return '';

  const duration = `${(runtime / 60).toFixed()}h ${(
    runtime -
    60 * parseInt((runtime / 60).toFixed())
  ).toFixed()}m`;

  return duration;
};

export const getCredits = (credits) => {
  if (!credits) return [];

  const { cast, crew } = credits;

  return [cast[0], cast[1], crew[0], crew[1]];
};

export const getKnownFor = (knownFor) => {
  if (!knownFor || knownFor.length < 1) return '';

  const array = [...knownFor.map((movie) => movie.title ?? movie.name)];
  const string = array.slice(0, -1).join(', ') + ' and ' + array.slice(-1);

  return string;
};

export const alreadyInFavorites = (item) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];

  if (favorites.length < 1) return false;

  return favorites.find(
    (favorite) =>
      favorite.id === item.id && favorite.media_type === item.media_type
  );
};

export const addToFavorites = (item, closeModal, toast) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];

  //Check if user has 5 favorites already
  if (favorites.length === 5) {
    closeModal();
    return toast({
      title: 'No more favorites!',
      description: "You can't have more than five favorites.",
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'bottom-right',
    });
  }

  //Add to favorites if all the checks are passed
  favorites.push(item);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  toast({
    title: 'Success!',
    description: `${
      item?.name ?? item?.title
    } added to favorites successfully.`,
    status: 'success',
    duration: 3000,
    isClosable: true,
    position: 'bottom-right',
  });
  closeModal();
  window.dispatchEvent(new Event('storage'));
};

export const removeFromFavorites = (item, closeModal, toast) => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) ?? [];

  //Check if user has no favorites
  if (favorites.length < 1) {
    closeModal();
    return toast({
      title: 'No favorites!',
      description: "Can't remove from favorites, because you don't have any.",
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'bottom-right',
    });
  }

  //Remove item from favorites
  favorites = favorites.filter(
    (favorite) =>
      favorite.id != item.id || favorite.media_type !== item.media_type
  );
  localStorage.setItem('favorites', JSON.stringify(favorites));
  toast({
    title: 'Success!',
    description: `${
      item?.name ?? item?.title
    } removed from favorites successfully.`,
    status: 'success',
    duration: 3000,
    isClosable: true,
    position: 'bottom-right',
  });
  closeModal();
  window.dispatchEvent(new Event('storage'));
};

export const filterSearchResults = (results) => {
  if (!results || results.length < 1) return [];

  const filteredNames = [];

  const filteredResults = results.filter((result) => {
    //Check if it is a person
    if (result.name && !filteredNames.includes(result.name)) {
      filteredNames.push(result.name);
      return true;
    }

    //Check if it is a movie/tv show
    if (result.title && !filteredNames.includes(result.title)) {
      filteredNames.push(result.title);
      return true;
    }

    //If the name repeats do not return it
    return false;
  });

  return filteredResults;
};

export const checkElementVisibility = (elRect) => {
  if (!elRect) return false;

  return (
    elRect.top >= 0 &&
    elRect.left >= 0 &&
    elRect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    elRect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
