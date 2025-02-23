function Error({ statusCode }) {
  return (
    <div>
      <h1>Ocurrió un error</h1>
      <p>{statusCode ? `Código: ${statusCode}` : "Error en el cliente"}</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
