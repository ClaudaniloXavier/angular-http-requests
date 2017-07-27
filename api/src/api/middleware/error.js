exports.notFound = function (req, res) {
    if (!res.finished)
        res.status(404).json({"error": "Recurso não encontrado."})
};