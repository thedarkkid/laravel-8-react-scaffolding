export const parseErrors = (errors) => {
    let errors_ = [];
    for (const error of Object.keys(errors)) {
        errors_ = errors_.concat(errors[error]);
    }
    return errors_;
};
