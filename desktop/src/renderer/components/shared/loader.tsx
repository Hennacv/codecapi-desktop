import image from 'img/loading.gif';
import { useIsFetching } from 'react-query';

function Loader() {
  const isFetching = useIsFetching();

  if (isFetching === 0) {
    return null;
  }

  return (
    <div className="">
      <img src={image} />
    </div>
  );
}

export default Loader;
