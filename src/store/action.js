export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_LIST = 'SUBMIT_LIST';
export const DELETE_ITEM = 'DELETE_ITEM';

export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const submitInputAction = (value) => {
  return {
    type: SUBMIT_LIST,
    value
  }
}

export const deleteAction = (index) => {
  return {
    type: DELETE_ITEM,
    index
  }
}