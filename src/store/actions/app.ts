export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const toggleLoading = (loading: boolean) => {
  return {
    type: TOGGLE_LOADING,
    payload: {
      loading,
    },
  };
};
