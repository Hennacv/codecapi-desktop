import image from 'assets/img/loading.gif';
import { useIsFetching } from 'react-query';

const Loader = () => {
  const isFetching = useIsFetching();

  if (isFetching === 0) {
    return null;
  }

  return (
    <img src={image} />
  );
}

export default Loader;
