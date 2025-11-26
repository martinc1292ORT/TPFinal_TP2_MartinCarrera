const notFound = (req, res, next) => {
  res.status(404).send({
    success: false,
    message: "Endpoint no encontrado",
  });
};

export default notFound;
