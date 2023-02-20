import image from 'img/loading.gif';
import { useIsFetching } from 'react-query';

function Loader() {
  const isFetching = useIsFetching();

  if (isFetching === 0) {
    return null;
  }

  return (
    <div className="h-4 w-4 absolute right-2 top-24 z-1">
      <img src={image} />
    </div>
  );
}

export default Loader;
