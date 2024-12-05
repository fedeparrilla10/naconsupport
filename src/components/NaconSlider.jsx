import Slider from "react-slick";

const ProductSlider = ({ data, handleProduct, selectedProductName }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {data.map((product) => {
        return (
          <div
            key={product.name}
            className="grid grid-cols-1 text-center cursor-pointer"
            onClick={() => handleProduct(product)}
          >
            <div
              className={`bg-gray-300 rounded-xl py-4 px-2 ${
                selectedProductName === product.name && "ring ring-blue-500"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[300px] h-[300px] md:w-[150px] md:h-[150px] object-contain cursor-pointer"
              />
              <p className="pt-4 text-black">{product.name}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

const VariantSlider = ({
  data,
  handleVariant,
  selectedVariantName,
  selectedProduct,
}) => {
  const settings = {
    infinite: data.length >= 4 && true,
    speed: 500,
    slidesToShow: Math.min(4, data.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {data.map((variant) => {
        return (
          <div
            key={variant.name}
            className="relative grid grid-cols-1 text-center cursor-pointer"
            onClick={() => handleVariant(variant)}
          >
            <div
              className={`flex flex-col items-center justify-center bg-gray-300 rounded-xl py-4 px-2 w-[180px] h-[222px] ${
                selectedVariantName === variant.name && "ring ring-blue-500"
              }`}
            >
              <img
                src={variant.image}
                alt={variant.name}
                className="w-[150px] h-[150px] object-contain mb-2"
              />
              <img
                src={
                  variant.platform
                    ? `/naconsupport/products/platforms/${variant.platform}.svg`
                    : selectedProduct.platform
                    ? `/naconsupport/products/platforms/${selectedProduct.platform}.svg`
                    : selectedProduct.image
                }
                alt={variant.platform}
                className="absolute top-2 right-2 w-6 h-6 object-contain"
              />
              <p className="text-black">{variant.name}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export { ProductSlider, VariantSlider };
