const isAdmin = (req, res, next) => {
  try {
    if (!req.user || req.user.role !== 1) {
      return res.status(403).send({
        success: false,
        message: "Acceso denegado: se requiere rol ADMIN",
      });
    }
    next();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error en verificación de rol",
    });
  }
};

export default isAdmin;
