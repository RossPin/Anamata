const initialState = [
  {
    question: 'Are you hungry?',
    id: '1',
    responses: [
      {
        answer: 'Yes',
        next: '2'
      },
      {
        answer: 'No',
        next: '3'
      }
    ]
  },
  {
    question: 'Do you want an apple?',
    id: '2',
    responses: [
      {
        answer: 'Yes',
        next: '2'
      },
      {
        answer: 'No',
        next: '3'
      }
    ]
  },
  {
    question: 'Are you Thirsty?',
    id: '3',
    responses: [
      {
        answer: 'Yes',
        next: '4'
      },
      {
        answer: 'No',
        next: 'complete'
      }
    ]
  },
  {
    question: 'Do you want some water?',
    id: '4',
    responses: [
      {
        answer: 'Yes',
        next: 'complete'
      },
      {
        answer: 'No',
        next: 'complete'
      }
    ]
  }
]

export default function questions (state = initialState, action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return action.questions
    default:
      return state
  }
}
