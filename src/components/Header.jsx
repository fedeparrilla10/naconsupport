const Header = () => {
  return (
    <div className="h-24 z-10 pt-8 px-10 flex flex-col justify-center items-center gap-2">
      <section className="flex flex-col md:flex-row items-center gap-3">
        <a href="/naconsupport/">
          <img src="/naconsupport/naconlogo.svg" alt="Nacon" className="" />
        </a>
      </section>

      <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-wide text-center md:text-start">
        Servicio de Atención al Cliente
      </h2>
    </div>
  );
};

export default Header;
