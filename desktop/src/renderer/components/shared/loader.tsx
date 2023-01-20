import image from 'img/loading.gif';
import { useIsFetching } from 'react-query';

function Loader() {
  const isFetching = useIsFetching();

  if (isFetching === 1) {
    return null;
  }

  return (
    <div className="loading-spinner">
      <img src={image} />
    </div>
  );
}

export default Loader;
