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
        next: '4'
      }
    ]
  },
  {
    question: 'Do you want an apple?',
    id: '2',
    responses: [
      {
        answer: 'Yes',
        next: '3'
      },
      {
        answer: 'No',
        next: '4'
      }
    ]
  },
  {
    question: 'how was the apple?',
    id: '3',
    responses: [
      {
        answer: 'Bad',
        next: '4'
      },
      {
        answer: 'OK',
        next: '4'
      },
      {
        answer: 'Good',
        next: '4'
      }
    ]
  },
  {
    question: 'Are you Thirsty?',
    id: '4',
    responses: [
      {
        answer: 'Yes',
        next: '5'
      },
      {
        answer: 'No',
        next: 'complete'
      }
    ]
  },
  {
    question: 'Do you want some water?',
    id: '5',
    responses: [
      {
        answer: 'Yes',
        next: '6'
      },
      {
        answer: 'No',
        next: 'complete'
      }
    ]
  },
  {
    question: 'how was the water?',
    id: '6',
    responses: [
      {
        answer: 'Bad',
        next: 'complete'
      },
      {
        answer: 'OK',
        next: 'complete'
      },
      {
        answer: 'Good',
        next: 'complete'
      }
    ]
  },
]

export default function questions (state = initialState, action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return action.questions
    default:
      return state
  }
}
