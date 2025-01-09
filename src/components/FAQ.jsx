import { useState, useEffect } from "react";
import useProductStore from "../store/useProductStore";
import Button from "./Button";
import { productMediaApi } from "../api/product_media";
import urlFormatter from "../utils/urlFormatter";

const useProductMedia = () => {
  const [loading, setLoading] = useState(false);
  const [productMedia, setProductMedia] = useState(null);
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const selectedVariant = useProductStore((state) => state.selectedVariant);

  const getProductMedia = async () => {
    setLoading(true);
    try {
      const response = await productMediaApi.getProductMedia(
        selectedProduct.ref ?? selectedVariant.ref
      );
      setProductMedia(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductMedia();
  }, [selectedProduct, selectedVariant]);

  return { productMedia, loading };
};

const useVideos = () => {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    setLoading(true);
    try {
      const response = await productMediaApi.getProductVideos();
      setVideos(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return { videos, loading };
};

const FAQ = ({ message, question }) => {
  const { productMedia } = useProductMedia();
  const { videos } = useVideos();
  const formattedUrls = productMedia?.hoja_de_producto
    ? urlFormatter(productMedia.hoja_de_producto)
    : [];

  return (
    <section className="flex flex-col items-center justify-center w-full gap-8">
      <div className="flex flex-col items-center">
        <p className="text-center md:text-start px-8 uppercase text-lg font-semibold">
          {message}
        </p>
        <h3 className="text-2xl text-center md:text-start">{question}</h3>
      </div>

      <div className="flex flex-col items-center w-full gap-8">
        <div className="flex flex-col flex-wrap justify-center items-center md:flex-row gap-4">
          {productMedia?.hoja_de_producto && (
            <a href={formattedUrls[0]} target="_blank">
              <button
                className="border-2 border-gray-500 w-40 h-42 md:w-48 md:h-48 grid grid-cols-1 grid-rows-2 place-items-center cursor-pointer rounded-lg hover:bg-gray-700 hover:text-white 
          transition duration-300 ease-in-out transform hover:scale-105 px-4 h-[180px]"
              >
                <img
                  src="/naconsupport/pdf.svg"
                  alt="Enlace a la hoja de producto"
                  width={70}
                  height={70}
                  className="pt-8"
                />
                <p className="text-lg text-center">Hoja de Producto</p>
              </button>
            </a>
          )}
          {productMedia?.manual_de_instrucciones && (
            <a href={productMedia.manual_de_instrucciones} target="_blank">
              <button
                className="border-2 border-gray-500 w-40 h-42 md:w-48 md:h-48 grid grid-cols-1 grid-rows-2 place-items-center cursor-pointer rounded-lg hover:bg-gray-700 hover:text-white 
          transition duration-300 ease-in-out transform hover:scale-105 px-4 h-[180px]"
              >
                <img
                  src="/naconsupport/pdf.svg"
                  alt="Enlace al manual de instrucciones"
                  width={70}
                  height={70}
                />
                <p className="text-lg text-center">Manual de Instrucciones</p>
              </button>
            </a>
          )}
        </div>

        {videos.length > 0 && (
          <div className="flex flex-col xl:flex-row gap-12 md:gap-8 pt-8">
            {videos.map((video) => {
              return (
                <div className="flex flex-col items-center justify-center w-full gap-6">
                  <h3 className="text-center text-xl md:text-start uppercase font-semibold">
                    {video.title}
                  </h3>

                  <iframe
                    className="w-[360px] h-[225px] md:w-[560px] md:h-[315px]"
                    src={video.url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-0 items-center justify-around md:w-2/4">
        <a href="https://www.nacongamers.es/">
          <Button content="Volver a inicio" icon="/naconsupport/back.svg" />
        </a>
      </div>
    </section>
  );
};

export default FAQ;
