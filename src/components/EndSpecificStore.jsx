import Button from "./Button";
import useRetailStore from "../store/useRetailStore";

const EndSpecificStore = () => {
  const store = useRetailStore((state) => state.selectedStore);
  console.log("🚀 ~ EndSpecificStore ~ store:", store);

  return (
    <section className="flex flex-col items-center justify-center w-full gap-6 pt-10">
      <div className="flex flex-col items-center md:w-2/4 text-center">
        <img
          src="/naconsupport/error.svg"
          alt="Error"
          width={70}
          height={70}
          className="pb-2"
        />
        {store.id === 1 && (
          <div className="flex items-center justify-center flex-col gap-4">
            <h3 className="text-xl uppercase">
              Le informamos que, para los productos vendidos a través de Amazon,
              es necesario que se dirija primero a su sección de Atención al
              Cliente para gestionar la garantía de origen.
            </h3>

            <p className="text-lg">
              Lamentablemente, no estamos autorizados para gestionar estas
              solicitudes debido a nuestro acuerdo comercial. Amazon es quien
              tramitará su solicitud, ya sea ofreciendo un cambio o un reembolso
              del producto.
            </p>

            <div className="flex flex-col items-center justify-center text-lg gap-4">
              <p>
                También puede acceder al servicio de Atención al Cliente de
                Amazon haciendo clic en el enlace{" "}
                <a
                  href="www.amazon.es/contacto"
                  target="_blank"
                  className="underline text-blue-300"
                >
                  Contáctanos
                </a>{" "}
                en cualquier página de Ayuda de Amazon.
              </p>

              <p>
                Adicionalmente, tiene la opción de contactar con Atención al
                Cliente mediante el teléfono gratuito 800 810 251, o puede
                solicitar que se pongan en contacto con usted a través de{" "}
                <a
                  href="https://www.amazon.es/gp/help/customer/contact-us/ref=hp_gt_comp_cu?nodeId=200507590&referral=AOWGV7YDHADM9_A1O0JHA0N2G2EZ"
                  target="_blank"
                  className="underline text-blue-300"
                >
                  este enlace
                </a>{" "}
                (es necesario que el comprador inicie sesión previamente):
              </p>
              <p>
                En esta pantalla, tras especificar el tipo de incidencia y el
                pedido, podrá elegir el método de contacto en el paso "¿Cómo te
                gustaría ponerte en contacto con nosotros?".
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <h4 className="text-xl">
                Puede contactar a Amazon a través de los siguientes números:
              </h4>
              <p>
                <strong>Línea internacional</strong>: (+34) 91 123 04 13
              </p>
              <p>
                <strong>Línea gratuita desde España</strong>: 911 23 04 13{" "}
              </p>
              <p>
                <strong>Horario</strong>: de lunes a domingo, de 6:00 a 24:00h.
              </p>
            </div>
          </div>
        )}
        {store.id === 8 && (
          <div className="flex items-center justify-center flex-col gap-4">
            <h3 className="text-xl uppercase">
              Si ha realizado la compra a través de nacongaming.com (Nacon
              Francia), ha de ponerse en contacto con ellos a través de su{" "}
              <a
                href="https://my.nacongaming.com/fr-FR/support."
                target="_blank"
                className="underline text-blue-300"
              >
                página de soporte
              </a>
              .
            </h3>

            <p className="text-lg">
              Ellos podrán proporcionarle la ayuda necesaria para tramitar su
              incidencia.
            </p>

            <p className="text-lg">
              Muchas gracias por la comprensión y sentimos las molestias.
            </p>
          </div>
        )}
      </div>
      <a href="https://www.nacongamers.es/" className="mt-4">
        <Button content="Volver a inicio" icon="/naconsupport/back.svg" />
      </a>
    </section>
  );
};

export default EndSpecificStore;
