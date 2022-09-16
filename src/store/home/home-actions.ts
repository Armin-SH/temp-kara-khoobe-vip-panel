const preType = 'HOME_';

export const homeActionTypes = {
  SET_EXPANDED_MENU: `${preType}SET_EXPANDED_MENU`,
};

const setExpandedMenu = (data: { expand: boolean }) => ({type: homeActionTypes.SET_EXPANDED_MENU, data: data});

export const HomeActions = {
  setExpandedMenu: setExpandedMenu,
};
