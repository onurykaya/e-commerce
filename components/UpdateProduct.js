import gql from 'graphql-tag/lib/graphql-tag.umd';
import { useMutation, useQuery } from '@apollo/client';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import { useForm } from '../lib/useForm';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

const UpdateProduct = ({ id }) => {
  const { loading, error, data } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  const { inputs, handleChange, clearForm } = useForm(data?.Product);
  console.log('inputss => ', inputs);
  if (loading) return <p>Loading...</p>;
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateProduct({
          variables: {
            id,
            name: inputs?.name,
            description: inputs?.description,
            price: inputs?.price,
          },
        });
        console.log(res);
        /* // Submit the inputfields to the backend
        const res = await createProduct();
        clearForm();
        // Go to product page
        Router.push({
          pathname: `/product/${res?.data?.createProduct?.id}`,
        }); */
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            onChange={handleChange}
            value={inputs?.name}
          />
        </label>
        <label htmlFor="price">
          Price:
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            onChange={handleChange}
            value={inputs?.price}
          />
        </label>
        <label htmlFor="description">
          Description:
          <textarea
            id="description"
            name="description"
            placeholder="description"
            onChange={handleChange}
            value={inputs?.description}
          />
        </label>
        <button type="submit">+ Update Product</button>
      </fieldset>
    </Form>
  );
};
export default UpdateProduct;
