import faker from 'faker';

export const RANDOM_NAME = faker.name.findName();
export const RANDOM_EMAIL = faker.internet.email();
export const RANDOM_ADDRESS = faker.address.streetAddress();
export const RANDOM_PERMANENT_ADDRESS = faker.address.streetAddress(); 