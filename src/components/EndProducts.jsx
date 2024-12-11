import Button from "./Button";
import useProductStore from "../store/useProductStore";

const EndProducts = ({ question, message }) => {
  const category = useProductStore((state) => state.selectedCategory);
  const allCategoryProducts = category.products.map((product) => product);

  const getRandomProducts = (products, count) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(allCategoryProducts, 4);

  return (
    <section className="flex flex-col items-center justify-center w-full gap-4">
      <div className="flex flex-col items-center justify-center w-full gap-1.5">
        <img
          src="/naconsupport/error.svg"
          alt="Error"
          width={70}
          height={70}
          className="pb-2"
        />
        <h3 className="text-center text-2xl">{message}</h3>
        <p className="text-center text-2xl">{question}</p>
      </div>
      <article className="flex flex-col md:flex-row items-center gap-3 py-4">
        {randomProducts.map((product) => {
          return (
            <div key={product.name} className="grid grid-cols-1 text-center">
              <a href={product.link} target="_blank" rel="noreferrer">
                <div className="bg-gray-300 rounded-xl py-4 px-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[240px] h-[240px] md:w-[150px] md:h-[150px] object-contain cursor-pointer"
                  />
                  <p className="pt-4 text-black">{product.name}</p>
                </div>
              </a>
            </div>
          );
        })}
      </article>
      <a href="https://www.nacongamers.es/" className="mt-4">
        <Button content="Volver a inicio" icon="/naconsupport/back.svg" />
      </a>
    </section>
  );
};

export default EndProducts;
