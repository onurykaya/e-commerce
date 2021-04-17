import { useRouter } from 'next/router';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

const ProductsPage = () => {
  const { query } = useRouter();
  const page = parseInt(query?.page, 10);
  return (
    <div>
      <Pagination page={page || 1} />
      <Products page={page} />
      <Pagination page={query?.page || 1} />
    </div>
  );
};

export default ProductsPage;
