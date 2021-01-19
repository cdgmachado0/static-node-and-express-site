
const notFound = (req, res, next) => {
    const err = new Error("Page doesn't exist. Check the URL.");
    err.status = 404;
    next(err);
}

const otherErrors = (err, req, res, next) => {
    let error = '';
    if (err.status !== 404) {
        err.message = 'There was an internal problem. Try again later.';
        err.status = err.status || 500;
        error = 'error';
    } else {
        error = 'page-not-found';
    }
    console.log(err.message, err.status);
    res.render(error, { err })
}

module.exports = { notFound, otherErrors };