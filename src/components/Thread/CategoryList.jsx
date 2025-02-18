import React from "react";
import PropTypes from "prop-types";
import { Chip, Stack } from "@mui/material";

const CategoryList = ({ threadsCategory, selectedCategory, onSetCategory }) => {
  return (
    <Stack
      spacing={1}
      direction="row"
      flexWrap="wrap"
      justifyContent="flex-start"
    >
      {threadsCategory.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => onSetCategory(category)}
          color={selectedCategory === category ? "primary" : "default"}
          clickable
        />
      ))}
    </Stack>
  );
};

CategoryList.propTypes = {
  threadsCategory: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSetCategory: PropTypes.func.isRequired,
};

export default CategoryList;
