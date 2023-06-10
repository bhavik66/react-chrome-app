import { useRef, useState } from 'react';
import { AddRecipeView, DetailView } from '../../components';
import { Box } from '@mui/material';
import Slide from '@mui/material/Slide';

const Main = () => {
  const [openAddRecipe, setOpenAddRecipe] = useState(false);
  const containerRef = useRef(null);

  const handleAddRecipeView = () => {
    setOpenAddRecipe(true);
  };

  const handleBack = () => {
    setOpenAddRecipe(false);
  };

  return (
    <Box ref={containerRef} position={'relative'}>
      <DetailView onAddRecipe={handleAddRecipeView} />
      <Slide
        direction="left"
        in={openAddRecipe}
        container={containerRef.current}
        mountOnEnter
        unmountOnExit
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        >
          <AddRecipeView onBack={handleBack} />
        </Box>
      </Slide>
    </Box>
  );
};

export default Main;
