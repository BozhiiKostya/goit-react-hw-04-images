import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      height="150"
      width="150"
      radius="48"
      color="#d7abab"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={false}
    />
  );
};
