import image from 'assets/img/loading.gif';
import { useIsFetching } from 'react-query';
import { LoaderContainer, LoaderImage } from './loader-styles.css';

const Loader = () => {
  const isFetching = useIsFetching();

  if (isFetching === 0) {
    return null;
  }

  return (
    <div className={LoaderContainer}>
      <img className={LoaderImage} src={image} />
    </div>
  );
}

export default Loader;
