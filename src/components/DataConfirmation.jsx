import { useState, useRef } from "react";
import dayjs from "dayjs";
import SignaturePad from "react-signature-pad-wrapper";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button as MUIButton,
} from "@mui/material";
import useProductStore from "../store/useProductStore";
import useRetailStore from "../store/useRetailStore";
import useUserData from "../store/useUserData";
import Button from "./Button";
import dataURLtoFile from "../utils/dataURLtoFile";
import { warrantyApi } from "../api/warranty";

const useSignature = () => {
  const [isSigned, setIsSigned] = useState(false);
  const [signature, setSignature] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const signaturePadRef = useRef(null);

  const handleSaveSignature = () => {
    if (signaturePadRef.current) {
      if (signaturePadRef.current.isEmpty()) {
        setOpenAlert(true);
        return;
      }

      const signatureDataURL = signaturePadRef.current.toDataURL("image/png");
      const file = dataURLtoFile(signatureDataURL, "signature.png");
      setSignature(file);
      setIsSigned(true);
    }
  };

  const clearSignature = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
      setIsSigned(false);
    }
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return {
    isSigned,
    signature,
    signaturePadRef,
    handleSaveSignature,
    clearSignature,
    handleCloseAlert,
    openAlert,
  };
};

const DataConfirmation = ({ options, handleOptionSelect }) => {
  const [loading, setLoading] = useState(false);
  const {
    isSigned,
    signature,
    signaturePadRef,
    handleSaveSignature,
    clearSignature,
    openAlert,
    handleCloseAlert,
  } = useSignature();
  const productFormData = useUserData((state) => state.productFormData);
  const contactFormData = useUserData((state) => state.contactFormData);
  const addressFormData = useUserData((state) => state.addressFormData);
  const selectedDate = useUserData((state) => state.selectedDate);
  const userTicket = useUserData((state) => state.userTicket);
  const ticketAIResponse = useUserData((state) => state.ticketAIResponse);
  const userMedia = useUserData((state) => state.userMedia);
  const product = useProductStore((state) => state.selectedProduct);
  const variant = useProductStore((state) => state.selectedVariant);
  const store = useRetailStore((state) => state.selectedStore);
  const retail = useRetailStore((state) => state.selectedRetail);
  const todaysDate = dayjs().format("DD/MM/YYYY");

  const isProductOK = ticketAIResponse?.includes("COINCIDENCIA-PRODUCTO");
  const isStoreOK = ticketAIResponse?.includes("COINCIDENCIA-TIENDA");
  const isDateOK = ticketAIResponse?.includes("COINCIDENCIA-FECHA");
  const isTicketNumberOK = ticketAIResponse?.includes("COINCIDENCIA-TICKET");

  const handleWarrantySubmit = async () => {
    const formData = new FormData();

    formData.append("name", contactFormData.name);
    formData.append("phone", contactFormData.phone);
    formData.append("email", contactFormData.email);
    formData.append("address", addressFormData.address);
    formData.append("localidad", addressFormData.town);
    formData.append("postal_code", addressFormData.postal_code);
    formData.append("provincia", addressFormData.province);
    formData.append("establecimiento", `${store.name} - ${retail.name}`);
    formData.append("buy_date", selectedDate.format("YYYY-MM-DD"));
    formData.append("product_id", variant ? variant.id : product.id);
    formData.append("ai_confirmation_producto", isProductOK ? 1 : 0);
    formData.append("ai_confirmation_tienda", isStoreOK ? 1 : 0);
    formData.append("ai_confirmation_fecha", isDateOK ? 1 : 0);
    formData.append("ai_confirmation_ticket", isTicketNumberOK ? 1 : 0);
    formData.append(
      "product_name",
      `${product.name}${variant ? ` - ${variant.name}` : ""}`
    );
    formData.append("problem_other", productFormData.selectedProblem);
    formData.append("signature", signature);
    formData.append("number_factura", userTicket);

    if (userMedia.ticket) {
      formData.append("file_factura", userMedia.ticket);
    }

    userMedia.images.forEach((image, index) => {
      if (image) {
        formData.append(`product_image_${index + 1}`, image);
      }
    });

    if (userMedia.video) {
      formData.append("file_video", userMedia.video);
    }

    setLoading(true);
    try {
      await warrantyApi.storeWarranty(formData);
      handleOptionSelect(options.nextId);
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full pb-12">
      <div className="flex flex-col items-center bg-white border-2 border-red-500 shadow-lg p-8 w-full text-black gap-5 md:gap-10 mb-10">
        <div className="flex flex-col items-center">
          <img
            src="/naconsupport/naconblack.png"
            alt="Nacon Support"
            className="object-cover w-1/3"
          />
          <h3 className="uppercase text-xl md:text-2xl font-bold text-center underline underline-offset-8 pt-4">
            Confirmación Final de Datos
          </h3>

          <p className="text-center text-sm md:text-base pt-4 pb-2 md:pb-8">
            Estás solicitando, con fecha de hoy {todaysDate}, la garantía de tu
            producto <span className="font-semibold">{product.name}</span>
            .
            <br />
            Necesitamos que nos confirmes que toda la información enviada es
            válida y completamente verídica.
          </p>
        </div>

        <div className="flex flex-col w-full gap-6">
          <div className="flex w-full flex-col md:flex-row md:justify-around">
            <div className="flex flex-col gap-4 text-center md:text-start">
              <div>
                <p className="font-bold underline underline-offset-4">
                  Información Personal
                </p>
                <div>
                  <strong>• Nombre:</strong> {contactFormData.name}
                </div>
                <div>
                  <strong>• Email:</strong> {contactFormData.email}
                </div>
                <div>
                  <strong>• Teléfono:</strong> {contactFormData.phone}
                </div>
                <div>
                  <strong>• Dirección:</strong>{" "}
                  {`${addressFormData.address}, ${addressFormData.town}, ${addressFormData.postal_code}, ${addressFormData.province}`}
                  .
                </div>
              </div>

              <div>
                <p className="font-bold underline underline-offset-4">
                  Información del Producto:
                </p>
                <div>
                  <strong>• Producto:</strong> {product.name}{" "}
                  {variant && `- ${variant.name}`}
                </div>
                <div>
                  <strong>• Referencia:</strong>{" "}
                  {variant ? variant.ref : product.ref}
                </div>
                <div>
                  <strong>• Tienda:</strong> {store.name} - {retail.name}
                </div>
                <div>
                  <strong>• Fecha de Compra:</strong>{" "}
                  {selectedDate.format("DD/MM/YYYY")}
                </div>
              </div>

              <div>
                <p className="font-bold underline underline-offset-4">
                  Declaraciones:
                </p>
                <div>• El producto no se mojó.</div>
                <div>• El producto no está dañado ni golpeado.</div>
                <div>• El producto no fue manipulado por ningún animal.</div>
                <div>• El producto está actualizado a la última versión.</div>
                <div>• El problema es: {productFormData.selectedProblem}</div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6 md:pt-auto">
              <p className="font-bold text-center">Ticket Nro.: {userTicket}</p>
              <img
                src={URL.createObjectURL(userMedia.ticket)}
                alt="Ticket de compra"
                className="w-[300px] h-[300px] rounded-lg"
              />
            </div>
          </div>

          <div className="pt-6 flex flex-col items-center gap-4">
            <p className="font-bold">Imágenes del Producto</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {userMedia.images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Imagen ${index + 1}`}
                  className="object-cover w-[240px] h-[240px] rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="pt-6 flex flex-col items-center gap-4">
            <p className="font-bold">Vídeo del Producto</p>
            <video
              className="w-full md:w-3/4 xl:w-2/4 rounded-lg object-cover"
              controls
            >
              <source src={URL.createObjectURL(userMedia.video)} />
            </video>
          </div>

          <div className="flex flex-col items-center w-full gap-4 md:pt-12">
            <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-2">
              <p className="w-full md:w-1/2 pt-2 md:pt-10">
                Declaro oficialmente que toda la información presentada a NACON
                es la correcta. Entiendo que no será posible gestionar mi
                garantía si alguno de estos datos son falsos o las imágenes y el
                vídeo no se ven con claridad.
              </p>

              <div className="border border-red-500 rounded-lg w-full md:w-1/3">
                <h4 className="text-center font-semibold mb-2">Firma</h4>
                <SignaturePad
                  ref={signaturePadRef}
                  options={{
                    minWidth: 1,
                    maxWidth: 1,
                  }}
                />
                <div className="flex gap-1">
                  <button
                    onClick={clearSignature}
                    className="mt-4 w-full bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Limpiar
                  </button>
                  <button
                    onClick={handleSaveSignature}
                    className="mt-4 w-full bg-green-800 text-white py-1 px-2 rounded-lg hover:bg-green-900 transition duration-300"
                  >
                    Firmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button
          content={
            <Box display="flex" alignItems="center" justifyContent={"center"}>
              {loading && <CircularProgress size={16} />}
              <Box ml={1}>
                {loading ? "Cargando..." : "Confirmar y continuar"}
              </Box>
            </Box>
          }
          isDisabled={!isSigned || loading}
          icon={options.icon}
          onClick={handleWarrantySubmit}
        />
      </div>

      <Dialog open={openAlert} onClose={handleCloseAlert} disableScrollLock>
        <DialogTitle>{"Firma requerida"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, firme en el recuadro para poder finalizar la operación.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MUIButton onClick={handleCloseAlert} color="primary" autoFocus>
            OK
          </MUIButton>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default DataConfirmation;
