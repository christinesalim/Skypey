import { AvatarGenerator  } from "random-avatar-generator";
const shortid = require("shortid"); // shortid.generate() returns a unique "short" id
const txtgen = require("txtgen/dist/cjs/txtgen.js"); // txtgen.sentence() returns random "readable" sentences
const faker = require("faker"); // faker is used for generating random fake data.
const _ = require("lodash"); // lodash is a utility lib for Javascript


const generator = new AvatarGenerator();
const users = generateUsers(10);

//users is an array of 10 users
//mapKeys creates an object with the same values as the users arrary
//but each user is indexed with a key set to user_id field.
export const contacts = _.mapKeys(users, "user_id");

export const getMessages = messagesPerUser => {
  let messages = {};
  _.forEach(users, user => {
    messages[user.user_id] = {
      ..._.mapKeys(generateMsgs(messagesPerUser), "number")
    };
  });
  return messages;
};

// just an example of how the state object is structured
export const state = {
  user: generateUser(),
  messages: getMessages(10),
  typing: "",
  contacts,
  activeUserId: null
};

/**
 * @returns {Object} - a new user object
 */
export function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    //faker avatar() doesn't work
    // profile_pic: faker.image.avatar(), 
    profile_pic: generator.generateRandomAvatar(),
    status: txtgen.sentence(),
    user_id: shortid.generate()
  };
}
/**
 * @returns {Object} - a new message object
 */
function generateMsg(number) {
  return {
    number,
    text: txtgen.sentence(),
    is_user_msg: faker.datatype.boolean()
  };
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateUsers(numberOfUsers) {
  return Array.from({ length: numberOfUsers }, () => generateUser());
}

function generateMsgs(numberOfMsgs) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
}