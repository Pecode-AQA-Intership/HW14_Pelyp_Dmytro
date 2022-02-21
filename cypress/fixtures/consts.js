import faker from 'faker';

export const RANDOM_NAME = faker.name.findName();
export const RANDOM_LAST_NAME = faker.name.lastName();
export const RANDOM_EMAIL = faker.internet.email();
export const RANDOM_ADDRESS = faker.address.streetAddress();
export const RANDOM_PERMANENT_ADDRESS = faker.address.streetAddress(); 
export const RANDOM_AGE = faker.datatype.number({
    'min': 20,
    'max': 80
});
export const RANDOM_NUM = faker.datatype.number();
export const RANDOM_PHONE_NUMBER = faker.datatype.number({
    'min': 1000000000,
    'max': 9999999999
});


