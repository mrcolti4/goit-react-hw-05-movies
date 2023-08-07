import { Watch } from 'react-loader-spinner';

const Loader = ({ isHidden }) => {
  return (
    <div>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={isHidden}
      />
    </div>
  );
};

export default Loader;
