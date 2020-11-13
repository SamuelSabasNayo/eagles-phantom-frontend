import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    if (Validator.isNull(data.identifier)) {
        errors.identifier = 'This field is not allowed to be empty';
    }
    if (Validator.isNull(data.password)) {
        errors.password = 'This field is not allowed to be empty'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
