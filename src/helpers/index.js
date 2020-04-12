import uniqid from 'uniqid'

export const Helpers = {
  consoleActions: (type, payload) => {
    return (
      console.log('============================='),
      console.log(`ACTION/${type} :: payload`, payload),
      console.log('============================='),
      console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    )
  },

  generateID: (prefix) => uniqid(`${prefix}-`),
};