import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import {
  FavoritesModalTitle,
  FavoritesModalWrapper,
} from '../../styles/Favorites/FavoritesModal.styled';
import {
  addToFavorites,
  alreadyInFavorites,
  removeFromFavorites,
} from '../../utils/functions';
import { useMemo } from 'react';

/* eslint-disable react/prop-types */
const FavoritesModal = ({ modalOpen, setModalOpen, item }) => {
  //Memo
  const { btnText, onClickHandler, modalBody } = useMemo(() => {
    const inFavorites = alreadyInFavorites(item ?? {});

    return {
      btnText: inFavorites ? 'Remove' : 'Add',
      onClickHandler: inFavorites
        ? () => removeFromFavoritesHandler()
        : () => addToFavoritesHandler(),
      modalBody: (
        <>
          Do you want to {inFavorites ? 'remove ' : 'add '}
          <Text
            textDecoration="underline"
            textUnderlineOffset={2}
            display="inline"
          >
            {item?.name ?? item?.title}
          </Text>{' '}
          {inFavorites ? 'from ' : 'to '}favorites?
        </>
      ),
    };
  }, [modalOpen, item]);

  //Hooks
  const toast = useToast();

  //Functions
  const closeModal = () => setModalOpen(false);

  function addToFavoritesHandler() {
    addToFavorites(item, closeModal, toast);
  }

  function removeFromFavoritesHandler() {
    removeFromFavorites(item, closeModal, toast);
  }

  return (
    <FavoritesModalWrapper
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, .8)',
          zIndex: '10000',
        },
      }}
    >
      <FavoritesModalTitle>{modalBody}</FavoritesModalTitle>

      <Flex align="center" justify="center" margin="40px auto 0 auto" gap={5}>
        <Button colorScheme="green" onClick={onClickHandler}>
          {btnText}
        </Button>
        <Button colorScheme="red" onClick={closeModal}>
          Cancel
        </Button>
      </Flex>
    </FavoritesModalWrapper>
  );
};

export default FavoritesModal;
