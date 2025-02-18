const ActionType = {
  SET_IS_PRELOAD: "SET_IS_PRELOAD",
};

const setIsPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: { isPreload },
});

export { ActionType, setIsPreloadActionCreator };
